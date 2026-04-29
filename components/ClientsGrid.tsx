import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { clients } from "@/lib/clients";
import { SectionLabel, SectionTitle } from "./ui/Section";
import { MotionIn } from "./ui/MotionIn";
import type { Dictionary } from "@/lib/i18n/types";

type Props = {
  dict: Pick<Dictionary, "clientsSection">;
};

export function ClientsGrid({ dict }: Props) {
  const c = dict.clientsSection;

  return (
    <section
      id="clientes"
      className="py-20 md:py-28 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>{c.label}</SectionLabel>
          <SectionTitle>
            {c.titlePrefix}
            <span className="italic text-accent">{c.titleHighlight}</span>
            {c.titleSuffix}
          </SectionTitle>
          <p className="mt-6 text-lg text-muted leading-relaxed text-pretty">
            {c.intro}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, i) => (
            <MotionIn key={client.domain} delay={i * 0.04}>
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${c.visitLabel} ${client.name} (${client.domain})`}
                className="group block relative overflow-hidden rounded-2xl border border-border bg-surface"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <Image
                    src={client.image}
                    alt={`${c.previewAltPrefix} ${client.name}`}
                    fill
                    loading="lazy"
                    className="object-cover object-top transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)",
                    }}
                  />
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <div className="min-w-0">
                    <div className="font-display text-xl leading-tight truncate">
                      {client.name}
                    </div>
                    <div className="mt-1 text-xs text-muted truncate">
                      {client.domain}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-muted shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </div>
              </a>
            </MotionIn>
          ))}
        </div>
      </div>
    </section>
  );
}
