import { NextResponse } from "next/server";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function parseRecipientList(value: string) {
  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

async function sendViaUseSendCore(payload: {
  name: string;
  email: string;
  details: string;
}) {
  const apiKey = process.env.USESENDCORE_API_KEY?.trim();
  const from = process.env.USESENDCORE_FROM?.trim() ?? "test@sbj.elasto.ng";
  const toRaw = process.env.CONTACT_INBOX_EMAIL?.trim() ?? "sbjdesigns.ng@gmail.com";
  const to = parseRecipientList(toRaw);

  if (!apiKey) {
    return { ok: false as const, reason: "missing_api_key" as const };
  }

  if (to.length === 0) {
    return { ok: false as const, reason: "missing_recipient" as const };
  }

  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safeDetails = escapeHtml(payload.details).replace(/\n/g, "<br />");

  const response = await fetch("https://api.usesendcore.com/api/v1/emails/send", {
    method: "POST",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to,
      subject: `New inquiry from ${payload.name} - SBJ Studio`,
      html: `
        <div style="font-family: system-ui, sans-serif; line-height: 1.6; color: #111;">
          <h2 style="margin: 0 0 16px;">New contact form submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <p><strong>Project details:</strong></p>
          <p style="white-space: pre-wrap;">${safeDetails}</p>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e5e5;" />
          <p style="font-size: 12px; color: #666;">Sent from the SBJ Studio website contact form.</p>
        </div>
      `
    })
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    console.error("UseSendCore error:", response.status, errorText);
    return { ok: false as const, reason: "api_error" as const };
  }

  return { ok: true as const };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { name?: string; email?: string; details?: string };
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const details = body.details?.trim() ?? "";

    if (!name || !email || !details) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    const result = await sendViaUseSendCore({ name, email, details });

    if (!result.ok) {
      if (result.reason === "missing_api_key") {
        console.error("USESENDCORE_API_KEY is not set.");
        return NextResponse.json(
          {
            message:
              "Email service is not configured yet. Please contact us on WhatsApp or email directly."
          },
          { status: 503 }
        );
      }

      if (result.reason === "missing_recipient") {
        console.error("CONTACT_INBOX_EMAIL is not set or invalid.");
        return NextResponse.json(
          {
            message:
              "Email service is not configured yet. Please contact us on WhatsApp or email directly."
          },
          { status: 503 }
        );
      }

      return NextResponse.json(
        {
          message:
            "We could not send your message right now. Please try WhatsApp or email us directly."
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      message: "Thanks. Your inquiry was sent — we will respond shortly."
    });
  } catch {
    return NextResponse.json({ message: "Invalid request payload." }, { status: 400 });
  }
}
