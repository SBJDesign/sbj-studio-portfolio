import { ReactNode } from "react";
import { Reveal } from "./reveal";

/** Dark page opener: small lead line, giant serif title. */
export function PageIntro({ title, lead }: { title: ReactNode; lead?: ReactNode }) {
  return (
    <section className="bg-ink px-5 pb-20 pt-40 text-white md:px-10 md:pb-28 md:pt-48">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          {lead ? <p className="mb-10 max-w-[26rem] text-[17px] leading-snug text-white/80">{lead}</p> : null}
          <h1 className="display-serif" style={{ fontSize: "clamp(4rem, 14vw, 13rem)" }}>
            {title}
          </h1>
        </Reveal>
      </div>
    </section>
  );
}
