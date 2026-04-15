"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type Status = "idle" | "loading" | "success" | "error";

type Props = {
  lang: Locale;
  dict: Dictionary["contactForm"];
};

export function ContactForm({ lang, dict }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale: lang }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || dict.errorGeneric);
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : dict.errorUnknown);
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-border bg-surface-2 p-8 md:p-10 text-center"
      >
        <CheckCircle2 className="mx-auto text-accent" size={36} aria-hidden />
        <h3 className="mt-4 font-display text-3xl">{dict.successTitle}</h3>
        <p className="mt-3 text-muted max-w-md mx-auto text-pretty">
          {dict.successBody}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-muted hover:text-accent underline underline-offset-4"
        >
          {dict.successReset}
        </button>
      </div>
    );
  }

  const field =
    "w-full h-12 px-4 rounded-xl bg-surface border border-border focus:outline-none focus:border-accent focus:ring-2 focus:ring-ring transition-colors";

  const labelCls = "block text-xs uppercase tracking-widest text-muted mb-2";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className={labelCls}>
            {dict.nameLabel}
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={dict.namePlaceholder}
            className={field}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelCls}>
            {dict.emailLabel}
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={dict.emailPlaceholder}
            className={field}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-phone" className={labelCls}>
            {dict.phoneLabel}
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={dict.phonePlaceholder}
            className={field}
          />
        </div>
        <div>
          <label htmlFor="cf-type" className={labelCls}>
            {dict.typeLabel}
          </label>
          <select
            id="cf-type"
            name="projectType"
            required
            defaultValue=""
            className={field}
          >
            <option value="" disabled>
              {dict.typePlaceholder}
            </option>
            {dict.types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-budget" className={labelCls}>
          {dict.budgetLabel}
        </label>
        <select
          id="cf-budget"
          name="budget"
          defaultValue=""
          className={field}
        >
          <option value="" disabled>
            {dict.budgetPlaceholder}
          </option>
          {dict.budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className={labelCls}>
          {dict.messageLabel}
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder={dict.messagePlaceholder}
          aria-describedby={status === "error" ? "cf-error" : undefined}
          className={`${field} py-3 h-auto`}
        />
      </div>

      {status === "error" && (
        <div
          id="cf-error"
          role="alert"
          className="flex items-center gap-2 text-sm text-red-500"
        >
          <AlertCircle size={16} aria-hidden />
          {error}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-foreground text-background font-medium hover:bg-accent transition-colors disabled:opacity-60"
        >
          {status === "loading" ? dict.submitting : dict.submit}
          <Send size={16} />
        </button>
        <span className="text-sm text-muted">
          {dict.altContactPrefix}{" "}
          <a
            href="https://wa.me/5491136511204"
            className="text-foreground hover:text-accent"
          >
            +54 11 3651 1204
          </a>
        </span>
      </div>
    </form>
  );
}
