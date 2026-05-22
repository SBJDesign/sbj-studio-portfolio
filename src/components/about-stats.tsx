"use client";

import { motion, useReducedMotion } from "framer-motion";
import { kpiStats } from "@/data/site-data";

export function AboutStats() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-b border-white/[0.06] bg-white/[0.02] py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 sm:px-8 lg:grid-cols-4">
        {kpiStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="card-glass-gradient relative overflow-hidden p-5 text-center md:p-6"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            whileHover={reduceMotion ? undefined : { y: -3 }}
          >
            <div
              className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-accent/15 blur-2xl"
              aria-hidden
            />
            <p className="relative text-2xl font-black tracking-tight text-gradient md:text-3xl">
              {stat.value}
            </p>
            <p className="relative mt-2 text-xs font-medium uppercase tracking-[0.14em] text-muted">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
