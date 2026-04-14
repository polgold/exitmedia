export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  excerpt: string;
  cover: string;
  image: string;
  imageAlt: string;
  url?: string;
  status?: "live" | "in-progress" | "coming-soon";
  tags: string[];
  challenge: string;
  solution: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    slug: "italmarket",
    title: "Italmarket",
    category: "E-commerce headless",
    year: "2026",
    excerpt:
      "Supermercado de productos italianos con tienda headless Next.js sobre WooCommerce.",
    cover: "italmarket",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Productos italianos en estantería de mercado",
    url: "https://italmarket.com.ar",
    status: "live",
    tags: ["Next.js", "WooCommerce", "Headless", "MercadoPago"],
    challenge:
      "Un supermercado especializado necesitaba una tienda online que cargara rápido, indexara bien y permitiera al equipo cargar productos desde WordPress sin tocar código. El sitio anterior en Wix no escalaba ni rankeaba.",
    solution:
      "Construimos un frontend en Next.js 14 (App Router) que consume WooCommerce vía REST API, con caché incremental, imágenes optimizadas y checkout integrado a MercadoPago. El equipo gestiona catálogo desde el admin de WordPress de siempre — pero ven un sitio 10× más rápido.",
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
    title: "Sun Factory",
    category: "Productora audiovisual",
    year: "2025",
    excerpt:
      "Sitio de la productora de cine y contenidos comerciales, con reel dinámico y showreel de directores.",
    cover: "sunfactory",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Cámara de cine vintage en set de producción",
    url: "https://sunfactory.com.ar",
    status: "live",
    tags: ["Next.js", "Video", "Showreel", "Cinema"],
    challenge:
      "La productora necesitaba presentar un catálogo de directores y trabajos comerciales con la carga visual de un sitio de cine — pero que un cliente pudiera abrir desde el celular durante un meeting.",
    solution:
      "Un sitio minimal, tipografía editorial y un reel de apertura que adapta el bitrate al dispositivo. Cada director tiene su propio subsitio con selección curada. El CMS es headless para que la productora agregue proyectos sin desarrollador.",
    tech: [
      "Next.js",
      "Sanity CMS",
      "Mux (video)",
      "Framer Motion",
      "Vercel",
    ],
  },
  {
    slug: "store-mcp",
    title: "StoreMCP",
    category: "Producto propio · SaaS",
    year: "2026",
    excerpt:
      "Plugin de WordPress que expone WooCommerce como MCP server — controlá tu tienda desde Claude.",
    cover: "storemcp",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80&auto=format&fit=crop",
    imageAlt: "Visualización abstracta de inteligencia artificial",
    status: "coming-soon",
    tags: ["MCP", "WordPress", "WooCommerce", "AI"],
    challenge:
      "Los equipos de e-commerce pierden horas navegando el admin de WooCommerce para tareas repetitivas: crear cupones, subir productos, revisar stock, responder consultas. Los LLMs podrían hacerlo — pero no tienen acceso directo al sistema.",
    solution:
      "StoreMCP expone las operaciones clave de WooCommerce como herramientas MCP seguras, con permisos granulares por rol. Conectás Claude Desktop (o cualquier cliente MCP) a tu tienda y pedís 'creá un cupón de 20% para Black Friday que expire el 28' — y se hace. En desarrollo, beta cerrada próximamente.",
    tech: [
      "PHP / WordPress",
      "MCP Protocol",
      "WooCommerce REST",
      "OAuth",
      "Claude Desktop",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
