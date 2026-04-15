import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceIcon } from "@/lib/services";
import { MotionIn } from "@/components/ui/MotionIn";
import { Check, ArrowRight } from "lucide-react";
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
    title: dict.pageServices.title,
    description: dict.pageServices.description,
  };
}

export default async function ServiciosPage({ params }: { params: PageParams }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const p = dict.pageServices;

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 0%, var(--accent-soft), transparent 60%)",
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

          <nav className="mt-12 flex flex-wrap gap-2">
            {dict.services.map((s) => (
              <Link
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-2 h-9 px-4 rounded-full text-xs border border-border bg-surface hover:border-accent/60 hover:text-accent transition-colors"
              >
                {s.title}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {dict.services.map((svc, idx) => {
          const Icon = getServiceIcon(svc.id);
          const reverse = idx % 2 === 1;
          return (
            <section
              key={svc.id}
              id={svc.id}
              className="scroll-mt-24 py-16 md:py-24 border-b border-border last:border-b-0"
            >
              <MotionIn>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start ${
                    reverse ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3">
                      <span className="inline-grid place-items-center w-11 h-11 rounded-xl border border-border bg-surface text-accent">
                        <Icon size={20} />
                      </span>
                      <span className="text-xs font-mono uppercase tracking-widest text-muted">
                        {String(idx + 1).padStart(2, "0")} /{" "}
                        {String(dict.services.length).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance">
                      {svc.title}
                    </h2>
                    <p className="mt-5 text-lg text-foreground/90 text-pretty leading-relaxed">
                      {svc.tagline}
                    </p>
                    <p className="mt-4 text-muted leading-relaxed text-pretty">
                      {svc.short}
                    </p>
                    <Link
                      href={`/${locale}/contacto`}
                      className="mt-8 inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover group"
                    >
                      {p.ctaService}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>

                  <div className="lg:col-span-7">
                    <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
                      <div className="text-xs uppercase tracking-widest text-muted mb-4">
                        {dict.common.includes}
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                        {svc.items.map((it) => (
                          <li
                            key={it}
                            className="flex items-start gap-3 text-sm leading-relaxed"
                          >
                            <span className="shrink-0 mt-0.5 text-accent">
                              <Check size={15} />
                            </span>
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </MotionIn>
            </section>
          );
        })}
      </div>

      <HomeContact lang={locale} dict={dict} />
    </>
  );
}
