import { google } from "googleapis";

export type LeadPayload = {
  email?: string;
  phone?: string;
  brief?: string;
  source?: string;
  language?: string;
  pageUrl?: string;
  referrer?: string;
  utm?: Record<string, string>;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatTelegramMessage(payload: LeadPayload) {
  return [
    "<b>Новая заявка Do.Marketing</b>",
    "",
    `<b>Источник:</b> ${escapeHtml(payload.source || "-")}`,
    `<b>Язык:</b> ${escapeHtml(payload.language || "-")}`,
    `<b>Email:</b> ${escapeHtml(payload.email || "-")}`,
    `<b>Телефон:</b> ${escapeHtml(payload.phone || "-")}`,
    `<b>Комментарий:</b> ${escapeHtml(payload.brief || "-")}`,
    `<b>Страница:</b> ${escapeHtml(payload.pageUrl || "-")}`,
    `<b>Referrer:</b> ${escapeHtml(payload.referrer || "-")}`,
    `<b>UTM:</b> ${escapeHtml((payload.utm && Object.entries(payload.utm).filter(([, value]) => value).map(([key, value]) => `${key}=${value}`).join(", ")) || "-")}`,
  ].join("\n");
}

export async function sendToTelegram(payload: LeadPayload) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const threadId = process.env.TELEGRAM_THREAD_ID;

  if (!botToken || !chatId) {
    return false;
  }

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: formatTelegramMessage(payload),
      parse_mode: "HTML",
      ...(threadId ? { message_thread_id: Number(threadId) } : {}),
    }),
  });

  if (!response.ok) {
    throw new Error("Telegram integration failed");
  }

  return true;
}

export async function appendToGoogleSheets(payload: LeadPayload) {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const keyFile = process.env.GOOGLE_SHEETS_KEY_FILE;
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || "Sheet1";

  if (!spreadsheetId || (!keyFile && (!clientEmail || !privateKey))) {
    return false;
  }

  const auth = keyFile
    ? new google.auth.GoogleAuth({
        keyFile,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      })
    : new google.auth.JWT({
        email: clientEmail,
        key: privateKey,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:J`,
    valueInputOption: "RAW",
    requestBody: {
      values: [[
        new Date().toISOString(),
        payload.source || "",
        payload.language || "",
        payload.email || "",
        payload.phone || "",
        payload.brief || "",
        payload.pageUrl || "",
        payload.referrer || "",
        payload.utm?.utm_source || "",
        [payload.utm?.utm_medium || "", payload.utm?.utm_campaign || "", payload.utm?.utm_content || "", payload.utm?.utm_term || ""].filter(Boolean).join(" | "),
      ]],
    },
  });

  return true;
}
