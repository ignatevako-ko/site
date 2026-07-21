import { google } from "googleapis";
import nodemailer from "nodemailer";
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
  ctaLabel?: string;
  ctaHref?: string;
  ctaPage?: string;
  utm?: Record<string, string>;
};

const LANGUAGE_LABELS: Record<string, string> = {
  ru: "Русский (ru)",
  en: "English (en)",
  et: "Eesti (et)",
};

function formatLanguage(language?: string) {
  const code = String(language || "").trim().toLowerCase();
  return LANGUAGE_LABELS[code] || language || "-";
}

function formatCta(payload: LeadPayload) {
  const label = payload.ctaLabel?.trim();
  const page = payload.ctaPage?.trim();

  if (!label && !page) {
    return "Прямой переход к форме (без кнопки)";
  }

  const parts = [label ? `«${label}»` : "без подписи"];
  if (page) {
    parts.push(`на странице ${page}`);
  }

  return parts.join(" ");
}

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
    `<b>Source:</b> ${escapeTelegramHtml(payload.source)}`,
    `<b>Language:</b> ${escapeTelegramHtml(formatLanguage(payload.language))}`,
    `<b>Email:</b> ${escapeTelegramHtml(payload.email)}`,
    `<b>Phone:</b> ${escapeTelegramHtml(payload.phone)}`,
    `<b>Website:</b> ${escapeTelegramHtml(payload.website)}`,
    `<b>Brief:</b> ${escapeTelegramHtml(payload.brief)}`,
    "",
    `<b>Page (form):</b> ${escapeTelegramHtml(payload.pageUrl)}`,
    `<b>Button →:</b> ${escapeTelegramHtml(formatCta(payload))}`,
    `<b>Referrer:</b> ${escapeTelegramHtml(payload.referrer)}`,
    `<b>UTM:</b> ${escapeTelegramHtml(formatUtm(payload.utm))}`,
  ].join("\n");
}

