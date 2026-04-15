import { projectMeta } from "@/lib/projects";
import { getAllPostsMeta } from "@/lib/blog";
import { locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

const BASE = "https://exitmedia.com.ar";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET() {
  const es = await getDictionary("es");
  const posts = getAllPostsMeta("es", es.readingTime);

  const servicePages = [
    { path: "/servicios", label: "Servicios — desarrollo web, e-commerce, apps, IA, WordPress" },
    { path: "/trabajos", label: "Trabajos — proyectos recientes de ExitMedia" },
    { path: "/blog", label: "Blog — artículos sobre IA, e-commerce y desarrollo" },
    { path: "/sobre-nosotros", label: "Sobre nosotros — equipo, historia y enfoque AI-first" },
    { path: "/contacto", label: "Contacto — pedir presupuesto o agendar una charla" },
  ];

  const projectLines = projectMeta
    .map((p) => {
      const tags = p.tags.slice(0, 3).join(", ");
      return `- [${p.slug}](${BASE}/es/trabajos/${p.slug}): ${tags}${p.url ? ` — sitio en producción: ${p.url}` : ""}`;
    })
    .join("\n");

  const postLines = posts
    .map((p) => `- [${p.title}](${BASE}/es/blog/${p.slug}): ${p.excerpt}`)
    .join("\n");

  const localeLines = locales
    .map((l) => `- [${l}](${BASE}/${l}): versión en ${l === "es" ? "español (Argentina)" : l === "en" ? "inglés" : "portugués (Brasil)"}`)
    .join("\n");

  const body = `# ExitMedia

> Agencia digital AI-first de Buenos Aires. Diseñamos y desarrollamos sitios web, tiendas online, aplicaciones y soluciones con inteligencia artificial. Nacida dentro de Sun Factory (productora audiovisual con 15+ años). Trabajamos con Next.js, WordPress, WooCommerce, Shopify, TiendaNube, Supabase, Claude, OpenAI y MCP.

ExitMedia entrega proyectos más rápido y más accesibles usando Claude Code y Cursor como motor de desarrollo, combinado con criterio humano en diseño, estrategia y producción audiovisual (a través de Sun Factory).

Sitio trilingüe (es-AR, en-US, pt-BR). Todo el contenido está disponible bajo ${BASE}/{lang}/...

## Qué hacemos

- Desarrollo web (landings, institucionales, Next.js o WordPress)
- E-commerce (WooCommerce, Shopify, TiendaNube, headless)
- Aplicaciones web y dashboards a medida (Next.js + Supabase)
- Soluciones con IA (chatbots, agentes, automatizaciones, MCP)
- SEO técnico, hosting gestionado, mantenimiento mensual
- Branding digital y producción audiovisual (vía Sun Factory)

## Páginas principales (español)

${servicePages.map((s) => `- [${s.path}](${BASE}/es${s.path}): ${s.label}`).join("\n")}

## Idiomas

${localeLines}

## Proyectos destacados

${projectLines}

## Blog

${postLines}

## Contacto

- Email: hola@exitmedia.com.ar
- WhatsApp: +54 11 3651 1204
- Instagram: https://instagram.com/exitmediacontent
- Ubicación: Buenos Aires, Argentina
- Facturación: ARS o USD
- Clientes: Argentina, EE.UU., España, México, Uruguay, Chile

## Recursos para crawlers

- Sitemap: ${BASE}/sitemap.xml
- Robots: ${BASE}/robots.txt
- Contenido completo (markdown): ${BASE}/llms-full.txt
- Política de crawling: permitimos explícitamente a Googlebot y a crawlers de IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, OAI-SearchBot, etc.) indexar y citar el contenido público.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
