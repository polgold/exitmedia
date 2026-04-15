import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectMeta, getProjectMeta } from "@/lib/projects";
import { MotionIn } from "@/components/ui/MotionIn";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { HomeContact } from "@/components/HomeContact";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { locales, isLocale, type Locale } from "@/lib/i18n/config";

type PageParams = Promise<{ lang: string; slug: string }>;

export function generateStaticParams() {
  const out: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    for (const p of projectMeta) out.push({ lang, slug: p.slug });
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  const info = dict.projects.find((p) => p.slug === slug);
  if (!info) return { title: dict.pageProject.notFoundTitle };
  return {
    title: `${info.title} — ${info.category}`,
    description: info.excerpt,
  };
}

const tints: Record<string, string> = {
  italmarket: "rgba(184, 61, 44, 0.55)",
  sunfactory: "rgba(15, 15, 15, 0.5)",
  storemcp: "rgba(17, 19, 24, 0.5)",
  default: "rgba(20, 20, 20, 0.5)",
};

export default async function ProjectPage({ params }: { params: PageParams }) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const meta = getProjectMeta(slug);
  const info = dict.projects.find((p) => p.slug === slug);
  if (!meta || !info) notFound();

  const p = dict.pageProject;
  const tint = tints[meta.cover] || tints.default;
  const otherProjects = dict.projects
    .filter((pr) => pr.slug !== info.slug)
    .slice(0, 2);

  const BASE = "https://exitmedia.com.ar";
  const projectUrl = `${BASE}/${locale}/trabajos/${meta.slug}`;
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: dict.metadata.siteName, item: `${BASE}/${locale}` },
          { "@type": "ListItem", position: 2, name: dict.pageWork.label, item: `${BASE}/${locale}/trabajos` },
          { "@type": "ListItem", position: 3, name: info.title, item: projectUrl },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": projectUrl,
        name: info.title,
        headline: info.title,
        description: info.excerpt,
        dateCreated: meta.year,
        inLanguage: locale === "es" ? "es-AR" : locale === "en" ? "en-US" : "pt-BR",
        creator: { "@id": `${BASE}/#org` },
        about: info.category,
        keywords: [...meta.tags, ...meta.tech].join(", "),
        ...(meta.url && { url: meta.url }),
        ...(meta.image && { image: meta.image }),
      },
    ],
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-10">
        <Link
          href={`/${locale}/trabajos`}
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent"
        >
          <ArrowLeft size={14} /> {p.backToWork}
        </Link>
      </div>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 pt-10 md:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-widest text-muted">
              {info.category} · {meta.year}
            </div>
            <h1 className="font-display text-[clamp(2.75rem,6.5vw,5rem)] leading-[0.98] tracking-tight mt-3 text-balance">
              {info.title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed text-pretty max-w-2xl">
              {info.excerpt}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {meta.tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center h-7 px-3 rounded-full text-xs border border-border bg-surface text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            {meta.url && (
              <a
                href={meta.url}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-accent transition-colors"
              >
                {p.visitSite}
                <ArrowUpRight size={14} />
              </a>
            )}
            {meta.status === "coming-soon" && (
              <div className="mt-8 inline-flex items-center h-11 px-5 rounded-full text-sm border border-accent/40 text-accent bg-accent-soft">
                {p.comingSoon}
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl border border-border overflow-hidden">
              <Image
                src={meta.image}
                alt={info.imageAlt}
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
              <div aria-hidden className="absolute inset-0 flex items-end p-6">
                <span className="text-white font-display text-4xl md:text-5xl leading-[1.05]">
                  {info.title}
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
              <h2 className="text-xs font-normal uppercase tracking-widest text-muted">
                {p.challenge}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-pretty">
                {info.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-xs font-normal uppercase tracking-widest text-muted">
                {p.solution}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-pretty">
                {info.solution}
              </p>
            </div>
          </div>
        </MotionIn>

        <MotionIn delay={0.1}>
          <div className="mt-16 md:mt-24 rounded-2xl border border-border bg-surface p-6 md:p-8">
            <h2 className="text-xs font-normal uppercase tracking-widest text-muted mb-5">
              {p.tech}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {meta.tech.map((t) => (
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
        <section
          aria-labelledby="other-projects-heading"
          className="mx-auto max-w-7xl px-6 lg:px-8 pb-10 border-t border-border pt-16"
        >
          <h2
            id="other-projects-heading"
            className="text-xs font-normal uppercase tracking-widest text-muted mb-6"
          >
            {p.otherProjects}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((op) => {
              const ometa = getProjectMeta(op.slug);
              if (!ometa) return null;
              const t = tints[ometa.cover] || tints.default;
              return (
                <Link
                  key={op.slug}
                  href={`/${locale}/trabajos/${op.slug}`}
                  className="group rounded-2xl border border-border overflow-hidden bg-surface"
                >
                  <div className="relative aspect-[5/3]">
                    <Image
                      src={ometa.image}
                      alt={op.imageAlt}
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
                      <h3 className="text-white font-display text-3xl md:text-4xl leading-[1.05] font-normal">
                        {op.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <div className="text-xs uppercase tracking-widest text-muted">
                      {op.category}
                    </div>
                    <ArrowUpRight
                      size={18}
                      aria-hidden
                      className="text-muted group-hover:text-accent transition-colors"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <HomeContact lang={locale} dict={dict} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
    </>
  );
}
