import { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ eyebrow, title, description, children }: SectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-12 max-w-3xl">
        {eyebrow ? (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-black leading-tight md:text-5xl">{title}</h2>
        {description ? <p className="mt-4 text-lg text-muted">{description}</p> : null}
        <div className="mt-6 h-px w-24 bg-accent/60" />
      </div>
      {children}
    </section>
  );
}
