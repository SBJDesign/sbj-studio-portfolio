import Image from "next/image";
import { clientLogos, testimonials } from "@/data/site-data";
import { Reveal } from "./reveal";

export function ClientLogos() {
  return (
    <section className="bg-paper px-5 py-24 text-ink md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="grid gap-6 border-b border-ink pb-8 md:grid-cols-[1fr_1fr] md:items-end">
          <h2 className="display-serif display-md">Brands we&apos;ve worked with</h2>
          <p className="max-w-[28rem] text-[17px] leading-snug text-ink/75 md:justify-self-end md:text-right">
            Trusted by purposeful founders and businesses who value clarity, creativity, and impact.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {clientLogos.map((logo, i) => (
            <Reveal key={logo.name} delay={(i % 4) * 0.05}>
              <div
                className="group flex aspect-[3/2] items-center justify-center rounded-2xl bg-[#f1f1f1] p-6 md:p-10"
                title={logo.name}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={240}
                  height={160}
                  className="max-h-full w-auto object-contain mix-blend-multiply grayscale transition duration-500 group-hover:grayscale-0"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const live = testimonials.filter((t) => t.approved && t.name);
  if (live.length === 0) return null;
  return (
    <section className="bg-ink px-5 py-24 text-white md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="border-b border-white/20 pb-8">
          <h2 className="display-serif display-md">What clients say</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {live.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.06}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-white/15 p-7 md:p-8">
                <blockquote className="text-[19px] leading-snug md:text-[21px]">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-8 border-t border-white/15 pt-5">
                  <p className="font-semibold">{t.name}</p>
                  <p className="mt-1 text-[14px] text-white/55">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
