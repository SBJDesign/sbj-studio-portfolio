import { PortfolioGrid } from "@/components/portfolio-grid";
import { Section } from "@/components/section";
import { projects } from "@/data/site-data";

export const metadata = {
  title: "Portfolio | SBJ Studio"
};

export default function PortfolioPage() {
  return (
    <Section
      eyebrow="Portfolio"
      title="Case studies across branding, design, media, and strategy"
      description="Explore selected projects where creativity and strategic thinking delivered measurable value."
    >
      <PortfolioGrid projects={projects} />
    </Section>
  );
}
