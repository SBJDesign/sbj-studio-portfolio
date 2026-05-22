import { AnimatedBlock } from "@/components/animated-block";
import { CategoryHeading } from "@/components/category-heading";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { serviceIcons, services } from "@/data/site-data";

export const metadata = {
  title: "Services | SBJ Studio",
  description:
    "Strategic branding, design, media, and digital growth services from SBJ Studio."
};

export default function ServicesPage() {
  const grouped = {
    Branding: services.filter((service) => service.category === "Branding"),
    Design: services.filter((service) => service.category === "Design"),
    "Media & Content": services.filter((service) => service.category === "Media & Content"),
    Strategy: services.filter((service) => service.category === "Strategy")
  };

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Strategic creative services built for <span className="text-gradient">growth</span>
          </>
        }
        description="Full-spectrum creative and digital growth — from brand systems and design to media production, web experiences, and performance marketing."
        showSparkles
      />

      <Section decor="mesh">
        <div className="space-y-14 md:space-y-16">
          {Object.entries(grouped).map(([category, items]) => (
            <section key={category}>
              <CategoryHeading>{category}</CategoryHeading>
              <div className="grid gap-5 md:grid-cols-2 md:gap-6">
                {items.map((service, index) => {
                  const iconIndex = services.findIndex((item) => item.title === service.title);
                  return (
                    <AnimatedBlock key={service.title} delay={index * 0.04}>
                      <ServiceCard
                        title={service.title}
                        description={service.description}
                        icon={serviceIcons[iconIndex % serviceIcons.length]}
                        value={service.value}
                        deliverables={service.deliverables}
                        detailed
                      />
                    </AnimatedBlock>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
