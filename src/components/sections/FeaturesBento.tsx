"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Feature {
  badge: string;
  title: string;
  description: string;
  span: "large" | "small" | "half";
  accent: string;
  visual: ReactNode;
}

const topFeatures: Feature[] = [
  {
    badge: "Core Runtime",
    title: "Parallel DAG Execution",
    description:
      "Decompose any goal into directed acyclic task graphs. Specialist agents execute concurrently across independent lanes — eliminating bottlenecks by orders of magnitude.",
    span: "large",
    accent: "#8b5cf6",
    visual: <DAGVisual />,
  },
  {
    badge: "Multi-Model",
    title: "Universal Model Router",
    description:
      "Route each agent to the optimal provider. One API across Anthropic, OpenAI, Gemini, Groq, and more. Swap models without changing your code.",
    span: "small",
    accent: "#10b981",
    visual: <ProvidersVisual />,
  },
  {
    badge: "Resilience",
    title: "Zero-Config Recovery",
    description:
      "Automatic fault detection and re-instantiation. Swarms self-heal without human intervention — checkpointed states enable deterministic replay from any failure point.",
    span: "small",
    accent: "#0ea5e9",
    visual: <RecoveryVisual />,
  },
  {
    badge: "Observability",
    title: "Real-Time Telemetry",
    description:
      "Every agent action, tool call, and message streamed live. Full structured traces with run IDs, diffs, and on-demand replay.",
    span: "large",
    accent: "#8b5cf6",
    visual: <TelemetryVisual />,
  },
];

