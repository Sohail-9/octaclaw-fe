import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/Hero";
import FeaturesSection from "@/components/sections/Features";
import HowItWorksSection from "@/components/sections/EfficiencySection";
import CTASection from "@/components/sections/CTASection";

export default function Page() {
  return (
    <main className="bg-[#050505] min-h-screen relative font-sans overflow-x-hidden selection:bg-violet-500/20 selection:text-violet-200">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </main>
  );
}
