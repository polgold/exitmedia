import Link from "next/link";
import { projectMeta, getProjectMeta } from "@/lib/projects";
import { SectionLabel, SectionTitle } from "./ui/Section";
import { MotionIn } from "./ui/MotionIn";
import { ProjectCard } from "./ProjectCard";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type Props = {
  lang: Locale;
  dict: Pick<Dictionary, "featuredWork" | "projects" | "common">;
};

export function FeaturedWork({ lang, dict }: Props) {
  const f = dict.featuredWork;
  return (
    <section id="trabajos" className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <SectionLabel>{f.label}</SectionLabel>
            <SectionTitle className="max-w-3xl">
              {f.titlePrefix}
              <span className="italic text-accent">{f.titleHighlight}</span>
              {f.titleSuffix}
            </SectionTitle>
          </div>
          <Link
            href={`/${lang}/trabajos`}
            className="group self-start md:self-end inline-flex items-center gap-2 text-sm text-muted hover:text-accent"
          >
            {f.viewAll}
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.projects.map((info, i) => {
            const meta = getProjectMeta(info.slug) || projectMeta[i];
            return (
              <MotionIn key={info.slug} delay={i * 0.05}>
                <ProjectCard
                  lang={lang}
                  meta={meta}
                  info={info}
                  comingSoonLabel={dict.common.comingSoon}
                />
              </MotionIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