const bottomFeatures: Feature[] = [
  {
    badge: "Reliability",
    title: "Deterministic Replay",
    description:
      "Every swarm run is checkpointed. Replay any execution from any point — for debugging, auditing, or compliance. No black boxes.",
    span: "half",
    accent: "#f59e0b",
    visual: <ReplayVisual />,
  },
  {
    badge: "Extensibility",
    title: "50+ Built-in Tools",
    description:
      "Web search, code execution, browser automation, file I/O, API calls, database queries — agents have a full toolkit out of the box.",
    span: "half",
    accent: "#10b981",
    visual: <ToolsVisual />,
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const isLarge = feature.span === "large";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "group relative rounded-2xl border border-zinc-200 bg-white overflow-hidden transition-all duration-500 hover:border-zinc-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)]",
        isLarge ? "md:col-span-2" : "md:col-span-1"
      )}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${feature.accent}08, transparent)`,
        }}
      />

      <div className={cn("flex flex-col h-full", isLarge ? "p-8" : "p-6")}>
        <span
          className="self-start text-[9px] font-bold uppercase tracking-[0.25em] px-2.5 py-1 rounded-full border mb-6"
          style={{
            color: feature.accent,
            borderColor: `${feature.accent}30`,
            background: `${feature.accent}0a`,
          }}
        >
          {feature.badge}
        </span>

        <div
          className="rounded-xl border border-zinc-100 bg-zinc-50/50 overflow-hidden mb-6"
          style={{ minHeight: isLarge ? "190px" : "155px" }}
        >
          {feature.visual}
        </div>

        <div className="mt-auto">
          <h3 className={cn("font-bold text-zinc-950 uppercase tracking-tight font-heading mb-2.5", isLarge ? "text-2xl" : "text-lg")}>
            {feature.title}
          </h3>
          <p className={cn("text-zinc-500 leading-relaxed", isLarge ? "text-sm" : "text-xs")}>
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function HalfCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative rounded-2xl border border-zinc-200 bg-white overflow-hidden transition-all duration-500 hover:border-zinc-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)]"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${feature.accent}08, transparent)`,
        }}
      />

      <div className="flex flex-col md:flex-row h-full p-6 gap-6">
        <div
          className="rounded-xl border border-zinc-100 bg-zinc-50/50 overflow-hidden flex items-center justify-center flex-shrink-0 md:w-48"
          style={{ minHeight: "130px" }}
        >
          {feature.visual}
        </div>
        <div className="flex flex-col justify-center">
          <span
            className="self-start text-[9px] font-bold uppercase tracking-[0.25em] px-2.5 py-1 rounded-full border mb-4"
            style={{
              color: feature.accent,
              borderColor: `${feature.accent}30`,
              background: `${feature.accent}0a`,
            }}
          >
            {feature.badge}
          </span>
          <h3 className="text-lg font-bold text-zinc-950 uppercase tracking-tight font-heading mb-2">
            {feature.title}
          </h3>
          <p className="text-xs text-zinc-500 leading-relaxed">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturesBento() {
  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200/80 to-transparent" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-violet-600/[0.025] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-4 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.05em] text-zinc-950 uppercase font-heading leading-[0.85] mb-6"
          >
            Built for production
            <br />
            <span className="text-zinc-400">from day one.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-500 text-lg max-w-xl leading-relaxed"
          >
            Every layer of the stack engineered for real-world AI orchestration at scale.
          </motion.p>
        </div>

        {/* Top asymmetric bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {topFeatures.map((f, i) => (
            <FeatureCard key={i} feature={f} index={i} />
          ))}
        </div>

        {/* Bottom 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bottomFeatures.map((f, i) => (
            <HalfCard key={i} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Mini Visuals ───────────────────────────────────────────── */

function DAGVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <svg viewBox="0 0 300 150" className="w-full max-h-40">
        <motion.path d="M 52 75 Q 90 38 133 38" stroke="rgba(139,92,246,0.4)" strokeWidth="1" fill="none" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.0, delay: 0.4 }} />
        <motion.path d="M 52 75 L 133 75" stroke="rgba(16,185,129,0.4)" strokeWidth="1" fill="none" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.0, delay: 0.6 }} />
        <motion.path d="M 52 75 Q 90 112 133 112" stroke="rgba(14,165,233,0.4)" strokeWidth="1" fill="none" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.0, delay: 0.8 }} />
        <motion.path d="M 153 38 Q 200 40 238 75" stroke="rgba(139,92,246,0.2)" strokeWidth="1" fill="none" strokeDasharray="3,3" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.9, delay: 1.3 }} />
        <motion.path d="M 153 75 L 238 75" stroke="rgba(16,185,129,0.2)" strokeWidth="1" fill="none" strokeDasharray="3,3" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.9, delay: 1.5 }} />
        <motion.path d="M 153 112 Q 200 110 238 75" stroke="rgba(14,165,233,0.2)" strokeWidth="1" fill="none" strokeDasharray="3,3" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.9, delay: 1.7 }} />

        <motion.g initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
          <circle cx="36" cy="75" r="16" fill="white" stroke="#8b5cf6" strokeWidth="1.5" />
          <circle cx="36" cy="75" r="5" fill="#8b5cf6" />
          <motion.circle cx="36" cy="75" r="10" fill="rgba(139,92,246,0.1)" animate={{ r: [10, 18, 10], opacity: [0.5, 0, 0.5] }} transition={{ duration: 3, repeat: Infinity }} />
          <text x="36" y="98" textAnchor="middle" fill="rgba(139,92,246,0.7)" fontSize="7" fontFamily="monospace" fontWeight="bold">GOAL</text>
        </motion.g>

        {[
          { cx: 143, cy: 38, color: "#8b5cf6", label: "AGENT·A", delay: 0.5, oy: -18 },
          { cx: 143, cy: 75, color: "#10b981", label: "AGENT·B", delay: 0.7, oy: 22 },
          { cx: 143, cy: 112, color: "#0ea5e9", label: "AGENT·C", delay: 0.9, oy: 22 },
        ].map((a) => (
          <motion.g key={a.label} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: a.delay }}>
            <circle cx={a.cx} cy={a.cy} r="12" fill="white" stroke={a.color} strokeWidth="1.5" />
            <circle cx={a.cx} cy={a.cy} r="3.5" fill={a.color} />
            <motion.circle cx={a.cx} cy={a.cy} r="7" fill={`${a.color}15`} animate={{ r: [7, 13, 7], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2.2, repeat: Infinity, delay: a.delay }} />
            <text x={a.cx} y={a.cy + a.oy} textAnchor="middle" fill={a.color} fontSize="6" fontFamily="monospace" fontWeight="bold">{a.label}</text>
          </motion.g>
        ))}

        <motion.g initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 2.0 }}>
          <circle cx="254" cy="75" r="16" fill="white" stroke="rgba(9,9,11,0.2)" strokeWidth="1.5" strokeDasharray="3,3" />
          <motion.circle cx="254" cy="75" r="5" fill="rgba(9,9,11,0.35)" animate={{ scale: [1, 1.5, 1], opacity: [0.35, 0.7, 0.35] }} transition={{ duration: 1.8, repeat: Infinity }} />
          <text x="254" y="98" textAnchor="middle" fill="rgba(9,9,11,0.3)" fontSize="7" fontFamily="monospace" fontWeight="bold">OUTPUT</text>
        </motion.g>
      </svg>
    </div>
  );
}

