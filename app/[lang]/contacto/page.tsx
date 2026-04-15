import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { Instagram } from "@/components/icons/Instagram";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n/config";

type PageParams = Promise<{ lang: string }>;

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.pageContact.title,
    description: dict.pageContact.description,
  };
}

export default async function ContactoPage({ params }: { params: PageParams }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const c = dict.pageContact;

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, var(--accent-soft), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 md:pt-28 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
              <span className="w-6 h-px bg-accent" />
              {c.label}
            </div>
            <h1 className="font-display text-[clamp(3rem,6.5vw,5rem)] leading-[0.98] tracking-tight mt-6 text-balance">
              {c.heroPrefix}
              <span className="italic text-accent">{c.heroHighlight}</span>
              {c.heroSuffix}
            </h1>
            <p className="mt-8 text-lg text-muted text-pretty leading-relaxed">
              {c.intro}
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
                <a
                  href="https://wa.me/5491136511204"
                  className="hover:text-accent"
                >
                  +54 11 3651 1204 {c.whatsappSuffix}
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
                <span className="text-muted">{c.addressLabel}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-9 h-9 grid place-items-center rounded-full border border-border text-accent">
                  <Clock size={15} />
                </span>
                <span className="text-muted">{c.hours}</span>
              </li>
            </ul>

            <div className="mt-12 rounded-2xl border border-border bg-surface p-6">
              <div className="text-xs uppercase tracking-widest text-muted mb-2">
                {c.urgentTitle}
              </div>
              <p className="text-sm text-muted leading-relaxed">{c.urgentBody}</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-background p-6 md:p-8">
              <ContactForm lang={locale} dict={dict.contactForm} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
