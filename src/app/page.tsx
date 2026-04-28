import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/Hero";
import BentoFeatures from "@/components/sections/BentoFeatures";

export default function Page() {
  return (
    <main className="bg-bg-base min-h-screen relative font-sans selection:bg-white/20 selection:text-white">
      <Navbar />
      <HeroSection />
      <BentoFeatures />
      <Footer />
    </main>
  );
}
