import Link from "next/link";
import { Logo } from "./Logo";
import { Mail, MessageCircle } from "lucide-react";
import { Instagram } from "./icons/Instagram";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 text-sm text-muted max-w-sm text-pretty">
              Estudio digital de Buenos Aires. Diseñamos, desarrollamos y lanzamos
              sitios web, tiendas online, apps y herramientas con inteligencia
              artificial.
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
              Estudio
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sobre-nosotros" className="hover:text-accent">Nosotros</Link></li>
              <li><Link href="/trabajos" className="hover:text-accent">Trabajos</Link></li>
              <li><Link href="/blog" className="hover:text-accent">Blog</Link></li>
              <li><Link href="/contacto" className="hover:text-accent">Contacto</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-muted mb-4">
              Servicios
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/servicios#web" className="hover:text-accent">Sitios web</Link></li>
              <li><Link href="/servicios#ecommerce" className="hover:text-accent">E-commerce</Link></li>
              <li><Link href="/servicios#apps" className="hover:text-accent">Aplicaciones</Link></li>
              <li><Link href="/servicios#ai" className="hover:text-accent">IA aplicada</Link></li>
              <li><Link href="/servicios#seo" className="hover:text-accent">SEO</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-muted mb-4">
              Contacto
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
              <li className="text-muted">Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted">
          <p>© {year} ExitMedia. Una división digital de Sun Factory.</p>
          <p className="font-mono">
            built with next.js · hosted on vercel · made in buenos aires
          </p>
        </div>
      </div>
    </footer>
  );
}
