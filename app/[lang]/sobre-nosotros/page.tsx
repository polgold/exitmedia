import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MotionIn } from "@/components/ui/MotionIn";
import { Zap, Eye, Gauge, Bot, ArrowUpRight, type LucideIcon } from "lucide-react";
import { HomeContact } from "@/components/HomeContact";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n/config";

type PageParams = Promise<{ lang: string }>;

const valueIcons: Record<string, LucideIcon> = {
  speed: Zap,
  clarity: Eye,
  quality: Gauge,
  ai: Bot,
};

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.pageAbout.title,
    description: dict.pageAbout.description,
  };
}

export default async function SobreNosotrosPage({
  params,
}: {
  params: PageParams;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const a = dict.pageAbout;

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
            {a.label}
          </div>
          <h1 className="font-display text-[clamp(2.75rem,6.8vw,5.5rem)] leading-[1.02] tracking-[-0.02em] mt-6 text-balance max-w-4xl">
            {a.heroPrefix}
            <span className="italic text-accent">{a.heroHighlight}</span>
            {a.heroSuffix}
          </h1>
          <p className="mt-10 text-xl text-muted leading-relaxed text-pretty max-w-3xl">
            {a.heroIntroPrefix}
            <a
              href="https://sunfactory.com.ar"
              target="_blank"
              rel="noreferrer"
              className="text-foreground hover:text-accent underline underline-offset-4 decoration-accent/40"
            >
              Sun Factory
            </a>
            {a.heroIntroSuffix}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl border border-border overflow-hidden bg-surface">
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80&auto=format&fit=crop"
                alt={a.imageAltTeam}
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
                  {a.studioTag}
                </div>
                <div className="font-display text-2xl mt-1 leading-tight">
                  {a.studioCity}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <MotionIn>
              <div className="text-xs uppercase tracking-widest text-muted">
                {a.howWeGotHereLabel}
              </div>
              <div className="mt-5 space-y-5 text-lg leading-relaxed text-pretty">
                {a.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </MotionIn>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
            <span className="w-6 h-px bg-accent" />
            {a.valuesLabel}
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.015em] text-balance max-w-3xl">
            {a.valuesTitle}
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {a.values.map((v, i) => {
              const Icon = valueIcons[v.id] || Zap;
              return (
                <MotionIn key={v.id} delay={i * 0.06}>
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
              {a.approachLabel}
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] tracking-[-0.015em] text-balance">
              {a.approachTitlePrefix}
              <span className="italic text-accent">
                {a.approachTitleHighlight}
              </span>
              {a.approachTitleSuffix}
            </h2>

            <div className="mt-8 relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
              <Image
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80&auto=format&fit=crop"
                alt={a.imageAltAI}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
          <div className="lg:col-span-7 text-lg leading-relaxed text-pretty space-y-5">
            {a.approachParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <ul className="space-y-3 pl-5">
              {a.approachBullets.map((b, i) => (
                <li key={i} className="list-disc">
                  <strong>{b.strong}</strong>
                  {b.rest}
                </li>
              ))}
            </ul>
            <p>{a.approachFooter}</p>

            <div className="pt-6">
              <Link
                href={`/${locale}/servicios`}
                className="group inline-flex items-center gap-2 text-accent hover:text-accent-hover"
              >
                {a.approachCta}
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HomeContact lang={locale} dict={dict} />
    </>
  );
}
