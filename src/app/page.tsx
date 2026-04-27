import HeroSection from "@/components/sections/Hero";


import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function AgentPage() {
  return (
    <main className="bg-bg-base min-h-screen relative z-10 font-sans selection:bg-white/30 selection:text-white">
      <Navbar />
      <HeroSection />
      <Footer />

      {/* Trust & Team Signal */}
      <div className="fixed bottom-8 right-8 z-50">
        <a 
          href="https://x.com/Suhail_S9" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white/80 transition-colors font-medium"
        >
          Built by Sohail
        </a>
      </div>
    </main>
  );
}
