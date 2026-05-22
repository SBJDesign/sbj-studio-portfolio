"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/data/site-data";

const filters = ["All", "Branding", "Design", "Media & Content", "Strategy"] as const;

export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((item) => item.category === active)),
    [active, projects]
  );

  return (
    <div className="space-y-8">
      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 sm:flex-wrap sm:overflow-visible sm:pb-0">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium transition sm:shrink ${
              active === filter
                ? "border-accent bg-accent text-[#0C0C1E] shadow-glow"
                : "border-white/15 bg-white/[0.04] text-muted hover:border-accent/40 hover:text-text"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        {filtered.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="card-glass-gradient card-accent-top group flex flex-col overflow-hidden"
          >
            {project.coverImage ? (
              <div className="relative -mx-6 -mt-6 mb-5 aspect-[4/3] overflow-hidden border-b border-white/[0.06] sm:-mx-6">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ) : null}
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              {project.category}
            </p>
            <h3 className="text-lg font-bold tracking-tight sm:text-xl">{project.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
            <Link href={`/portfolio/${project.slug}`} className="btn-ghost mt-6 w-fit">
              View case study
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
