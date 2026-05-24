"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Project, projectVisuals } from "@/data/site-data";
import { cn } from "@/lib/cn";

const filters = ["All", "Branding", "Design", "Media & Content", "Strategy"] as const;

function gridItemClass(index: number, total: number) {
  const lgRemainder = total % 3;
  const smRemainder = total % 2;

  return cn(
    "lg:col-span-2",
    lgRemainder === 1 && index === total - 1 && "lg:col-start-3",
    lgRemainder === 2 && index === total - 2 && "lg:col-start-2",
    lgRemainder === 2 && index === total - 1 && "lg:col-start-4",
    smRemainder === 1 && index === total - 1 && "sm:col-span-2 sm:max-w-md sm:justify-self-center sm:w-full"
  );
}

export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((item) => item.category === active)),
    [active, projects]
  );

  return (
    <div className="space-y-8">
      <div className="-mx-1 flex snap-x snap-mandatory gap-2 overflow-x-auto px-1 pb-2 sm:flex-wrap sm:overflow-visible sm:pb-0">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`shrink-0 snap-start rounded-full border px-4 py-2.5 text-sm font-medium transition sm:shrink ${
              active === filter
                ? "border-accent bg-accent text-[#0C0C1E] shadow-glow"
                : "border-white/15 bg-white/[0.04] text-muted hover:border-accent/40 hover:text-text"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-6">
        {filtered.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className={cn(
              "card-glass-gradient card-accent-top group flex h-full flex-col overflow-hidden",
              gridItemClass(index, filtered.length)
            )}
          >
            <div className="relative aspect-[5/3] w-full shrink-0 overflow-hidden border-b border-white/[0.06]">
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
                <>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${projectVisuals[index % projectVisuals.length]}`}
                  />
                  <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_20%,rgba(54,201,194,0.35),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(94,224,219,0.2),transparent_40%)]" />
                </>
              )}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(8,8,18,0.92)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
                  {project.category}
                </p>
                <h3 className="mt-1 text-base font-bold leading-snug tracking-tight text-text sm:text-lg">
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <p className="flex-1 text-sm leading-relaxed text-muted line-clamp-3">{project.summary}</p>
              <Link
                href={`/portfolio/${project.slug}`}
                className="btn-ghost mt-5 w-fit transition group-hover:border-accent/50 group-hover:text-accent"
              >
                View case study
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
