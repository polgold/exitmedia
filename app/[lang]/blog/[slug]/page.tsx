import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getAllPostsMeta, getPostBySlug } from "@/lib/blog";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { locales, isLocale, type Locale } from "@/lib/i18n/config";

type PageParams = Promise<{ lang: string; slug: string }>;

export function generateStaticParams() {
  const out: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    for (const slug of getAllPostSlugs(lang)) out.push({ lang, slug });
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
  const post = await getPostBySlug(lang, slug, dict.readingTime);
  if (!post) return { title: dict.pageBlog.notFoundTitle };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
    },
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
    month: "long",
    year: "numeric",
  });
}

export default async function PostPage({ params }: { params: PageParams }) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const post = await getPostBySlug(locale, slug, dict.readingTime);
  if (!post) notFound();

  const pp = dict.pagePost;
  const tint = tints[post.cover || "default"] || tints.default;
  const related = getAllPostsMeta(locale, dict.readingTime)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const BASE = "https://exitmedia.com.ar";
  const postUrl = `${BASE}/${locale}/blog/${post.slug}`;
  const postJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: dict.metadata.siteName, item: `${BASE}/${locale}` },
          { "@type": "ListItem", position: 2, name: dict.pageBlog.label, item: `${BASE}/${locale}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
        ],
      },
      {
        "@type": "BlogPosting",
        "@id": postUrl,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        articleSection: post.category,
        inLanguage: locale === "es" ? "es-AR" : locale === "en" ? "en-US" : "pt-BR",
        author: post.author
          ? { "@type": "Person", name: post.author }
          : { "@type": "Organization", "@id": `${BASE}/#org` },
        publisher: { "@id": `${BASE}/#org` },
        mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
        ...(post.image && { image: post.image }),
      },
    ],
  };

  return (
    <>
      <div className="mx-auto max-w-3xl px-6 lg:px-8 pt-10">
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent"
        >
          <ArrowLeft size={14} /> {pp.backToBlog}
        </Link>
      </div>

      <article className="mx-auto max-w-3xl px-6 lg:px-8 pt-10 md:pt-14 pb-20">
        <div className="text-xs uppercase tracking-widest text-muted flex items-center gap-3">
          <span>{post.category}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
          <span>·</span>
          <time dateTime={post.date}>
            {formatDate(post.date, dict.readingTime.dateLocale)}
          </time>
        </div>

        <h1 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em] mt-5 text-balance">
          {post.title}
        </h1>

        <p className="mt-6 text-xl text-muted leading-relaxed text-pretty">
          {post.excerpt}
        </p>

        {post.author && (
          <div className="mt-8 flex items-center gap-3 pb-8 border-b border-border">
            <span className="w-9 h-9 rounded-full bg-accent text-background grid place-items-center font-display text-lg">
              E
            </span>
            <div className="text-sm">
              <div className="font-medium">{post.author}</div>
              <div className="text-muted text-xs">{pp.authorOrg}</div>
            </div>
          </div>
        )}

        {post.image && (
          <div className="mt-10 relative aspect-[16/9] rounded-2xl overflow-hidden border border-border">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 768px"
              priority
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, ${tint} 0%, rgba(0,0,0,0.35) 100%)`,
              }}
            />
          </div>
        )}

        <div
          className="prose mt-12"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd) }}
      />

      {related.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-24 border-t border-border pt-16">
          <div className="text-xs uppercase tracking-widest text-muted mb-6">
            {pp.keepReading}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((p) => {
              const t = tints[p.cover || "default"] || tints.default;
              return (
                <Link
                  key={p.slug}
                  href={`/${locale}/blog/${p.slug}`}
                  className="group rounded-2xl border border-border overflow-hidden hover:border-accent/60 transition-colors bg-surface"
                >
                  {p.image && (
                    <div className="relative aspect-[5/3]">
                      <Image
                        src={p.image}
                        alt={p.imageAlt || p.title}
                        fill
                        className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 45vw"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(180deg, ${t} 0%, rgba(0,0,0,0.6) 100%)`,
                        }}
                      />
                    </div>
                  )}
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted">
                        {p.category}
                      </div>
                      <div className="font-display text-lg mt-1 line-clamp-2">
                        {p.title}
                      </div>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-muted group-hover:text-accent transition-colors"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