function ProvidersVisual() {
  const providers = [
    { name: "Anthropic Claude", color: "#7c3aed" },
    { name: "OpenAI GPT-4o", color: "#059669" },
    { name: "Google Gemini", color: "#2563eb" },
    { name: "Groq LLaMA", color: "#d97706" },
    { name: "xAI Grok", color: "#374151" },
    { name: "Mistral AI", color: "#ea580c" },
    { name: "Cohere", color: "#0891b2" },
    { name: "+ 1 more", color: "#9ca3af" },
  ];
  return (
    <div className="w-full p-4 space-y-1.5">
      {providers.map((p, i) => (
        <motion.div key={p.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: i * 0.07 + 0.3 }} className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white border border-zinc-100 hover:border-zinc-200 transition-all">
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: p.color }} />
          <span className="text-[10px] font-mono text-zinc-600 flex-1">{p.name}</span>
          {i < 4 && <motion.span className="text-[8px] font-mono font-bold" style={{ color: p.color }} animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}>active</motion.span>}
        </motion.div>
      ))}
    </div>
  );
}

function RecoveryVisual() {
  const steps = [
    { label: "Running", detail: "3/3 agents active", color: "text-emerald-600", border: "border-emerald-200", bg: "bg-emerald-50", status: "done" },
    { label: "Fault Detected", detail: "agent-2 timeout", color: "text-red-500", border: "border-red-200", bg: "bg-red-50", status: "done" },
    { label: "Re-routing", detail: "swarm adapting", color: "text-amber-600", border: "border-amber-200", bg: "bg-amber-50", status: "active" },
    { label: "Recovered", detail: "checkpoint restored", color: "text-zinc-400", border: "border-zinc-200", bg: "bg-zinc-50", status: "pending" },
  ];
  return (
    <div className="w-full p-5 space-y-2">
      {steps.map((step, i) => (
        <motion.div key={step.label} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: i * 0.18 + 0.3 }} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border ${step.border} ${step.bg}`}>
          {step.status === "done" && <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
          {step.status === "active" && <motion.div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 0.9, repeat: Infinity }} />}
          {step.status === "pending" && <div className="w-2 h-2 rounded-full border border-zinc-300 flex-shrink-0" />}
          <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${step.color}`}>{step.label}</span>
          <span className="ml-auto text-[9px] font-mono text-zinc-400">{step.detail}</span>
        </motion.div>
      ))}
    </div>
  );
}

