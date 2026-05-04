"use client";

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
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`rounded-full border px-4 py-2.5 text-sm font-medium transition ${
              active === filter
                ? "border-accent bg-accent text-[#0C0C1E] shadow-sm"
                : "border-white/15 bg-white/[0.04] text-muted hover:border-accent/40 hover:text-text"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="card-dark flex flex-col"
          >
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              {project.category}
            </p>
            <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
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
