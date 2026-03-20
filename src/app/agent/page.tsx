import { Navbar, Footer } from "@/components/layout";
import HeroSection from "@/components/sections/Hero";
import ProductDemoSection from "@/components/sections/ProductDemo";
import FeaturesSection from "@/components/sections/Features";
import SpatialWorkspaceSection from "@/components/sections/SpatialWorkspace";
import HowItWorksSection from "@/components/sections/HowItWorks";
import Link from "next/link";

export default function AgentPage() {
  return (
    <main>
      <Navbar logoHref="/" ctaHref="/" ctaLabel="Join Waitlist" />
      <HeroSection primaryHref="/" primaryLabel="Join Waitlist" secondaryHref="#demo" secondaryLabel="Watch the DAG run" />
      <ProductDemoSection />
      <FeaturesSection />
      <SpatialWorkspaceSection />
      <HowItWorksSection />
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto text-center oc-card p-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Ready to bring agents into the room?</h2>
          <p className="mt-4 text-[#d5cfee]">Start with early access and shape the roadmap with us.</p>
          <div className="mt-8">
            <Link href="/" className="btn-primary">
              Back to waitlist
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
