"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectImage } from "@/data/site-data";

type Props = {
  images: ProjectImage[];
};

export function ProjectGallery({ images }: Props) {
  const [lightbox, setLightbox] = useState<ProjectImage | null>(null);

  return (
    <>
      <div className="space-y-3 sm:space-y-4">
        {images.map((image, index) => (
          <motion.figure
            key={image.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="overflow-hidden bg-[#f0f0f2]"
          >
            <button
              type="button"
              onClick={() => setLightbox(image)}
              className="block w-full cursor-zoom-in text-left"
              aria-label={`View ${image.caption}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="mx-auto block h-auto w-full max-w-full"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </button>
            {image.caption ? (
              <figcaption className="border-t border-black/[0.06] bg-[#f0f0f2] px-4 py-3 text-center text-xs text-slate-500 sm:px-6 sm:text-sm">
                {image.caption}
              </figcaption>
            ) : null}
          </motion.figure>
        ))}
      </div>

      <AnimatePresence>
        {lightbox ? (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg text-white transition hover:bg-white/20 sm:right-8 sm:top-8"
              onClick={() => setLightbox(null)}
              aria-label="Close preview"
            >
              ×
            </button>
            <motion.img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[90vh] max-w-full object-contain"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
