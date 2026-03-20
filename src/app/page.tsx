import Script from "next/script";
import { Navbar, Footer } from "@/components/layout";
import HeroSection from "@/components/sections/Hero";
import ProductDemoSection from "@/components/sections/ProductDemo";
import FeaturesSection from "@/components/sections/Features";
import CTASection from "@/components/sections/CTA";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "OctaClaw",
    url: "https://octaclaw.com",
    description:
      "OctaClaw lets teams design, run, and debug multi-agent DAG execution on a canvas.",
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
      <ProductDemoSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
