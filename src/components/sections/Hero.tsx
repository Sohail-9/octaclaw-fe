"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import HomeWaitlistHero from "./HomeWaitlistHero";
import TerminalDemo from "./TerminalDemo";

const providers = ["Anthropic", "OpenAI", "Gemini", "Groq", "Grok"];

export default function HeroSection() {
  return (
    <section id="waitlist" className="relative min-h-screen flex flex-col items-center justify-start pt-36 pb-24 px-6 overflow-hidden text-neo-stroke">


      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-12 text-center text-5xl sm:text-7xl md:text-8xl font-black tracking-[-0.04em] leading-[0.95] text-neo-stroke max-w-5xl uppercase italic glitch-hover cursor-default"
      >
        The runtime for<br />
        <span className="text-neo-primary">AI agent teams.</span>
      </motion.h1>

      {/* Subtext - New technical copy */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-10 text-center text-base sm:text-lg text-neo-stroke/70 max-w-3xl font-bold uppercase tracking-tight leading-snug"
      >
        OctaClaw orchestrates a parallel agent swarm through a dynamic <span className="text-neo-secondary">TaskDAG</span>, enforcing resource-level safety and autonomous verification to resolve complex goals across any tool.
      </motion.p>

      {/* Waitlist form */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-12 w-full flex justify-center z-10"
      >
        <HomeWaitlistHero />
      </motion.div>

      {/* LLM providers - Neo Style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-16 flex flex-wrap items-center justify-center gap-4"
      >
        <span className="text-[10px] text-neo-stroke/40 tracking-[0.2em] uppercase font-black mr-2">
          Compatible With
        </span>
        {providers.map((p) => (
          <span
            key={p}
            className="px-3 py-1 border border-neo-stroke/20 bg-neo-surface text-[10px] font-black text-neo-stroke/60 tracking-widest uppercase"
          >
            {p}
          </span>
        ))}
      </motion.div>

      {/* Terminal Demo - Boxed in Neo Style */}
      <div className="mt-32 w-full max-w-6xl mx-auto px-4 relative">
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-neo-primary z-20" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-neo-secondary z-20" />
          <TerminalDemo />
      </div>
    </section>
  );
}
