import { google } from "googleapis";

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
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || "Leads";

  if (!clientEmail || !privateKey || !spreadsheetId) {
    return false;
  }

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
    requestBody: {
      values: [[
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
      ]],
    },
  });

  return true;
}
