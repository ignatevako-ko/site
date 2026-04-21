import { appendToGoogleSheets, sendToTelegram } from "@/lib/lead-integrations";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string;
      phone?: string;
      brief?: string;
      source?: string;
      language?: string;
      pageUrl?: string;
      referrer?: string;
      utm?: Record<string, string>;
    };

    const email = body.email?.trim() || "";
    const phone = body.phone?.trim() || "";
    const brief = body.brief?.trim() || "";
    const phonePattern = /^\+?[0-9\s().-]{4,24}$/;

    if (!email || !phone) {
      return Response.json(
        { error: "Email and phone are required." },
        { status: 400 },
      );
    }

    if (!phonePattern.test(phone)) {
      return Response.json(
        { error: "Phone number is invalid." },
        { status: 400 },
      );
    }

    const payload = { email, phone, brief, source: body.source || "contact_form", language: body.language || "", pageUrl: body.pageUrl || "", referrer: body.referrer || "", utm: body.utm || {} };
    const results = await Promise.allSettled([
      sendToTelegram(payload),
      appendToGoogleSheets(payload),
    ]);

    const configured = results.every(
      (result) => result.status === "fulfilled" && result.value === true,
    );

    if (!configured) {
      console.error("Lead integrations failed", results);
      return Response.json(
        { error: "Form integrations failed on the server." },
        { status: 500 },
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Lead route failed", error);
    return Response.json({ error: "Unexpected server error." }, { status: 500 });
  }
}
