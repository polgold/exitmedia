import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Process } from "@/components/Process";
import { FeaturedWork } from "@/components/FeaturedWork";
import { TechMarquee } from "@/components/TechMarquee";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { HomeContact } from "@/components/HomeContact";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <ServicesGrid />
      <Process />
      <FeaturedWork />
      <Testimonials />
      <FAQ />
      <HomeContact />
    </>
  );
}
