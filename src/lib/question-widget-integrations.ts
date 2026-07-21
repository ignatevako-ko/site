import { google } from "googleapis";
import fs from "node:fs";
import type { SanitizedWidgetLead } from "@/lib/question-widget-security";

const DEFAULT_SPREADSHEET_ID = "1f0hiGD9970jBVY3gzcqWJz63EGyKA1K7WoYCFtO3n_E";
const DEFAULT_TELEGRAM_CHAT_ID = "-1003848843814";

function channelLabel(channel: SanitizedWidgetLead["channel"]) {
  return channel === "telegram" ? "Telegram" : "WhatsApp";
}

function formatTimestamp(date: Date) {
  return new Intl.DateTimeFormat("ru-RU", {
    timeZone: "Europe/Tallinn",
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);
}

function formatUtm(utm: Record<string, string>) {
  const parts = Object.entries(utm)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}=${value}`);

  return parts.length ? parts.join(", ") : "-";
}

function escapeTelegramHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatTelegramMessage(payload: SanitizedWidgetLead, timestamp: Date) {
  const lines = [
    "🔥 <b>Новый лид с сайта</b>",
    "",
    "<b>Вопрос:</b>",
    escapeTelegramHtml(payload.question),
    "",
  ];

  if (payload.name) {
    lines.push("<b>Имя:</b>", escapeTelegramHtml(payload.name), "");
  }

  lines.push(
    "<b>Канал связи:</b>",
    channelLabel(payload.channel),
    "",
    "<b>Контакт:</b>",
    escapeTelegramHtml(payload.contact),
    "",
    "<b>Страница:</b>",
    escapeTelegramHtml(payload.pageUrl || "-"),
    "",
    "<b>UTM:</b>",
    escapeTelegramHtml(formatUtm(payload.utm)),
    "",
    "<b>Время:</b>",
    formatTimestamp(timestamp),
  );

  return lines.join("\n");
}

function getOpenClawTelegramToken() {
  const configPath =
    process.env.OPENCLAW_CONFIG_PATH || "/root/.openclaw/openclaw.json";

  try {
    const config = JSON.parse(fs.readFileSync(configPath, "utf8")) as {
      channels?: { telegram?: { botToken?: string } };
    };
    return config?.channels?.telegram?.botToken || "";
  } catch {
    return "";
  }
}

export async function sendWidgetLeadToTelegram(
  payload: SanitizedWidgetLead,
  timestamp: Date,
) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN || getOpenClawTelegramToken();
  const chatId =
    process.env.TELEGRAM_CHAT_ID ||
    process.env.LEADS_TELEGRAM_CHAT_ID ||
    DEFAULT_TELEGRAM_CHAT_ID;
  const threadId = process.env.TELEGRAM_THREAD_ID;

  if (!botToken || !chatId) {
    return false;
  }

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: formatTelegramMessage(payload, timestamp),
      parse_mode: "HTML",
      ...(threadId ? { message_thread_id: Number(threadId) } : {}),
    }),
  });

  if (!response.ok) {
    throw new Error("Widget Telegram notification failed");
  }

  return true;
}

function escapeSheetFormula(value: string) {
  return /^[=+\-@]/.test(value) ? `'${value}` : value;
}

export async function appendWidgetLeadToSheet(
  payload: SanitizedWidgetLead,
  timestamp: Date,
) {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const spreadsheetId =
    process.env.GOOGLE_SHEETS_SPREADSHEET_ID ||
    process.env.LEADS_SPREADSHEET_ID ||
    DEFAULT_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEETS_WIDGET_SHEET_NAME || "WidgetLeads";

  if (!clientEmail || !privateKey) {
    return false;
  }

  const title = `Новый вопрос с сайта — ${channelLabel(payload.channel)}`;

  const values = [[
    timestamp.toISOString(),
    title,
    "Новый лид",
    "Виджет сайта",
    escapeSheetFormula(payload.name),
    escapeSheetFormula(payload.question),
    channelLabel(payload.channel),
    escapeSheetFormula(payload.contact),
    escapeSheetFormula(payload.pageUrl),
    escapeSheetFormula(payload.referrer),
    escapeSheetFormula(payload.utm.utm_source || ""),
    escapeSheetFormula(payload.utm.utm_medium || ""),
    escapeSheetFormula(payload.utm.utm_campaign || ""),
    escapeSheetFormula(payload.utm.utm_content || ""),
    escapeSheetFormula(payload.utm.utm_term || ""),
    escapeSheetFormula(payload.language),
    escapeSheetFormula(payload.userAgent),
  ]];

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:Q`,
    valueInputOption: "RAW",
    requestBody: { values },
  });

  return true;
}

export function logIncompleteWidgetQuestion(input: {
  question: string;
  pageUrl: string;
  language: string;
}) {
  console.warn("[question-widget] incomplete question (no contact left):", {
    question: input.question.slice(0, 300),
    pageUrl: input.pageUrl,
    language: input.language,
    at: new Date().toISOString(),
  });
}
