import { SectionLabel, SectionTitle } from "./ui/Section";
import { MotionIn } from "./ui/MotionIn";

const steps = [
  {
    n: "01",
    title: "Briefing",
    body: "Una charla sin compromiso. Escuchamos tu negocio, revisamos lo que ya tenés y definimos qué problema estamos resolviendo.",
  },
  {
    n: "02",
    title: "Propuesta y diseño",
    body: "Armamos un scope claro con alcance, plazos y costo. Diseñamos primero las pantallas clave — nada de interminables idas y vueltas.",
  },
  {
    n: "03",
    title: "Desarrollo",
    body: "Construimos con Claude Code y Cursor como motor. Vos ves avances reales, no PDFs. Subimos a un staging para que toques antes de lanzar.",
  },
  {
    n: "04",
    title: "Lanzamiento + cuidado",
    body: "Deploy, dominio, mail, analytics, SEO. Te dejamos documentado todo y ofrecemos planes mensuales para que el sitio siga vivo.",
  },
];

export function Process() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Cómo trabajamos</SectionLabel>
          <SectionTitle>
            Cuatro pasos claros, sin{" "}
            <span className="italic text-accent">misterio</span>.
          </SectionTitle>
          <p className="mt-6 text-lg text-muted text-pretty leading-relaxed">
            No prometemos una metodología con nombre en inglés. Sí prometemos
            saber en qué etapa estamos, qué sigue, y cuánto cuesta.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {steps.map((s, i) => (
            <MotionIn key={s.n} delay={i * 0.06}>
              <div className="h-full bg-background p-7">
                <div className="font-mono text-xs text-muted">{s.n} · paso</div>
                <h3 className="font-display text-3xl leading-none mt-4 tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm text-muted leading-relaxed">
                  {s.body}
                </p>
              </div>
            </MotionIn>
          ))}
        </div>
      </div>
    </section>
  );
}