function TelemetryVisual() {
  const logs = [
    { time: "00:00", agent: "system",  msg: "Swarm initialized — 3 agents ready",    color: "text-zinc-400" },
    { time: "00:01", agent: "orch",    msg: "Goal decomposed → 4 parallel tasks",     color: "text-violet-600" },
    { time: "00:01", agent: "agent-1", msg: "tool: web_search(q='market...')",        color: "text-sky-600" },
    { time: "00:02", agent: "agent-2", msg: "tool: code_exec(lang=python)",           color: "text-emerald-600" },
    { time: "00:02", agent: "system",  msg: "Checkpoint α saved",                    color: "text-zinc-400" },
    { time: "00:03", agent: "agent-1", msg: "Retrieved 32 sources",                  color: "text-sky-600" },
    { time: "00:03", agent: "orch",    msg: "Parallelism: 3/3 active lanes",         color: "text-violet-600" },
    { time: "00:04", agent: "agent-3", msg: "Drafting section 2 of 5...",            color: "text-amber-600" },
  ];
  return (
    <div className="w-full h-full flex flex-col" style={{ minHeight: "190px" }}>
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-100 bg-zinc-50 flex-shrink-0">
        <div className="flex gap-1.5"><div className="w-2 h-2 rounded-full bg-rose-400/70"/><div className="w-2 h-2 rounded-full bg-amber-400/70"/><div className="w-2 h-2 rounded-full bg-emerald-400/70"/></div>
        <span className="ml-2 text-[9px] font-mono text-zinc-400 flex-1">octaclaw / live telemetry</span>
        <motion.span className="text-[8px] font-mono text-emerald-600 font-bold" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.4, repeat: Infinity }}>● LIVE</motion.span>
      </div>
      <div className="flex-1 overflow-hidden relative bg-white">
        <motion.div animate={{ y: ["0%", "-50%"] }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }}>
          {[...logs, ...logs].map((log, i) => (
            <div key={i} className="flex items-start gap-2 px-4 py-1.5 border-b border-zinc-50 hover:bg-zinc-50/50">
              <span className="text-[8px] font-mono text-zinc-400 flex-shrink-0 pt-px w-9">[{log.time}]</span>
              <span className="text-[8px] font-mono text-zinc-400 uppercase font-bold flex-shrink-0 w-14 pt-px">{log.agent}</span>
              <span className={`text-[9px] font-mono leading-snug ${log.color}`}>{log.msg}</span>
            </div>
          ))}
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

function ReplayVisual() {
  const checkpoints = ["α", "β", "γ", "δ"];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-5 gap-5">
      <div className="w-full flex items-center gap-2">
        <div className="flex-1 h-1 bg-zinc-100 rounded-full relative overflow-hidden">
          <motion.div className="absolute left-0 top-0 h-full bg-gradient-to-r from-violet-500 to-emerald-500 rounded-full" initial={{ width: "0%" }} animate={{ width: "68%" }} transition={{ duration: 1.5, delay: 0.3 }} />
        </div>
      </div>
      <div className="w-full flex items-center justify-between relative">
        <div className="absolute left-0 right-0 h-px bg-zinc-200" />
        {checkpoints.map((cp, i) => (
          <motion.div key={cp} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: i * 0.15 + 0.4 }} className={`relative z-10 flex flex-col items-center gap-1.5 ${i < 3 ? "cursor-pointer group" : ""}`}>
            <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-bold font-mono transition-all ${i < 3 ? "border-violet-400 bg-violet-50 text-violet-600 group-hover:bg-violet-100" : "border-zinc-200 bg-white text-zinc-400"}`}>{cp}</div>
            <span className={`text-[8px] font-mono uppercase tracking-wider ${i < 3 ? "text-violet-500" : "text-zinc-400"}`}>Saved</span>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-violet-50 border border-violet-200">
        <svg className="w-3 h-3 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>
        <span className="text-[9px] font-mono text-violet-600 font-bold">Replay from checkpoint β</span>
      </div>
    </div>
  );
}

function ToolsVisual() {
  const tools = [
    { name: "web_search", color: "bg-sky-100 text-sky-700 border-sky-200" },
    { name: "code_exec", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
    { name: "browser", color: "bg-violet-100 text-violet-700 border-violet-200" },
    { name: "file_io", color: "bg-amber-100 text-amber-700 border-amber-200" },
    { name: "api_call", color: "bg-rose-100 text-rose-700 border-rose-200" },
    { name: "db_query", color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
    { name: "email", color: "bg-pink-100 text-pink-700 border-pink-200" },
    { name: "calendar", color: "bg-teal-100 text-teal-700 border-teal-200" },
    { name: "+ 42 more", color: "bg-zinc-100 text-zinc-500 border-zinc-200" },
  ];
  return (
    <div className="w-full h-full p-5 flex flex-wrap gap-1.5 content-start">
      {tools.map((t, i) => (
        <motion.span key={t.name} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: i * 0.06 + 0.3 }} className={`text-[9px] font-mono font-bold uppercase tracking-wide px-2.5 py-1.5 rounded-lg border ${t.color}`}>
          {t.name}
        </motion.span>
      ))}
    </div>
  );
}
