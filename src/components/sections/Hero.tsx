"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HomeWaitlistHero from "./HomeWaitlistHero";
import { Spotlight } from "@/components/ui/Spotlight";
import { SpatialNetwork } from "@/components/ui/SpatialNetwork";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const logs = [
  { time: "00:00", agent: "system",  msg: "MarketAnalystSwarm initialized",          color: "text-zinc-500" },
  { time: "00:01", agent: "orch",    msg: "Goal parsed → 4 parallel task lanes",      color: "text-violet-400" },
  { time: "00:01", agent: "agent-1", msg: "tool: web_search(q='AI infra market')",    color: "text-sky-400" },
  { time: "00:02", agent: "agent-2", msg: "tool: code_exec(lang=python)",             color: "text-emerald-400" },
  { time: "00:02", agent: "system",  msg: "Checkpoint α saved — state persisted",    color: "text-zinc-500" },
  { time: "00:03", agent: "agent-1", msg: "Retrieved 32 sources — aggregating...",   color: "text-sky-400" },
  { time: "00:03", agent: "orch",    msg: "Parallelism: 4/4 active lanes",           color: "text-violet-400" },
  { time: "00:04", agent: "agent-3", msg: "Drafting executive summary (sec 2/5)",    color: "text-amber-400" },
  { time: "00:04", agent: "agent-2", msg: "Schema: 14 competitor profiles built",    color: "text-emerald-400" },
  { time: "00:05", agent: "system",  msg: "Checkpoint β saved",                      color: "text-zinc-500" },
  { time: "00:05", agent: "orch",    msg: "ETA: 12s — on schedule",                  color: "text-violet-400" },
  { time: "00:06", agent: "agent-4", msg: "Critic: reviewing draft for accuracy...", color: "text-rose-400" },
];

function HeroTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-lg mx-auto lg:mx-0"
    >
      {/* Glow behind */}
      <div className="absolute -inset-6 bg-gradient-to-br from-violet-500/[0.08] via-transparent to-emerald-500/[0.06] blur-3xl rounded-3xl pointer-events-none" />

      {/* Terminal window */}
      <div className="relative rounded-2xl bg-[#0c0c14] border border-white/[0.08] shadow-[0_32px_64px_rgba(0,0,0,0.2)] overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#08080f]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <span className="ml-3 text-[10px] font-mono text-white/25 truncate">
            octaclaw / swarm-7f2a · MarketAnalystSwarm
          </span>
          <motion.span
            className="ml-auto text-[8px] font-mono text-emerald-400 font-bold flex-shrink-0"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          >
            ● LIVE
          </motion.span>
        </div>

        {/* Agent status pills */}
        <div className="flex gap-2 px-4 py-2.5 border-b border-white/[0.04] bg-white/[0.01] flex-wrap">
          {[
            { name: "Researcher", color: "text-sky-400", dot: "bg-sky-400" },
            { name: "Analyst", color: "text-emerald-400", dot: "bg-emerald-400" },
            { name: "Writer", color: "text-amber-400", dot: "bg-amber-400" },
            { name: "Critic", color: "text-rose-400", dot: "bg-rose-400" },
          ].map((a) => (
            <div key={a.name} className="flex items-center gap-1.5 bg-white/[0.04] rounded-full px-2.5 py-1">
              <motion.div
                className={`w-1.5 h-1.5 rounded-full ${a.dot}`}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5 + Math.random(), repeat: Infinity }}
              />
              <span className={`text-[9px] font-mono font-bold ${a.color}`}>{a.name}</span>
            </div>
          ))}
        </div>

        {/* Scrolling log */}
        <div className="h-64 overflow-hidden relative">
          <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...logs, ...logs].map((log, i) => (
              <div
                key={i}
                className="flex items-start gap-2 px-4 py-1.5 border-b border-white/[0.025]"
              >
                <span className="text-[9px] font-mono text-zinc-700 flex-shrink-0 pt-px w-9">[{log.time}]</span>
                <span className="text-[9px] font-mono text-zinc-600 uppercase font-bold flex-shrink-0 w-14 pt-px">{log.agent}</span>
                <span className={`text-[10px] font-mono leading-snug ${log.color}`}>{log.msg}</span>
              </div>
            ))}
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0c0c14] to-transparent pointer-events-none" />
        </div>

        {/* Bottom bar */}
        <div className="flex items-center gap-3 px-4 py-2.5 border-t border-white/[0.05] bg-[#08080f]">
          <div className="flex-1 h-5 bg-white/[0.03] rounded border border-white/[0.04] flex items-center px-2">
            <span className="text-[9px] font-mono text-white/25">awaiting orchestrator...</span>
            <motion.div
              className="ml-1 w-1.5 h-3 bg-white/30"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
          <div className="text-[9px] font-mono text-zinc-600">
            <span className="text-zinc-500">Elapsed:</span> <span className="text-violet-400 font-bold">6.2s</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="waitlist"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 px-6 overflow-hidden bg-white"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(139, 92, 246, 0.12)"
      />
      <Spotlight
        className="top-10 right-0 md:right-40"
        fill="rgba(16, 185, 129, 0.08)"
      />

      <SpatialNetwork />

      {/* Dotted grid */}
      <div className="absolute inset-0 dotted-grid opacity-100 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

      {/* Ambient blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[50%] bg-violet-600/[0.06] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[0%] right-[-5%] w-[40%] h-[45%] bg-emerald-600/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text + Form */}
          <div className="flex flex-col">
            {/* Badge */}
            <motion.div {...fadeUp(0)} className="mb-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-zinc-200 bg-zinc-50">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-500">
                  Multi-Agent AI Runtime · Open Beta
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.1)}
              className="text-5xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.07em] leading-[0.88] text-zinc-950 uppercase font-heading mb-8"
            >
              Intelligence,
              <br />
              <span className="shiny-text">Orchestrated.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...fadeUp(0.2)}
              className="text-lg sm:text-xl text-zinc-500 max-w-lg leading-relaxed font-normal tracking-tight mb-10"
            >
              Deploy autonomous AI swarms that collaborate, reason, and execute —
              across any model, any workflow, at any scale. No pipelines. No babysitting.
            </motion.p>

            {/* Form */}
            <motion.div {...fadeUp(0.3)} className="w-full max-w-md mb-8">
              <HomeWaitlistHero />
            </motion.div>

            {/* Secondary CTA */}
            <motion.div {...fadeUp(0.4)} className="flex items-center gap-6">
              <Link
                href="#platform"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-zinc-500 hover:text-zinc-900 transition-colors duration-200 group"
              >
                See the platform
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <span className="text-zinc-200">|</span>
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-zinc-500 hover:text-zinc-900 transition-colors duration-200 group"
              >
                How it works
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right: Live terminal */}
          <div className="hidden lg:block">
            <HeroTerminal />
          </div>
        </div>

        {/* Provider strip */}
        <motion.div
          {...fadeUp(0.6)}
          className="mt-20 flex flex-col items-center"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold mb-5">
            Routes to any model provider
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Anthropic", "OpenAI", "Google Gemini", "Groq", "xAI Grok", "Mistral", "Cohere", "Meta LLaMA"].map((p) => (
              <span key={p} className="px-4 py-2 rounded-full border border-zinc-200 bg-white text-[11px] font-semibold text-zinc-500 hover:border-zinc-300 hover:text-zinc-700 transition-all duration-200 cursor-default">
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
