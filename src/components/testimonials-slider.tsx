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
    <div className="card-dark !border-white/[0.12] !p-8 md:!p-10">
      <AnimatePresence mode="wait">
        <motion.blockquote
          key={items[index].name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <p className="text-lg font-medium leading-relaxed text-text/95 md:text-xl md:leading-relaxed">
            “{items[index].quote}”
          </p>
          <footer className="border-t border-white/10 pt-5">
            <p className="font-bold text-text">{items[index].name}</p>
            <p className="mt-1 text-sm text-muted">{items[index].role}</p>
          </footer>
        </motion.blockquote>
      </AnimatePresence>
      <div className="mt-6 flex items-center gap-2">
        {items.map((item, dotIndex) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setIndex(dotIndex)}
            aria-label={`Show testimonial ${dotIndex + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              dotIndex === index ? "w-8 bg-accent" : "w-2.5 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
