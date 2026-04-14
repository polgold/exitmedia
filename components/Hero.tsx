"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const reduce = useReducedMotion();

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay },
  });

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, var(--accent-soft), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-[1px] w-[120%] -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--border) 20%, var(--border) 80%, transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 md:pt-28 pb-20 md:pb-28">
        <motion.div {...fade(0)} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Estudio digital · Buenos Aires
        </motion.div>

        <motion.h1
          {...fade(0.08)}
          className="font-display text-[clamp(2.75rem,6.8vw,5.75rem)] leading-[1.02] tracking-[-0.02em] mt-6 text-balance"
        >
          Diseñamos, desarrollamos
          <br />
          y lanzamos tu{" "}
          <span className="italic text-accent">próximo</span>
          <br />
          proyecto digital.
        </motion.h1>

        <motion.p
          {...fade(0.16)}
          className="mt-8 text-lg md:text-xl text-muted max-w-2xl text-pretty leading-relaxed"
        >
          Sitios web, tiendas online, aplicaciones y herramientas con
          inteligencia artificial — desde Buenos Aires para el mundo. Rápido,
          cuidado, sin pretensiones.
        </motion.p>

        <motion.div {...fade(0.24)} className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/contacto"
            className="group inline-flex items-center gap-2 h-12 pl-5 pr-4 rounded-full bg-foreground text-background font-medium hover:bg-accent transition-colors"
          >
            Hablemos de tu proyecto
            <span className="grid place-items-center w-7 h-7 rounded-full bg-background/20 group-hover:translate-x-1 transition-transform">
              <ArrowRight size={14} />
            </span>
          </Link>
          <Link
            href="/trabajos"
            className="inline-flex items-center gap-2 h-12 px-5 rounded-full border border-border hover:border-accent/60 hover:text-accent transition-colors"
          >
            Ver trabajos
          </Link>
        </motion.div>

        <motion.div
          {...fade(0.34)}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-4xl"
        >
          {[
            { k: "2026", v: "Nueva división digital de Sun Factory" },
            { k: "AI-first", v: "Claude Code + Cursor como motor de desarrollo" },
            { k: "Full-stack", v: "Web, e-commerce, apps, IA, hosting" },
            { k: "Buenos Aires", v: "Trabajamos con clientes en 3 continentes" },
          ].map((it) => (
            <div key={it.k}>
              <div className="font-display text-2xl md:text-3xl leading-none">
                <Sparkles className="inline mr-2 text-accent align-middle" size={16} />
                {it.k}
              </div>
              <p className="mt-2 text-sm text-muted leading-snug">{it.v}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
