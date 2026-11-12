import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { contact } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Contact | SBJ Studio",
  description: "Start a branding, design, digital or media project with SBJ Studio."
};

const channels = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "WhatsApp", value: contact.whatsappLabel, href: contact.whatsappUrl },
  { label: "Instagram", value: contact.instagramLabel, href: contact.instagramUrl },
  { label: "Studio", value: contact.location }
];

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-ink px-5 pb-32 pt-40 text-white md:px-10 md:pt-48">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <p className="text-[14px] text-mute">Get in touch</p>
          <h1 className="display-serif mt-4" style={{ fontSize: "clamp(3.5rem, 11vw, 10rem)" }}>
            Let&apos;s build
            <br />
            something good.
          </h1>
        </Reveal>

        <div className="mt-24 grid gap-20 md:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <dl className="space-y-8">
              {channels.map((c) => (
                <div key={c.label}>
                  <dt className="text-[13px] uppercase tracking-[0.04em] text-white/45">{c.label}</dt>
                  <dd className="mt-1 text-2xl">
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noopener noreferrer" className="link-underline">
                        {c.value}
                      </a>
                    ) : (
                      c.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
