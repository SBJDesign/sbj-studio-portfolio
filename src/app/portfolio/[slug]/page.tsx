import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
    <Section eyebrow="Case Study" title={project.title} description={project.summary}>
      <article className="card-dark space-y-10 !p-8 md:!p-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">{project.category}</p>
        <div>
          <h3 className="text-lg font-bold text-text">Problem</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{project.problem}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-text">Approach</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{project.approach}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-text">Solution</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{project.solution}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-text">Outcome</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{project.outcome}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.outcomeMetrics.map((metric) => (
              <li
                key={metric}
                className="rounded-full border border-accent/35 bg-accent/10 px-3 py-1.5 text-xs font-medium text-text md:text-sm"
              >
                {metric}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Section>
  );
}
