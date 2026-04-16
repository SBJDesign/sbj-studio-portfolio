"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Item = { name: string; role: string; quote: string };

export function TestimonialsSlider({ items }: { items: Item[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="rounded-2xl border border-white/10 bg-surface p-8 shadow-glow">
      <AnimatePresence mode="wait">
        <motion.blockquote
          key={items[index].name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <p className="text-lg leading-relaxed text-text md:text-xl">“{items[index].quote}”</p>
          <footer>
            <p className="font-bold">{items[index].name}</p>
            <p className="text-sm text-muted">{items[index].role}</p>
          </footer>
        </motion.blockquote>
      </AnimatePresence>
    </div>
  );
}
