import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedBlock } from "@/components/animated-block";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { ProjectGallery } from "@/components/project-gallery";
import { Section } from "@/components/section";
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

  return (
    <>
      <PageHero
        eyebrow={`Case Study · ${project.category}`}
        title={project.title}
        description={project.summary}
        align="left"
        showSparkles
        compact
      >
        <p className="text-sm text-muted">
          Client: <span className="font-medium text-text">{project.client}</span>
        </p>
      </PageHero>

      <Section decor="mesh">
        <article className="space-y-10">
          {project.images?.length ? (
            <AnimatedBlock>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-text">Project visuals</h3>
                <ProjectGallery images={project.images} projectTitle={project.title} />
              </div>
            </AnimatedBlock>
          ) : project.coverImage ? (
            <AnimatedBlock>
              <div className="overflow-hidden rounded-2xl border border-white/[0.08] shadow-card">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  width={1200}
                  height={1600}
                  className="h-auto w-full"
                  priority
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            </AnimatedBlock>
          ) : null}

          <AnimatedBlock delay={0.08}>
            <div className="card-glass-gradient card-accent-top space-y-10 !p-8 md:!p-10">
              {[
                { label: "Problem", text: project.problem },
                { label: "Approach", text: project.approach },
                { label: "Solution", text: project.solution },
                { label: "Outcome", text: project.outcome }
              ].map((block) => (
                <div key={block.label} className="border-b border-white/[0.06] pb-8 last:border-0 last:pb-0">
                  <h3 className="text-lg font-bold text-text">{block.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{block.text}</p>
                </div>
              ))}
              <ul className="flex flex-wrap gap-2 pt-2">
                {project.outcomeMetrics.map((metric) => (
                  <li
                    key={metric}
                    className="rounded-full border border-accent/35 bg-accent/10 px-3 py-1.5 text-xs font-medium text-text md:text-sm"
                  >
                    {metric}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 pt-4">
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
          </AnimatedBlock>

          <div className="text-center">
            <Link href="/portfolio" className="btn-secondary">
              ← Back to portfolio
            </Link>
          </div>
        </article>
      </Section>

      <CtaBanner />
    </>
  );
}
