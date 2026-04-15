import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, type Locale } from "@/lib/i18n/config";

const LEGACY_PATHS = new Set([
  "/servicios",
  "/trabajos",
  "/blog",
  "/sobre-nosotros",
  "/contacto",
]);

function parseAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;
  const entries = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const qParam = params.find((p) => p.trim().startsWith("q="));
      const q = qParam ? Number(qParam.split("=")[1]) : 1;
      return { tag: tag.toLowerCase(), q: Number.isFinite(q) ? q : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of entries) {
    const primary = tag.split("-")[0] as Locale;
    if ((locales as readonly string[]).includes(primary)) return primary;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (pathnameHasLocale) return NextResponse.next();

  const locale = parseAcceptLanguage(request.headers.get("accept-language"));

  // Legacy Spanish paths (no prefix) → /es/<path>
  const firstSeg = "/" + pathname.split("/").filter(Boolean)[0];
  if (LEGACY_PATHS.has(firstSeg) || LEGACY_PATHS.has(pathname)) {
    const target = new URL(`/${defaultLocale}${pathname}${search}`, request.url);
    return NextResponse.redirect(target, 308);
  }

  // Root → detected locale
  if (pathname === "/") {
    const target = new URL(`/${locale}`, request.url);
    return NextResponse.redirect(target, 307);
  }

  // Anything else that doesn't start with a locale → prefix with detected locale
  const target = new URL(`/${locale}${pathname}${search}`, request.url);
  return NextResponse.redirect(target, 307);
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|opengraph-image|.*\\..*).*)",
  ],
};
