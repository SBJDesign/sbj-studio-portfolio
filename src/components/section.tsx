import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { SectionHeader } from "@/components/section-header";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  tone?: "default" | "muted";
  align?: "left" | "center";
  showSparkle?: boolean;
  decor?: "none" | "mesh" | "grid";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  tone = "default",
  align = "left",
  showSparkle = false,
  decor = "none"
}: SectionProps) {
  const centered = align === "center";

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden border-b border-white/[0.06] py-14 sm:py-20 md:py-28",
        tone === "muted" ? "bg-white/[0.02]" : "bg-transparent"
      )}
    >
      {decor === "mesh" || decor === "grid" ? (
        <div className="page-section-mesh pointer-events-none absolute inset-0" aria-hidden />
      ) : null}
      {decor === "grid" ? (
        <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-25" aria-hidden />
      ) : null}
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-8">
        {title ? (
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
            centered={centered}
            showSparkle={showSparkle}
          />
        ) : null}
        {children}
      </div>
    </section>
  );
}
