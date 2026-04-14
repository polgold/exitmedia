import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 group ${className}`}>
      <span
        aria-hidden
        className="relative inline-grid place-items-center w-8 h-8 rounded-lg bg-foreground text-background font-display text-lg leading-none transition-transform group-hover:rotate-6"
      >
        <span className="translate-y-[1px]">e</span>
        <span className="absolute -right-0.5 -bottom-0.5 w-2 h-2 rounded-full bg-accent" />
      </span>
      <span className="font-medium tracking-tight">
        Exit<span className="text-accent">Media</span>
      </span>
    </Link>
  );
}
