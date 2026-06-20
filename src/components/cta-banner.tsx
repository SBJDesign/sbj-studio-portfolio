"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  title?: string;
  description?: string;
  tagline?: string;
};

export function CtaBanner({
  title = "Every day you wait, someone else takes your customer.",
  description = "Partner with SBJ Studio for premium strategy, design, and storytelling that moves people and performance.",
  tagline
}: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          className="card-glass-gradient card-accent-top relative overflow-hidden p-10 text-center md:p-14"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 animate-glow-pulse rounded-full bg-accent/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 animate-glow-pulse rounded-full bg-coral/12 blur-3xl [animation-delay:1.5s]"
            aria-hidden
          />
          <div className="relative">
            <h2 className="text-3xl font-black tracking-tight text-text md:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">{description}</p>
            {tagline ? (
              <p className="mx-auto mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {tagline}
              </p>
            ) : null}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary ring-1 ring-coral/20">
                Start a project
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                See our work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
