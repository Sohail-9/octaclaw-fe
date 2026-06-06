"use client";

import { motion } from "framer-motion";
import HomeWaitlistHero from "./HomeWaitlistHero";
import { Spotlight } from "@/components/ui/Spotlight";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { SpatialNetwork } from "@/components/ui/SpatialNetwork";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const providers = [
  { name: "Anthropic Claude" },
  { name: "OpenAI GPT-4o" },
  { name: "Google Gemini" },
  { name: "Groq LLaMA" },
  { name: "xAI Grok" },
  { name: "Mistral" },
  { name: "Cohere" },
  { name: "Meta LLaMA" },
];

export default function HeroSection() {
  return (
    <section
      id="waitlist"
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden bg-[#050505]"
    >
      {/* Spotlights */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(139, 92, 246, 0.6)"
      />
      <Spotlight
        className="top-10 right-0 md:right-40"
        fill="rgba(16, 185, 129, 0.35)"
      />

      {/* Spatial Agent Network background */}
      <SpatialNetwork />

      {/* Dotted grid */}
      <div className="absolute inset-0 dotted-grid opacity-100 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

      {/* Ambient blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[50%] bg-violet-600/[0.07] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[0%] right-[-5%] w-[40%] h-[45%] bg-emerald-600/[0.06] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">

        {/* Badge */}
        <motion.div {...fadeUp(0)} className="mb-10">
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/50">
              Multi-Agent AI Platform
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div {...fadeUp(0.1)} className="text-center mb-8">
          <h1 className="text-6xl sm:text-8xl md:text-[9rem] font-bold tracking-[-0.07em] leading-[0.85] text-white uppercase font-heading">
            Intelligence,
            <br />
            <span className="shiny-text">Orchestrated.</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-center text-lg sm:text-xl text-white/40 max-w-2xl leading-relaxed font-normal tracking-tight mb-14"
        >
          Deploy autonomous AI swarms that collaborate, reason, and execute —
          across any model, any workflow, at any scale.
        </motion.p>

        {/* Waitlist form */}
        <motion.div {...fadeUp(0.3)} className="w-full max-w-md">
          <HomeWaitlistHero />
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          {...fadeUp(0.5)}
          className="mt-10 flex flex-col items-center gap-2 text-white/20"
        >
          <div className="flex flex-col items-center gap-1">
            <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          </div>
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        </motion.div>
      </div>

      {/* Provider ticker */}
      <motion.div
        {...fadeUp(0.6)}
        className="absolute bottom-10 left-0 right-0"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-bold">
            Compatible with
          </span>
        </div>
        <InfiniteMovingCards
          items={providers}
          direction="left"
          speed="slow"
          className="mx-auto"
        />
      </motion.div>
    </section>
  );
}
