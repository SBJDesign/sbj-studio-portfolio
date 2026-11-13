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
        <div className="flex flex-1 flex-col justify-center px-5 pt-28 md:items-center md:px-6 md:text-center">
          <motion.p
            className="text-[12px] uppercase tracking-[0.12em] text-white/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Design studio · Kano, Nigeria
          </motion.p>
          <motion.p
            className="mt-5 max-w-[16ch] font-sans text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.03em] sm:text-5xl md:max-w-[20ch] md:text-[3.4rem]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {studioIntro}
          </motion.p>
          <motion.p
            className="mt-6 max-w-[34ch] text-[17px] leading-snug text-white/70 md:text-[18px]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            Strategy, branding, design and media for businesses, institutions and events ready to grow.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-2 md:justify-center">
            {["Branding", "Design", "Media & Content", "Strategy"].map((t) => (
              <a
                key={t}
                href="#services"
                className="rounded-full border border-white/25 px-4 py-2 text-[13px] text-white/80 transition hover:bg-white hover:text-ink"
              >
                {t}
              </a>
            ))}
          </div>
          <a
            href="#statement"
            className="mt-10 inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.08em] text-white/60 hover:text-white"
          >
            See the work
            <svg width="12" height="8" viewBox="0 0 14 9" fill="none" aria-hidden>
              <path d="M1 1l6 6 6-6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        </div>
        <motion.h1
          className="mt-10 select-none whitespace-nowrap px-2 text-center md:mt-0 md:px-3 font-sans font-semibold leading-[0.78] tracking-[-0.06em]"
          style={{ fontSize: "clamp(3rem, 21vw, 15rem)" }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          SBJ Studio
        </motion.h1>
      </div>

      <div className="bg-ink-soft px-3 pb-12 pt-6 md:px-16 md:pb-24 md:pt-16">
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
          <div className="space-y-8 text-[17px] leading-snug md:space-y-10 md:pt-6 md:text-base">
            {positioning.map((line, i) => (
              <Reveal key={line} delay={i * 0.08}>
                <p>{line}</p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <h2 className="display-serif display-xl text-left">
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
  const web = projects.find((p) => p.slug === "dr-sani-isah-abba-academic-website") ?? gta;
  const highlights = [
    { project: web, src: "/work/sani/home.jpg", label: "Academic Website" },
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

      <div className="relative z-10 -mt-[100svh] space-y-20 px-5 pb-32 pt-[45svh] md:pt-[60svh] md:space-y-40 md:px-10">
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
              Eight services across four areas of work: branding, design, media and strategy. Most projects use
              more than one.
            </p>
            <ServiceVisual />
          </div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {serviceGroups.map((group, g) => (
            <div key={group.title}>
              <Reveal className="flex items-baseline gap-4 border-b border-ink pb-4">
                <span className="text-[13px] text-mute">0{g + 1}</span>
                <h3 className="display-serif display-md">{group.title}</h3>
              </Reveal>
              <div className="divide-y divide-ink/15">
                {group.services.map((svc) => (
                  <Reveal key={svc.name} className="grid gap-5 py-10 md:grid-cols-[2.5rem_1fr]">
                    <span className="text-2xl leading-none" aria-hidden>
                      {svc.icon}
                    </span>
                    <div>
                      <h4 className="text-[22px] font-semibold leading-tight tracking-[-0.01em] md:text-[26px]">{svc.name}</h4>
                      <p className="mt-3 max-w-[34rem] text-[17px] leading-snug text-ink/80">{svc.description}</p>
                      <p className="mt-4 max-w-[34rem] border-l-2 border-ink pl-4 text-[15px] leading-snug">
                        <span className="font-semibold">Value: </span>
                        {svc.value}
                      </p>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {svc.items.map((item) => (
                          <li key={item} className="rounded-full border border-ink/25 px-4 py-1.5 text-[14px]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
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
