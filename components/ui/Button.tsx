import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full text-sm font-medium transition-colors";

const variants: Record<Variant, string> = {
  primary:
    "bg-foreground text-background hover:bg-accent hover:text-background",
  secondary:
    "bg-surface-2 text-foreground hover:bg-surface border border-border",
  ghost:
    "text-foreground hover:text-accent",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
