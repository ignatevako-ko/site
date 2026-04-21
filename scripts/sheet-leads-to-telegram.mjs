import { readFile, writeFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { google } from "googleapis";

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
  const chatId = process.env.TELEGRAM_CHAT_ID;

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
    }),
  });

  if (!response.ok) {
    throw new Error(`Telegram sendMessage failed: ${response.status} ${await response.text()}`);
  }
}

async function main() {
  loadEnvFile(envPath);

  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEETS_ADS_SHEET_NAME || "лиды на рекламы 16.04.26";
  const keyFile = process.env.GOOGLE_SHEETS_KEY_FILE;
  const statePath = process.env.SHEET_LEADS_STATE_FILE || path.resolve(process.cwd(), ".sheet-leads-state.json");

  if (!spreadsheetId || !keyFile) {
    throw new Error("Google Sheets env vars are missing");
  }

  const auth = new google.auth.GoogleAuth({
    keyFile,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  const sheets = google.sheets({ version: "v4", auth });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `'${sheetName}'!A:Z`,
  });

  const rows = response.data.values || [];
  const state = existsSync(statePath)
    ? JSON.parse(await readFile(statePath, "utf8"))
    : {};
  const previousLastRow = Number(state[sheetName]?.lastRow || 0);

  if (!previousLastRow) {
    state[sheetName] = { lastRow: rows.length, initializedAt: new Date().toISOString() };
    await writeFile(statePath, JSON.stringify(state, null, 2));
    console.log(`Initialized ${sheetName} at row ${rows.length}`);
    return;
  }

  const newRows = rows.slice(previousLastRow);

  for (const [index, row] of newRows.entries()) {
    const rowNumber = previousLastRow + index + 1;
    if (row.some((value) => String(value || "").trim())) {
      await sendTelegram(formatRowMessage(sheetName, rowNumber, row));
      console.log(`Sent ${sheetName} row ${rowNumber}`);
    }
  }

  state[sheetName] = { lastRow: rows.length, updatedAt: new Date().toISOString() };
  await writeFile(statePath, JSON.stringify(state, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
