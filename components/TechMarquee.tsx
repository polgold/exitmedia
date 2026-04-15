const tech = [
  "Next.js",
  "React",
  "WordPress",
  "WooCommerce",
  "Tailwind",
  "Vercel",
  "Supabase",
  "Node.js",
  "Python",
  "Figma",
  "Claude AI",
  "MCP",
  "TypeScript",
  "Shopify",
  "TiendaNube",
  "MercadoPago",
];

export function TechMarquee() {
  const items = [...tech, ...tech];
  return (
    <section
      aria-hidden
      className="border-y border-border py-6 bg-surface-2/40 overflow-hidden"
    >
      <div className="flex animate-marquee whitespace-nowrap gap-10 will-change-transform">
        {items.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-sm text-muted"
          >
            <span className="text-accent">●</span>
            <span className="font-mono">{t}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
