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

function getNumberArg(name) {
  const value = getArgValue(name);
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : 0;
}

function splitList(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isRetryableStatus(status) {
  return status === 429 || (status >= 500 && status <= 599);
}

function isRetryableFetchError(error) {
  const code = error?.cause?.code || error?.code;
  return ["ECONNRESET", "ETIMEDOUT", "ECONNREFUSED", "EAI_AGAIN"].includes(code);
}

function isMetaTestRow(row) {
  if (process.env.SHEET_LEADS_SEND_TEST_LEADS === "1") {
    return false;
  }

  const firstCellsAreMissing = !String(row[0] || "").trim() && !String(row[1] || "").trim();
  const hasTestMarker = row.some((value) => {
    const normalized = String(value || "").trim().toLowerCase();
    return normalized === "test" || normalized === "тест";
  });

  return firstCellsAreMissing && hasTestMarker;
}

function getLeadId(row) {
  const value = String(row[0] || "").trim();
  return value.startsWith("l:") ? value : "";
}

function hasFilledCells(row) {
  return row.some((value) => String(value || "").trim());
}

function seedProcessedLeadIds(rows, lastRow) {
  return rows
    .slice(0, lastRow)
    .map(getLeadId)
    .filter(Boolean);
}

function trimProcessedLeadIds(values) {
  return Array.from(new Set(values)).slice(-1000);
}

function base64Url(value) {
  return Buffer.from(value)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function stripPrefix(value, prefix) {
  const text = String(value || "").trim();
  return text.startsWith(prefix) ? text.slice(prefix.length) : text;
}

function formatFacebookLeadMessage(row) {
  return [
    "<b>Новый лид — Do.Marketing</b>",
    "",
    `<b>Имя:</b> ${escapeHtml(row[15])}`,
    `<b>Телефон:</b> ${escapeHtml(stripPrefix(row[16], "p:"))}`,
    `<b>Email:</b> ${escapeHtml(row[14])}`,
    `<b>Сайт:</b> ${escapeHtml(row[12])}`,
    `<b>Сфера:</b> ${escapeHtml(row[13])}`,
    `<b>Источник:</b> ${escapeHtml(row[5])}`,
  ].join("\n");
}

const SITE_LEAD_LANGUAGE_LABELS = {
  ru: "Русский (ru)",
  en: "English (en)",
  et: "Eesti (et)",
};

function formatLeadLanguage(value) {
  const code = String(value || "").trim().toLowerCase();
  return SITE_LEAD_LANGUAGE_LABELS[code] || String(value || "").trim() || "-";
}

function formatLeadCta(label, page) {
  const cleanLabel = String(label || "").trim();
  const cleanPage = String(page || "").trim();

  if (!cleanLabel && !cleanPage) {
    return "Прямой переход к форме (без кнопки)";
  }

  const parts = [cleanLabel ? `«${cleanLabel}»` : "без подписи"];
  if (cleanPage) {
    parts.push(`на странице ${cleanPage}`);
  }

  return parts.join(" ");
}

function formatSiteLeadMessage(row) {
  return [
    "<b>Новый лид — Do.Marketing</b>",
    "",
    `<b>Имя:</b> ${escapeHtml(row[15] || "-")}`,
    `<b>Телефон:</b> ${escapeHtml(stripPrefix(row[16] || row[4], "p:"))}`,
    `<b>Email:</b> ${escapeHtml(row[14] || row[3])}`,
    `<b>Сайт:</b> ${escapeHtml(row[12] || row[5])}`,
    `<b>Сфера:</b> ${escapeHtml(row[13] || row[6])}`,
    "",
    `<b>Язык:</b> ${escapeHtml(formatLeadLanguage(row[2]))}`,
    `<b>Страница (форма):</b> ${escapeHtml(row[7] || "-")}`,
    `<b>Кнопка →:</b> ${escapeHtml(formatLeadCta(row[17], row[18]))}`,
    "<b>Источник:</b> Site form",
  ].join("\n");
}

function formatRowMessage(sheetName, rowNumber, row) {
  if (sheetName === "Facebook_leads") {
    return formatFacebookLeadMessage(row);
  }

  if (sheetName === "Site_leads") {
    return formatSiteLeadMessage(row);
  }

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
  const attempts = Number(process.env.SHEET_LEADS_FETCH_RETRIES || 3);

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    let response;

    try {
      response = await fetch(url, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    } catch (error) {
      if (!isRetryableFetchError(error) || attempt === attempts) {
        throw error;
      }

      const delayMs = 1000 * attempt;
      console.warn(`Google Sheets read failed: ${error.cause?.code || error.code}; retrying in ${delayMs}ms`);
      await sleep(delayMs);
      continue;
    }

    if (response.ok) {
      const data = await response.json();
      return data.values || [];
    }

    const responseText = await response.text();
    if (!isRetryableStatus(response.status) || attempt === attempts) {
      throw new Error(`Google Sheets read failed: ${response.status} ${responseText}`);
    }

    const delayMs = 1000 * attempt;
    console.warn(`Google Sheets read failed: ${response.status}; retrying in ${delayMs}ms`);
    await sleep(delayMs);
  }

  return [];
}

async function writeState(statePath, state) {
  await writeFile(statePath, JSON.stringify(state, null, 2));
}

function getSheetNames() {
  const explicitSheet = getArgValue("--sheet");
  if (explicitSheet) {
    return [explicitSheet];
  }

  const configuredSheets = splitList(process.env.SHEET_LEADS_SHEET_NAMES);
  if (configuredSheets.length) {
    return Array.from(new Set(configuredSheets));
  }

  const defaultSheets = [
    process.env.GOOGLE_SHEETS_ADS_SHEET_NAME ||
    process.env.GOOGLE_SHEETS_SHEET_NAME ||
    "лиды на рекламы 16.04.26",
  ];

  return Array.from(new Set(defaultSheets.filter(Boolean)));
}

async function syncSheet({ spreadsheetId, sheetName, statePath, dryRun }) {
  const rows = await fetchSheetRows(spreadsheetId, sheetName);
  const previewRow = getNumberArg("--preview-row");

  if (previewRow) {
    const row = rows[previewRow - 1] || [];
    console.log(formatRowMessage(sheetName, previewRow, row));
    return;
  }

  const state = existsSync(statePath)
    ? JSON.parse(await readFile(statePath, "utf8"))
    : {};
  const sheetState = state[sheetName] || {};
  const previousLastRow = Number(sheetState.lastRow || 0);
  const processedLeadIds = new Set(
    Array.isArray(sheetState.processedLeadIds)
      ? sheetState.processedLeadIds
      : seedProcessedLeadIds(rows, previousLastRow),
  );

  if (!previousLastRow) {
    if (!dryRun) {
      state[sheetName] = {
        lastRow: rows.length,
        processedLeadIds: trimProcessedLeadIds(seedProcessedLeadIds(rows, rows.length)),
        initializedAt: new Date().toISOString(),
      };
      await writeState(statePath, state);
    }
    console.log(`Initialized ${sheetName} at row ${rows.length}`);
    return;
  }

  for (const [index, row] of rows.entries()) {
    const rowNumber = index + 1;
    const leadId = getLeadId(row);
    const hasStableId = Boolean(leadId);
    const shouldSkip = isMetaTestRow(row);
    const isNewRowWithoutId = !hasStableId && rowNumber > previousLastRow;

    if (shouldSkip && (isNewRowWithoutId || dryRun)) {
      console.log(`Skipped Meta test lead ${sheetName} row ${rowNumber}`);
    }

    if (
      hasFilledCells(row) &&
      !shouldSkip &&
      (rowNumber > previousLastRow || (hasStableId && !processedLeadIds.has(leadId)))
    ) {
      if (!dryRun && !shouldSkip) {
        await sendTelegram(formatRowMessage(sheetName, rowNumber, row));
      }

      if (hasStableId && !dryRun) {
        processedLeadIds.add(leadId);
      }

      console.log(`Sent ${sheetName} row ${rowNumber}`);
    }
  }

  if (!dryRun) {
    state[sheetName] = {
      lastRow: rows.length,
      processedLeadIds: trimProcessedLeadIds([...processedLeadIds]),
      updatedAt: new Date().toISOString(),
    };
    await writeState(statePath, state);
  }
}

async function syncOnce() {
  loadEnvFile(envPath);

  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || process.env.LEADS_SPREADSHEET_ID;
  const sheetNames = getSheetNames();
  const statePath = process.env.SHEET_LEADS_STATE_FILE || path.resolve(process.cwd(), ".sheet-leads-state.json");
  const dryRun = hasArg("--dry-run");

  if (!spreadsheetId) {
    throw new Error("Google Sheets env vars are missing: set GOOGLE_SHEETS_SPREADSHEET_ID or LEADS_SPREADSHEET_ID");
  }

  for (const sheetName of sheetNames) {
    await syncSheet({ spreadsheetId, sheetName, statePath, dryRun });
  }
}

async function main() {
  loadEnvFile(envPath);

  const poll = hasArg("--poll") || hasArg("--watch");
  const intervalMs =
    getNumberArg("--interval-ms") ||
    Number(process.env.SHEET_LEADS_POLL_INTERVAL_MS || 0) ||
    60_000;

  if (!poll) {
    await syncOnce();
    return;
  }

  console.log(`Polling Google Sheets every ${intervalMs}ms`);

  while (true) {
    try {
      await syncOnce();
    } catch (error) {
      console.error(error);
    }

    await sleep(intervalMs);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
