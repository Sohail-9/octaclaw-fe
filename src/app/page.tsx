import { Navbar, Footer } from "@/components/layout";
import HeroSection from "@/components/sections/Hero";
import QuickStartSection from "@/components/sections/QuickStart";
import ProximityFeatureSection from "@/components/sections/ProximityFeatureSection";
import FeaturesSection from "@/components/sections/Features";
import RoadmapSection from "@/components/sections/RoadmapSection";

import HowItWorksSection from "@/components/sections/HowItWorks";
import CLIReferenceSection from "@/components/sections/CLIReferenceSection";

export default function AgentPage() {
  return (
    <main className="bg-[#0E0E0F] min-h-screen relative z-10">
      <Navbar logoHref="/" ctaHref="/waitlist" ctaLabel="Join Waitlist" ctaLabelMobile="Waitlist" />
      <div className="relative pt-12">
        <HeroSection primaryHref="/waitlist" primaryLabel="Join Waitlist" secondaryHref="#proximity" secondaryLabel="See it in action" />
        <div className="pb-16">
          <QuickStartSection />
          <ProximityFeatureSection />
          <FeaturesSection />
          <RoadmapSection />
          <HowItWorksSection />
          <CLIReferenceSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
