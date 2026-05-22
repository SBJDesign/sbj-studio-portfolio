"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { FloatingSparkle } from "@/components/floating-sparkle";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  subtitle?: string;
  align?: "center" | "left";
  showLogo?: boolean;
  showSparkles?: boolean;
  compact?: boolean;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  subtitle,
  align = "center",
  showLogo = false,
  showSparkles = true,
  compact = false,
  children
}: Props) {
  const centered = align === "center";

  return (
    <section
      className={cn(
        "page-hero relative overflow-hidden border-b border-white/[0.06]",
        compact ? "py-14 md:py-20" : "py-20 md:py-28"
      )}
    >
      <div className="page-hero-mesh pointer-events-none absolute inset-0" aria-hidden />
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-35" aria-hidden />
      <div
        className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-accent/12 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/8 blur-[120px]"
        aria-hidden
      />

      {showSparkles ? (
        <>
          <div className="pointer-events-none absolute left-[8%] top-24 text-accent/70">
            <FloatingSparkle className="h-4 w-4" delay={0} />
          </div>
          <div className="pointer-events-none absolute right-[10%] top-32 text-accent/80">
            <FloatingSparkle className="h-3 w-3" delay={1.4} />
          </div>
        </>
      ) : null}

      <div
        className={cn(
          "relative mx-auto max-w-6xl px-4 sm:px-8",
          centered ? "max-w-4xl text-center" : "max-w-3xl"
        )}
      >
        <p className="section-eyebrow">{eyebrow}</p>

        {showLogo ? (
          <div
            className={cn(
              "mt-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 p-3 shadow-glow",
              centered && "mx-auto"
            )}
          >
            <Image
              src="/favicon.png"
              alt=""
              width={72}
              height={72}
              className="h-full w-full object-contain"
              unoptimized
              priority
            />
          </div>
        ) : null}

        <h1
          className={cn(
            "font-black leading-[1.08] tracking-tight text-text",
            showLogo ? "mt-8" : "mt-5",
            compact ? "text-3xl md:text-5xl" : "text-4xl md:text-6xl md:leading-[1.05] lg:text-7xl"
          )}
        >
          {title}
        </h1>

        {description ? (
          <p
            className={cn(
              "mt-5 text-base leading-relaxed text-muted md:text-lg",
              centered && "mx-auto max-w-2xl"
            )}
          >
            {description}
          </p>
        ) : null}

        {subtitle ? (
          <>
            <div className={cn("accent-divider mt-8", centered && "mx-auto max-w-md")} />
            <p
              className={cn(
                "mt-6 text-sm leading-relaxed text-muted/90 md:text-base",
                centered && "mx-auto max-w-3xl"
              )}
            >
              {subtitle}
            </p>
          </>
        ) : null}

        {children ? <div className={cn("mt-10", centered && "flex flex-col items-center")}>{children}</div> : null}
      </div>
    </section>
  );
}
