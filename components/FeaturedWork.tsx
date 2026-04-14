import Link from "next/link";
import { projects } from "@/lib/projects";
import { SectionLabel, SectionTitle } from "./ui/Section";
import { MotionIn } from "./ui/MotionIn";
import { ProjectCard } from "./ProjectCard";
import { ArrowUpRight } from "lucide-react";

export function FeaturedWork() {
  return (
    <section id="trabajos" className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <SectionLabel>Trabajos</SectionLabel>
            <SectionTitle className="max-w-3xl">
              Proyectos recientes que podés{" "}
              <span className="italic text-accent">tocar</span>.
            </SectionTitle>
          </div>
          <Link
            href="/trabajos"
            className="group self-start md:self-end inline-flex items-center gap-2 text-sm text-muted hover:text-accent"
          >
            Ver todos
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <MotionIn key={p.slug} delay={i * 0.05}>
              <ProjectCard project={p} />
            </MotionIn>
          ))}
        </div>
      </div>
    </section>
  );
}
