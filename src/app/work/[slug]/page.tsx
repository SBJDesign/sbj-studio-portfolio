import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectGallery } from "@/components/project-gallery";
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
    ? { title: `${project.title} | SBJ Studio`, description: project.summary }
    : { title: "Case study | SBJ Studio" };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const cover = project.coverImage ?? project.images?.[0]?.src;
  const coverMeta = project.images?.find((img) => img.src === cover);
  const gallery = (project.images ?? []).filter((img) => img.src !== cover);

  const story = [
    { label: "The challenge", text: project.problem },
    { label: "Our approach", text: project.approach },
    { label: "The solution", text: project.solution },
    { label: "The outcome", text: project.outcome }
  ];

  return (
    <article>
      <header className="bg-ink px-5 pb-16 pt-40 text-white md:px-10 md:pt-48">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <p className="text-[13px] uppercase tracking-[0.04em] text-white/55">{project.category}</p>
            <h1 className="display-serif mt-6" style={{ fontSize: "clamp(3.25rem, 9vw, 8.5rem)" }}>
              {project.title}
            </h1>
            <div className="mt-12 grid gap-8 border-t border-white/15 pt-8 text-[15px] sm:grid-cols-3">
              <div>
                <p className="text-white/45">Client</p>
                <p className="mt-1">{project.client}</p>
              </div>
              <div>
                <p className="text-white/45">Services</p>
                <p className="mt-1">{project.tags.join(", ")}</p>
              </div>
              {project.websiteUrl ? (
                <div>
                  <p className="text-white/45">Live</p>
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline mt-1 inline-block"
                  >
                    {project.websiteUrl.replace(/^https?:\/\/|\/$/g, "")} ↗
                  </a>
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </header>

      {cover ? (
        <div className="bg-ink px-4 pb-20 md:px-10">
          <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[1.5rem] bg-ink-soft">
            <Image
              src={cover}
              alt={project.title}
              width={coverMeta?.width ?? 1200}
              height={coverMeta?.height ?? 800}
              priority
              sizes="(min-width: 1280px) 1280px, 100vw"
              className={
                (coverMeta?.height ?? 0) > (coverMeta?.width ?? 1)
                  ? "mx-auto h-auto max-h-[85vh] w-auto"
                  : "h-auto w-full"
              }
            />
          </div>
        </div>
      ) : null}

      <section className="bg-paper px-5 py-24 text-ink md:px-10 md:py-36">
        <div className="mx-auto max-w-[1280px] space-y-20">
          <Reveal>
            <p className="max-w-[52rem] text-[26px] leading-tight md:text-[34px]">{project.summary}</p>
          </Reveal>
          {story.map((block) => (
            <Reveal key={block.label} className="grid gap-4 border-t border-ink/15 pt-8 md:grid-cols-[1fr_1.4fr]">
              <h2 className="display-serif text-[40px]">{block.label}</h2>
              <p className="text-lg leading-relaxed text-ink/80">{block.text}</p>
            </Reveal>
          ))}
          <Reveal className="grid gap-4 border-t border-ink/15 pt-8 md:grid-cols-[1fr_1.4fr]">
            <h2 className="display-serif text-[40px]">Results</h2>
            <ul className="space-y-2 text-lg">
              {project.outcomeMetrics.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {gallery.length ? (
        <section className="bg-paper px-4 pb-24 md:px-10">
          <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[1.5rem]">
            <ProjectGallery images={gallery} />
          </div>
        </section>
      ) : null}

      {next.slug !== project.slug ? (
        <Link href={`/work/${next.slug}`} className="group block bg-ink px-5 py-28 text-center text-white md:px-10">
          <p className="text-[14px] text-mute">Next project</p>
          <p
            className="display-serif mt-4 transition-colors group-hover:text-accent"
            style={{ fontSize: "clamp(2.75rem, 8vw, 7rem)" }}
          >
            {next.title}
          </p>
        </Link>
      ) : null}
    </article>
  );
}
