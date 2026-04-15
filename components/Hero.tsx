"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type Props = {
  lang: Locale;
  dict: Pick<Dictionary, "hero">;
};

export function Hero({ lang, dict }: Props) {
  const reduce = useReducedMotion();
  const h = dict.hero;

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
        <motion.div
          {...fade(0)}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {h.badge}
        </motion.div>

        <motion.h1
          {...fade(0.08)}
          className="font-display text-[clamp(2.75rem,6.8vw,5.75rem)] leading-[1.02] tracking-[-0.02em] mt-6 text-balance"
        >
          {h.titlePrefix}
          <br />
          {h.titleMiddle}
          <span className="italic text-accent">{h.titleHighlight}</span>
          <br />
          {h.titleSuffix}
        </motion.h1>

        <motion.p
          {...fade(0.16)}
          className="mt-8 text-lg md:text-xl text-muted max-w-2xl text-pretty leading-relaxed"
        >
          {h.subtitle}
        </motion.p>

        <motion.div
          {...fade(0.24)}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            href={`/${lang}/contacto`}
            className="group inline-flex items-center gap-2 h-12 pl-5 pr-4 rounded-full bg-foreground text-background font-medium hover:bg-accent transition-colors"
          >
            {h.ctaPrimary}
            <span className="grid place-items-center w-7 h-7 rounded-full bg-background/20 group-hover:translate-x-1 transition-transform">
              <ArrowRight size={14} />
            </span>
          </Link>
          <Link
            href={`/${lang}/trabajos`}
            className="inline-flex items-center gap-2 h-12 px-5 rounded-full border border-border hover:border-accent/60 hover:text-accent transition-colors"
          >
            {h.ctaSecondary}
          </Link>
        </motion.div>

        <motion.div
          {...fade(0.34)}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-4xl"
        >
          {h.stats.map((it) => (
            <div key={it.k}>
              <div className="font-display text-2xl md:text-3xl leading-none">
                <Sparkles
                  className="inline mr-2 text-accent align-middle"
                  size={16}
                />
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
