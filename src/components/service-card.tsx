"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  icon: string;
  value?: string;
  deliverables?: string[];
  detailed?: boolean;
};

export function ServiceCard({
  title,
  description,
  icon,
  value,
  deliverables,
  detailed = false
}: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="card-glass-gradient group flex h-full flex-col p-6 md:p-7"
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div
        className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-accent/20 blur-3xl opacity-50 transition duration-500 group-hover:opacity-90"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-12 -left-12 h-28 w-28 rounded-full bg-accent/10 blur-3xl opacity-40 transition duration-500 group-hover:opacity-75"
        aria-hidden
      />

      <div className="relative flex h-full flex-col">
        <motion.div
          className="icon-chip"
          aria-hidden
          whileHover={reduceMotion ? undefined : { scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.div>
        <h3 className="mt-5 text-lg font-bold tracking-tight text-text md:text-xl">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-base">{description}</p>

        {detailed && value ? (
          <p className="mt-4 text-sm leading-relaxed text-text/90">
            <span className="font-semibold text-accent">Value:</span> {value}
          </p>
        ) : null}

        {detailed && deliverables?.length ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {deliverables.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-muted transition group-hover:border-accent/25 group-hover:text-text md:text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        {!detailed ? (
          <Link href="/services" className="arrow-chip mt-6" aria-label={`Learn more about ${title}`}>
            →
          </Link>
        ) : null}
      </div>
    </motion.article>
  );
}
