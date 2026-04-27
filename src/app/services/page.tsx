import { Section } from "@/components/section";
import { services } from "@/data/site-data";

export const metadata = {
  title: "Services | SBJ Studio"
};

export default function ServicesPage() {
  const grouped = {
    Branding: services.filter((service) => service.category === "Branding"),
    Design: services.filter((service) => service.category === "Design"),
    "Media & Content": services.filter((service) => service.category === "Media & Content"),
    Strategy: services.filter((service) => service.category === "Strategy")
  };

  return (
    <Section
      eyebrow="Services"
      title="Strategic creative services built for growth"
      description="We provide full-spectrum creative and digital growth services - from brand systems and design to media production, web experiences, and performance marketing."
    >
      <div className="space-y-10">
        {Object.entries(grouped).map(([category, items]) => (
          <section key={category}>
            <h2 className="mb-4 text-2xl font-black md:text-3xl">{category}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {items.map((service) => (
                <article
                  key={service.title}
                  className="rounded-3xl border border-white/10 bg-white p-6 text-slate-900 transition hover:-translate-y-1"
                >
                  <div className="mb-4">
                    <h3 className="text-2xl font-black">{service.title}</h3>
                  </div>
                  <p className="text-slate-600">{service.description}</p>
                  <p className="mt-3 text-sm text-slate-800">
                    <span className="font-semibold text-accent">Value:</span> {service.value}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="rounded-full border border-slate-300 px-3 py-1 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Section>
  );
}
