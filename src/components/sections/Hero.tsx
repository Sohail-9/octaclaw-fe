"use client";

import { motion } from "framer-motion";
import HomeWaitlistHero from "./HomeWaitlistHero";
import TerminalDemo from "./TerminalDemo";

const providers = ["Anthropic", "OpenAI", "Gemini", "Groq", "Grok"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function HeroSection() {
  return (
    <section id="waitlist" className="relative min-h-screen flex flex-col items-center justify-start pt-36 pb-24 px-6 overflow-hidden">
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-[0.07]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, transparent 70%)",
        }}
      />

      {/* Badge */}
      <motion.div {...fadeUp(0.1)} className="flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-surface px-4 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-text-muted uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Private Beta
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        {...fadeUp(0.2)}
        className="mt-8 text-center text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.04em] leading-[1.05] text-text-main max-w-4xl"
      >
        The runtime for
        <br />
        AI agent teams.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        {...fadeUp(0.3)}
        className="mt-6 text-center text-base sm:text-lg text-text-muted max-w-xl leading-relaxed"
      >
        OctaClaw orchestrates a parallel agent swarm through a dynamic TaskDAG,
        enforcing resource-level safety and autonomous verification to resolve
        complex goals across any tool.
      </motion.p>

      {/* Waitlist form */}
      <motion.div {...fadeUp(0.4)} className="mt-10 w-full flex justify-center">
        <HomeWaitlistHero />
      </motion.div>

      {/* LLM providers */}
      <motion.div
        {...fadeUp(0.5)}
        className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
      >
        <span className="text-[11px] text-text-muted tracking-wider uppercase font-medium mr-1">
          Works with
        </span>
        {providers.map((p) => (
          <span
            key={p}
            className="inline-flex items-center h-6 px-2.5 rounded-md border border-border-subtle bg-bg-surface text-[11px] font-semibold text-text-muted/70 tracking-tight"
          >
            {p}
          </span>
        ))}
      </motion.div>

      {/* Technical credibility strip */}
      <motion.div
        {...fadeUp(0.6)}
        className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
      >
        {[
          { label: "TaskDAG scheduler" },
          { label: "parallel-first runtime" },
          { label: "MCP-native" },
          { label: "local-first" },
        ].map(({ label }, i, arr) => (
          <span key={label} className="flex items-center gap-6">
            <span className="text-[11px] font-mono text-text-muted/50 tracking-wide">
              {label}
            </span>
            {i < arr.length - 1 && (
              <span className="text-text-muted/20 text-[10px]">·</span>
            )}
          </span>
        ))}
      </motion.div>

      {/* Agent Swarm Demo */}
      <div className="mt-20 w-full max-w-5xl mx-auto">
        <TerminalDemo />
      </div>
    </section>
  );
}
