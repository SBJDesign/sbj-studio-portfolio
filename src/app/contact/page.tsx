import Link from "next/link";
import { AnimatedBlock } from "@/components/animated-block";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";

export const metadata = {
  title: "Contact | SBJ Studio",
  description: "Get in touch with SBJ Studio for branding, design, and digital growth projects."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s design your next <span className="text-gradient-coral">milestone</span>
          </>
        }
        description="Tell us about your project. SBJ Studio is based in Nigeria and partners with clients globally."
        showSparkles
        compact
      />

      <Section decor="mesh">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <AnimatedBlock>
            <ContactForm />
          </AnimatedBlock>

          <AnimatedBlock delay={0.08}>
            <aside className="card-glass-gradient card-accent-top relative flex h-full flex-col !p-8 md:!p-10">
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/15 blur-3xl"
                aria-hidden
              />
              <div className="relative">
                <h3 className="text-xl font-black tracking-tight md:text-2xl">Direct channels</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Prefer a direct conversation? Reach us instantly through WhatsApp or email.
                </p>
                <dl className="mt-8 space-y-5 text-sm">
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                      WhatsApp
                    </dt>
                    <dd className="mt-2">
                      <Link
                        className="font-medium text-text transition hover:text-accent"
                        href="https://wa.me/2348169576864"
                      >
                        08169576864
                      </Link>
                    </dd>
                  </div>
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                      Email
                    </dt>
                    <dd className="mt-2">
                      <Link
                        className="font-medium text-text transition hover:text-accent"
                        href="mailto:sbjdesigns.ng@gmail.com"
                      >
                        sbjdesigns.ng@gmail.com
                      </Link>
                    </dd>
                  </div>
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                      Instagram
                    </dt>
                    <dd className="mt-2">
                      <Link
                        className="font-medium text-text transition hover:text-accent"
                        href="https://www.instagram.com/sbjdesigns.ng?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @sbjdesigns.ng
                      </Link>
                    </dd>
                  </div>
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                      Location
                    </dt>
                    <dd className="mt-2 text-muted">Nigeria — serving clients worldwide.</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </AnimatedBlock>
        </div>
      </Section>
    </>
  );
}
