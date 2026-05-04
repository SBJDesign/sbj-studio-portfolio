import { Section } from "@/components/section";

export const metadata = {
  title: "About | SBJ Studio"
};

export default function AboutPage() {
  return (
    <>
      <Section eyebrow="Our Story" title="Built to merge creativity with strategic growth" tone="muted">
        <div className="grid gap-8 md:grid-cols-2">
          <p className="leading-relaxed text-muted">
            SBJ Studio began with a clear mission: help African brands compete globally through
            sharper positioning, stronger storytelling, and premium design execution. We believe
            creative work must do more than look good - it must unlock growth.
          </p>
          <p className="leading-relaxed text-muted">
            Today we partner with startups, enterprises, and institutions to craft brand systems
            that inspire confidence and drive measurable outcomes.
          </p>
        </div>
      </Section>

      <Section title="Mission & Vision">
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          <article className="card-dark">
            <h3 className="text-2xl font-bold tracking-tight">Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
              To equip ambitious organizations with world-class creative strategy and execution that
              accelerates growth.
            </p>
          </article>
          <article className="card-dark">
            <h3 className="text-2xl font-bold tracking-tight">Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
              To become Africa’s most trusted premium studio for brand-led transformation and global
              competitiveness.
            </p>
          </article>
        </div>
      </Section>

      <Section eyebrow="Founder" title="SBJ Identity" tone="muted">
        <article className="card-dark max-w-3xl !border-accent/35 bg-gradient-to-br from-accent/[0.08] to-transparent !p-8 md:!p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Founder Highlight</p>
          <h3 className="mt-3 text-3xl font-black tracking-tight">SBJ - Creative Director & Strategist</h3>
          <p className="mt-4 leading-relaxed text-muted">
            SBJ brings a multidisciplinary lens that combines strategy, visual intelligence, and
            storytelling leadership. This approach keeps every project premium, intentional, and
            outcome-focused.
          </p>
        </article>
      </Section>
    </>
  );
}
