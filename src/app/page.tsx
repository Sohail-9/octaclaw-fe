import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/Hero";
import MetricsStrip from "@/components/sections/MetricsStrip";
import FeaturesBento from "@/components/sections/FeaturesBento";
import HowItWorksSection from "@/components/sections/EfficiencySection";
import SDKPreview from "@/components/sections/SDKPreview";
import CTASection from "@/components/sections/CTASection";

export default function Page() {
  return (
    <main className="min-h-screen relative font-sans overflow-x-hidden" style={{ background: "#f8f7ff" }}>
      <Navbar />
      <HeroSection />
      <MetricsStrip />
      <FeaturesBento />
      <HowItWorksSection />
      <SDKPreview />
      <CTASection />
      <Footer />
    </main>
  );
}
