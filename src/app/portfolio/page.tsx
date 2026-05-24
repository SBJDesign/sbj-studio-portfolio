import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { Section } from "@/components/section";
import { projects } from "@/data/site-data";

export const metadata = {
  title: "Portfolio | SBJ Studio",
  description: "Case studies in branding, design, media, and strategy from SBJ Studio."
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Work that drives <span className="text-gradient-coral">results</span>
          </>
        }
        description="Case studies across branding, design, media, and strategy — where creativity and strategic thinking delivered measurable value."
        showSparkles
        compact
      />

      <Section tone="muted" decor="grid">
        <PortfolioGrid projects={projects} />
      </Section>

      <CtaBanner />
    </>
  );
}
