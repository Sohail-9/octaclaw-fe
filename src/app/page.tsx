import HeroSection from "@/components/sections/Hero";
import HeroGraphic from "@/components/sections/HeroGraphic";
import CoreFeatureCards from "@/components/sections/CoreFeatureCards";
import LogoTicker from "@/components/sections/LogoTicker";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function AgentPage() {
  return (
    <main className="bg-[#030712] min-h-screen relative z-10 font-sans selection:bg-[#81e6d9]/30 selection:text-white">
      <Navbar />
      <HeroSection />
      <HeroGraphic />
      <CoreFeatureCards />
      <LogoTicker />

      <Footer />
    </main>
  );
}
