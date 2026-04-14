import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ThemeScript } from "@/components/ThemeScript";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://exitmedia.com.ar"),
  title: {
    default: "ExitMedia — Desarrollo Web, E-commerce y AI | Buenos Aires",
    template: "%s · ExitMedia",
  },
  description:
    "Diseñamos y desarrollamos sitios web, tiendas online, aplicaciones y soluciones con inteligencia artificial. Desde Buenos Aires para el mundo.",
  keywords: [
    "desarrollo web",
    "e-commerce",
    "WordPress",
    "Next.js",
    "Argentina",
    "Buenos Aires",
    "inteligencia artificial",
    "WooCommerce",
    "Shopify",
    "TiendaNube",
    "agencia digital",
  ],
  authors: [{ name: "ExitMedia" }],
  creator: "ExitMedia",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://exitmedia.com.ar",
    siteName: "ExitMedia",
    title: "ExitMedia — Desarrollo Web, E-commerce y AI",
    description:
      "Diseñamos y desarrollamos sitios web, tiendas online, aplicaciones y soluciones con inteligencia artificial.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ExitMedia — Desarrollo Web, E-commerce y AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ExitMedia — Desarrollo Web, E-commerce y AI",
    description:
      "Diseñamos y desarrollamos sitios web, tiendas online, aplicaciones y soluciones con inteligencia artificial.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      suppressHydrationWarning
      className={`${fraunces.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col grain">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
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
                  "@id": "https://exitmedia.com.ar/#site",
                  url: "https://exitmedia.com.ar",
                  name: "ExitMedia",
                  inLanguage: "es-AR",
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
