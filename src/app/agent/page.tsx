import { Navbar, Footer } from "@/components/layout";
import HeroSection from "@/components/sections/Hero";
import ProductDemoSection from "@/components/sections/ProductDemo";
import FeaturesSection from "@/components/sections/Features";
import SpatialWorkspaceSection from "@/components/sections/SpatialWorkspace";
import HowItWorksSection from "@/components/sections/HowItWorks";
import CTASection from "@/components/sections/CTA";

export default function AgentPage() {
  return (
    <main>
      <Navbar logoHref="/" ctaHref="/" ctaLabel="Join Waitlist" ctaLabelMobile="Waitlist" />
      <div className="agent-page-flow relative overflow-hidden">
        <div className="glow-orb-1" />
        <div className="glow-orb-2" />
        <div className="glow-orb-3" />
        <HeroSection primaryHref="/" primaryLabel="Join Waitlist" secondaryHref="#demo" secondaryLabel="Watch the DAG run" />
        <ProductDemoSection />
        <FeaturesSection />
        <SpatialWorkspaceSection />
        <HowItWorksSection />
        <CTASection />
      </div>
      <Footer />
    </main>
  );
}
