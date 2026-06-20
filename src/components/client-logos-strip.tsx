"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { clientLogos } from "@/data/site-data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
};

export function ClientLogosStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] py-14 md:py-16">
      <div className="accent-divider absolute left-0 right-0 top-0" aria-hidden />
      <div className="page-section-mesh pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <motion.p
          className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted/80"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Trusted by growing businesses
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          variants={reduceMotion ? undefined : container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.name}
              variants={reduceMotion ? undefined : item}
              whileHover={reduceMotion ? undefined : { y: -3, transition: { duration: 0.2 } }}
              className={`logo-tile ${index === 2 ? "logo-tile-active" : ""}`}
            >
              <Image
                src={client.src}
                alt={client.name}
                width={120}
                height={120}
                className={
                  "imageClassName" in client && client.imageClassName
                    ? client.imageClassName
                    : "h-8 w-auto object-contain opacity-90"
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
