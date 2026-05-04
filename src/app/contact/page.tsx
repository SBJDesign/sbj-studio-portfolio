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

        <aside className="card-dark flex flex-col !p-8">
          <h3 className="text-xl font-black tracking-tight md:text-2xl">Direct channels</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Prefer a direct conversation? Reach us instantly through WhatsApp or email.
          </p>
          <dl className="mt-8 space-y-5 text-sm">
            <div className="border-b border-white/10 pb-5">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">WhatsApp</dt>
              <dd className="mt-1">
                <Link className="font-medium text-accent hover:underline" href="https://wa.me/2348169576864">
                  08169576864
                </Link>
              </dd>
            </div>
            <div className="border-b border-white/10 pb-5">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Email</dt>
              <dd className="mt-1">
                <Link className="font-medium text-accent hover:underline" href="mailto:sbjdesigns.ng@gmail.com">
                  sbjdesigns.ng@gmail.com
                </Link>
              </dd>
            </div>
            <div className="border-b border-white/10 pb-5">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Instagram</dt>
              <dd className="mt-1">
                <Link
                  className="font-medium text-accent hover:underline"
                  href="https://www.instagram.com/sbjdesigns.ng?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @sbjdesigns.ng
                </Link>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Location</dt>
              <dd className="mt-1 text-muted">Nigeria — serving clients worldwide.</dd>
            </div>
          </dl>
        </aside>
      </div>
    </Section>
  );
}
