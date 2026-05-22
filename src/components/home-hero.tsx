"use client";

import Link from "next/link";
import { AnimatedBlock } from "@/components/animated-block";
import { PageHero } from "@/components/page-hero";

export function HomeHero() {
  return (
    <PageHero
      eyebrow="SBJ Studio"
      title={
        <>
          Building Brands That Drive <span className="text-gradient">Growth</span>.
        </>
      }
      description="SBJ Studio turns strategy into premium design, media, and digital experiences that help ambitious teams win attention and convert it into results."
      showSparkles
    >
      <div className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row">
        <Link href="/contact" className="btn-primary px-6 py-3">
          Book a strategy call
        </Link>
        <Link href="/portfolio" className="btn-secondary px-6 py-3">
          View work <span aria-hidden>→</span>
        </Link>
      </div>
      <div className="mt-8 flex items-center justify-center gap-3 text-sm text-muted">
        <div className="flex -space-x-2">
          {["A", "T", "B", "S"].map((initial, index) => (
            <AnimatedBlock key={initial} delay={0.15 + index * 0.06}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-accent to-teal-300 text-xs font-bold text-[#0C0C1E]">
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
    </PageHero>
  );
}
