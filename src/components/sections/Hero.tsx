"use client";

import { motion } from "framer-motion";
import HomeWaitlistHero from "./HomeWaitlistHero";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 px-4 flex flex-col items-center justify-center text-center z-20">
      
      {/* Optional: Add a top badge if desired 
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 px-3 text-[10px] font-medium uppercase tracking-widest text-text-muted backdrop-blur-md"
      >
        <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
        NEXT GENERATION CONTROL
      </motion.div>
      */}

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-[-0.04em] text-text-main leading-[1.05] max-w-5xl mx-auto"
        style={{ fontFamily: "var(--font-heading)" }}
      >
         <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#81e6d9] via-[#63b3ed] to-[#b794f4]">Control layer</span><br />
        for agents
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 sm:mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-text-muted font-normal leading-relaxed"
      >
        A real-time spatial workspace for visual debugging and token optimization.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex justify-center mt-12 mb-16"
      >
        <HomeWaitlistHero />
      </motion.div>
    </section>
  );
}
