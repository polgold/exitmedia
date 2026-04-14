import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { MotionIn } from "@/components/ui/MotionIn";
import { HomeContact } from "@/components/HomeContact";

export const metadata: Metadata = {
  title: "Trabajos — Proyectos recientes de ExitMedia",
  description:
    "Una selección de proyectos recientes: sitios web, tiendas online, apps y productos propios.",
};

export default function TrabajosPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 80% 0%, var(--accent-soft), transparent 60%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 md:pt-28 pb-16 md:pb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
            <span className="w-6 h-px bg-accent" />
            Trabajos
          </div>
          <h1 className="font-display text-[clamp(3rem,6.5vw,5.5rem)] leading-[0.98] tracking-tight mt-6 text-balance max-w-4xl">
            Proyectos recientes que podés <span className="italic text-accent">abrir y tocar</span>.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed text-pretty">
            Nos gusta que los sitios estén vivos. Debajo, una selección — hay
            más en proceso que todavía no subimos.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <MotionIn key={p.slug} delay={i * 0.05}>
              <ProjectCard project={p} />
            </MotionIn>
          ))}
        </div>
      </div>

      <HomeContact />
    </>
  );
}
