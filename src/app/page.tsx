import { Navbar, Footer } from "@/components/layout";
import HeroSection from "@/components/sections/Hero";
import FeaturesSection from "@/components/sections/Features";
import CTASection from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  );
}

