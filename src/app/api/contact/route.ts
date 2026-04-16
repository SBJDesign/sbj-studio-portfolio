import { NextResponse } from "next/server";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "SBJ Studio Website",
          submittedAt: new Date().toISOString(),
          name,
          email,
          details
        })
      });

      if (!webhookResponse.ok) {
        return NextResponse.json(
          { message: "Message received, but delivery failed. Please try WhatsApp instead." },
          { status: 502 }
        );
      }
    } else {
      console.log("Contact form submission", {
        source: "SBJ Studio Website",
        submittedAt: new Date().toISOString(),
        name,
        email,
        details
      });
    }

    return NextResponse.json({
      message: "Thanks. We received your inquiry and will respond shortly."
    });
  } catch {
    return NextResponse.json({ message: "Invalid request payload." }, { status: 400 });
  }
}
