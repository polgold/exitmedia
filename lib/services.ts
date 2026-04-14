import {
  Code2,
  ShoppingBag,
  LayoutDashboard,
  Smartphone,
  Sparkles,
  Feather,
  Search,
  Server,
  Compass,
  LifeBuoy,
  Palette,
  Boxes,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  short: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "web",
    icon: Code2,
    title: "Diseño y desarrollo web",
    tagline: "Sitios que se sienten cuidados al detalle.",
    short:
      "Institucionales, landings, micrositios y rediseños — con foco en velocidad, SEO y conversión.",
    items: [
      "Sitios institucionales y corporativos",
      "Landing pages de conversión",
      "Micrositios para campañas",
      "Rediseño y modernización de sitios existentes",
      "Migración de plataformas (Wix/Squarespace/Blogger → WordPress/Next.js)",
      "Sitios multilenguaje (i18n)",
      "Optimización de velocidad y Core Web Vitals",
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "E-commerce / Tiendas online",
    tagline: "Tiendas que venden, no solo se ven bien.",
    short:
      "WooCommerce, Shopify, TiendaNube o headless con Next.js — integradas con medios de pago y envíos argentinos.",
    items: [
      "WooCommerce (WordPress) a medida",
      "Tiendas headless (Next.js + WooCommerce API)",
      "Shopify — setup y customización",
      "TiendaNube para el mercado argentino",
      "Integración con MercadoPago, Stripe y PayPal",
      "Integración con Andreani, OCA y Correo Argentino",
      "Catálogo con filtros y búsqueda",
      "Carrito, checkout y gestión de órdenes",
      "Dashboards de ventas y reportes",
      "Email transaccional y automatización post-venta",
    ],
  },
  {
    id: "apps",
    icon: LayoutDashboard,
    title: "Aplicaciones web",
    tagline: "Herramientas internas a tu medida.",
    short:
      "Dashboards, CRMs livianos, portales de clientes y sistemas de gestión hechos a la forma en que tu equipo trabaja.",
    items: [
      "Dashboards y paneles de administración",
      "Herramientas internas para empresas",
      "Sistemas de reservas y turnos",
      "CRMs simples a medida",
      "Portales de clientes",
      "Plataformas de contenido y cursos online",
      "Sistemas de gestión de proyectos",
      "Formularios avanzados con lógica condicional",
      "Calculadoras y cotizadores online",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Aplicaciones móviles",
    tagline: "PWAs y apps nativas cuando tiene sentido.",
    short:
      "Preferimos PWAs por velocidad de entrega, pero también hacemos React Native / Expo cuando el caso lo pide.",
    items: [
      "PWAs: apps desde el navegador con instalación en home",
      "React Native / Expo para iOS y Android",
      "Apps de catálogo y showroom",
      "Apps de fidelización y loyalty",
      "Apps de gestión interna",
    ],
  },
  {
    id: "ai",
    icon: Sparkles,
    title: "Inteligencia artificial aplicada",
    tagline: "IA donde realmente mueve la aguja.",
    short:
      "Chatbots, automatizaciones, integraciones con OpenAI y Anthropic, y MCP servers para controlar tu sitio desde Claude.",
    items: [
      "Chatbots con IA para atención al cliente",
      "Asistentes virtuales para e-commerce",
      "Generación de contenido con IA (descripciones, posts, alt-texts)",
      "Integración de APIs (OpenAI, Anthropic, ElevenLabs)",
      "Automatización de procesos con IA",
      "Conexión MCP: controlar WordPress/WooCommerce desde Claude",
      "Voice cloning y text-to-speech para producción",
      "Generación de imágenes para e-commerce y redes",
    ],
  },
  {
    id: "wordpress",
    icon: Boxes,
    title: "WordPress especializado",
    tagline: "Sabemos lo que rompe y cómo arreglarlo.",
    short:
      "Plugins y temas a medida, hardening, migración a hosting optimizado y mantenimiento mensual serio.",
    items: [
      "Desarrollo de plugins a medida",
      "Desarrollo de temas custom",
      "Optimización y hardening de seguridad",
      "Migración a hosting optimizado",
      "Configuración avanzada de WooCommerce",
      "Integración con APIs externas",
      "Mantenimiento mensual (updates, backups, monitoreo)",
    ],
  },
  {
    id: "branding",
    icon: Palette,
    title: "Branding digital",
    tagline: "Una identidad que viaja bien por todos lados.",
    short:
      "Logo, paleta, tipografía, templates para redes, email y presentaciones. Coordinado con Sun Factory cuando hay que filmar.",
    items: [
      "Identidad visual (logo, paleta, tipografía)",
      "Manual de marca digital",
      "Templates para redes sociales",
      "Email marketing (templates HTML)",
      "Presentaciones y pitch decks",
      "Packaging digital (mockups, catálogos PDF)",
      "Fotografía de producto (coordinado con Sun Factory)",
    ],
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO y visibilidad",
    tagline: "Para Google, para AI y para humanos.",
    short:
      "Auditorías técnicas, on-page, contenido y la nueva disciplina: AEO — optimizar para las respuestas generadas por IA.",
    items: [
      "Auditoría SEO técnica",
      "Optimización on-page (titles, metas, schema)",
      "Estrategia de contenido / blog",
      "SEO local (Google Business Profile)",
      "AEO — optimización para AI search",
      "Setup de Google Analytics 4 + Search Console",
      "Reportes mensuales de performance",
    ],
  },
  {
    id: "hosting",
    icon: Server,
    title: "Hosting e infraestructura",
    tagline: "Que todo esté prendido, rápido y seguro.",
    short:
      "Setup y operación de hosting, DNS, SSL, emails, CDN y backups automatizados.",
    items: [
      "Hosting (Hostinger, Vercel, Netlify, DigitalOcean)",
      "Configuración de dominio y DNS",
      "Certificados SSL",
      "CDN y optimización de velocidad",
      "Emails corporativos",
      "Backups automáticos",
      "Monitoreo de uptime",
    ],
  },
  {
    id: "consulting",
    icon: Compass,
    title: "Consultoría digital",
    tagline: "Una segunda opinión cuesta menos que equivocarse.",
    short:
      "Auditorías, selección de tecnología, planificación de MVP y mentoría para equipos que están empezando con IA.",
    items: [
      "Auditoría digital completa (sitio, redes, SEO, competencia)",
      "Estrategia de presencia online",
      "Selección de plataforma y tecnología",
      "Planificación de MVP",
      "Mentoría técnica para emprendedores",
      "Workshop de herramientas AI para equipos",
      "Asesoramiento en automatización de procesos",
    ],
  },
  {
    id: "maintenance",
    icon: LifeBuoy,
    title: "Mantenimiento y soporte",
    tagline: "Un sitio vivo necesita cuidado continuo.",
    short:
      "Planes mensuales con updates, backups, monitoreo y horas de desarrollo incluidas — por ticket o WhatsApp.",
    items: [
      "Planes mensuales de mantenimiento web",
      "Actualizaciones de WordPress, plugins y temas",
      "Backups diarios/semanales",
      "Monitoreo de seguridad",
      "Soporte por ticket, email o WhatsApp",
      "Horas de desarrollo mensual incluidas",
      "Reportes mensuales de estado",
    ],
  },
  {
    id: "products",
    icon: Feather,
    title: "Productos propios",
    tagline: "Lo que construimos cuando tenemos tiempo.",
    short:
      "Herramientas propias que nacen de proyectos reales y resuelven problemas que nos cruzamos todo el tiempo.",
    items: [
      "StoreMCP — plugin de WordPress para controlar WooCommerce desde IA",
      "Gallery Builder — portfolios livianos para fotógrafos",
      "Proposal Generator — generador de presupuestos para productoras",
    ],
  },
];

export function getServiceById(id: string) {
  return services.find((s) => s.id === id);
}
