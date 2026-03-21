import { Navbar, Footer } from "@/components/layout";
import HeroSection from "@/components/sections/Hero";
import QuickStartSection from "@/components/sections/QuickStart";
import ProximityFeatureSection from "@/components/sections/ProximityFeatureSection";
import FeaturesSection from "@/components/sections/Features";

import HowItWorksSection from "@/components/sections/HowItWorks";
import CLIReferenceSection from "@/components/sections/CLIReferenceSection";


export default function AgentPage() {
  return (
    <main>
      <Navbar logoHref="/" ctaHref="/" ctaLabel="Join Waitlist" ctaLabelMobile="Waitlist" />
      <div className="agent-page-flow relative overflow-hidden">
        <div className="glow-orb-1" />
        <div className="glow-orb-2" />
        <div className="glow-orb-3" />
        <HeroSection primaryHref="/" primaryLabel="Join Waitlist" secondaryHref="#proximity" secondaryLabel="See it in action" />
        <QuickStartSection />
        <ProximityFeatureSection />
        <FeaturesSection />

        <HowItWorksSection />
        <CLIReferenceSection />

      </div>
      <Footer />
    </main>
  );
}
