import { google } from "googleapis";
import fs from "node:fs";

export type LeadPayload = {
  email?: string;
  phone?: string;
  website?: string;
  brief: string;
  source?: string;
  language?: string;
  pageUrl?: string;
  referrer?: string;
  utm?: Record<string, string>;
};

const DEFAULT_SPREADSHEET_ID = "1f0hiGD9970jBVY3gzcqWJz63EGyKA1K7WoYCFtO3n_E";
const DEFAULT_TELEGRAM_CHAT_ID = "-1003848843814";
const OPENCLAW_CONFIG_PATH =
  process.env.OPENCLAW_CONFIG_PATH || "/root/.openclaw/openclaw.json";
const GOOGLE_CLIENT_PATH =
  process.env.GOOGLE_MCP_CLIENT_PATH || "/root/.openclaw/google-mcp/client.json";
const GOOGLE_TOKEN_PATH =
  process.env.GOOGLE_MCP_TOKEN_PATH || "/root/.openclaw/google-mcp/token.json";

function readJsonFile<T>(filePath: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
  } catch {
    return null;
  }
}

function getOpenClawTelegramToken() {
  const config = readJsonFile<{
    channels?: { telegram?: { botToken?: string } };
  }>(OPENCLAW_CONFIG_PATH);

  return config?.channels?.telegram?.botToken || "";
}

async function getGoogleAccessToken() {
  const client = readJsonFile<{
    client_id?: string;
    client_secret?: string;
  }>(GOOGLE_CLIENT_PATH);
  const token = readJsonFile<{ refresh_token?: string }>(GOOGLE_TOKEN_PATH);

  if (!client?.client_id || !client.client_secret || !token?.refresh_token) {
    return "";
  }

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: client.client_id,
      client_secret: client.client_secret,
      refresh_token: token.refresh_token,
      grant_type: "refresh_token",
    }),
  });

  if (!response.ok) {
    throw new Error(`Google token refresh failed: ${response.status}`);
  }

  const json = (await response.json()) as { access_token?: string };
  return json.access_token || "";
}

function formatTelegramMessage(payload: LeadPayload) {
  return [
    "<b>New lead from Do.Marketing</b>",
    "",
    `<b>Source:</b> ${payload.source || "-"}`,
    `<b>Language:</b> ${payload.language || "-"}`,
    `<b>Email:</b> ${payload.email || "-"}`,
    `<b>Phone:</b> ${payload.phone || "-"}`,
    `<b>Website:</b> ${payload.website || "-"}`,
    `<b>Brief:</b> ${payload.brief || "-"}`,
    `<b>Page:</b> ${payload.pageUrl || "-"}`,
    `<b>Referrer:</b> ${payload.referrer || "-"}`,
    `<b>UTM:</b> ${(payload.utm && Object.entries(payload.utm).filter(([, value]) => value).map(([key, value]) => `${key}=${value}`).join(", ")) || "-"}`,
  ].join("\n");
}

export async function sendToTelegram(payload: LeadPayload) {
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
  const spreadsheetId =
    process.env.GOOGLE_SHEETS_SPREADSHEET_ID ||
    process.env.LEADS_SPREADSHEET_ID ||
    DEFAULT_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || "Sheet1";

  const values = [[
    new Date().toISOString(),
    payload.source || "",
    payload.language || "",
    payload.email || "",
    payload.phone || "",
    payload.website || "",
    payload.brief || "",
    payload.pageUrl || "",
    payload.referrer || "",
    payload.utm?.utm_source || "",
    [payload.utm?.utm_medium || "", payload.utm?.utm_campaign || "", payload.utm?.utm_content || "", payload.utm?.utm_term || ""].filter(Boolean).join(" | "),
  ]];

  if (clientEmail && privateKey) {
    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:K`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return true;
  }

  const accessToken = await getGoogleAccessToken();
  if (!accessToken) {
    return false;
  }

  const range = encodeURIComponent(`${sheetName}!A:K`);
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}/values/${range}:append?valueInputOption=USER_ENTERED`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values }),
    },
  );

  if (!response.ok) {
    throw new Error(`Google Sheets append failed: ${response.status}`);
  }

  return true;
}