function escapeTelegramHtml(value?: string) {
  return String(value || "-")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatUtm(utm?: Record<string, string>) {
  return (
    utm &&
    Object.entries(utm)
      .filter(([, value]) => value)
      .map(([key, value]) => `${key}=${value}`)
      .join(", ")
  ) || "-";
}

function escapeSheetFormula(value?: string) {
  const text = value || "";
  return /^[=+\-@]/.test(text) ? `'${text}` : text;
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

const CONFIRMATION_PHONE = "+372 5784 3293";
const CONFIRMATION_EMAIL = "ceo@domarketing.ee";
const CONFIRMATION_SITE = "domarketing.ee";
const CONFIRMATION_TELEGRAM_URL = "https://t.me/ignateva_ko";
const CONFIRMATION_INSTAGRAM_URL = "https://instagram.com/do.market.ng";

type ConfirmationLanguage = "ru" | "en" | "et";

type ConfirmationCopy = {
  subject: string;
  intro: string;
  urgent: string;
  telegram: string;
  instagram: string;
  closing: string;
  tagline: string;
};

const confirmationCopy: Record<ConfirmationLanguage, ConfirmationCopy> = {
  ru: {
    subject: "Ура, ваша заявка уже у нас! 🎉",
    intro:
      "Привет! На связи команда Do.marketing. Мы получили вашу заявку и уже изучаем проект. Скоро свяжемся с вами, чтобы всё детально обсудить.",
    urgent:
      "Если вопрос срочный или хочется обсудить всё лично уже сейчас — смело звоните владелице агентства Ксении:",
    telegram: "Или напишите в Telegram:",
    instagram: "Мы в Instagram:",
    closing: "Хорошего дня и до скорой связи!",
    tagline: "Помогаем бизнесу расти за счёт привлечения новых клиентов",
  },
  en: {
    subject: "Your request has reached us! 🎉",
    intro:
      "Hi! This is the Do.marketing team. We've received your request and are already looking into your project. We'll be in touch soon to discuss everything in detail.",
    urgent:
      "If it's urgent or you'd like to talk right now — feel free to call the agency's owner, Kseniia:",
    telegram: "Or message us on Telegram:",
    instagram: "Find us on Instagram:",
    closing: "Have a great day, talk soon!",
    tagline: "We help businesses increase profits by attracting new customers",
  },
  et: {
    subject: "Sinu päring on meieni jõudnud! 🎉",
    intro:
      "Tere! Siin Do.marketingi tiim. Saime sinu päringu kätte ja tutvume juba sinu projektiga. Võtame peagi ühendust, et kõik detailselt läbi arutada.",
    urgent:
      "Kui asi on kiire või soovid kohe isiklikult rääkida — helista julgelt agentuuri omanikule Kseniale:",
    telegram: "Või kirjuta Telegramis:",
    instagram: "Leia meid Instagramis:",
    closing: "Ilusat päeva ja peatse kohtumiseni!",
    tagline: "Aitame ettevõtetel kasvada, tuues juurde uusi kliente",
  },
};

function normalizeConfirmationLanguage(value?: string): ConfirmationLanguage {
  const language = String(value || "").trim().toLowerCase();

  if (language.startsWith("en")) {
    return "en";
  }

  if (language.startsWith("et")) {
    return "et";
  }

  return "ru";
}

function buildConfirmationText(copy: ConfirmationCopy) {
  return [
    copy.intro,
    "",
    `${copy.urgent} ${CONFIRMATION_PHONE}`,
    `${copy.telegram} ${CONFIRMATION_TELEGRAM_URL}`,
    `${copy.instagram} ${CONFIRMATION_INSTAGRAM_URL}`,
    "",
    copy.closing,
    "",
    "---",
    copy.tagline,
    "",
    "Kseniia Ignateva",
    "CEO | DO.Marketing",
    CONFIRMATION_PHONE,
    CONFIRMATION_EMAIL,
    CONFIRMATION_SITE,
  ].join("\n");
}

function getZohoMailApiConfig() {
  const clientId = process.env.ZOHO_MAIL_CLIENT_ID;
  const clientSecret = process.env.ZOHO_MAIL_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_MAIL_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return null;
  }

  return {
    accountsUrl: process.env.ZOHO_ACCOUNTS_URL || "https://accounts.zoho.eu",
    apiBase: process.env.ZOHO_MAIL_API_BASE || "https://mail.zoho.eu/api",
    clientId,
    clientSecret,
    refreshToken,
    accountId: process.env.ZOHO_MAIL_ACCOUNT_ID || "",
    fromAddress: process.env.ZOHO_MAIL_FROM_ADDRESS || CONFIRMATION_EMAIL,
  };
}

async function getZohoMailAccessToken(config: ReturnType<typeof getZohoMailApiConfig>) {
  if (!config) {
    return "";
  }

  const response = await fetch(`${config.accountsUrl}/oauth/v2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      refresh_token: config.refreshToken,
      client_id: config.clientId,
      client_secret: config.clientSecret,
      grant_type: "refresh_token",
    }),
  });

  if (!response.ok) {
    throw new Error(`Zoho token refresh failed: ${response.status} ${await response.text()}`);
  }

  const data = (await response.json()) as { access_token?: string };
  return data.access_token || "";
}

function findZohoAccountId(accounts: unknown, fromAddress: string) {
  const data = (accounts as { data?: Array<Record<string, unknown>> })?.data;
  if (!Array.isArray(data)) {
    return "";
  }

  const from = fromAddress.toLowerCase();
  const account =
    data.find((item) =>
      [
        item.primaryEmailAddress,
        item.emailAddress,
        item.mailboxAddress,
        item.accountDisplayName,
      ]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase() === from),
    ) || data[0];

  return String(account?.accountId || account?.accountID || account?.id || "");
}

async function getZohoMailAccountId(
  config: NonNullable<ReturnType<typeof getZohoMailApiConfig>>,
  accessToken: string,
) {
  if (config.accountId) {
    return config.accountId;
  }

  const response = await fetch(`${config.apiBase}/accounts`, {
    headers: {
      Accept: "application/json",
      Authorization: `Zoho-oauthtoken ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Zoho account lookup failed: ${response.status} ${await response.text()}`);
  }

  const accountId = findZohoAccountId(await response.json(), config.fromAddress);
  if (!accountId) {
    throw new Error("Zoho account lookup did not return an accountId");
  }

  return accountId;
}

async function sendConfirmationEmailViaZohoApi(
  payload: LeadPayload,
  copy: ConfirmationCopy,
) {
  const config = getZohoMailApiConfig();
  if (!config || !payload.email) {
    return false;
  }

  const accessToken = await getZohoMailAccessToken(config);
  if (!accessToken) {
    throw new Error("Zoho token response did not include access_token");
  }

  const accountId = await getZohoMailAccountId(config, accessToken);
  const response = await fetch(
    `${config.apiBase}/accounts/${encodeURIComponent(accountId)}/messages`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Zoho-oauthtoken ${accessToken}`,
      },
      body: JSON.stringify({
        fromAddress: config.fromAddress,
        toAddress: payload.email,
        subject: copy.subject,
        content: buildConfirmationText(copy),
        mailFormat: "plaintext",
        askReceipt: "no",
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`Zoho send mail failed: ${response.status} ${await response.text()}`);
  }

  return true;
}

export async function sendConfirmationEmail(payload: LeadPayload) {
  const copy = confirmationCopy[normalizeConfirmationLanguage(payload.language)];
  const zohoApiSent = await sendConfirmationEmailViaZohoApi(payload, copy);
  if (zohoApiSent) {
    return true;
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const from =
    process.env.SMTP_FROM || (user ? `Do.Marketing <${user}>` : "");

  if (!host || !user || !pass || !from || !payload.email) {
    return false;
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    requireTLS: port === 587,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from,
    to: payload.email,
    subject: copy.subject,
    text: buildConfirmationText(copy),
  });

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

  // Columns L–Q (11–16) are reserved for wide-format lead imports read by
  // scripts/sheet-leads-to-telegram.mjs, so the CTA attribution goes in R–T.
  const values = [[
    new Date().toISOString(),
    payload.source || "",
    payload.language || "",
    escapeSheetFormula(payload.email),
    escapeSheetFormula(payload.phone),
    escapeSheetFormula(payload.website),
    escapeSheetFormula(payload.brief),
    escapeSheetFormula(payload.pageUrl),
    escapeSheetFormula(payload.referrer),
    escapeSheetFormula(payload.utm?.utm_source),
    escapeSheetFormula([payload.utm?.utm_medium || "", payload.utm?.utm_campaign || "", payload.utm?.utm_content || "", payload.utm?.utm_term || ""].filter(Boolean).join(" | ")),
    "",
    "",
    "",
    "",
    "",
    "",
    escapeSheetFormula(payload.ctaLabel),
    escapeSheetFormula(payload.ctaPage),
    escapeSheetFormula(payload.ctaHref),
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
      range: `${sheetName}!A:T`,
      valueInputOption: "RAW",
      requestBody: { values },
    });

    return true;
  }

  const accessToken = await getGoogleAccessToken();
  if (!accessToken) {
    return false;
  }

  const range = encodeURIComponent(`${sheetName}!A:T`);
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}/values/${range}:append?valueInputOption=RAW`,
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
