import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { contact } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Thoughts | SBJ Studio",
  description: "Notes on brand, design, media and growth from SBJ Studio."
};

export default function ThoughtsPage() {
  return (
    <>
      <PageIntro lead="Notes on brand, design, media and growth from the studio." title="Thoughts" />
      <section className="bg-paper px-5 py-28 text-ink md:px-10 md:py-40">
        <Reveal className="mx-auto max-w-[1280px]">
          <p className="display-serif display-md">First notes are on the way.</p>
          <p className="mt-8 max-w-[34rem] text-lg leading-snug text-ink/75">
            We are writing up lessons from our brand, campaign and public-communication work. Until then, follow
            the studio on{" "}
            <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="underline">
              Instagram
            </a>
            .
          </p>
        </Reveal>
      </section>
    </>
  );
}
