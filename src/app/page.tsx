import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/Hero";
import DashboardShowcase from "@/components/sections/DashboardShowcase";
import HowItWorksSection from "@/components/sections/EfficiencySection";
import CTASection from "@/components/sections/CTASection";

export default function Page() {
  return (
    <main className="bg-white min-h-screen relative font-sans overflow-x-hidden selection:bg-violet-500/20 selection:text-violet-200">
      <Navbar />
      <HeroSection />
      <DashboardShowcase />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </main>
  );
}

