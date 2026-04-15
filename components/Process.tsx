import { SectionLabel, SectionTitle } from "./ui/Section";
import { MotionIn } from "./ui/MotionIn";
import type { Dictionary } from "@/lib/i18n/types";

type Props = { dict: Pick<Dictionary, "process"> };

export function Process({ dict }: Props) {
  const p = dict.process;
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>{p.label}</SectionLabel>
          <SectionTitle>
            {p.titlePrefix}
            <span className="italic text-accent">{p.titleHighlight}</span>
            {p.titleSuffix}
          </SectionTitle>
          <p className="mt-6 text-lg text-muted text-pretty leading-relaxed">
            {p.intro}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {p.steps.map((s, i) => (
            <MotionIn key={s.n} delay={i * 0.06}>
              <div className="h-full bg-background p-7">
                <div className="font-mono text-xs text-muted">
                  {s.n} · {p.stepLabel}
                </div>
                <h3 className="font-display text-3xl leading-none mt-4 tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm text-muted leading-relaxed">
                  {s.body}
                </p>
              </div>
            </MotionIn>
          ))}
        </div>
      </div>
    </section>
  );
}
