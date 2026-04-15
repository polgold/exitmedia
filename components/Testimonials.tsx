import { SectionLabel, SectionTitle } from "./ui/Section";
import { MotionIn } from "./ui/MotionIn";
import { Quote } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";

type Props = { dict: Pick<Dictionary, "testimonials"> };

export function Testimonials({ dict }: Props) {
  const t = dict.testimonials;
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>{t.label}</SectionLabel>
          <SectionTitle>
            {t.titlePrefix}
            <span className="italic text-accent">{t.titleHighlight}</span>
            {t.titleSuffix}
          </SectionTitle>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.items.map((it, i) => (
            <MotionIn key={i} delay={i * 0.08}>
              <figure className="h-full rounded-2xl border border-border bg-surface p-7 flex flex-col">
                <Quote className="text-accent" size={18} />
                <blockquote className="mt-4 text-foreground text-pretty leading-relaxed">
                  {it.quote}
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border text-sm">
                  <div className="font-medium">{it.author}</div>
                  <div className="text-muted">{it.role}</div>
                </figcaption>
              </figure>
            </MotionIn>
          ))}
        </div>
      </div>
    </section>
  );
}
