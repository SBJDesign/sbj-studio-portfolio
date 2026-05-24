import { AboutStats } from "@/components/about-stats";
import { ClientLogosStrip } from "@/components/client-logos-strip";
import { CtaBanner } from "@/components/cta-banner";
import { HomeHero } from "@/components/home-hero";
import { PortfolioPreviewGrid } from "@/components/portfolio-preview-grid";
import { Section } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { AnimatedBlock } from "@/components/animated-block";
import { TestimonialsSlider } from "@/components/testimonials-slider";
import { serviceIcons, services, testimonials } from "@/data/site-data";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ClientLogosStrip />
      <AboutStats />

      <Section
        eyebrow="Service"
        title="Exceeding Expectations"
        description="Full-spectrum creative and growth services — from brand systems to campaigns, media, and performance marketing."
        align="center"
        showSparkle
        decor="mesh"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
            <AnimatedBlock key={service.title} delay={index * 0.05}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={serviceIcons[index % serviceIcons.length]}
              />
            </AnimatedBlock>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Portfolio"
        title="Our Latest Work"
        description="Selected projects where strategy, design, and storytelling delivered measurable outcomes."
        align="center"
        showSparkle
        tone="muted"
        decor="grid"
      >
        <PortfolioPreviewGrid />
      </Section>

      <Section
        id="testimonials"
        eyebrow="Testimonials"
        title="Real results. Real people."
        align="center"
        showSparkle
        decor="mesh"
      >
        <TestimonialsSlider items={testimonials} />
      </Section>

      <CtaBanner />
    </>
  );
}
