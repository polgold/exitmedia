import type { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/blog";
import { projectMeta } from "@/lib/projects";
import { locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

const BASE = "https://exitmedia.com.ar";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticPaths = [
    { path: "", priority: 1 },
    { path: "/servicios", priority: 0.9 },
    { path: "/trabajos", priority: 0.9 },
    { path: "/blog", priority: 0.8 },
    { path: "/contacto", priority: 0.8 },
    { path: "/sobre-nosotros", priority: 0.7 },
  ];

  const staticRoutes: MetadataRoute.Sitemap = [];
  for (const lang of locales) {
    for (const { path, priority } of staticPaths) {
      staticRoutes.push({
        url: `${BASE}/${lang}${path}`,
        lastModified: now,
        priority,
      });
    }
  }

  const projectRoutes: MetadataRoute.Sitemap = [];
  for (const lang of locales) {
    for (const p of projectMeta) {
      projectRoutes.push({
        url: `${BASE}/${lang}/trabajos/${p.slug}`,
        lastModified: now,
        priority: 0.7,
      });
    }
  }

  const blogRoutes: MetadataRoute.Sitemap = [];
  for (const lang of locales) {
    const dict = await getDictionary(lang);
    for (const post of getAllPostsMeta(lang, dict.readingTime)) {
      blogRoutes.push({
        url: `${BASE}/${lang}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        priority: 0.6,
      });
    }
  }

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
