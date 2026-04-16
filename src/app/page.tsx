import Image from "next/image";
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
              className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
            >
              Book Strategy Call
            </Link>
          </AnimatedBlock>

          <AnimatedBlock delay={0.15}>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Brand Strategy", "Graphic Design", "Storytelling Media", "Business Growth"].map(
                (item) => (
                  <article key={item} className="rounded-2xl border border-white/10 bg-surface p-5">
                    <p className="text-sm text-muted">Service</p>
                    <p className="mt-2 font-bold">{item}</p>
                  </article>
                )
              )}
            </div>
          </AnimatedBlock>
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

      <Section eyebrow="Proof" title="Creative excellence measured by outcomes">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {kpiStats.map((item) => (
            <article key={item.label} className="rounded-2xl border border-white/10 bg-surface p-5">
              <p className="text-2xl font-black text-accent">{item.value}</p>
              <p className="mt-1 text-sm text-muted">{item.label}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Services" title="What we build for ambitious brands">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <AnimatedBlock key={service.title} delay={index * 0.06}>
              <article className="rounded-2xl border border-white/10 bg-surface p-6">
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
              className="rounded-2xl border border-white/10 bg-surface p-6 transition hover:border-accent/70"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-accent">{project.category}</p>
              <h3 className="mt-3 text-2xl font-black">{project.title}</h3>
              <p className="mt-3 text-muted">{project.summary}</p>
              <Link
                href={`/portfolio/${project.slug}`}
                className="mt-5 inline-flex text-sm font-semibold text-accent hover:underline"
              >
                Read case study
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Trusted By" title="Chosen by teams that cannot afford average">
        <p className="-mt-6 mb-8 max-w-2xl text-sm text-muted">
          A selection of brands and institutions we have partnered with on strategy, design, and
          storytelling.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {clientLogos.map((client) => (
            <div
              key={client.src}
              className="relative flex h-28 items-center justify-center rounded-xl border border-white/10 bg-white/95 px-4 py-3 md:h-32"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={200}
                height={80}
                className="max-h-16 w-auto object-contain md:max-h-[4.5rem]"
                sizes="(max-width: 768px) 45vw, 22vw"
              />
              <span className="sr-only">{client.name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Testimonials" title="Trusted by leaders building impact">
        <TestimonialsSlider items={testimonials} />
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
