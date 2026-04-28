import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/Hero";
import FeaturesSection from "@/components/sections/Features";
import HowItWorksSection from "@/components/sections/HowItWorks";

export default function Page() {
  return (
    <main className="bg-bg-base min-h-screen relative font-sans selection:bg-white/20 selection:text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <Footer />
    </main>
  );
}
