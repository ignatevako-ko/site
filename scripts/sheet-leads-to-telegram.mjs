import { readFile, writeFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import crypto from "node:crypto";
import path from "node:path";

const envPath = path.resolve(process.cwd(), ".env");

function loadEnvFile(filePath) {
  if (!existsSync(filePath)) {
    return;
  }

  const content = readFileSync(filePath, "utf8");

  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
      continue;
    }

    const [key, ...valueParts] = trimmed.split("=");
    const value = valueParts.join("=").trim().replace(/^["']|["']$/g, "");
    process.env[key.trim()] ??= value;
  }
}

function escapeHtml(value) {
  return String(value || "-")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getArgValue(name) {
  const exactIndex = process.argv.indexOf(name);
  if (exactIndex !== -1) {
    return process.argv[exactIndex + 1] || "";
  }

  const prefix = `${name}=`;
  const match = process.argv.find((arg) => arg.startsWith(prefix));
  return match ? match.slice(prefix.length) : "";
}

function hasArg(name) {
  return process.argv.includes(name);
}

function base64Url(value) {
  return Buffer.from(value)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function formatRowMessage(sheetName, rowNumber, row) {
  const filledCells = row
    .map((value, index) => ({ index: index + 1, value: String(value || "").trim() }))
    .filter(({ value }) => value);

  return [
    "<b>Новый лид из таблицы Do.Marketing</b>",
    "",
    `<b>Вкладка:</b> ${escapeHtml(sheetName)}`,
    `<b>Строка:</b> ${rowNumber}`,
    "",
    ...filledCells.map(({ index, value }) => `<b>Колонка ${index}:</b> ${escapeHtml(value)}`),
  ].join("\n");
}

async function sendTelegram(text) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID || process.env.LEADS_TELEGRAM_CHAT_ID;
  const threadId = process.env.TELEGRAM_THREAD_ID;

  if (!botToken || !chatId) {
    throw new Error("Telegram env vars are missing");
  }

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
      ...(threadId ? { message_thread_id: Number(threadId) } : {}),
    }),
  });

  if (!response.ok) {
    throw new Error(`Telegram sendMessage failed: ${response.status} ${await response.text()}`);
  }
}

function readServiceAccount() {
  const keyFile = process.env.GOOGLE_SHEETS_KEY_FILE;
  if (keyFile) {
    const key = JSON.parse(readFileSync(keyFile, "utf8"));
    return {
      clientEmail: key.client_email,
      privateKey: key.private_key,
    };
  }

  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\+n/g, "\n");
  if (clientEmail && privateKey) {
    return { clientEmail, privateKey };
  }

  throw new Error(
    "Google Sheets env vars are missing: set GOOGLE_SHEETS_KEY_FILE or GOOGLE_SHEETS_CLIENT_EMAIL + GOOGLE_SHEETS_PRIVATE_KEY",
  );
}

async function getGoogleAccessToken() {
  const { clientEmail, privateKey } = readServiceAccount();

  if (!clientEmail || !privateKey) {
    throw new Error("Google service account credentials are incomplete");
  }

  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };
  const unsignedToken = `${base64Url(JSON.stringify(header))}.${base64Url(JSON.stringify(payload))}`;
  const signature = crypto.createSign("RSA-SHA256").update(unsignedToken).sign(privateKey, "base64url");
  const assertion = `${unsignedToken}.${signature}`;

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });

  if (!response.ok) {
    throw new Error(`Google token request failed: ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  if (!data.access_token) {
    throw new Error("Google token response did not include access_token");
  }

  return data.access_token;
}

async function fetchSheetRows(spreadsheetId, sheetName) {
  const accessToken = await getGoogleAccessToken();
  const range = `'${sheetName}'!A:Z`;
  const url = new URL(
    `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}/values/${encodeURIComponent(range)}`,
  );
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!response.ok) {
    throw new Error(`Google Sheets read failed: ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  return data.values || [];
}

async function main() {
  loadEnvFile(envPath);

  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || process.env.LEADS_SPREADSHEET_ID;
  const sheetName =
    getArgValue("--sheet") ||
    process.env.GOOGLE_SHEETS_ADS_SHEET_NAME ||
    process.env.GOOGLE_SHEETS_SHEET_NAME ||
    "лиды на рекламы 16.04.26";
  const statePath = process.env.SHEET_LEADS_STATE_FILE || path.resolve(process.cwd(), ".sheet-leads-state.json");
  const dryRun = hasArg("--dry-run");

  if (!spreadsheetId) {
    throw new Error("Google Sheets env vars are missing: set GOOGLE_SHEETS_SPREADSHEET_ID or LEADS_SPREADSHEET_ID");
  }

  const rows = await fetchSheetRows(spreadsheetId, sheetName);
  const state = existsSync(statePath)
    ? JSON.parse(await readFile(statePath, "utf8"))
    : {};
  const previousLastRow = Number(state[sheetName]?.lastRow || 0);

  if (!previousLastRow) {
    if (!dryRun) {
      state[sheetName] = { lastRow: rows.length, initializedAt: new Date().toISOString() };
      await writeFile(statePath, JSON.stringify(state, null, 2));
    }
    console.log(`Initialized ${sheetName} at row ${rows.length}`);
    return;
  }

  const newRows = rows.slice(previousLastRow);

  for (const [index, row] of newRows.entries()) {
    const rowNumber = previousLastRow + index + 1;
    if (row.some((value) => String(value || "").trim())) {
      if (!dryRun) {
        await sendTelegram(formatRowMessage(sheetName, rowNumber, row));
      }
      console.log(`Sent ${sheetName} row ${rowNumber}`);
    }
  }

  if (!dryRun) {
    state[sheetName] = { lastRow: rows.length, updatedAt: new Date().toISOString() };
    await writeFile(statePath, JSON.stringify(state, null, 2));
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
