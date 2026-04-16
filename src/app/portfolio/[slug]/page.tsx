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
      <article className="space-y-8 rounded-2xl border border-white/10 bg-surface p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">{project.category}</p>
        <div>
          <h3 className="text-xl font-bold">Problem</h3>
          <p className="mt-2 text-muted">{project.problem}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Approach</h3>
          <p className="mt-2 text-muted">{project.approach}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Solution</h3>
          <p className="mt-2 text-muted">{project.solution}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Outcome</h3>
          <p className="mt-2 text-muted">{project.outcome}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.outcomeMetrics.map((metric) => (
              <li key={metric} className="rounded-full border border-accent/40 px-3 py-1 text-sm">
                {metric}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Section>
  );
}
