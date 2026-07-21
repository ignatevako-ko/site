import {
  appendWidgetLeadToSheet,
  sendWidgetLeadToTelegram,
} from "@/lib/question-widget-integrations";
import {
  isAllowedContentType,
  isAllowedOrigin,
} from "@/lib/lead-security";
import {
  checkWidgetRateLimit,
  getClientIp,
  isAllowedBodySize,
  sanitizeWidgetLeadBody,
  type RawWidgetLeadBody,
} from "@/lib/question-widget-security";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    if (!isAllowedContentType(request) || !isAllowedBodySize(request)) {
      return Response.json({ error: "Invalid request." }, { status: 400 });
    }

    if (!isAllowedOrigin(request)) {
      return Response.json({ error: "Forbidden." }, { status: 403 });
    }

    const rateLimit = checkWidgetRateLimit(getClientIp(request));

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

    const payload = sanitizeWidgetLeadBody(
      (await request.json()) as RawWidgetLeadBody,
    );

    if (!payload) {
      return Response.json({ error: "Invalid lead data." }, { status: 400 });
    }

    const timestamp = new Date();

    const [telegramResult, sheetResult] = await Promise.allSettled([
      sendWidgetLeadToTelegram(payload, timestamp),
      appendWidgetLeadToSheet(payload, timestamp),
    ]);

    if (telegramResult.status === "rejected") {
      console.error("Question widget Telegram notification failed:", telegramResult.reason);
    }

    if (sheetResult.status === "rejected") {
      console.error("Question widget CRM (Sheets) append failed:", sheetResult.reason);
    }

    const configured = [telegramResult, sheetResult].some(
      (result) => result.status === "fulfilled" && result.value === true,
    );

    if (!configured) {
      return Response.json(
        { error: "Widget integrations are not configured on the server." },
        { status: 500 },
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Unexpected server error." }, { status: 500 });
  }
}
