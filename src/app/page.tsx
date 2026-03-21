import Script from "next/script";
import { Navbar, Footer } from "@/components/layout";
import HomeWaitlistHero from "@/components/sections/HomeWaitlistHero";
import SpatialWorkspaceSection from "@/components/sections/SpatialWorkspace";

export default function Home() {
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
    <main>
      <Script
        id="jsonld-octaclaw"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar logoHref="/" ctaHref="/product" ctaLabel="View Product" ctaLabelMobile="Product" />
      <HomeWaitlistHero />
      <Footer minimal />
    </main>
  );
}
