"use client";

import Link from "next/link";
import { AnimatedBlock } from "@/components/animated-block";
import { BrandIllustration } from "@/components/brand-illustration";
import { FloatingSparkle } from "@/components/floating-sparkle";

export function HomeHero() {
  return (
    <section className="page-hero relative overflow-hidden border-b border-white/[0.06] py-10 sm:py-16 md:py-24 lg:py-28">
      <MotionDecor />

      <div className="page-hero-grid relative mx-auto max-w-6xl px-4 sm:px-8">
        <div className="order-1 lg:order-none">
          <AnimatedBlock>
            <HeroCopy />
          </AnimatedBlock>
        </div>

        <div className="order-2 lg:order-none">
          <AnimatedBlock delay={0.12}>
            <HeroIllustrationPanel />
          </AnimatedBlock>
        </div>
      </div>
    </section>
  );
}

function HeroCopy() {
  return (
    <div className="flex flex-col justify-center text-center lg:flex lg:h-full lg:min-h-[540px] lg:text-left">
      <p className="section-eyebrow">SBJ Studio</p>
      <h1 className="mt-3 text-balance text-3xl font-black leading-[1.1] tracking-tight text-text sm:mt-5 sm:text-4xl sm:leading-[1.08] md:text-5xl md:leading-[1.05] lg:text-6xl xl:text-7xl">
        Building Brands That Drive <span className="text-gradient-coral">Growth</span>.
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:mt-6 md:text-lg lg:mx-0">
        SBJ Studio turns strategy into premium design, media, and digital experiences that help
        ambitious teams win attention and convert it into results.
      </p>

      <div className="mt-6 flex w-full flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
        <Link href="/contact" className="btn-primary w-full px-6 py-3 sm:w-auto">
          Book a strategy call
        </Link>
        <Link href="/portfolio" className="btn-secondary w-full px-6 py-3 sm:w-auto">
          View work <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-muted sm:mt-8 lg:justify-start">
        <div className="flex -space-x-2">
          {["A", "T", "B", "S"].map((initial, index) => (
            <AnimatedBlock key={initial} delay={0.15 + index * 0.06}>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-accent to-teal-300 text-[10px] font-bold text-[#0C0C1E] sm:h-9 sm:w-9 sm:text-xs">
                {initial}
              </span>
            </AnimatedBlock>
          ))}
        </div>
        <AnimatedBlock delay={0.4}>
          <span>
            <strong className="text-text">120+</strong> projects delivered
          </span>
        </AnimatedBlock>
      </div>
    </div>
  );
}

function HeroIllustrationPanel() {
  return (
    <div className="page-hero-illustration">
      <BrandIllustration className="w-full lg:h-full lg:min-h-[540px]" />
    </div>
  );
}

function MotionDecor() {
  return (
    <>
      <div className="page-hero-mesh pointer-events-none absolute inset-0" aria-hidden />
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-accent/12 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/8 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-8 top-1/3 h-48 w-48 rounded-full bg-coral/12 blur-[90px]"
        aria-hidden
      />
      <div className="pointer-events-none absolute left-[8%] top-24 text-accent/70">
        <FloatingSparkle className="h-4 w-4" delay={0} />
      </div>
      <div className="pointer-events-none absolute right-[10%] top-32 text-accent/80">
        <FloatingSparkle className="h-3 w-3" delay={1.4} />
      </div>
    </>
  );
}
