import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  tone?: "default" | "muted";
};

export function Section({ eyebrow, title, description, children, tone = "default" }: SectionProps) {
  return (
    <section
      className={cn(
        "border-b border-white/[0.06] py-16 md:py-24",
        tone === "muted" ? "bg-surface/40" : "bg-transparent"
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <div className="mb-12 max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-black leading-[1.08] tracking-tight text-text md:text-5xl md:leading-[1.05]">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{description}</p>
          ) : null}
          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-12 bg-accent/70" />
            <span className="h-px flex-1 max-w-[min(100%,12rem)] bg-gradient-to-r from-accent/40 to-transparent" />
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
