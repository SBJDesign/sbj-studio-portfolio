import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Work | SBJ Studio",
  description: "Selected brand, design, digital and media projects by SBJ Studio."
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        lead="Brands, websites, campaigns and public-sector communication we have shaped with our clients."
        title="Work"
      />
      <section className="bg-ink px-5 pb-32 md:px-10">
        <div className="mx-auto grid max-w-[1280px] gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.08} className={i % 3 === 1 ? "lg:mt-24" : ""}>
              <ProjectCard project={project} priority={i < 3} />
              <p className="mt-3 text-[13px] uppercase tracking-[0.04em] text-white/45">
                {project.category} · {project.client}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
