import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/Hero";
import DashboardShowcase from "@/components/sections/DashboardShowcase";
import FeaturesBento from "@/components/sections/FeaturesBento";
import HowItWorksSection from "@/components/sections/EfficiencySection";
import SDKPreview from "@/components/sections/SDKPreview";
import CTASection from "@/components/sections/CTASection";

export default function Page() {
  return (
    <main className="min-h-screen relative font-sans overflow-x-hidden selection:bg-violet-500/20 selection:text-violet-900 bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesBento />
      <DashboardShowcase />
      <HowItWorksSection />
      <SDKPreview />
      <CTASection />
      <Footer />
    </main>
  );
}
