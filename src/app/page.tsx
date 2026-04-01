import { Navbar, Footer } from "@/components/layout";
import HeroSection from "@/components/sections/Hero";
import ProximityFeatureSection from "@/components/sections/ProximityFeatureSection";
import FeaturesSection from "@/components/sections/Features";
import RoadmapSection from "@/components/sections/RoadmapSection";

import HowItWorksSection from "@/components/sections/HowItWorks";

export default function AgentPage() {
  return (
    <main className="bg-[#0c1324] min-h-screen relative z-10">
      <Navbar logoHref="/" ctaHref="/waitlist" ctaLabel="Join Waitlist" ctaLabelMobile="Waitlist" />
      <div className="relative pt-12">
        <HeroSection primaryHref="/waitlist" primaryLabel="Join Waitlist" secondaryHref="#proximity" secondaryLabel="See it in action" />
        <div className="pb-16">
          <ProximityFeatureSection />
          <FeaturesSection />
          <RoadmapSection />
          <HowItWorksSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
