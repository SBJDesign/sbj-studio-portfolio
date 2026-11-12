"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { contact, positioning, projects, serviceGroups, studioIntro } from "@/data/site-data";
import { Film } from "./film";
import { Marquee } from "./marquee";
import { Reveal } from "./reveal";

/* ---------- 1. Hero: centred intro, giant wordmark, scaling showreel frame ---------- */
export function HomeHero() {
  const reelRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: reelRef, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0.86, 1]);

  return (
    <section className="bg-ink text-white">
      <div className="flex min-h-[100svh] flex-col justify-end">
        <div className="flex flex-1 flex-col items-center justify-center px-6 pt-28 text-center">
          <motion.p
            className="max-w-[26rem] text-[17px] leading-snug"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {studioIntro}
          </motion.p>
          <a href="#statement" aria-label="Scroll to next section" className="mt-6 text-white/70 hover:text-white">
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" aria-hidden>
              <path d="M1 1l6 6 6-6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        </div>
        <motion.h1
          className="select-none whitespace-nowrap px-3 text-center font-sans font-semibold leading-[0.78] tracking-[-0.06em]"
          style={{ fontSize: "clamp(4rem, 17.5vw, 15rem)" }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          SBJ Studio
        </motion.h1>
      </div>

      <div className="bg-ink-soft px-4 pb-16 pt-10 md:px-16 md:pb-24 md:pt-16">
        <motion.div
          ref={reelRef}
          className="relative mx-auto aspect-[16/9] max-w-[1150px] overflow-hidden rounded-2xl"
          style={{ scale }}
        >
          <Film
            src="/work/gta/gta-teaser.mp4"
            poster="/work/gta/poster.jpg"
            label="Global Tech Africa 2026 venue branding by SBJ Studio"
            className="absolute inset-0"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- 2. Positioning statements + giant serif tagline + marquee ---------- */
export function HomeStatement() {
  return (
    <section id="statement" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1280px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid gap-16 md:grid-cols-[14rem_1fr] md:gap-10">
          <div className="space-y-10 text-base leading-snug md:pt-6">
            {positioning.map((line, i) => (
              <Reveal key={line} delay={i * 0.08}>
                <p>{line}</p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <h2 className="display-serif display-xl text-center md:text-left">
              design
              <br />
              <span className="md:pl-[12%]">that drives</span>
              <br />
              <span className="md:pl-[4%]">growth</span>
            </h2>
          </Reveal>
        </div>
      </div>
      <Marquee text="design that drives growth" className="border-y border-ink/10 py-6" />
    </section>
  );
}

/* ---------- 3. Selected projects: sticky serif title with staggered frames scrolling over it ---------- */
export function SelectedProjects() {
  const [gta, ncc] = projects;
  const highlights = [
    { project: gta, src: "/work/gta/arch-mockup.jpg", label: "Welcome Arch" },
    { project: ncc, src: "/work/ncc/in-entrance-fascia.jpg", label: "Venue Entrance" },
    { project: gta, src: "/work/gta/in-photo-wall.jpg", label: "Photo Wall Gateway" },
    { project: ncc, src: "/work/ncc/announcement.jpg", label: "Campaign Key Visual" },
    { project: gta, src: "/work/gta/in-registration.jpg", label: "Registration" },
    { project: ncc, src: "/work/ncc/in-speakers-wall.jpg", label: "Speakers Wall" }
  ];
  const offsets = ["md:ml-auto md:mr-[4%]", "md:mr-auto md:ml-[4%]", "md:mx-auto", "md:ml-auto md:mr-[10%]", "md:mr-auto md:ml-[12%]", "md:ml-auto md:mr-[6%]"];

  return (
    <section className="relative bg-ink text-white">
      <div className="pointer-events-none sticky top-0 flex h-[100svh] items-center justify-center">
        <h2 className="display-serif text-center" style={{ fontSize: "clamp(4rem, 13vw, 12rem)" }}>
          Selected
          <br />
          Projects
        </h2>
      </div>

      <div className="relative z-10 -mt-[100svh] space-y-24 px-5 pb-40 pt-[60svh] md:space-y-40 md:px-10">
        {highlights.map((h, i) => (
          <Reveal key={h.src} className={`w-full md:w-[24%] ${offsets[i]}`}>
            <Link href={`/work/${h.project.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink-soft">
                <Image
                  src={h.src}
                  alt={`${h.project.title}: ${h.label}`}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 768px) 34vw, 100vw"
                  className="object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <p className="mt-5 font-serif text-[34px] leading-none">{h.project.title}</p>
              <p className="mt-2 text-base text-white/70">
                <span className="opacity-50">0{i + 1} — </span>{h.label} · <span className="link-underline">View case study</span>
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- 4. Services: sticky intro + visual on the left, four deliverable blocks on the right ---------- */
function ServiceVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative flex aspect-[245/351] w-full max-w-[245px] items-center justify-center overflow-hidden rounded-lg bg-[#efefef]">
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute h-16 w-24 rounded-md border border-ink bg-ink"
          style={{ rotate: -28, skewX: 20, opacity: 1 - i * 0.18 }}
          animate={reduce ? undefined : { y: [i * 18 - 27, i * 18 - 37, i * 18 - 27] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function ServicesList() {
  return (
    <section id="services" className="bg-paper text-ink">
      <div className="mx-auto grid max-w-[1280px] gap-16 px-5 py-24 md:grid-cols-[1fr_1.4fr] md:px-10 md:py-36">
        <div>
          <div className="space-y-10 md:sticky md:top-32">
            <p className="max-w-[17rem] text-base leading-snug">
              As a brand and media partner, we work closely with clients across four core areas of
              work.
            </p>
            <ServiceVisual />
          </div>
        </div>

        <div className="space-y-28">
          {serviceGroups.map((group) => (
            <Reveal key={group.title}>
              <h3 className="display-serif display-md">{group.title}</h3>
              <p className="mt-8 max-w-[30rem] text-xl leading-snug md:text-[22px]">{group.description}</p>
              <ul className="mt-10 space-y-1.5 text-base">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. Get in touch: small label, giant serif email ---------- */
export function GetInTouch() {
  return (
    <section className="bg-ink px-5 pt-32 text-center text-white md:px-10 md:pt-44">
      <Reveal>
        <p className="text-[14px] tracking-[-0.03em] text-mute">Start a project</p>
        <a
          href={`mailto:${contact.email}`}
          className="display-serif mt-4 inline-block break-all not-italic leading-none transition-colors hover:opacity-60"
          style={{ fontSize: "clamp(2rem, 6.5vw, 5.75rem)" }}
        >
          {contact.email}
        </a>
      </Reveal>
    </section>
  );
}
