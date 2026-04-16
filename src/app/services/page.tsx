import { Section } from "@/components/section";
import { services } from "@/data/site-data";

export const metadata = {
  title: "Services | SBJ Studio"
};

export default function ServicesPage() {
  return (
    <Section
      eyebrow="Services"
      title="Strategic creative services built for growth"
      description="From identity systems to growth strategy, each service is designed to improve brand perception and business outcomes."
    >
      <div className="space-y-6">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-white/10 bg-surface p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-2xl font-black">{service.title}</h3>
              <p className="rounded-full border border-accent/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-accent">
                {service.category}
              </p>
            </div>
            <p className="text-muted">{service.description}</p>
            <p className="mt-3 text-sm text-text">
              <span className="font-semibold text-accent">Value:</span> {service.value}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {service.deliverables.map((item) => (
                <li key={item} className="rounded-full border border-white/20 px-3 py-1 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
