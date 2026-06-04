type RateLimitBucket = {
  count: number;
  resetAt: number;
};

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const BODY_SIZE_LIMIT_BYTES = 12 * 1024;
const rateLimitStore = new Map<string, RateLimitBucket>();

export type RawLeadBody = {
  email?: unknown;
  phone?: unknown;
  website?: unknown;
  brief?: unknown;
  source?: unknown;
  language?: unknown;
  pageUrl?: unknown;
  referrer?: unknown;
  utm?: unknown;
  company?: unknown;
};

export type SanitizedLeadBody = {
  email: string;
  phone: string;
  website: string;
  brief: string;
  source: string;
  language: string;
  pageUrl: string;
  referrer: string;
  utm: Record<string, string>;
};

export function isAllowedContentType(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  return contentType.toLowerCase().includes("application/json");
}

export function isAllowedBodySize(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  return !contentLength || contentLength <= BODY_SIZE_LIMIT_BYTES;
}

export function isAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin");

  if (!origin) {
    return true;
  }

  const host = request.headers.get("host");
  const allowedOrigins = new Set(
    [
      process.env.NEXT_PUBLIC_SITE_URL,
      process.env.SITE_URL,
      host ? `https://${host}` : "",
      host?.startsWith("localhost") || host?.startsWith("127.0.0.1")
        ? `http://${host}`
        : "",
    ].filter(Boolean),
  );

  return allowedOrigins.has(origin);
}

export function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");

  return forwardedFor?.split(",")[0]?.trim() || realIp || "unknown";
}

export function checkLeadRateLimit(identifier: string) {
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

export function sanitizeLeadBody(body: RawLeadBody): SanitizedLeadBody | null {
  if (typeof body.company === "string" && body.company.trim()) {
    return null;
  }

  const email = normalizeString(body.email, 254);
  const phone = normalizeString(body.phone, 32);
  const website = normalizeString(body.website, 300);
  const brief = normalizeString(body.brief, 1200);
  const source = normalizeString(body.source, 80) || "contact_form";
  const language = normalizeString(body.language, 8);
  const pageUrl = normalizeString(body.pageUrl, 500);
  const referrer = normalizeString(body.referrer, 500);
  const phonePattern = /^\+?[0-9\s().-]{6,20}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !phone || !emailPattern.test(email) || !phonePattern.test(phone)) {
    return null;
  }

  return {
    email,
    phone,
    website,
    brief,
    source,
    language,
    pageUrl,
    referrer,
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
