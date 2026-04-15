"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionLabel, SectionTitle } from "./ui/Section";
import type { Dictionary } from "@/lib/i18n/types";

type Props = { dict: Pick<Dictionary, "faq"> };

export function FAQ({ dict }: Props) {
  const [open, setOpen] = useState<number | null>(0);
  const f = dict.faq;

  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionLabel>{f.label}</SectionLabel>
          <SectionTitle>
            {f.titlePrefix}
            <span className="italic text-accent">{f.titleHighlight}</span>
            {f.titleSuffix}
          </SectionTitle>
          <p className="mt-6 text-muted text-pretty leading-relaxed">
            {f.helper}
          </p>
        </div>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-border border-y border-border">
            {f.items.map((it, i) => {
              const isOpen = open === i;
              const panelId = `faq-panel-${i}`;
              const buttonId = `faq-button-${i}`;
              return (
                  <li key={i}>
                    <h3 className="font-normal m-0">
                      <button
                        id={buttonId}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="w-full flex items-start justify-between gap-6 py-5 text-left group"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                      >
                        <span className="font-display text-xl md:text-2xl leading-snug tracking-tight group-hover:text-accent transition-colors">
                          {it.q}
                        </span>
                        <span
                          aria-hidden
                          className={`shrink-0 mt-1 grid place-items-center w-8 h-8 rounded-full border border-border transition-all ${
                            isOpen ? "rotate-45 bg-accent text-background border-accent" : ""
                          }`}
                        >
                          <Plus size={14} />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                      className={`grid transition-all duration-300 ${
                        isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-muted max-w-2xl leading-relaxed text-pretty pr-10">
                          {it.a}
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
