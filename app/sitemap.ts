import type { MetadataRoute } from "next";
import { getAllPostsMeta } from "@/lib/blog";
import { projects } from "@/lib/projects";

const BASE = "https://exitmedia.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, priority: 1 },
    { url: `${BASE}/servicios`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/trabajos`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/contacto`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/sobre-nosotros`, lastModified: now, priority: 0.7 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE}/trabajos/${p.slug}`,
    lastModified: now,
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllPostsMeta().map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
