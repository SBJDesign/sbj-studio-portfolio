import { Section } from "@/components/section";

export const metadata = {
  title: "About | SBJ Studio"
};

export default function AboutPage() {
  return (
    <>
      <Section eyebrow="Our Story" title="Built to merge creativity with strategic growth">
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-muted">
            SBJ Studio began with a clear mission: help African brands compete globally through
            sharper positioning, stronger storytelling, and premium design execution. We believe
            creative work must do more than look good - it must unlock growth.
          </p>
          <p className="text-muted">
            Today we partner with startups, enterprises, and institutions to craft brand systems
            that inspire confidence and drive measurable outcomes.
          </p>
        </div>
      </Section>

      <Section title="Mission & Vision">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-surface p-6">
            <h3 className="text-2xl font-bold">Mission</h3>
            <p className="mt-3 text-muted">
              To equip ambitious organizations with world-class creative strategy and execution that
              accelerates growth.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-surface p-6">
            <h3 className="text-2xl font-bold">Vision</h3>
            <p className="mt-3 text-muted">
              To become Africa’s most trusted premium studio for brand-led transformation and global
              competitiveness.
            </p>
          </article>
        </div>
      </Section>

      <Section eyebrow="Founder" title="SBJ Identity">
        <article className="max-w-3xl rounded-2xl border border-accent/40 bg-accent/10 p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Founder Highlight</p>
          <h3 className="mt-2 text-3xl font-black">SBJ - Creative Director & Strategist</h3>
          <p className="mt-4 text-muted">
            SBJ brings a multidisciplinary lens that combines strategy, visual intelligence, and
            storytelling leadership. This approach keeps every project premium, intentional, and
            outcome-focused.
          </p>
        </article>
      </Section>
    </>
  );
}
