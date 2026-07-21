import { logIncompleteWidgetQuestion } from "@/lib/question-widget-integrations";
import { isAllowedOrigin } from "@/lib/lead-security";
import {
  checkWidgetRateLimit,
  getClientIp,
  isAllowedBodySize,
} from "@/lib/question-widget-security";

export const runtime = "nodejs";

// Best-effort log for visitors who typed a question but closed the widget
// before leaving a contact. Sent via navigator.sendBeacon, so this must stay
// lenient (no strict content-type check) and never touches CRM/Telegram.
export async function POST(request: Request) {
  try {
    if (!isAllowedBodySize(request) || !isAllowedOrigin(request)) {
      return new Response(null, { status: 204 });
    }

    const rateLimit = checkWidgetRateLimit(`incomplete:${getClientIp(request)}`);
    if (rateLimit.rateLimited) {
      return new Response(null, { status: 204 });
    }

    const body = (await request.json().catch(() => null)) as {
      question?: unknown;
      pageUrl?: unknown;
      language?: unknown;
    } | null;

    const question = typeof body?.question === "string" ? body.question.trim().slice(0, 300) : "";

    if (question.length >= 5) {
      logIncompleteWidgetQuestion({
        question,
        pageUrl: typeof body?.pageUrl === "string" ? body.pageUrl.slice(0, 500) : "",
        language: typeof body?.language === "string" ? body.language.slice(0, 16) : "",
      });
    }

    return new Response(null, { status: 204 });
  } catch {
    return new Response(null, { status: 204 });
  }
}
