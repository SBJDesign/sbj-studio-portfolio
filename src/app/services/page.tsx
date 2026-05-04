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
            <h2 className="mb-5 border-b border-white/10 pb-3 text-2xl font-black tracking-tight text-text md:text-3xl">
              {category}
            </h2>
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              {items.map((service) => (
                <article key={service.title} className="card-light !p-7">
                  <div className="mb-1">
                    <h3 className="text-xl font-black tracking-tight text-slate-900 md:text-2xl">{service.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 md:text-base">{service.description}</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-800">
                    <span className="font-semibold text-accent">Value:</span> {service.value}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 md:text-sm"
                      >
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
