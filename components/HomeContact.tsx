import { SectionLabel, SectionTitle } from "./ui/Section";
import { ContactForm } from "./ContactForm";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { Instagram } from "./icons/Instagram";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type Props = {
  lang: Locale;
  dict: Pick<Dictionary, "homeContact" | "contactForm">;
};

export function HomeContact({ lang, dict }: Props) {
  const h = dict.homeContact;
  return (
    <section id="contacto" className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionLabel>{h.label}</SectionLabel>
          <SectionTitle>
            {h.titlePrefix}
            <span className="italic text-accent">{h.titleHighlight}</span>
            {h.titleSuffix}
          </SectionTitle>
          <p className="mt-6 text-muted text-lg text-pretty leading-relaxed">
            {h.intro}
          </p>

          <ul className="mt-10 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="w-9 h-9 grid place-items-center rounded-full border border-border text-accent">
                <Mail size={15} />
              </span>
              <a
                href="mailto:hola@exitmedia.com.ar"
                className="hover:text-accent"
              >
                hola@exitmedia.com.ar
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-9 h-9 grid place-items-center rounded-full border border-border text-accent">
                <MessageCircle size={15} />
              </span>
              <a href="https://wa.me/5491136511204" className="hover:text-accent">
                +54 11 3651 1204 {h.whatsappSuffix}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-9 h-9 grid place-items-center rounded-full border border-border text-accent">
                <Instagram size={15} />
              </span>
              <a
                href="https://instagram.com/exitmediacontent"
                className="hover:text-accent"
              >
                @exitmediacontent
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-9 h-9 grid place-items-center rounded-full border border-border text-accent">
                <MapPin size={15} />
              </span>
              <span className="text-muted">{h.addressLabel}</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <ContactForm lang={lang} dict={dict.contactForm} />
        </div>
      </div>
    </section>
  );
}
