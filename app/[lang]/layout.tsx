import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ThemeScript } from "@/components/ThemeScript";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { locales, isLocale, localeMeta, type Locale } from "@/lib/i18n/config";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

type LayoutParams = Promise<{ lang: string }>;

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: LayoutParams;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  const m = dict.metadata;
  const meta = localeMeta[lang];
  const BASE = "https://exitmedia.com.ar";

  const languages: Record<string, string> = {};
  for (const l of locales) languages[localeMeta[l].htmlLang] = `${BASE}/${l}`;

  return {
    metadataBase: new URL(BASE),
    title: {
      default: m.defaultTitle,
      template: m.titleTemplate,
    },
    description: m.defaultDescription,
    keywords: m.keywords,
    authors: [{ name: "ExitMedia" }],
    creator: "ExitMedia",
    alternates: {
      canonical: `${BASE}/${lang}`,
      languages,
    },
    openGraph: {
      type: "website",
      locale: meta.ogLocale,
      alternateLocale: locales
        .filter((l) => l !== lang)
        .map((l) => localeMeta[l].ogLocale),
      url: `${BASE}/${lang}`,
      siteName: m.siteName,
      title: m.ogTitle,
      description: m.ogDescription,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: m.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: m.ogTitle,
      description: m.ogDescription,
      images: ["/opengraph-image"],
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: LayoutParams;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const meta = localeMeta[locale];

  return (
    <html
      lang={meta.htmlLang}
      suppressHydrationWarning
      className={`${fraunces.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col grain">
        <Header lang={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer lang={locale} dict={dict} />
        <FloatingCTA
          ariaLabel={dict.floatingCTA.ariaLabel}
          text={dict.floatingCTA.text}
          waMessage={dict.floatingCTA.waMessage}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://exitmedia.com.ar/#org",
                  name: "ExitMedia",
                  url: "https://exitmedia.com.ar",
                  email: "hola@exitmedia.com.ar",
                  telephone: "+54 11 3651 1204",
                  sameAs: ["https://instagram.com/exitmediacontent"],
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Buenos Aires",
                    addressCountry: "AR",
                  },
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://exitmedia.com.ar/#local",
                  name: "ExitMedia",
                  image: "https://exitmedia.com.ar/opengraph-image",
                  priceRange: "$$",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Buenos Aires",
                    addressCountry: "AR",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: -34.6037,
                    longitude: -58.3816,
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": `https://exitmedia.com.ar/${locale}/#site`,
                  url: `https://exitmedia.com.ar/${locale}`,
                  name: "ExitMedia",
                  inLanguage: meta.htmlLang,
                  publisher: { "@id": "https://exitmedia.com.ar/#org" },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
