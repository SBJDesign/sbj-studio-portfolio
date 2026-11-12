import type { Metadata } from "next";
import { Film } from "@/components/film";
import { notFound } from "next/navigation";
import { CaseSections } from "@/components/case-sections";
import { GetInTouch } from "@/components/home-sections";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/site-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return project
    ? { title: `${project.title} Case Study | SBJ Studio`, description: project.summary }
    : { title: "Case study | SBJ Studio" };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="bg-ink text-white">
      {/* Title */}
      <header className="px-6 pb-12 pt-40 md:px-12 md:pt-52">
        <Reveal>
          <h1 className="font-serif leading-[0.95] tracking-[-0.03em]" style={{ fontSize: "clamp(3.5rem, 8vw, 6.5rem)" }}>
            {project.title}
          </h1>
        </Reveal>
      </header>
      <div className="mx-6 border-t border-white/20 md:mx-6" />

      {/* Hero frame */}
      <div className="px-6 pt-6">
        <div
          className={
            project.films.length > 1
              ? "mx-auto grid max-w-[1000px] gap-6 md:grid-cols-2"
              : project.films[0]?.portrait
                ? "mx-auto max-w-[480px]"
                : undefined
          }
        >
          {project.films.map((film) => (
            <figure key={film.src}>
              <Film
                src={film.src}
                poster={film.poster}
                label={film.label}
                withSound
                className={`relative w-full ${film.portrait ? "aspect-[9/16]" : "aspect-video"}`}
              />
              <figcaption className="mt-3 text-[13px] text-white/50">{film.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* About */}
      <section className="px-6 pb-24 pt-10 md:px-12 md:pb-36">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,44rem)_1fr]">
          <Reveal>
            <p className="text-base font-medium">{project.tagline}</p>
            <h2 className="mt-6 font-serif text-[48px] leading-none">About Project</h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-white/80">
              {project.about.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-6 text-[15px] lg:mt-[5.5rem] lg:grid-cols-1">
              {project.facts.map(([label, value]) => (
                <div key={label} className="border-t border-white/15 pt-3">
                  <dt className="text-white/45">{label}</dt>
                  <dd className="mt-1">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* The pieces, named and laid out in sequence */}
      <section className="px-6 pb-32">
        <Reveal className="mb-16 px-0 md:px-6">
          <p className="text-[14px] text-mute">The pieces</p>
          <h2 className="mt-3 font-serif text-[48px] leading-none">From gate to stage</h2>
        </Reveal>
        <CaseSections sections={project.sections} />
      </section>

      <GetInTouch />
    </article>
  );
}
