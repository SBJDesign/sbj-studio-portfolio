import Link from "next/link";
import { AnimatedBlock } from "@/components/animated-block";
import { Section } from "@/components/section";
import { TestimonialsSlider } from "@/components/testimonials-slider";
import { clientLogos, kpiStats, projects, services, testimonials } from "@/data/site-data";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <AnimatedBlock>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              SBJ Studio
            </p>
            <h1 className="max-w-xl text-4xl font-black leading-tight md:text-6xl">
              We Design Growth, Not Just Graphics
            </h1>
            <p className="mt-6 max-w-lg text-muted">
              We turn strategy into brand systems, campaigns, and stories that win attention, trust,
              and market momentum.
            </p>
            <p className="mt-4 max-w-xl text-sm uppercase tracking-[0.16em] text-accent">
              Built for businesses, government agencies, startups, and high-value institutions.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 font-semibold text-black transition hover:scale-[1.03]"
            >
              Book Strategy Call
            </Link>
          </AnimatedBlock>

          <AnimatedBlock delay={0.15}>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.slice(0, 4).map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white p-5 text-slate-900 transition hover:-translate-y-1"
                >
                  <p className="text-sm text-slate-500">{item.category}</p>
                  <p className="mt-2 font-bold">{item.title}</p>
                </article>
              ))}
            </div>
          </AnimatedBlock>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/95 text-slate-900">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 md:flex-row md:items-center">
          <p className="max-w-3xl text-lg font-semibold">
            Every week you delay brand strategy, a competitor captures the attention your business
            deserves.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <Section
        eyebrow="About"
        title="A strategic creative studio for high-value growth"
        description="SBJ Studio partners with businesses, startups, and public-sector leaders to build brands that are bold, culturally intelligent, and commercially effective."
      >
        <p className="max-w-3xl text-lg text-muted">
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
        <div className="grid gap-6 md:grid-cols-2">
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
            <article key={item.title} className="rounded-3xl border border-white/10 bg-surface/90 p-6">
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-3 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Proof" title="Creative excellence measured by outcomes">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {kpiStats.map((item) => (
            <article
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white p-5 text-slate-900 transition hover:-translate-y-1"
            >
              <p className="text-2xl font-black text-accent">{item.value}</p>
              <p className="mt-1 text-sm text-slate-600">{item.label}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Services" title="What we build for ambitious brands">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <AnimatedBlock key={service.title} delay={index * 0.06}>
              <article className="rounded-3xl border border-white/10 bg-surface/90 p-6 transition hover:-translate-y-1 hover:border-accent/50">
                <p className="text-xs uppercase tracking-[0.2em] text-accent">{service.category}</p>
                <h3 className="mt-3 text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-sm text-muted">{service.description}</p>
              </article>
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <Section eyebrow="Featured Projects" title="Selected work that delivers outcomes">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <article
              key={project.slug}
              className="rounded-3xl border border-white/10 bg-surface/90 p-6 transition hover:-translate-y-1 hover:border-accent/70"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-accent">{project.category}</p>
              <h3 className="mt-3 text-2xl font-black">{project.title}</h3>
              <p className="mt-3 text-muted">{project.summary}</p>
              <Link
                href={`/portfolio/${project.slug}`}
                className="mt-5 inline-flex rounded-full border border-accent/50 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-black"
              >
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
              className="rounded-2xl border border-white/10 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5"
            >
              {client}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Testimonials" title="Trusted by leaders building impact">
        <TestimonialsSlider items={testimonials} />
      </Section>

      <Section eyebrow="Founder" title="The SBJ Perspective">
        <div className="rounded-3xl border border-accent/40 bg-accent/10 p-8 md:p-10">
          <p className="text-lg leading-relaxed text-muted">
            “We built SBJ Studio to prove that strategic creativity from Africa can compete anywhere
            in the world. Our mission is simple: help ambitious brands become impossible to ignore.”
          </p>
          <p className="mt-5 font-semibold text-accent">SBJ — Creative Director, SBJ Studio</p>
        </div>
      </Section>

      <Section eyebrow="Follow The Journey" title="See what we are building in real time">
        <div className="flex flex-wrap gap-3">
          <Link
            href="https://www.instagram.com/sbjdesigns.ng?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-accent/50 px-5 py-2.5 text-sm font-semibold text-accent transition hover:bg-accent hover:text-black"
          >
            Instagram
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-text transition hover:border-accent/60 hover:text-accent"
          >
            Book Strategy Call
          </Link>
        </div>
      </Section>

      <Section title="Ready to build your next growth chapter?">
        <div className="rounded-2xl border border-accent/40 bg-accent/10 p-8 md:flex md:items-center md:justify-between">
          <p className="max-w-2xl text-lg text-muted">
            Partner with SBJ Studio for premium creative strategy, design systems, and storytelling
            that move people and performance.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex rounded-full bg-accent px-6 py-3 font-semibold text-black md:mt-0"
          >
            Book Strategy Call
          </Link>
        </div>
      </Section>
    </>
  );
}
