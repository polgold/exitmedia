import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { Instagram } from "@/components/icons/Instagram";

export const metadata: Metadata = {
  title: "Contacto — Hablemos de tu proyecto",
  description:
    "Escribinos por formulario, email, WhatsApp o Instagram. Respondemos en menos de un día hábil — normalmente, el mismo día.",
};

export default function ContactoPage() {
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
              Contacto
            </div>
            <h1 className="font-display text-[clamp(3rem,6.5vw,5rem)] leading-[0.98] tracking-tight mt-6 text-balance">
              Hablemos de tu <span className="italic text-accent">próximo</span> proyecto.
            </h1>
            <p className="mt-8 text-lg text-muted text-pretty leading-relaxed">
              Completá el formulario o escribinos directo por el canal que
              prefieras. Respondemos en menos de un día hábil — normalmente, el
              mismo día.
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
                  +54 11 3651 1204 · WhatsApp
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
                <span className="text-muted">Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-9 h-9 grid place-items-center rounded-full border border-border text-accent">
                  <Clock size={15} />
                </span>
                <span className="text-muted">Lunes a viernes, 10:00 – 19:00 (GMT-3)</span>
              </li>
            </ul>

            <div className="mt-12 rounded-2xl border border-border bg-surface p-6">
              <div className="text-xs uppercase tracking-widest text-muted mb-2">
                Urgencias
              </div>
              <p className="text-sm text-muted leading-relaxed">
                ¿Sitio caído, problema con la tienda, algo que se rompió de
                noche? WhatsApp directo: respondemos también fuera de horario.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-background p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
