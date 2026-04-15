export type ProjectMeta = {
  slug: string;
  year: string;
  cover: string;
  image: string;
  url?: string;
  status?: "live" | "in-progress" | "coming-soon";
  tags: string[];
  tech: string[];
};

export const projectMeta: ProjectMeta[] = [
  {
    slug: "italmarket",
    year: "2026",
    cover: "italmarket",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=1600&q=80&auto=format&fit=crop",
    url: "https://italmarket.com.ar",
    status: "live",
    tags: ["Next.js", "WooCommerce", "Headless", "MercadoPago"],
    tech: [
      "Next.js 14",
      "WooCommerce REST API",
      "Tailwind CSS",
      "MercadoPago Checkout Pro",
      "Vercel",
      "Supabase (search)",
    ],
  },
  {
    slug: "sun-factory",
    year: "2025",
    cover: "sunfactory",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&q=80&auto=format&fit=crop",
    url: "https://sunfactory.com.ar",
    status: "live",
    tags: ["Next.js", "Video", "Showreel", "Cinema"],
    tech: ["Next.js", "Sanity CMS", "Mux (video)", "Framer Motion", "Vercel"],
  },
  {
    slug: "store-mcp",
    year: "2026",
    cover: "storemcp",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80&auto=format&fit=crop",
    url: "https://storemcp.io",
    status: "coming-soon",
    tags: ["MCP", "WordPress", "WooCommerce", "AI"],
    tech: [
      "PHP / WordPress",
      "MCP Protocol",
      "WooCommerce REST",
      "OAuth",
      "Claude Desktop",
    ],
  },
];

export function getProjectMeta(slug: string): ProjectMeta | undefined {
  return projectMeta.find((p) => p.slug === slug);
}

export const projectSlugs = projectMeta.map((p) => p.slug);
