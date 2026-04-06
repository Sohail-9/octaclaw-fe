import Script from "next/script";
import { Navbar, Footer } from "@/components/layout";
import HomeWaitlistHero from "@/components/sections/HomeWaitlistHero";

export default function WaitlistPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "OctaClaw",
    url: "https://octaclaw.com",
    description:
      "OctaClaw lets teams design, run, and debug multi-agent DAG execution on a Spatial Workspace.",
    publisher: {
      "@type": "Organization",
      name: "OctaClaw",
      url: "https://octaclaw.com",
    },
  };

  return (
    <main className="bg-bg min-h-screen relative z-10 flex flex-col">
      <Script
        id="jsonld-octaclaw"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar logoHref="/" ctaHref="/" ctaLabel="Back to Home" ctaLabelMobile="Home" />
      <div className="flex-1 flex flex-col pt-12 pb-24">
        <HomeWaitlistHero />
      </div>
      <div className="mt-auto border-t border-white/5">
        <Footer minimal />
      </div>
    </main>
  );
}
