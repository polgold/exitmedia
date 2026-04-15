import Link from "next/link";
import { getServiceIcon } from "@/lib/services";
import { SectionLabel, SectionTitle } from "./ui/Section";
import { MotionIn } from "./ui/MotionIn";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type Props = {
  lang: Locale;
  dict: Pick<Dictionary, "servicesGrid" | "services">;
};

const featuredIds = [
  "web",
  "ecommerce",
  "apps",
  "ai",
  "wordpress",
  "seo",
  "branding",
  "maintenance",
];

export function ServicesGrid({ lang, dict }: Props) {
  const g = dict.servicesGrid;
  const featured = dict.services.filter((s) => featuredIds.includes(s.id));

  return (
    <section id="servicios" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <SectionLabel>{g.label}</SectionLabel>
            <SectionTitle className="max-w-3xl">
              {g.titlePrefix}
              <span className="italic text-accent">{g.titleHighlight}</span>
              {g.titleSuffix}
            </SectionTitle>
          </div>
          <Link
            href={`/${lang}/servicios`}
            className="group self-start md:self-end inline-flex items-center gap-2 text-sm text-muted hover:text-accent"
          >
            {g.viewAllLink}
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {featured.map((svc, idx) => {
            const Icon = getServiceIcon(svc.id);
            return (
              <MotionIn key={svc.id} delay={idx * 0.04}>
                <Link
                  href={`/${lang}/servicios#${svc.id}`}
                  className="group relative h-full block p-7 bg-background hover:bg-surface-2 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-grid place-items-center w-10 h-10 rounded-lg border border-border text-accent bg-surface">
                      <Icon size={18} />
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-muted opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                  <h3 className="mt-8 font-display text-2xl leading-tight tracking-tight">
                    {svc.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed min-h-[4em]">
                    {svc.short}
                  </p>
                </Link>
              </MotionIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
