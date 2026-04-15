"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Globe, Check } from "lucide-react";
import {
  locales,
  localeMeta,
  isLocale,
  type Locale,
} from "@/lib/i18n/config";

type Props = {
  current: Locale;
  options: Record<Locale, string>;
  label: string;
};

function replaceLocaleInPath(pathname: string, next: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return `/${next}`;
  if (isLocale(segments[0])) {
    segments[0] = next;
  } else {
    segments.unshift(next);
  }
  return "/" + segments.join("/");
}

export function LanguageSwitcher({ current, options, label }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={label}
        aria-expanded={open}
        aria-haspopup="menu"
        className="inline-flex items-center gap-1.5 h-9 px-2.5 rounded-full border border-border text-sm hover:border-accent/60 hover:text-accent transition-colors"
      >
        <Globe size={15} />
        <span className="font-mono uppercase text-xs tracking-wider">
          {current}
        </span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full mt-2 min-w-[160px] rounded-xl border border-border bg-background shadow-xl shadow-black/10 overflow-hidden z-50"
        >
          {locales.map((loc) => {
            const active = loc === current;
            const href = replaceLocaleInPath(pathname, loc);
            return (
              <Link
                key={loc}
                href={href}
                onClick={() => setOpen(false)}
                role="menuitem"
                className={`flex items-center justify-between gap-3 px-3.5 py-2.5 text-sm hover:bg-surface-2 transition-colors ${
                  active ? "text-foreground" : "text-muted"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <span aria-hidden>{localeMeta[loc].flag}</span>
                  <span>{options[loc]}</span>
                </span>
                {active && <Check size={14} className="text-accent" />}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
