"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { NoiseBackground } from "@/components/ui/NoiseBackground";

interface Feature {
  title: string;
  description: string;
  gradientColors: string[];
  colSpanClass: string;
  visual: ReactNode;
}

const bentoFeatures: Feature[] = [
  {
    title: "Parallel DAG Execution",
    description:
      "Decompose any goal into directed acyclic task graphs. Specialist agents execute concurrently across independent lanes — eliminating bottlenecks by orders of magnitude.",
    gradientColors: ["rgb(221,214,254)", "rgb(196,181,253)", "rgb(245,243,255)"],
    colSpanClass: "md:col-span-3",
    visual: <DAGVisual />,
  },
  {
    title: "Universal Model Router",
    description:
      "Route each agent to the optimal provider. One API across Anthropic, OpenAI, Gemini, Groq, and more. Swap models without changing your code.",
    gradientColors: ["rgb(167,243,208)", "rgb(110,231,183)", "rgb(236,253,245)"],
    colSpanClass: "md:col-span-2",
    visual: <ProvidersVisual />,
  },
  {
    title: "Zero-Config Recovery",
    description:
      "Automatic fault detection and re-instantiation. Swarms self-heal without human intervention — checkpointed states enable deterministic replay from any failure point.",
    gradientColors: ["rgb(186,230,253)", "rgb(125,211,252)", "rgb(240,249,255)"],
    colSpanClass: "md:col-span-2",
    visual: <RecoveryVisual />,
  },
  {
    title: "Real-Time Telemetry",
    description:
      "Every agent action, tool call, and message streamed live. Full structured traces with run IDs, diffs, and on-demand replay.",
    gradientColors: ["rgb(199,210,254)", "rgb(165,180,252)", "rgb(238,242,255)"],
    colSpanClass: "md:col-span-3",
    visual: <TelemetryVisual />,
  },
];

const bottomFeatures: Feature[] = [
  {
    title: "Deterministic Replay",
    description:
      "Every swarm run is checkpointed. Replay any execution from any point — for debugging, auditing, or compliance. No black boxes.",
    gradientColors: ["rgb(254,240,138)", "rgb(253,224,71)", "rgb(255,251,235)"],
    colSpanClass: "",
    visual: <ReplayVisual />,
  },
  {
    title: "50+ Built-in Tools",
    description:
      "Web search, code execution, browser automation, file I/O, API calls, database queries — agents have a full toolkit out of the box.",
    gradientColors: ["rgb(254,205,211)", "rgb(252,165,165)", "rgb(255,241,242)"],
    colSpanClass: "",
    visual: <ToolsVisual />,
  },
];

function BentoCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={feature.colSpanClass}
    >
      <NoiseBackground
        containerClassName="w-full h-full p-0 border-0"
        gradientColors={feature.gradientColors}
        noiseIntensity={0.1}
        group={false}
      >
        <div className="flex flex-col h-full min-h-[18rem]">
          <div className="flex-1 overflow-hidden">
            {feature.visual}
          </div>
          <div className="p-6 md:p-8">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-zinc-950 tracking-tight">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm md:text-base text-zinc-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      </NoiseBackground>
    </motion.div>
  );
}

export default function FeaturesBento() {
  return (
    <section id="features" className="py-24 px-4 md:px-6 bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200/80 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-10 md:mb-12 justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading font-medium tracking-normal text-4xl md:text-5xl text-zinc-950 text-center"
          >
            What OctaClaw can do
          </motion.h2>
        </div>

        {/* 5-col bento grid: Row1 [3+2], Row2 [2+3] */}
        <div className="grid grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-5 mb-4">
          {bentoFeatures.map((f, i) => (
            <BentoCard key={i} feature={f} index={i} />
          ))}
        </div>

        {/* Bottom 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bottomFeatures.map((f, i) => (
            <BentoCard key={i} feature={{ ...f, colSpanClass: "" }} index={bentoFeatures.length + i} />
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
