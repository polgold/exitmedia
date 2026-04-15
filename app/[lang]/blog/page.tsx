import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostsMeta } from "@/lib/blog";
import { MotionIn } from "@/components/ui/MotionIn";
import { ArrowUpRight } from "lucide-react";
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
    title: dict.pageBlog.title,
    description: dict.pageBlog.description,
  };
}

const tints: Record<string, string> = {
  mcp: "rgba(17, 19, 24, 0.45)",
  platforms: "rgba(26, 58, 92, 0.45)",
  "ai-ecommerce": "rgba(45, 27, 61, 0.45)",
  default: "rgba(20, 20, 20, 0.45)",
};

function formatDate(d: string, dateLocale: string) {
  return new Date(d).toLocaleDateString(dateLocale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function BlogPage({ params }: { params: PageParams }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const p = dict.pageBlog;
  const posts = getAllPostsMeta(locale, dict.readingTime);
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, var(--accent-soft), transparent 60%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 md:pt-28 pb-16 md:pb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
            <span className="w-6 h-px bg-accent" />
            {p.label}
          </div>
          <h1 className="font-display text-[clamp(2.75rem,6.8vw,5.25rem)] leading-[1.02] tracking-[-0.02em] mt-6 text-balance max-w-4xl">
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
        {featured && featured.image && (
          <MotionIn>
            <Link
              href={`/${locale}/blog/${featured.slug}`}
              className="group block rounded-2xl border border-border overflow-hidden hover:border-accent/60 transition-colors bg-surface"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px]">
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt || featured.title}
                    fill
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, ${
                        tints[featured.cover || "default"] || tints.default
                      } 0%, rgba(0,0,0,0.65) 100%)`,
                    }}
                  />
                  <div className="absolute top-5 left-5 inline-flex items-center gap-2 h-7 px-3 rounded-full text-[10px] uppercase tracking-widest bg-accent text-background font-medium">
                    {dict.common.featured}
                  </div>
                </div>
                <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-between gap-8">
                  <div>
                    <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted">
                      <span>{featured.category}</span>
                      <span>·</span>
                      <span>{featured.readingTime}</span>
                    </div>
                    <h2 className="mt-5 font-display text-3xl md:text-4xl leading-[1.08] tracking-[-0.015em] text-balance">
                      {featured.title}
                    </h2>
                    <p className="mt-4 text-muted leading-relaxed text-pretty">
                      {featured.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted">
                    <span>{formatDate(featured.date, dict.readingTime.dateLocale)}</span>
                    <span className="inline-flex items-center gap-1 text-foreground group-hover:text-accent">
                      {dict.common.readArticle} <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </MotionIn>
        )}

        {rest.length > 0 && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((post, i) => {
              const tint = tints[post.cover || "default"] || tints.default;
              return (
                <MotionIn key={post.slug} delay={i * 0.05}>
                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="group block rounded-2xl border border-border overflow-hidden hover:border-accent/60 transition-colors bg-surface"
                  >
                    {post.image && (
                      <div className="relative aspect-[5/3]">
                        <Image
                          src={post.image}
                          alt={post.imageAlt || post.title}
                          fill
                          className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div
                          aria-hidden
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(180deg, ${tint} 0%, rgba(0,0,0,0.55) 100%)`,
                          }}
                        />
                        <div className="absolute top-4 left-4 inline-flex items-center h-6 px-2.5 rounded-full text-[10px] uppercase tracking-widest bg-black/55 text-white backdrop-blur">
                          {post.category}
                        </div>
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted">
                        <span>{post.readingTime}</span>
                        <span>·</span>
                        <span>{formatDate(post.date, dict.readingTime.dateLocale)}</span>
                      </div>
                      <h2 className="mt-3 font-display text-xl md:text-2xl leading-[1.12] tracking-[-0.015em] text-balance font-normal">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-sm text-muted line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="mt-5 flex items-center justify-end text-xs">
                        <span className="inline-flex items-center gap-1 text-foreground group-hover:text-accent">
                          {dict.common.read} <ArrowUpRight size={12} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </MotionIn>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
