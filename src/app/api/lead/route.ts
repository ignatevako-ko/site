import { appendToGoogleSheets, sendToTelegram } from "@/lib/lead-integrations";
import {
  checkLeadRateLimit,
  getClientIp,
  isAllowedBodySize,
  isAllowedContentType,
  isAllowedOrigin,
  sanitizeLeadBody,
  type RawLeadBody,
} from "@/lib/lead-security";

export async function POST(request: Request) {
  try {
    if (!isAllowedContentType(request) || !isAllowedBodySize(request)) {
      return Response.json({ error: "Invalid request." }, { status: 400 });
    }

    if (!isAllowedOrigin(request)) {
      return Response.json({ error: "Forbidden." }, { status: 403 });
    }

    const rateLimit = checkLeadRateLimit(getClientIp(request));

    if (rateLimit.rateLimited) {
      return Response.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil(rateLimit.retryAfter / 1000)),
          },
        },
      );
    }

    const payload = sanitizeLeadBody((await request.json()) as RawLeadBody);

    if (!payload) {
      return Response.json({ error: "Invalid lead data." }, { status: 400 });
    }

    const results = await Promise.allSettled([
      sendToTelegram(payload),
      appendToGoogleSheets(payload),
    ]);

    const configured = results.some(
      (result) => result.status === "fulfilled" && result.value === true,
    );

    if (!configured) {
      return Response.json(
        { error: "Form integrations are not configured on the server." },
        { status: 500 },
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Unexpected server error." }, { status: 500 });
  }
}
