"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { projectVisuals, projects } from "@/data/site-data";

export function PortfolioPreviewGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={reduceMotion ? undefined : { y: -4 }}
          >
            <Link
              href={`/portfolio/${project.slug}`}
              className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08]"
            >
              {project.coverImage ? (
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${projectVisuals[index % projectVisuals.length]}`}
                />
              )}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(0,0,0,0.85)_100%)]" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 transition duration-300 group-hover:bg-black/20">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {project.category}
                </p>
                <p className="mt-1 font-bold text-white">{project.title}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="inline-flex translate-y-2 items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 group-hover:translate-y-0">
                  See project <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-10 text-center"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Link href="/portfolio" className="btn-secondary">
          View all projects
        </Link>
      </motion.div>
    </>
  );
}
