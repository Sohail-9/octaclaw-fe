import HeroSection from "@/components/sections/Hero";


import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function AgentPage() {
  return (
    <main className="bg-bg-base min-h-screen relative z-10 font-sans selection:bg-white/30 selection:text-white">
      <Navbar />
      <HeroSection />
      <Footer />


    </main>
  );
}
