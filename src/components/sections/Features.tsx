"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  GitBranch,
  Cpu,
  Database,
  Shield,
  Layers,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: <GitBranch className="w-5 h-5 text-violet-400" />,
    title: "Parallel Execution",
    description:
      "Decompose any goal into concurrent agent tasks. Independent sub-tasks run simultaneously — no sequential bottlenecks.",
    visual: <ParallelVisual />,
    colSpan: "md:col-span-2",
  },
  {
    icon: <Cpu className="w-5 h-5 text-emerald-400" />,
    title: "Specialist Agents",
    description:
      "Deploy domain-specific agents with isolated context, tools, and objectives — assembled per task.",
    visual: <AgentVisual />,
    colSpan: "",
  },
  {
    icon: <Database className="w-5 h-5 text-sky-400" />,
    title: "Persistent Memory",
    description:
      "Agents share a growing knowledge graph. Every run makes the swarm smarter and more accurate.",
    visual: <MemoryVisual />,
    colSpan: "",
  },
  {
    icon: <Layers className="w-5 h-5 text-amber-400" />,
    title: "Model Agnostic",
    description:
      "Native support for Anthropic, OpenAI, Gemini, Groq, and any MCP-compatible model. Mix and match freely.",
    visual: <ModelsVisual />,
    colSpan: "md:col-span-2",
  },
  {
    icon: <Shield className="w-5 h-5 text-rose-400" />,
    title: "Enterprise Security",
    description:
      "Run fully on-premise. Encrypted agent communication, granular RBAC, and complete audit trails.",
    visual: <SecurityVisual />,
    colSpan: "",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-32 px-6 relative overflow-hidden bg-[#050505]"
    >
      {/* Subtle divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.03] text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-8"
          >
            Platform
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.05em] text-white uppercase font-heading leading-[0.85] mb-6"
          >
            Built for<br />
            <span className="text-white/20">intelligence.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-lg max-w-xl leading-relaxed"
          >
            A first-class execution engine for multi-agent workflows — not a
            simple wrapper.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(22rem,auto)]">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={cn(
                "group relative rounded-3xl border border-white/[0.06] bg-white/[0.02] overflow-hidden flex flex-col transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]",
                f.colSpan
              )}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/[0.04] via-transparent to-emerald-600/[0.03]" />
              </div>

              {/* Visual area */}
              <div className="flex-1 p-6 flex items-center justify-center overflow-hidden min-h-[12rem]">
                {f.visual}
              </div>

              {/* Content */}
              <div className="p-8 pt-4 border-t border-white/[0.04]">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-4 group-hover:border-white/[0.12] transition-all duration-300">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2">
                  {f.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Feature Visuals ──────────────────────────────────────── */

function ParallelVisual() {
  const lanes = [
    { label: "Research Agent", width: "85%", color: "bg-violet-500", delay: 0 },
    { label: "Planner Agent", width: "65%", color: "bg-sky-500", delay: 0.3 },
    { label: "Writer Agent", width: "90%", color: "bg-emerald-500", delay: 0.15 },
    { label: "Reviewer Agent", width: "55%", color: "bg-amber-500", delay: 0.45 },
  ];
  return (
    <div className="w-full space-y-3 px-2">
      {lanes.map((lane) => (
        <div key={lane.label} className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${lane.color} animate-pulse`} style={{ animationDelay: `${lane.delay}s` }} />
              <span className="text-[10px] font-mono text-white/40">{lane.label}</span>
            </div>
            <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">running</span>
          </div>
          <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
            <motion.div
              className={`h-full ${lane.color} rounded-full opacity-60`}
              initial={{ width: "0%" }}
              animate={{ width: [lane.width, "20%", lane.width] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: lane.delay }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function AgentVisual() {
  const agents = [
    { role: "Analyst", color: "border-violet-500/40 text-violet-400" },
    { role: "Coder", color: "border-sky-500/40 text-sky-400" },
    { role: "Researcher", color: "border-emerald-500/40 text-emerald-400" },
    { role: "Critic", color: "border-amber-500/40 text-amber-400" },
  ];
  return (
    <div className="grid grid-cols-2 gap-2.5 w-full p-2">
      {agents.map((a, i) => (
        <motion.div
          key={a.role}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className={`flex flex-col items-center gap-2 p-3 rounded-xl border bg-white/[0.02] ${a.color}`}
        >
          <div className={`w-8 h-8 rounded-full border ${a.color} flex items-center justify-center`}>
            <Zap className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">{a.role}</span>
        </motion.div>
      ))}
    </div>
  );
}

function MemoryVisual() {
  return (
    <div className="w-full h-full flex flex-col gap-3 p-2">
      <div className="flex items-center justify-between text-[10px] font-mono">
        <span className="text-white/30">knowledge graph</span>
        <span className="text-emerald-400 font-bold">v142</span>
      </div>
      <div className="flex-1 rounded-xl border border-white/[0.04] bg-white/[0.02] p-3 space-y-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/10 shrink-0" />
            <motion.div
              className="h-1 rounded-full bg-white/10"
              style={{ width: `${[70, 45, 85, 55, 65][i]}%` }}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 text-[9px] text-white/20 font-mono">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>indexing 3 new memories...</span>
      </div>
    </div>
  );
}

function ModelsVisual() {
  const models = ["Claude 3.5", "GPT-4o", "Gemini 1.5", "LLaMA 3.1", "Grok 2", "Mistral"];
  return (
    <div className="flex flex-wrap gap-2 justify-center items-center p-4">
      {models.map((m, i) => (
        <motion.div
          key={m}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.03] text-[11px] font-semibold text-white/50 hover:border-white/20 hover:text-white/80 transition-all duration-300 cursor-default"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-violet-400 opacity-60" />
          {m}
        </motion.div>
      ))}
    </div>
  );
}

function SecurityVisual() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl border border-rose-500/20 bg-rose-500/[0.05] flex items-center justify-center">
          <Shield className="w-7 h-7 text-rose-400 opacity-70" />
        </div>
        <div className="absolute inset-0 rounded-2xl border border-rose-500/10 scale-125 animate-pulse-ring" />
      </div>
      <div className="flex flex-col gap-1.5 w-full">
        {["On-premise deploy", "Encrypted channels", "Audit logs"].map((item) => (
          <div key={item} className="flex items-center gap-2.5 text-[11px] text-white/40">
            <svg className="w-3 h-3 text-rose-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
