import Link from "next/link";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { defaultLocale } from "@/lib/i18n/config";

export default async function NotFound() {
  const dict = await getDictionary(defaultLocale);
  const n = dict.notFound;
  return (
    <section className="min-h-[70vh] grid place-items-center px-6">
      <div className="text-center max-w-lg">
        <div className="font-mono text-xs uppercase tracking-widest text-muted">
          {n.code}
        </div>
        <h1 className="font-display text-6xl md:text-8xl leading-none mt-4 tracking-tight">
          {n.titlePrefix}
          <span className="italic text-accent">{n.titleHighlight}</span>
          {n.titleSuffix}
        </h1>
        <p className="mt-6 text-muted text-pretty">{n.body}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={`/${defaultLocale}`}
            className="inline-flex items-center h-11 px-5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-accent transition-colors"
          >
            {n.home}
          </Link>
          <Link
            href={`/${defaultLocale}/contacto`}
            className="inline-flex items-center h-11 px-5 rounded-full border border-border text-sm hover:border-accent/60 hover:text-accent transition-colors"
          >
            {n.report}
          </Link>
        </div>
      </div>
    </section>
  );
}
