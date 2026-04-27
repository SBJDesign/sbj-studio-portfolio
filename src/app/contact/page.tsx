import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Section } from "@/components/section";

export const metadata = {
  title: "Contact | SBJ Studio"
};

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Let’s design your next growth milestone"
      description="Tell us about your project. SBJ Studio is based in Nigeria and partners with clients globally."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <ContactForm />

        <aside className="rounded-3xl border border-white/10 bg-surface/90 p-6">
          <h3 className="text-2xl font-black">Direct Channels</h3>
          <p className="mt-3 text-muted">
            Prefer a direct conversation? Reach us instantly through WhatsApp or email.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <p>
              WhatsApp:{" "}
              <Link className="text-accent hover:underline" href="https://wa.me/2348169576864">
                08169576864
              </Link>
            </p>
            <p>
              Email:{" "}
              <Link
                className="text-accent hover:underline"
                href="mailto:sbjdesigns.ng@gmail.com"
              >
                sbjdesigns.ng@gmail.com
              </Link>
            </p>
            <p>
              Instagram:{" "}
              <Link
                className="text-accent hover:underline"
                href="https://www.instagram.com/sbjdesigns.ng?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                @sbjdesigns.ng
              </Link>
            </p>
            <p className="text-muted">Location: Nigeria - Serving clients worldwide.</p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
