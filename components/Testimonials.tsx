import { SectionLabel, SectionTitle } from "./ui/Section";
import { MotionIn } from "./ui/MotionIn";
import { Quote } from "lucide-react";

const items = [
  {
    quote:
      "Pasamos de Wix a una tienda headless en tres semanas. Carga en 1.2 segundos y duplicamos pedidos en el primer mes.",
    author: "Franco Volpi",
    role: "Director · Italmarket",
  },
  {
    quote:
      "Hablás con alguien que entiende el problema del negocio, no solo el del código. Eso no abunda.",
    author: "Lucía Aguirre",
    role: "Productora ejecutiva",
  },
  {
    quote:
      "Resolvieron en una tarde algo que nuestra agencia anterior no pudo en dos meses. Y documentado.",
    author: "Mariano F.",
    role: "Dueño · Pyme gastronómica",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Lo que dicen</SectionLabel>
          <SectionTitle>
            Palabras de gente que{" "}
            <span className="italic text-accent">nos contrató</span>.
          </SectionTitle>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <MotionIn key={i} delay={i * 0.08}>
              <figure className="h-full rounded-2xl border border-border bg-surface p-7 flex flex-col">
                <Quote className="text-accent" size={18} />
                <blockquote className="mt-4 text-foreground text-pretty leading-relaxed">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border text-sm">
                  <div className="font-medium">{t.author}</div>
                  <div className="text-muted">{t.role}</div>
                </figcaption>
              </figure>
            </MotionIn>
          ))}
        </div>
      </div>
    </section>
  );
}
