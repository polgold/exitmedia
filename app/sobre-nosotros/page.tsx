import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MotionIn } from "@/components/ui/MotionIn";
import { Zap, Eye, Gauge, Bot, ArrowUpRight } from "lucide-react";
import { HomeContact } from "@/components/HomeContact";

export const metadata: Metadata = {
  title: "Sobre nosotros — ExitMedia, estudio digital de Buenos Aires",
  description:
    "ExitMedia es la división digital de Sun Factory. Cruzamos cine, diseño y código con IA como motor de desarrollo.",
};

const values = [
  {
    icon: Zap,
    title: "Velocidad",
    body: "Preferimos entregar algo bueno esta semana que algo perfecto el año que viene. La realidad siempre te corrige — dejémosla que corrija rápido.",
  },
  {
    icon: Eye,
    title: "Claridad",
    body: "Presupuestos cerrados, plazos reales, sin lenguaje inflado. Si no entendés algo, es culpa nuestra — no tuya.",
  },
  {
    icon: Gauge,
    title: "Calidad",
    body: "Rápido no significa descuidado. Cada sitio que hacemos tiene performance, SEO y accesibilidad mínimas no negociables.",
  },
  {
    icon: Bot,
    title: "AI-first",
    body: "Usamos IA como motor, no como gimmick. Eso significa entregas más rápidas, más accesibles y más tiempo para pensar estrategia y diseño.",
  },
];

export default function SobreNosotrosPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 30% 0%, var(--accent-soft), transparent 60%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 md:pt-28 pb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
            <span className="w-6 h-px bg-accent" />
            Sobre nosotros
          </div>
          <h1 className="font-display text-[clamp(2.75rem,6.8vw,5.5rem)] leading-[1.02] tracking-[-0.02em] mt-6 text-balance max-w-4xl">
            Nacimos del cruce entre <span className="italic text-accent">cine</span> y tecnología.
          </h1>
          <p className="mt-10 text-xl text-muted leading-relaxed text-pretty max-w-3xl">
            ExitMedia es la división digital de{" "}
            <a
              href="https://sunfactory.com.ar"
              target="_blank"
              rel="noreferrer"
              className="text-foreground hover:text-accent underline underline-offset-4 decoration-accent/40"
            >
              Sun Factory
            </a>
            , una productora de cine y contenidos comerciales que trabaja hace
            más de una década en Buenos Aires. De un lado, sabemos cómo se
            cuenta una historia. Del otro, cómo se construye la infraestructura
            que la distribuye.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl border border-border overflow-hidden bg-surface">
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80&auto=format&fit=crop"
                alt="Equipo trabajando en un estudio de diseño"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.55) 100%)",
                }}
              />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs uppercase tracking-[0.2em] opacity-80">
                  Estudio
                </div>
                <div className="font-display text-2xl mt-1 leading-tight">
                  Buenos Aires, Argentina
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <MotionIn>
              <div className="text-xs uppercase tracking-widest text-muted">
                Cómo llegamos acá
              </div>
              <div className="mt-5 space-y-5 text-lg leading-relaxed text-pretty">
                <p>
                  Somos un estudio chico, con raíces en el cine. Durante más de
                  una década, Sun Factory dirigió y produjo contenido comercial
                  para marcas de Argentina, EE.UU., España y México.
                </p>
                <p>
                  En algún momento, muchos clientes empezaron a pedir también
                  "el sitio, la tienda, la landing". Al principio lo derivábamos
                  a agencias que nos gustaban. Con los años, vimos que los
                  resultados dependían cada vez más de si quien estaba del otro
                  lado entendía el negocio del cliente — no solo el código.
                </p>
                <p>
                  ExitMedia nace de ese cruce. Somos un estudio que usa IA como
                  motor de desarrollo (Claude Code, Cursor, MCP) para entregar
                  más rápido y a mejor precio. Pero el criterio, el diseño y la
                  conversación con el cliente son humanos, y vienen de años de
                  trabajar con marcas que confían en nosotros para contar su
                  historia.
                </p>
              </div>
            </MotionIn>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
            <span className="w-6 h-px bg-accent" />
            Nuestros valores
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.015em] text-balance max-w-3xl">
            Cuatro cosas en las que no transamos.
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <MotionIn key={v.title} delay={i * 0.06}>
                  <div className="h-full bg-background p-7">
                    <span className="inline-grid place-items-center w-10 h-10 rounded-lg border border-border text-accent bg-surface">
                      <Icon size={18} />
                    </span>
                    <h3 className="mt-6 font-display text-2xl">{v.title}</h3>
                    <p className="mt-3 text-sm text-muted leading-relaxed">
                      {v.body}
                    </p>
                  </div>
                </MotionIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
              <span className="w-6 h-px bg-accent" />
              Nuestro approach
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] tracking-[-0.015em] text-balance">
              AI como motor, no como <span className="italic text-accent">gimmick</span>.
            </h2>

            <div className="mt-8 relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
              <Image
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80&auto=format&fit=crop"
                alt="Desarrollo de software con IA"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="lg:col-span-7 text-lg leading-relaxed text-pretty space-y-5">
            <p>
              Usamos Claude Code y Cursor para escribir buena parte de cada
              proyecto. Eso significa que un sitio que antes requería 4 semanas
              y 3 perfiles, hoy lo armamos en 2 con el mismo nivel de cuidado.
              No es magia — es dejar que la herramienta haga lo mecánico para
              concentrarnos en lo que requiere criterio.
            </p>
            <p>Lo traducimos en tres cosas concretas que vas a ver:</p>
            <ul className="space-y-3 pl-5">
              <li className="list-disc">
                <strong>Presupuestos más accesibles.</strong> Lo que antes era
                un proyecto de USD 8.000 hoy puede ser uno de USD 2.500.
              </li>
              <li className="list-disc">
                <strong>Iteraciones más rápidas.</strong> Cambios y pruebas en
                horas, no en semanas.
              </li>
              <li className="list-disc">
                <strong>Más tiempo para pensar.</strong> Que es para lo que nos
                contratás, no para que escribamos CSS.
              </li>
            </ul>
            <p>
              No vamos a dejar que un modelo mande un sitio a producción sin
              revisión humana. Pero tampoco vamos a fingir que no existen. Esa
              es la línea.
            </p>

            <div className="pt-6">
              <Link
                href="/servicios"
                className="group inline-flex items-center gap-2 text-accent hover:text-accent-hover"
              >
                Ver qué podemos hacer
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HomeContact />
    </>
  );
}
