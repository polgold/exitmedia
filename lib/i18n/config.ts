export const locales = ["es", "en", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export const localeMeta: Record<
  Locale,
  { name: string; nativeName: string; htmlLang: string; ogLocale: string; flag: string }
> = {
  es: { name: "Spanish", nativeName: "Español", htmlLang: "es-AR", ogLocale: "es_AR", flag: "🇦🇷" },
  en: { name: "English", nativeName: "English", htmlLang: "en-US", ogLocale: "en_US", flag: "🇺🇸" },
  pt: { name: "Portuguese", nativeName: "Português", htmlLang: "pt-BR", ogLocale: "pt_BR", flag: "🇧🇷" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localeHref(lang: Locale, path: string = "/") {
  if (path === "/" || path === "") return `/${lang}`;
  if (path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("tel:")) return path;
  if (path.startsWith("#")) return path;
  return `/${lang}${path.startsWith("/") ? "" : "/"}${path}`;
}
