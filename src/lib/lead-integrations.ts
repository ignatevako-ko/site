import { google } from "googleapis";

export type LeadPayload = {
  email?: string;
  phone?: string;
  brief: string;
};

function formatTelegramMessage(payload: LeadPayload) {
  return [
    "<b>New lead from Do.Marketing</b>",
    "",
    `<b>Email:</b> ${payload.email || "-"}`,
    `<b>Phone:</b> ${payload.phone || "-"}`,
    `<b>Brief:</b> ${payload.brief}`,
  ].join("\n");
}

export async function sendToTelegram(payload: LeadPayload) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

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
    range: `${sheetName}!A:D`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[new Date().toISOString(), payload.email || "", payload.phone || "", payload.brief]],
    },
  });

  return true;
}
