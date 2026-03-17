import Script from "next/script";
import { Navbar, Footer } from "@/components/layout";
import HeroSection from "@/components/sections/Hero";
import SocialProofSection from "@/components/sections/SocialProof";
import FeaturesSection from "@/components/sections/Features";
import CTASection from "@/components/sections/CTA";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "OctaClaw",
    url: "https://octaclaw.com",
    description:
      "Design, connect, and run AI agents in a visual workspace. Build intelligent workflows for the next generation of teams.",
    publisher: {
      "@type": "Organization",
      name: "OctaClaw",
      url: "https://octaclaw.com",
    },
  };

  return (
    <main>
      <Script
        id="jsonld-octaclaw"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
