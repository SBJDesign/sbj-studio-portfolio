import Link from "next/link";
import { AnimatedBlock } from "@/components/animated-block";
import { Section } from "@/components/section";
import { TestimonialsSlider } from "@/components/testimonials-slider";
import { clientLogos, kpiStats, projects, services, testimonials } from "@/data/site-data";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.08] bg-hero-mesh">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(54,201,194,0.08),transparent)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-8 md:grid-cols-2 md:py-32">
          <AnimatedBlock>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              SBJ Studio
            </p>
            <h1 className="max-w-xl text-4xl font-black leading-[1.05] tracking-tight text-text md:text-6xl md:leading-[1.02]">
              We Design Growth, Not Just Graphics
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              We turn strategy into brand systems, campaigns, and stories that win attention, trust,
              and market momentum.
            </p>
            <p className="mt-5 max-w-xl text-xs font-semibold uppercase tracking-[0.2em] text-accent/90 md:text-sm">
              Built for businesses, government agencies, startups, and high-value institutions.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Book Strategy Call
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                View work
              </Link>
            </div>
          </AnimatedBlock>

          <AnimatedBlock delay={0.15}>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.slice(0, 4).map((item) => (
                <article key={item.title} className="card-light group p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                    {item.category}
                  </p>
                  <p className="mt-3 text-base font-bold leading-snug text-slate-900 group-hover:text-slate-950">
                    {item.title}
                  </p>
                </article>
              ))}
            </div>
          </AnimatedBlock>
        </div>
      </section>

      <section className="border-b border-white/[0.08] bg-white/[0.97] text-slate-900">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:px-8 md:flex-row md:items-center">
          <p className="max-w-3xl text-lg font-semibold leading-snug tracking-tight md:text-xl">
            Every week you delay brand strategy, a competitor captures the attention your business
            deserves.
          </p>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#0C0C1E] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800 active:scale-[0.98]"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <Section
        eyebrow="About"
        title="A strategic creative studio for high-value growth"
        description="SBJ Studio partners with businesses, startups, and public-sector leaders to build brands that are bold, culturally intelligent, and commercially effective."
        tone="muted"
      >
        <p className="max-w-3xl text-lg leading-relaxed text-muted">
          Our work blends African-rooted insight with globally competitive execution. Every project
          is designed to help clients communicate clearer, earn trust faster, and scale with
          confidence.
        </p>
      </Section>

      <Section
        eyebrow="Why SBJ"
        title="Built for brands that want market attention and measurable growth"
        description="We combine strategic thinking, creative execution, and performance discipline so your brand does not just look better - it grows better."
      >
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {[
            {
              title: "Strategy Before Design",
              text: "Every deliverable is guided by positioning, audience behavior, and business goals."
            },
            {
              title: "Creative Built For Conversion",
              text: "From campaigns to content systems, we design to drive action - not just impressions."
            },
            {
              title: "Local Insight, Global Standard",
              text: "African-rooted storytelling with premium execution fit for global competition."
            },
            {
              title: "Long-Term Growth Partnership",
              text: "We build scalable systems that help your team stay consistent after launch."
            }
          ].map((item) => (
            <article key={item.title} className="card-dark">
              <h3 className="text-xl font-black tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Proof" title="Creative excellence measured by outcomes" tone="muted">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {kpiStats.map((item) => (
            <article key={item.label} className="card-light p-6 text-center sm:text-left">
              <p className="text-3xl font-black tabular-nums tracking-tight text-accent">{item.value}</p>
              <p className="mt-2 text-sm font-medium leading-snug text-slate-600">{item.label}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Services" title="What we build for ambitious brands">
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {services.map((service, index) => (
            <AnimatedBlock key={service.title} delay={index * 0.05}>
              <article className="card-dark h-full">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                  {service.category}
                </p>
                <h3 className="mt-3 text-xl font-bold tracking-tight">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
              </article>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Featured Projects"
        title="Selected work that delivers outcomes"
        tone="muted"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <article key={project.slug} className="card-dark flex flex-col">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                {project.category}
              </p>
              <h3 className="mt-3 text-2xl font-black tracking-tight">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
              <Link href={`/portfolio/${project.slug}`} className="btn-ghost mt-6 w-fit">
                Read case study
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Trusted By" title="Chosen by teams that cannot afford average">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {clientLogos.map((client) => (
            <div
              key={client}
              className="card-light flex items-center justify-center px-4 py-4 text-center text-sm font-semibold text-slate-700"
            >
              {client}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Testimonials" title="Trusted by leaders building impact" tone="muted">
        <TestimonialsSlider items={testimonials} />
      </Section>

      <Section eyebrow="Founder" title="The SBJ Perspective">
        <div className="card-dark border-accent/30 bg-gradient-to-br from-accent/10 via-surface/90 to-surface/95 p-8 md:p-10">
          <p className="text-lg leading-relaxed text-muted md:text-xl">
            “We built SBJ Studio to prove that strategic creativity from Africa can compete anywhere
            in the world. Our mission is simple: help ambitious brands become impossible to ignore.”
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            SBJ — Creative Director, SBJ Studio
          </p>
        </div>
      </Section>

      <Section eyebrow="Follow The Journey" title="See what we are building in real time">
        <div className="flex flex-wrap gap-3">
          <Link
            href="https://www.instagram.com/sbjdesigns.ng?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Instagram
          </Link>
          <Link href="/contact" className="btn-secondary">
            Book Strategy Call
          </Link>
        </div>
      </Section>

      <Section title="Ready to build your next growth chapter?">
        <div className="card-dark flex flex-col gap-6 border-accent/25 bg-gradient-to-br from-accent/[0.12] to-transparent p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            Partner with SBJ Studio for premium creative strategy, design systems, and storytelling
            that move people and performance.
          </p>
          <Link href="/contact" className="btn-primary shrink-0 md:px-8">
            Book Strategy Call
          </Link>
        </div>
      </Section>
    </>
  );
}
