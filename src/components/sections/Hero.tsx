"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

function mark(letters: string, bg: string) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-[5px] text-[8px] font-black text-white flex-shrink-0 leading-none"
      style={{ background: bg, width: 20, height: 20 }}
    >
      {letters}
    </span>
  );
}

const providerRow1 = [
  { name: "Anthropic Claude", logo: mark("A",   "#191919") },
  { name: "OpenAI GPT-4o",    logo: mark("GPT", "#10a37f") },
  { name: "Google Gemini",    logo: mark("G",   "#4285F4") },
  { name: "Groq",             logo: mark("G",   "#f55036") },
  { name: "Mistral AI",       logo: mark("M",   "#FF6B35") },
  { name: "Cohere",           logo: mark("C",   "#39a2cf") },
];
const providerRow2 = [
  { name: "xAI Grok",    logo: mark("x",   "#111111") },
  { name: "Meta LLaMA",  logo: mark("M",   "#0082FB") },
  { name: "Perplexity",  logo: mark("P",   "#20B2AA") },
  { name: "Together AI", logo: mark("T",   "#e84393") },
  { name: "AWS Bedrock", logo: mark("AWS", "#FF9900") },
  { name: "Azure AI",    logo: mark("Az",  "#0078D4") },
];

const logs = [
  { time: "00:00", agent: "system",  msg: "MarketAnalystSwarm initialized",        color: "text-zinc-500" },
  { time: "00:01", agent: "orch",    msg: "Goal parsed → 4 parallel task lanes",    color: "text-violet-400" },
  { time: "00:01", agent: "agent-1", msg: "tool: web_search(q='AI infra market')",  color: "text-sky-400" },
  { time: "00:02", agent: "agent-2", msg: "tool: code_exec(lang=python)",           color: "text-emerald-400" },
  { time: "00:02", agent: "system",  msg: "Checkpoint α saved — state persisted",  color: "text-zinc-500" },
  { time: "00:03", agent: "agent-1", msg: "Retrieved 32 sources — aggregating...", color: "text-sky-400" },
  { time: "00:03", agent: "orch",    msg: "Parallelism: 4/4 active lanes",         color: "text-violet-400" },
  { time: "00:04", agent: "agent-3", msg: "Drafting executive summary (sec 2/5)",  color: "text-amber-400" },
  { time: "00:04", agent: "agent-2", msg: "Schema: 14 competitor profiles built",  color: "text-emerald-400" },
  { time: "00:05", agent: "system",  msg: "Checkpoint β saved",                    color: "text-zinc-500" },
  { time: "00:05", agent: "orch",    msg: "ETA: 12s — on schedule",                color: "text-violet-400" },
  { time: "00:06", agent: "agent-4", msg: "Critic: reviewing draft…",              color: "text-rose-400" },
];

function HeroTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-3xl mx-auto"
    >
      {/* Subtle glow halo */}
      <div className="absolute -inset-6 rounded-[2.5rem] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 70%, rgba(124,58,237,0.15) 0%, transparent 70%)" }} />

      <div className="relative rounded-2xl overflow-hidden"
        style={{
          background: "#0d0d14",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 4px 8px rgba(0,0,0,0.06), 0 16px 40px rgba(0,0,0,0.18), 0 40px 80px rgba(46,13,110,0.18)",
        }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]" style={{ background: "#09090f" }}>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
          </div>
          <span className="ml-3 text-[10px] font-mono text-white/20 tracking-wide truncate">
            octaclaw / swarm-7f2a · MarketAnalystSwarm
          </span>
          <motion.span className="ml-auto text-[8px] font-mono text-emerald-400 font-bold flex-shrink-0 flex items-center gap-1"
            animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.4, repeat: Infinity }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            LIVE
          </motion.span>
        </div>

        {/* Agent pills */}
        <div className="flex gap-2 px-4 py-2.5 border-b border-white/[0.04] flex-wrap"
          style={{ background: "rgba(255,255,255,0.01)" }}>
          {[
            { name: "Researcher", color: "text-sky-400",     dot: "bg-sky-400" },
            { name: "Analyst",    color: "text-emerald-400", dot: "bg-emerald-400" },
            { name: "Writer",     color: "text-amber-400",   dot: "bg-amber-400" },
            { name: "Critic",     color: "text-rose-400",    dot: "bg-rose-400" },
          ].map((a, i) => (
            <div key={a.name} className="flex items-center gap-1.5 rounded-full px-2.5 py-1"
              style={{ background: "rgba(255,255,255,0.05)" }}>
              <motion.div className={`w-1.5 h-1.5 rounded-full ${a.dot}`}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.4 }} />
              <span className={`text-[9px] font-mono font-bold ${a.color}`}>{a.name}</span>
            </div>
          ))}
        </div>

        {/* Log stream */}
        <div className="h-52 overflow-hidden relative">
          <motion.div animate={{ y: ["0%", "-50%"] }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }}>
            {[...logs, ...logs].map((log, i) => (
              <div key={i} className="flex items-start gap-2 px-4 py-1.5 border-b border-white/[0.025]">
                <span className="text-[9px] font-mono text-zinc-700 flex-shrink-0 pt-px w-9">[{log.time}]</span>
                <span className="text-[9px] font-mono text-zinc-600 uppercase font-bold flex-shrink-0 w-14 pt-px">{log.agent}</span>
                <span className={`text-[10px] font-mono leading-snug ${log.color}`}>{log.msg}</span>
              </div>
            ))}
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
            style={{ background: "linear-gradient(to top, #0d0d14, transparent)" }} />
        </div>

        {/* Status bar */}
        <div className="flex items-center gap-3 px-4 py-2 border-t border-white/[0.05]" style={{ background: "#09090f" }}>
          <div className="flex-1 h-5 rounded border flex items-center px-2"
            style={{ background: "rgba(255,255,255,0.025)", borderColor: "rgba(255,255,255,0.04)" }}>
            <span className="text-[9px] font-mono text-white/20">awaiting orchestrator...</span>
            <motion.div className="ml-1 w-1.5 h-3 bg-white/25"
              animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} />
          </div>
          <div className="text-[9px] font-mono text-zinc-700 flex-shrink-0">
            Elapsed: <span className="text-violet-400 font-bold">6.2s</span>
          </div>
        </div>
      </div>

      {/* Floating completion badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.75, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5, type: "spring", stiffness: 200, damping: 16 }}
        className="absolute -bottom-5 -right-2 md:right-6 z-10 flex items-center gap-3 rounded-2xl px-4 py-3"
        style={{
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(40px) saturate(220%)",
          WebkitBackdropFilter: "blur(40px) saturate(220%)",
          boxShadow: "0 24px 56px rgba(0,0,0,0.12), 0 6px 16px rgba(0,0,0,0.07), 0 2px 4px rgba(52,211,153,0.12), inset 0 2px 0 rgba(255,255,255,1), inset 0 -1px 0 rgba(0,0,0,0.02)",
          border: "1px solid rgba(255,255,255,0.90)",
        }}
      >
        <div className="w-8 h-8 rounded-full flex-shrink-0 clay-emerald flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="text-[12px] font-bold text-zinc-900 leading-tight">Completed in 6.2s</p>
          <p className="text-[10px] text-zinc-400 leading-tight mt-0.5">4 agents · 48 tool calls</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const terminalRotateX = useTransform(scrollYProgress, [0, 0.55], [10, 0]);
  const terminalScale   = useTransform(scrollYProgress, [0, 0.55], [0.93, 1.0]);

  return (
    <section ref={sectionRef} id="waitlist" className="relative overflow-hidden">

      {/* Hero background shape — like Prettiflow's hero_bg */}
      <div
        className="absolute inset-x-0 top-0 h-[85%] rounded-b-[2.5rem] overflow-hidden pointer-events-none"
        style={{
          background: "linear-gradient(160deg, #ffffff 0%, #f0eeff 35%, #e8f5ee 65%, #f0fdf4 100%)",
        }}
      >
        {/* Dot grid on hero bg */}
        <div className="absolute inset-0 dotted-grid opacity-50" />
        {/* Soft gradient orbs */}
        <div className="absolute -top-20 left-1/4 w-[560px] h-[560px] rounded-full blur-[110px]"
          style={{ background: "rgba(139,92,246,0.28)" }} />
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full blur-[110px]"
          style={{ background: "rgba(52,211,153,0.22)" }} />
        <div className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full blur-[90px]"
          style={{ background: "rgba(147,197,253,0.22)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[140px]"
          style={{ background: "rgba(245,208,254,0.14)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-24 flex flex-col items-center text-center">

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 glass-pill-emerald relative overflow-hidden"
        >
          {/* Recurring shimmer sweep */}
          <motion.span
            className="absolute inset-0 pointer-events-none rounded-full"
            style={{ background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.65) 50%, transparent 80%)" }}
            animate={{ x: ["-130%", "130%"] }}
            transition={{ duration: 0.85, delay: 1.8, repeat: Infinity, repeatDelay: 4.5, ease: "easeInOut" }}
          />
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[11px] font-semibold text-zinc-600 tracking-wide">
            Private Beta · Now Open
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[3.4rem] sm:text-[4.8rem] md:text-[5.8rem] lg:text-[7.2rem] leading-[1.0] tracking-[-0.02em] text-zinc-950 mb-7 max-w-5xl"
        >
          Build agents
          <br />
          that{" "}
          <span className="bg-gradient-to-r from-violet-600 via-violet-500 to-emerald-500 bg-clip-text text-transparent italic">
            actually ship.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-zinc-500 max-w-md leading-[1.65] mb-8"
        >
          The orchestration runtime for AI agents that need to run in
          the real world — not just the notebook.
        </motion.p>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-10"
        >
          {[
            { label: "Parallel DAG Execution", cls: "clay-violet", icon: (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            )},
            { label: "Self-Healing Swarms", cls: "clay-emerald", icon: (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            )},
            { label: "Full Observability", cls: "clay-sky", icon: (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )},
          ].map(({ label, cls, icon }, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.06, y: -2 }}
              transition={{ duration: 0.4, delay: 0.32 + i * 0.08, type: "spring", stiffness: 260, damping: 18 }}
              className={`flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wide text-white cursor-default ${cls}`}
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20 flex-shrink-0">
                {icon}
              </span>
              {label}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <button
            onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
            className="relative overflow-hidden flex items-center gap-2.5 rounded-full px-7 py-3.5 text-white text-[14px] font-bold tracking-tight group"
            style={{
              background: "linear-gradient(145deg, #c4b5fd 0%, #8b5cf6 55%, #7c3aed 100%)",
              boxShadow: "0 8px 24px rgba(124,58,237,0.30), 0 2px 8px rgba(124,58,237,0.15), inset 0 2px 5px rgba(255,255,255,0.45), inset 0 -2px 5px rgba(0,0,0,0.20)",
            }}
          >
            <motion.span
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.50) 50%, transparent 70%)" }}
              initial={{ x: "-110%" }}
              animate={{ x: "110%" }}
              transition={{ duration: 0.7, delay: 1.4, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
            />
            Get Early Access
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.44 }}
          className="flex items-center gap-3 mb-12 flex-wrap justify-center"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-[12px] font-medium text-zinc-600">
            <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-zinc-700">400+</span> engineers on the waitlist
          </span>
          <button
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-pill text-[12px] font-medium text-zinc-600 hover:text-zinc-900 transition-colors group"
          >
            See capabilities
            <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>

        <div style={{ perspective: "1200px" }} className="w-full">
          <motion.div style={{ rotateX: terminalRotateX, scale: terminalScale }}>
            <HeroTerminal />
          </motion.div>
        </div>
      </div>

      {/* Provider marquee — like Prettiflow's logo marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10 pb-16 overflow-hidden"
      >
        <div className="flex justify-center mb-5 mt-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
            <svg className="w-3 h-3 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            Routes to any model provider
          </span>
        </div>
        <InfiniteMovingCards items={[...providerRow1, ...providerRow2]} direction="left" speed="slow" />
      </motion.div>
    </section>
  );
}
