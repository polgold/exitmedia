import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

const tints: Record<string, string> = {
  italmarket: "rgba(184, 61, 44, 0.65)",
  sunfactory: "rgba(15, 15, 15, 0.55)",
  storemcp: "rgba(17, 19, 24, 0.55)",
  default: "rgba(20, 20, 20, 0.55)",
};

export function ProjectCard({ project }: { project: Project }) {
  const tint = tints[project.cover] || tints.default;

  return (
    <Link
      href={`/trabajos/${project.slug}`}
      className="group block relative overflow-hidden rounded-2xl border border-border bg-surface"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${tint} 0%, rgba(0,0,0,0.75) 100%)`,
          }}
        />
        <div className="absolute inset-0 flex items-end p-6">
          <div className="text-white">
            <div className="text-[10px] uppercase tracking-[0.25em] opacity-80">
              {project.category} · {project.year}
            </div>
            <div className="mt-1 font-display text-4xl md:text-5xl leading-[1.05]">
              {project.title}
            </div>
          </div>
        </div>
        {project.status === "coming-soon" && (
          <div className="absolute top-4 right-4 text-[10px] uppercase tracking-widest bg-black/50 text-white px-2 py-1 rounded-full backdrop-blur">
            próximamente
          </div>
        )}
      </div>
      <div className="flex items-start justify-between gap-4 p-5">
        <p className="text-sm text-muted line-clamp-2 leading-relaxed">
          {project.excerpt}
        </p>
        <ArrowUpRight
          size={18}
          className="text-muted shrink-0 mt-0.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </div>
    </Link>
  );
}
