import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Process } from "@/components/Process";
import { FeaturedWork } from "@/components/FeaturedWork";
import { TechMarquee } from "@/components/TechMarquee";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { HomeContact } from "@/components/HomeContact";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n/config";

type PageParams = Promise<{ lang: string }>;

export default async function Home({ params }: { params: PageParams }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero lang={locale} dict={dict} />
      <TechMarquee />
      <ServicesGrid lang={locale} dict={dict} />
      <Process dict={dict} />
      <FeaturedWork lang={locale} dict={dict} />
      <Testimonials dict={dict} />
      <FAQ dict={dict} />
      <HomeContact lang={locale} dict={dict} />
    </>
  );
}
