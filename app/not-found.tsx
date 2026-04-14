import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] grid place-items-center px-6">
      <div className="text-center max-w-lg">
        <div className="font-mono text-xs uppercase tracking-widest text-muted">
          Error 404
        </div>
        <h1 className="font-display text-6xl md:text-8xl leading-none mt-4 tracking-tight">
          Esta página <span className="italic text-accent">voló</span>.
        </h1>
        <p className="mt-6 text-muted text-pretty">
          O nunca existió. Lo cual es más probable. Volvé al inicio y probamos
          de nuevo.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center h-11 px-5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-accent transition-colors"
          >
            Volver al inicio
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center h-11 px-5 rounded-full border border-border text-sm hover:border-accent/60 hover:text-accent transition-colors"
          >
            Reportar el error
          </Link>
        </div>
      </div>
    </section>
  );
}
