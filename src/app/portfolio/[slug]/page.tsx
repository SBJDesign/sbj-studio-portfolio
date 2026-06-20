import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedBlock } from "@/components/animated-block";
import { CtaBanner } from "@/components/cta-banner";
import { ProjectGallery } from "@/components/project-gallery";
import { projects } from "@/data/site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    return { title: "Case Study | SBJ Studio" };
  }
  return {
    title: `${project.title} | SBJ Studio`,
    description: project.summary
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const hasGallery = Boolean(project.images?.length);
  const coverSrc = project.coverImage ?? project.images?.[0]?.src;
  const galleryImages = hasGallery
    ? project.coverImage
      ? project.images!.filter((img) => img.src !== project.coverImage)
      : project.images!
    : [];

  return (
    <>
      <article className="project-case">
        <header className="border-b border-white/[0.06] bg-background px-4 py-12 sm:px-8 sm:py-16 md:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              {project.category}
            </p>
            <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-text sm:text-4xl md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">{project.summary}</p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <p className="text-muted">
                Client{" "}
                <span className="font-semibold text-text">{project.client}</span>
              </p>
              {project.websiteUrl ? (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent transition hover:brightness-125"
                >
                  View live project ↗
                </a>
              ) : null}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {coverSrc ? (
          <div className="w-full bg-[#f0f0f2]">
            <div className="mx-auto max-w-6xl">
              <Image
                src={coverSrc}
                alt={project.title}
                width={project.images?.[0]?.width ?? 1200}
                height={project.images?.[0]?.height ?? 800}
                className="h-auto w-full"
                priority
                unoptimized
                sizes="100vw"
              />
            </div>
          </div>
        ) : null}

        {galleryImages.length > 0 ? (
          <div className="w-full bg-[#f0f0f2]">
            <div className="mx-auto max-w-6xl">
              <ProjectGallery images={galleryImages} />
            </div>
          </div>
        ) : null}

        <div className="border-b border-white/[0.06] bg-background px-4 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-12">
            <AnimatedBlock>
              <div className="space-y-10">
                {[
                  { label: "The challenge", text: project.problem },
                  { label: "Our approach", text: project.approach },
                  { label: "The solution", text: project.solution },
                  { label: "The outcome", text: project.outcome }
                ].map((block) => (
                  <div key={block.label}>
                    <h2 className="text-lg font-bold text-text md:text-xl">{block.label}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted md:text-base md:leading-relaxed">
                      {block.text}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay={0.08}>
              <div>
                <h2 className="text-lg font-bold text-text md:text-xl">Results</h2>
                <ul className="mt-4 space-y-2">
                  {project.outcomeMetrics.map((metric) => (
                    <li
                      key={metric}
                      className="flex items-start gap-3 text-sm text-muted md:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" aria-hidden />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedBlock>

            <div className="flex flex-wrap gap-4 border-t border-white/[0.06] pt-10">
              <Link href="/portfolio" className="btn-secondary">
                ← All projects
              </Link>
              <Link href="/contact" className="btn-primary">
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </article>

      <CtaBanner />
    </>
  );
}
