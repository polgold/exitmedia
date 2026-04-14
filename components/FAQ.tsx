"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionLabel, SectionTitle } from "./ui/Section";

const faqs = [
  {
    q: "¿Cuánto cuesta un sitio web?",
    a: "Depende del alcance. Una landing bien hecha puede arrancar desde USD 500. Un sitio institucional con 5–8 páginas, desde USD 1.200. Una tienda online, desde USD 2.000. Te pasamos un presupuesto cerrado después de una primera charla, sin costo.",
  },
  {
    q: "¿Cuánto tarda un proyecto?",
    a: "Una landing: 7–14 días. Un sitio institucional: 3–5 semanas. Una tienda online: 4–8 semanas. Una app web a medida: 6–12 semanas. Siempre te damos un cronograma con entregas parciales para que veas avances desde la primera semana.",
  },
  {
    q: "¿Trabajan con clientes fuera de Argentina?",
    a: "Sí — más de la mitad de nuestros clientes son de afuera. Facturamos en USD y trabajamos habitualmente con clientes de EE.UU., España, México, Uruguay y Chile. Para clientes argentinos facturamos en ARS o USD según prefieran.",
  },
  {
    q: "¿Qué pasa después del lanzamiento?",
    a: "Ofrecemos planes mensuales de mantenimiento que incluyen updates, backups, monitoreo y horas de desarrollo. Si preferís no tomar un plan, también hacemos trabajos por hora o por proyecto cuando lo necesites.",
  },
  {
    q: "¿Qué tecnologías usan?",
    a: "Para sitios institucionales: WordPress o Next.js según el caso. Para tiendas: WooCommerce, Shopify, TiendaNube o headless. Para apps: Next.js + Supabase + Vercel. Para IA: Claude, OpenAI, ElevenLabs y MCP. Elegimos la herramienta según el problema, no al revés.",
  },
  {
    q: "¿Por qué dicen que son 'AI-first'?",
    a: "Usamos Claude Code y Cursor como motor de desarrollo. Eso significa entregas más rápidas, presupuestos más accesibles y más tiempo para pensar la estrategia y el diseño. No reemplaza el criterio humano — lo potencia.",
  },
  {
    q: "¿Pueden ayudarnos con el contenido?",
    a: "Sí. Podemos redactar textos, ayudar con SEO, generar descripciones de productos con IA supervisada por humanos, y coordinar producción audiovisual a través de Sun Factory (fotos, videos, reels).",
  },
  {
    q: "¿Hacen solo el diseño, sin desarrollo?",
    a: "Sí, también. Si ya tenés equipo técnico, hacemos el diseño en Figma y te entregamos un sistema documentado listo para implementar. O si querés solo una auditoría o consultoría, también trabajamos así.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <SectionTitle>
            Las dudas que se repiten <span className="italic text-accent">siempre</span>.
          </SectionTitle>
          <p className="mt-6 text-muted text-pretty leading-relaxed">
            Si la tuya no está acá, escribinos. La próxima vez la agregamos.
          </p>
        </div>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-border border-y border-border">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-6 py-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-xl md:text-2xl leading-snug tracking-tight group-hover:text-accent transition-colors">
                      {f.q}
                    </span>
                    <span
                      className={`shrink-0 mt-1 grid place-items-center w-8 h-8 rounded-full border border-border transition-all ${
                        isOpen ? "rotate-45 bg-accent text-background border-accent" : ""
                      }`}
                    >
                      <Plus size={14} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-muted max-w-2xl leading-relaxed text-pretty pr-10">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
