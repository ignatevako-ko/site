// Security/validation for the "ask a question" widget. Kept separate from
// lead-security.ts (the contact-form path) so changes here can't affect the
// production lead intake — see AGENTS.md.

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const BODY_SIZE_LIMIT_BYTES = 8 * 1024;
const QUESTION_MIN_LENGTH = 5;

type RateLimitBucket = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitBucket>();

export type WidgetChannel = "telegram" | "whatsapp";

export type RawWidgetLeadBody = {
  name?: unknown;
  question?: unknown;
  channel?: unknown;
  contact?: unknown;
  pageUrl?: unknown;
  referrer?: unknown;
  language?: unknown;
  userAgent?: unknown;
  utm?: unknown;
  company?: unknown;
};

export type SanitizedWidgetLead = {
  name: string;
  question: string;
  channel: WidgetChannel;
  contact: string;
  pageUrl: string;
  referrer: string;
  language: string;
  userAgent: string;
  utm: Record<string, string>;
};

const TELEGRAM_USERNAME_PATTERN = /^@?[a-zA-Z][a-zA-Z0-9_]{4,31}$/;
const PHONE_PATTERN = /^\+?[0-9\s().-]{6,20}$/;

export function isAllowedBodySize(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  return !contentLength || contentLength <= BODY_SIZE_LIMIT_BYTES;
}

export function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");

  return forwardedFor?.split(",")[0]?.trim() || realIp || "unknown";
}

export function checkWidgetRateLimit(identifier: string) {
  const now = Date.now();
  const bucket = rateLimitStore.get(identifier);

  if (!bucket || bucket.resetAt <= now) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    cleanupRateLimitStore(now);
    return { rateLimited: false, retryAfter: RATE_LIMIT_WINDOW_MS };
  }

  if (bucket.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { rateLimited: true, retryAfter: bucket.resetAt - now };
  }

  bucket.count += 1;
  return { rateLimited: false, retryAfter: bucket.resetAt - now };
}

function isValidContact(channel: WidgetChannel, contact: string) {
  if (!contact) {
    return false;
  }

  if (channel === "telegram") {
    return TELEGRAM_USERNAME_PATTERN.test(contact) || PHONE_PATTERN.test(contact);
  }

  return PHONE_PATTERN.test(contact);
}

export function sanitizeWidgetLeadBody(body: RawWidgetLeadBody): SanitizedWidgetLead | null {
  // Honeypot: real visitors never fill this hidden field.
  if (typeof body.company === "string" && body.company.trim()) {
    return null;
  }

  const name = normalizeString(body.name, 120);
  const question = normalizeString(body.question, 1500);
  const channel = normalizeString(body.channel, 20).toLowerCase();
  const contact = normalizeString(body.contact, 120);
  const pageUrl = normalizeString(body.pageUrl, 500);
  const referrer = normalizeString(body.referrer, 500);
  const language = normalizeString(body.language, 16);
  const userAgent = normalizeString(body.userAgent, 300);

  if (question.length < QUESTION_MIN_LENGTH || !/[a-zA-Zа-яА-ЯёЁ]{2,}/.test(question)) {
    return null;
  }

  if (channel !== "telegram" && channel !== "whatsapp") {
    return null;
  }

  if (!isValidContact(channel, contact)) {
    return null;
  }

  return {
    name,
    question,
    channel,
    contact,
    pageUrl,
    referrer,
    language,
    userAgent,
    utm: sanitizeUtm(body.utm),
  };
}

function normalizeString(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\p{C}/gu, "").trim().slice(0, maxLength);
}

function sanitizeUtm(value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {};
  }

  const allowedKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
  ];

  return Object.fromEntries(
    allowedKeys
      .map((key) => [key, normalizeString((value as Record<string, unknown>)[key], 160)])
      .filter(([, fieldValue]) => fieldValue),
  );
}

function cleanupRateLimitStore(now: number) {
  if (rateLimitStore.size < 1000) {
    return;
  }

  for (const [key, bucket] of rateLimitStore) {
    if (bucket.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }
}
