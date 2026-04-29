import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectMeta, getProjectMeta } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ClientsGrid } from "@/components/ClientsGrid";
import { MotionIn } from "@/components/ui/MotionIn";
import { HomeContact } from "@/components/HomeContact";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n/config";

type PageParams = Promise<{ lang: string }>;

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.pageWork.title,
    description: dict.pageWork.description,
  };
}

export default async function TrabajosPage({ params }: { params: PageParams }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const p = dict.pageWork;

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
            {p.label}
          </div>
          <h1 className="font-display text-[clamp(3rem,6.5vw,5.5rem)] leading-[0.98] tracking-tight mt-6 text-balance max-w-4xl">
            {p.heroPrefix}
            <span className="italic text-accent">{p.heroHighlight}</span>
            {p.heroSuffix}
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed text-pretty">
            {p.intro}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.projects.map((info, i) => {
            const meta = getProjectMeta(info.slug) || projectMeta[i];
            return (
              <MotionIn key={info.slug} delay={i * 0.05}>
                <ProjectCard
                  lang={locale}
                  meta={meta}
                  info={info}
                  comingSoonLabel={dict.common.comingSoon}
                  headingLevel="h2"
                />
              </MotionIn>
            );
          })}
        </div>
      </div>

      <ClientsGrid dict={dict} />

      <HomeContact lang={locale} dict={dict} />
    </>
  );
}
