"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ProjectImage, ProjectSection } from "@/data/site-data";
import { Reveal } from "./reveal";

/**
 * How a row is framed: one landscape image runs full width; one portrait image is centred;
 * images of similar shape share their own ratio; mixed shapes sit in a 4:3 frame, contained.
 */
function rowLayout(row: ProjectImage[]): { wrap?: string; ratio?: string; contain?: boolean } {
  const ratios = row.map((i) => i.width / i.height);
  if (row.length === 1) {
    return ratios[0] < 1 ? { wrap: "mx-auto max-w-[560px]" } : {};
  }
  const cols = row.length > 2 ? "grid gap-3 md:grid-cols-3 md:gap-6" : "grid gap-3 md:grid-cols-2 md:gap-6";
  const min = Math.min(...ratios);
  const max = Math.max(...ratios);
  if (max / min < 1.2) return { wrap: cols, ratio: String(min) };
  return { wrap: cols, ratio: "4 / 3", contain: true };
}

/** Behance-style run of named pieces: number + name + size, then full-width frames and side-by-side pairs. */
export function CaseSections({ sections }: { sections: ProjectSection[] }) {
  const [open, setOpen] = useState<ProjectImage | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="space-y-28 md:space-y-40">
        {sections.map((section, i) => (
          <section key={section.name} aria-labelledby={`piece-${i}`}>
            <Reveal className="mb-8 grid gap-3 border-t border-white/15 pt-6 md:mb-10 md:grid-cols-[5rem_1fr_1fr] md:items-baseline">
              <span className="text-[14px] text-mute">{String(i + 1).padStart(2, "0")}</span>
              <h3 id={`piece-${i}`} className="font-serif text-[34px] leading-none md:text-[44px]">
                {section.name}
              </h3>
              <div className="space-y-1 md:text-right">
                <p className="text-[13px] uppercase tracking-[0.04em] text-white/55">{section.spec}</p>
                <p className="text-[15px] leading-snug text-white/75 md:ml-auto md:max-w-[26rem]">{section.note}</p>
              </div>
            </Reveal>

            <div className="space-y-3 md:space-y-6">
              {section.rows.map((row, r) => {
                const layout = rowLayout(row);
                return (
                  <div key={r} className={layout.wrap}>
                    {row.map((img) => (
                      <Reveal key={img.src}>
                        <button
                          type="button"
                          onClick={() => !img.video && setOpen(img)}
                          className={`relative block w-full cursor-zoom-in overflow-hidden bg-ink-soft`}
                          style={layout.ratio ? { aspectRatio: layout.ratio } : undefined}
                          aria-label={`Enlarge: ${img.alt}`}
                        >
                          {img.video ? (
                            <video
                              src={img.video}
                              poster={img.src}
                              autoPlay
                              muted
                              loop
                              playsInline
                              aria-label={img.alt}
                              className={layout.ratio ? "absolute inset-0 h-full w-full object-cover" : "h-auto w-full"}
                            />
                          ) : (
                          <Image
                            src={img.src}
                            alt={img.alt}
                            width={img.width}
                            height={img.height}
                            sizes={row.length > 2 ? "(min-width: 768px) 33vw, 100vw" : row.length > 1 ? "(min-width: 768px) 50vw, 100vw" : "100vw"}
                            className={
                              !layout.ratio
                                ? "h-auto w-full"
                                : layout.contain
                                  ? "absolute inset-0 h-full w-full object-contain p-4 md:p-8"
                                  : "absolute inset-0 h-full w-full object-cover"
                            }
                          />
                          )}
                        </button>
                      </Reveal>
                    ))}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[200] flex cursor-zoom-out items-center justify-center overflow-auto bg-black/95 p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label={open.alt}
          >
            <button
              type="button"
              className="nav-link fixed right-5 top-6 z-10 text-white"
              onClick={() => setOpen(null)}
            >
              Close
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={open.src}
              alt={open.alt}
              className={
                open.width / open.height > 3
                  ? "h-auto max-w-none"
                  : "max-h-[90vh] max-w-full object-contain"
              }
              style={open.width / open.height > 3 ? { width: "min(250vw, 4000px)" } : undefined}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
