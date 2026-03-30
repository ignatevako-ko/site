import { appendToGoogleSheets, sendToTelegram } from "@/lib/lead-integrations";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string;
      phone?: string;
      brief?: string;
    };

    const email = body.email?.trim() || "";
    const phone = body.phone?.trim() || "";
    const brief = body.brief?.trim() || "";

    if (!email || !phone) {
      return Response.json(
        { error: "Email and phone are required." },
        { status: 400 },
      );
    }

    const payload = { email, phone, brief };
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
