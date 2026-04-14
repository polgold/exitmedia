import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/projects";
import { MotionIn } from "@/components/ui/MotionIn";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { HomeContact } from "@/components/HomeContact";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Proyecto no encontrado" };
  return {
    title: `${project.title} — ${project.category}`,
    description: project.excerpt,
  };
}

const tints: Record<string, string> = {
  italmarket: "rgba(184, 61, 44, 0.55)",
  sunfactory: "rgba(15, 15, 15, 0.5)",
  storemcp: "rgba(17, 19, 24, 0.5)",
  default: "rgba(20, 20, 20, 0.5)",
};

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const tint = tints[project.cover] || tints.default;
  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-10">
        <Link
          href="/trabajos"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent"
        >
          <ArrowLeft size={14} /> Volver a trabajos
        </Link>
      </div>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 pt-10 md:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-widest text-muted">
              {project.category} · {project.year}
            </div>
            <h1 className="font-display text-[clamp(2.75rem,6.5vw,5rem)] leading-[0.98] tracking-tight mt-3 text-balance">
              {project.title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed text-pretty max-w-2xl">
              {project.excerpt}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center h-7 px-3 rounded-full text-xs border border-border bg-surface text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-accent transition-colors"
              >
                Visitar sitio en vivo
                <ArrowUpRight size={14} />
              </a>
            )}
            {project.status === "coming-soon" && (
              <div className="mt-8 inline-flex items-center h-11 px-5 rounded-full text-sm border border-accent/40 text-accent bg-accent-soft">
                Próximamente · beta cerrada
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl border border-border overflow-hidden">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, ${tint} 0%, rgba(0,0,0,0.6) 100%)`,
                }}
              />
              <div className="absolute inset-0 flex items-end p-6">
                <span className="text-white font-display text-4xl md:text-5xl leading-[1.05]">
                  {project.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16 md:py-24">
        <MotionIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted">
                El desafío
              </div>
              <p className="mt-5 text-lg leading-relaxed text-pretty">
                {project.challenge}
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted">
                La solución
              </div>
              <p className="mt-5 text-lg leading-relaxed text-pretty">
                {project.solution}
              </p>
            </div>
          </div>
        </MotionIn>

        <MotionIn delay={0.1}>
          <div className="mt-16 md:mt-24 rounded-2xl border border-border bg-surface p-6 md:p-8">
            <div className="text-xs uppercase tracking-widest text-muted mb-5">
              Tecnologías
            </div>
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="inline-flex items-center h-8 px-3 rounded-full text-xs font-mono border border-border bg-background"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </MotionIn>
      </section>

      {otherProjects.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-10 border-t border-border pt-16">
          <div className="text-xs uppercase tracking-widest text-muted mb-6">
            Otros trabajos
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((p) => {
              const t = tints[p.cover] || tints.default;
              return (
                <Link
                  key={p.slug}
                  href={`/trabajos/${p.slug}`}
                  className="group rounded-2xl border border-border overflow-hidden bg-surface"
                >
                  <div className="relative aspect-[5/3]">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(180deg, ${t} 0%, rgba(0,0,0,0.7) 100%)`,
                      }}
                    />
                    <div className="absolute inset-0 flex items-end p-5">
                      <span className="text-white font-display text-3xl md:text-4xl leading-[1.05]">
                        {p.title}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <div className="text-xs uppercase tracking-widest text-muted">
                      {p.category}
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-muted group-hover:text-accent transition-colors"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <HomeContact />
    </>
  );
}
