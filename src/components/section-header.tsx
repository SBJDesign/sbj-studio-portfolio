"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { Sparkle } from "@/components/sparkle";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  showSparkle?: boolean;
};

export function SectionHeader({ eyebrow, title, description, centered, showSparkle }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "mb-10 space-y-3 sm:mb-14",
        centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow ? (
        <motion.p
          className="section-eyebrow"
          initial={reduceMotion ? false : { opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <h2
        className={cn(
          "text-2xl font-black leading-tight tracking-tight text-text sm:text-3xl md:text-5xl md:leading-[1.08]",
          centered && showSparkle
            ? "flex flex-col items-center gap-2 sm:flex-row sm:justify-center"
            : centered
              ? "text-center"
              : ""
        )}
      >
        <span>{title}</span>
        {showSparkle ? (
          <motion.span
            initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.15 }}
          >
            <Sparkle className="h-4 w-4 shrink-0 text-accent sm:h-5 sm:w-5" />
          </motion.span>
        ) : null}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-sm leading-relaxed text-muted sm:text-base md:text-lg",
            centered && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
