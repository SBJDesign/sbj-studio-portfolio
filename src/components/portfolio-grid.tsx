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
            className={`rounded-full border px-4 py-2 text-sm transition ${
              active === filter
                ? "border-accent bg-accent text-black"
                : "border-white/20 text-text hover:border-accent/70"
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
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-white/10 bg-surface/90 p-6 transition hover:border-accent/60"
          >
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-accent">{project.category}</p>
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-3 text-sm text-muted">{project.summary}</p>
            <Link
              href={`/portfolio/${project.slug}`}
              className="mt-5 inline-flex rounded-full border border-accent/50 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-black"
            >
              View case study
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
