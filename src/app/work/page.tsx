import type { Metadata } from "next";
import Image from "next/image";
import { Film } from "@/components/film";
import Link from "next/link";
import { GetInTouch } from "@/components/home-sections";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Work | SBJ Studio",
  description: "Case studies from SBJ Studio, a brand, design and media studio in Kano."
};

export default function WorkPage() {
  return (
    <div className="bg-ink text-white">
      <section className="px-6 pb-20 pt-48 text-center md:pt-56">
        <Reveal>
          <p className="text-[14px] text-mute">Case Studies</p>
          <p className="mx-auto mt-4 max-w-[34rem] font-serif text-[28px] leading-[1.1] md:text-[32px]">
            A curated look at how we help businesses, institutions and events turn big ideas into brands people
            remember.
          </p>
        </Reveal>
      </section>
      <div className="border-t border-white/20" />

      <section className="mx-auto grid max-w-[1180px] gap-x-12 gap-y-20 px-6 py-24 md:grid-cols-2 md:px-10">
        {projects.map((project) => (
          <Reveal key={project.slug}>
            <Link href={`/work/${project.slug}`} className="group block">
              {project.teaser ? (
                <Film src={project.teaser} poster={project.card} label={project.title} className="relative aspect-video" />
              ) : (
                <div className="relative aspect-video overflow-hidden bg-ink-soft">
                  <Image
                    src={project.card}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 540px, 100vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              )}
              <p className="mt-5 font-serif text-[32px] leading-none">{project.title}</p>
              <p className="mt-2 text-[15px] text-white/60">{project.tagline}</p>
            </Link>
          </Reveal>
        ))}
      </section>

      <GetInTouch />
    </div>
  );
}
