"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HomeWaitlistHero from "./HomeWaitlistHero";
import { SpatialNetwork } from "@/components/ui/SpatialNetwork";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

const providerRow1 = [
  { name: "Anthropic Claude", logo: <span className="w-2 h-2 rounded-full bg-violet-500 inline-block flex-shrink-0" /> },
  { name: "OpenAI GPT-4o",    logo: <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block flex-shrink-0" /> },
  { name: "Google Gemini",    logo: <span className="w-2 h-2 rounded-full bg-blue-500 inline-block flex-shrink-0" /> },
  { name: "Groq LLaMA",       logo: <span className="w-2 h-2 rounded-full bg-amber-500 inline-block flex-shrink-0" /> },
  { name: "Mistral AI",       logo: <span className="w-2 h-2 rounded-full bg-orange-500 inline-block flex-shrink-0" /> },
];

const providerRow2 = [
  { name: "xAI Grok",      logo: <span className="w-2 h-2 rounded-full bg-zinc-600 inline-block flex-shrink-0" /> },
  { name: "Meta LLaMA",    logo: <span className="w-2 h-2 rounded-full bg-blue-600 inline-block flex-shrink-0" /> },
  { name: "Cohere",        logo: <span className="w-2 h-2 rounded-full bg-sky-500 inline-block flex-shrink-0" /> },
  { name: "Perplexity",    logo: <span className="w-2 h-2 rounded-full bg-teal-500 inline-block flex-shrink-0" /> },
  { name: "Together AI",   logo: <span className="w-2 h-2 rounded-full bg-rose-500 inline-block flex-shrink-0" /> },
];

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
      transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-lg mx-auto lg:mx-0"
    >
      <div className="absolute -inset-4 rounded-3xl"
        style={{ background: "radial-gradient(ellipse at center, rgba(167,139,250,0.18) 0%, transparent 70%)" }}
      />
      <div className="relative rounded-2xl bg-[#0c0c14] border border-white/[0.08] shadow-[0_32px_80px_rgba(0,0,0,0.2)] overflow-hidden">
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
        <div className="flex gap-2 px-4 py-2.5 border-b border-white/[0.04] bg-white/[0.01] flex-wrap">
          {[
            { name: "Researcher", color: "text-sky-400",     dot: "bg-sky-400" },
            { name: "Analyst",    color: "text-emerald-400", dot: "bg-emerald-400" },
            { name: "Writer",     color: "text-amber-400",   dot: "bg-amber-400" },
            { name: "Critic",     color: "text-rose-400",    dot: "bg-rose-400" },
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
        <div className="h-64 overflow-hidden relative">
          <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...logs, ...logs].map((log, i) => (
              <div key={i} className="flex items-start gap-2 px-4 py-1.5 border-b border-white/[0.025]">
                <span className="text-[9px] font-mono text-zinc-700 flex-shrink-0 pt-px w-9">[{log.time}]</span>
                <span className="text-[9px] font-mono text-zinc-600 uppercase font-bold flex-shrink-0 w-14 pt-px">{log.agent}</span>
                <span className={`text-[10px] font-mono leading-snug ${log.color}`}>{log.msg}</span>
              </div>
            ))}
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0c0c14] to-transparent pointer-events-none" />
        </div>
        <div className="flex items-center gap-3 px-4 py-2.5 border-t border-white/[0.05] bg-[#08080f]">
          <div className="flex-1 h-5 bg-white/[0.03] rounded border border-white/[0.04] flex items-center px-2">
            <span className="text-[9px] font-mono text-white/25">awaiting orchestrator...</span>
            <motion.div className="ml-1 w-1.5 h-3 bg-white/30" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} />
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
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-12 px-6 overflow-hidden"
    >
      {/* Sky gradient background with rounded bottom — PrettiFlow style */}
      <div className="absolute inset-0 z-0 bg-hero-gradient rounded-b-[2rem] overflow-hidden" />

      {/* Spatial network canvas */}
      <SpatialNetwork />

      {/* Sliding gradient blobs from sides — like PrettiFlow's animated clouds */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "-42%", opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="pointer-events-none absolute left-0 top-[12%] z-0 hidden w-[640px] h-[640px] md:block"
        style={{ background: "radial-gradient(ellipse at center, rgba(167,139,250,0.38) 0%, transparent 65%)" }}
      />
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "40%", opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.15 }}
        className="pointer-events-none absolute right-0 top-[28%] z-0 hidden w-[560px] h-[560px] md:block"
        style={{ background: "radial-gradient(ellipse at center, rgba(52,211,153,0.28) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text + Form */}
          <div className="flex flex-col items-start">

            {/* Badge — glassmorphism, PrettiFlow style */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-2.5 rounded-full border border-white/50 bg-white/25 px-4 py-1.5 shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.05),0_3px_8px_rgba(0,0,0,0.08)] backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-semibold text-zinc-600 tracking-wide">
                Private Beta · Now Open
              </span>
            </motion.div>

            {/* Headline — pure Instrument Serif, PrettiFlow style */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 font-serif text-[3rem] sm:text-[4.5rem] lg:text-[5.2rem] leading-[1.04] tracking-tight text-zinc-900"
            >
              Multi-agent AI
              <br />
              built for production.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10 max-w-lg text-lg text-zinc-500 leading-relaxed"
            >
              Most agent frameworks break in production. OctaClaw is the runtime
              that doesn&apos;t — parallel DAG execution, self-healing swarms, and
              full observability without the configuration overhead.
            </motion.p>

            {/* Waitlist form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-md mb-8"
            >
              <HomeWaitlistHero />
            </motion.div>

            {/* Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6"
            >
              <Link href="#platform" className="inline-flex items-center gap-2 text-[13px] font-semibold text-zinc-500 hover:text-zinc-800 transition-colors duration-200 group">
                See the platform
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <span className="text-zinc-300">|</span>
              <Link href="#how-it-works" className="inline-flex items-center gap-2 text-[13px] font-semibold text-zinc-500 hover:text-zinc-800 transition-colors duration-200 group">
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

        {/* Provider marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 flex flex-col gap-3 overflow-hidden"
        >
          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold mb-2">
            Routes to any model provider
          </p>
          <InfiniteMovingCards items={providerRow1} direction="left" speed="normal" />
          <InfiniteMovingCards items={providerRow2} direction="right" speed="normal" />
        </motion.div>
      </div>
    </section>
  );
}
