import { AboutStats } from "@/components/about-stats";
import { AnimatedBlock } from "@/components/animated-block";
import { CtaBanner } from "@/components/cta-banner";
import { FloatingSparkle } from "@/components/floating-sparkle";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";

export const metadata = {
  title: "About Us | SBJ Studio",
  description:
    "SBJ Studio is a creative branding and digital agency building impactful brands through strategy, design, and innovation."
};

const approachPillars = [
  {
    step: "01",
    icon: "🎯",
    title: "Strategy-Driven",
    description:
      "Every project begins with research, planning, and a clear understanding of your brand objectives and audience."
  },
  {
    step: "02",
    icon: "✨",
    title: "Creative Excellence",
    description:
      "We create bold, modern, and memorable designs that help brands stand out in competitive markets."
  },
  {
    step: "03",
    icon: "📈",
    title: "Growth Focused",
    description:
      "Our work is designed not only to look good, but also to drive visibility, engagement, and business growth."
  }
];

function CardGlow() {
  return (
    <>
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/20 blur-3xl opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-8 -left-8 h-20 w-20 rounded-full bg-accent/10 blur-2xl opacity-50"
        aria-hidden
      />
    </>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            We Are <span className="text-gradient">SBJ Studio</span>
          </>
        }
        description="A creative branding and digital agency focused on building impactful brands and helping businesses grow with purpose."
        subtitle="We combine strategy, creativity, and innovation to create visual identities and digital experiences that connect brands with people and leave lasting impressions."
        withIllustration
        align="left"
        showLogo
        showSparkles
      />

      <AboutStats />

      <Section title="Mission & Vision" align="center" decor="mesh">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <AnimatedBlock>
            <article className="card-glass-gradient card-accent-top relative h-full p-7 md:p-9">
              <CardGlow />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                  Our Mission
                </p>
                <h3 className="mt-4 text-2xl font-black tracking-tight text-text md:text-3xl">
                  Mission
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">
                  To help businesses grow through strategic branding, creative design, and innovative
                  digital solutions that inspire trust, engagement, and long-term success.
                </p>
              </div>
            </article>
          </AnimatedBlock>
          <AnimatedBlock delay={0.08}>
            <article className="card-glass-gradient card-accent-top relative h-full p-7 md:p-9">
              <CardGlow />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                  Our Vision
                </p>
                <h3 className="mt-4 text-2xl font-black tracking-tight text-text md:text-3xl">
                  Vision
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">
                  To become a leading creative studio recognized for transforming ideas into powerful
                  brands that influence industries and shape the future of business.
                </p>
              </div>
            </article>
          </AnimatedBlock>
        </div>
      </Section>

      <Section
        eyebrow="How we work"
        title="Our Approach"
        description="We believe every brand has a unique story. That is why we work closely with our clients to understand their vision, challenges, and goals before creating solutions tailored to their growth."
        tone="muted"
        align="center"
        showSparkle
        decor="grid"
      >
        <div className="relative">
          <div
            className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent md:block"
            aria-hidden
          />
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {approachPillars.map((pillar, index) => (
              <AnimatedBlock key={pillar.title} delay={index * 0.08}>
                <article className="card-glass-gradient card-accent-top group relative h-full p-6 md:p-8">
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/15 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="relative flex items-start justify-between gap-4">
                    <span className="pillar-number">{pillar.step}</span>
                    <span className="text-2xl opacity-90" aria-hidden>
                      {pillar.icon}
                    </span>
                  </div>
                  <h3 className="relative mt-6 text-lg font-bold tracking-tight text-text md:text-xl">
                    {pillar.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted md:text-base">
                    {pillar.description}
                  </p>
                </article>
              </AnimatedBlock>
            ))}
          </div>
        </div>

        <AnimatedBlock delay={0.2}>
          <blockquote className="card-glass relative mx-auto mt-14 max-w-3xl overflow-hidden p-8 text-center md:p-10">
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.06] via-transparent to-transparent"
              aria-hidden
            />
            <FloatingSparkle className="relative mx-auto mb-4 h-5 w-5 text-accent" delay={0.5} />
            <p className="relative text-lg font-medium leading-relaxed text-text/95 md:text-xl">
              &ldquo;Every brand has a unique story — we help you tell yours with clarity, creativity,
              and purpose.&rdquo;
            </p>
            <footer className="relative mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              SBJ Studio
            </footer>
          </blockquote>
        </AnimatedBlock>
      </Section>

      <CtaBanner
        title="Ready to Build Your Brand?"
        description="Let's create something impactful together."
        tagline="SBJ Studio — Building Brands That Drive Growth."
      />
    </>
  );
}
