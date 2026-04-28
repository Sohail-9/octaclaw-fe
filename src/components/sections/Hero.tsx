"use client";

import { motion } from "framer-motion";
import HomeWaitlistHero from "./HomeWaitlistHero";

const providers = ["Anthropic", "OpenAI", "Gemini", "Groq", "Grok"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function HeroSection() {
  return (
    <section id="waitlist" className="relative min-h-[85vh] flex flex-col items-center justify-center pt-20 pb-12 px-6 overflow-hidden bg-bg-base transition-colors duration-500">
      
      {/* Premium Mesh Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute inset-0 bg-bg-base" />
        
        {/* Soft Mesh Gradients */}
        <div className="absolute -bottom-[20%] -left-[10%] w-[80%] h-[80%] bg-brand-secondary opacity-[0.15] dark:opacity-[0.1] blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] bg-brand-primary opacity-[0.12] dark:opacity-[0.08] blur-[100px] rounded-full animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-primary opacity-[0.04] dark:opacity-[0.03] blur-[140px] rounded-full" />
        
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.3] dark:opacity-[0.15] bg-noise pointer-events-none mix-blend-overlay" />

        {/* Subtle Engineering Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(var(--brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--brand-primary) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
        {/* Compact Badge */}
        <motion.div {...fadeUp(0.1)} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/5 px-3 py-1 text-[10px] font-bold tracking-[0.1em] text-brand-primary uppercase shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-pulse" />
            v3.0.4-Stable
          </span>
        </motion.div>

        {/* Compact & Tight Headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-center text-5xl sm:text-6xl md:text-8xl font-bold tracking-[-0.05em] leading-[0.95] text-text-main"
        >
          Build scalable
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Products with AI</span>
        </motion.h1>

        {/* Compact Waitlist section */}
        <motion.div {...fadeUp(0.3)} className="mt-8 w-full flex flex-col items-center gap-6">
          <div className="w-full max-w-md">
            <HomeWaitlistHero />
          </div>
          
          {/* LLM providers - Tightened */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 opacity-60">
            <span className="text-[10px] text-text-muted tracking-wider uppercase font-bold mr-1 font-mono">
              Works with
            </span>
            {providers.map((p) => (
              <span
                key={p}
                className="inline-flex items-center h-5 px-2 rounded-md border border-border-subtle bg-bg-surface text-[9px] font-bold text-text-muted tracking-tight"
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Technical credibility strip - Compacted */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 opacity-50"
        >
          {[
            { label: "TaskDAG scheduler" },
            { label: "parallel-first runtime" },
            { label: "MCP-native" },
            { label: "local-first" },
          ].map(({ label }, i, arr) => (
            <span key={label} className="flex items-center gap-6">
              <span className="text-[10px] font-mono text-text-muted tracking-tight font-bold">
                {label}
              </span>
              {i < arr.length - 1 && (
                <span className="text-text-muted/20 text-[10px]">·</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
