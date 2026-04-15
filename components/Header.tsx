"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type Props = {
  lang: Locale;
  dict: Pick<Dictionary, "nav" | "common" | "languageSwitcher">;
};

export function Header({ lang, dict }: Props) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const nav = [
    { href: `/${lang}/servicios`, label: dict.nav.services },
    { href: `/${lang}/trabajos`, label: dict.nav.work },
    { href: `/${lang}/blog`, label: dict.nav.blog },
    { href: `/${lang}/sobre-nosotros`, label: dict.nav.about },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/75 border-b border-border"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo lang={lang} />

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-1.5 text-sm rounded-full transition-colors ${
                  active
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {active && (
                  <span className="absolute inset-0 rounded-full bg-surface-2 -z-0" />
                )}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher
            current={lang}
            options={dict.languageSwitcher.options}
            label={dict.languageSwitcher.label}
          />
          <ThemeToggle />
          <Link
            href={`/${lang}/contacto`}
            className="hidden md:inline-flex items-center gap-1.5 h-9 px-4 rounded-full bg-foreground text-background text-sm font-medium hover:bg-accent hover:text-background transition-colors"
          >
            {dict.common.letTalk}
            <span aria-hidden>→</span>
          </Link>
          <button
            className="md:hidden w-9 h-9 grid place-items-center rounded-full border border-border"
            aria-label={dict.common.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2.5 rounded-md hover:bg-surface-2 text-sm"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={`/${lang}/contacto`}
              className="mt-2 inline-flex items-center justify-center h-10 rounded-full bg-foreground text-background text-sm font-medium"
            >
              {dict.common.letTalk} →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
