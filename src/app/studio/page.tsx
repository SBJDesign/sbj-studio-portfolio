import type { Metadata } from "next";
import { ClientLogos, Testimonials } from "@/components/clients-section";
import { GetInTouch, ServicesList } from "@/components/home-sections";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Studio | SBJ Studio",
  description:
    "SBJ Studio is a Kano-based brand, design and media studio building impactful brands through strategy, design and innovation."
};

const principles = [
  {
    title: "Strategy first",
    text: "Every project begins with research, planning and a clear understanding of the brand's objectives and audience."
  },
  {
    title: "Crafted with care",
    text: "We create bold, modern and memorable work that helps brands stand out in competitive markets."
  },
  {
    title: "Built for growth",
    text: "Our work is designed not only to look good, but to drive visibility, engagement and real business results."
  }
];

export default function StudioPage() {
  return (
    <>
      <PageIntro
        lead="A brand, design and media studio in Kano, Nigeria — working with businesses, institutions and changemakers."
        title="Studio"
      />

      <section className="bg-paper px-5 py-24 text-ink md:px-10 md:py-36">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <p className="max-w-[60rem] text-[28px] leading-tight md:text-[44px]">
              We combine strategy, creativity and craft to build identities and digital experiences that
              connect brands with people — and leave lasting impressions.
            </p>
          </Reveal>

          <div className="mt-24 grid gap-16 md:grid-cols-2">
            <Reveal>
              <h2 className="display-serif display-md">Mission</h2>
              <p className="mt-6 max-w-[30rem] text-xl leading-snug">
                To help businesses grow through strategic branding, creative design and innovative digital
                solutions that inspire trust, engagement and long-term success.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-serif display-md">Vision</h2>
              <p className="mt-6 max-w-[30rem] text-xl leading-snug">
                To become a leading creative studio recognised for turning ideas into powerful brands that
                influence industries and shape the future of business.
              </p>
            </Reveal>
          </div>

          <div className="mt-32 border-t border-ink/15">
            {principles.map((p, i) => (
              <Reveal
                key={p.title}
                className="grid gap-4 border-b border-ink/15 py-10 md:grid-cols-[6rem_1fr_1.2fr] md:items-baseline"
              >
                <span className="text-[14px] text-mute">0{i + 1}</span>
                <h3 className="display-serif text-[44px]">{p.title}</h3>
                <p className="text-lg leading-snug text-ink/80">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ServicesList />
      <ClientLogos />
      <Testimonials />
      <GetInTouch />
    </>
  );
}
