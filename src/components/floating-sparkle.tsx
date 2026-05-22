"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkle } from "@/components/sparkle";

type Props = {
  className?: string;
  delay?: number;
};

export function FloatingSparkle({ className = "", delay = 0 }: Props) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <Sparkle className={className} />;
  }

  return (
    <motion.div
      aria-hidden
      animate={{ y: [0, -7, 0], opacity: [0.55, 1, 0.55] }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      <Sparkle className={className} />
    </motion.div>
  );
}
