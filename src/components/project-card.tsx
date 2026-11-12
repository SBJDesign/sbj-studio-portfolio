import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/site-data";

/** Image-led card: picture, serif title, small "View case study" line. Falls back to a type-only tile when a project has no images yet. */
export function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  const cover = project.coverImage ?? project.images?.[0]?.src;
  return (
    <Link href={`/work/${project.slug}`} className="group block text-white">
      <div className="relative aspect-[399/245] overflow-hidden rounded-xl bg-ink-soft">
        {cover ? (
          <Image
            src={cover}
            alt={project.title}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full items-end bg-gradient-to-br from-ink-soft to-[#0d2b2a] p-6">
            <span className="text-[13px] uppercase tracking-[0.04em] text-white/50">{project.category}</span>
          </div>
        )}
      </div>
      <p className="display-serif mt-5 text-[40px] not-italic leading-none">{project.title}</p>
      <p className="mt-2 text-base text-white/80">
        <span className="link-underline">View case study</span>
      </p>
    </Link>
  );
}
