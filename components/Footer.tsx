import Link from "next/link";
import { Logo } from "./Logo";
import { Mail, MessageCircle } from "lucide-react";
import { Instagram } from "./icons/Instagram";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type Props = {
  lang: Locale;
  dict: Pick<Dictionary, "footer" | "nav">;
};

export function Footer({ lang, dict }: Props) {
  const year = new Date().getFullYear();
  const f = dict.footer;
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Logo lang={lang} />
            <p className="mt-4 text-sm text-muted max-w-sm text-pretty">
              {f.description}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://instagram.com/exitmediacontent"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 grid place-items-center rounded-full border border-border hover:border-accent/60 hover:text-accent transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:hola@exitmedia.com.ar"
                aria-label="Email"
                className="w-9 h-9 grid place-items-center rounded-full border border-border hover:border-accent/60 hover:text-accent transition-colors"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://wa.me/5491136511204"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 grid place-items-center rounded-full border border-border hover:border-accent/60 hover:text-accent transition-colors"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-muted mb-4">
              {f.studio}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${lang}/sobre-nosotros`} className="hover:text-accent">{dict.nav.about}</Link></li>
              <li><Link href={`/${lang}/trabajos`} className="hover:text-accent">{dict.nav.work}</Link></li>
              <li><Link href={`/${lang}/blog`} className="hover:text-accent">{dict.nav.blog}</Link></li>
              <li><Link href={`/${lang}/contacto`} className="hover:text-accent">{dict.nav.contact}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-muted mb-4">
              {f.services}
            </h4>
            <ul className="space-y-2 text-sm">
              {f.serviceLinks.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/${lang}/servicios#${s.id}`}
                    className="hover:text-accent"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-muted mb-4">
              {f.contact}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hola@exitmedia.com.ar" className="hover:text-accent">
                  hola@exitmedia.com.ar
                </a>
              </li>
              <li>
                <a href="https://wa.me/5491136511204" className="hover:text-accent">
                  +54 11 3651 1204
                </a>
              </li>
              <li className="text-muted">{f.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted">
          <p>© {year} ExitMedia. {f.rights}</p>
          <p className="font-mono">{f.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
