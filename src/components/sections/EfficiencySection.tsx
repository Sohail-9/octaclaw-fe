"use client";

import { motion } from "framer-motion";
import { MovingBorder } from "@/components/ui/MovingBorder";

const steps = [
  {
    number: "01",
    title: "Define Your Goal",
    description:
      "Describe what you need in plain language. OctaClaw parses your intent, identifies required capabilities, and generates a structured execution plan.",
    detail: "Natural language → structured plan",
    visual: <DefineVisual />,
    gradient: "rgba(139,92,246,1) 0%, rgba(16,185,129,0.4) 40%, transparent 70%",
  },
  {
    number: "02",
    title: "Swarm Assembled",
    description:
      "Specialist agents are instantiated with their own tools, context windows, and objectives. The orchestrator coordinates resource allocation across the swarm.",
    detail: "Parallel agent instantiation",
    visual: <AssembleVisual />,
    gradient: "rgba(16,185,129,1) 0%, rgba(14,165,233,0.4) 40%, transparent 70%",
  },
  {
    number: "03",
    title: "Autonomous Execution",
    description:
      "The swarm executes in parallel, self-corrects on failure, and delivers results with full audit trails, checkpointed states, and deterministic replay.",
    detail: "Fault-tolerant execution",
    visual: <ExecuteVisual />,
    gradient: "rgba(14,165,233,1) 0%, rgba(139,92,246,0.4) 40%, transparent 70%",
  },
];

export default function EfficiencySection() {
  return (
    <section id="how-it-works" className="py-32 px-6 relative overflow-hidden bg-white">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200/80 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-violet-600/[0.03] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-4 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8"
          >
            How It Works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.05em] text-zinc-950 uppercase font-heading leading-[0.85] mb-6"
          >
            Three steps to
            <br />
            <span className="text-zinc-400 font-heading">autonomy.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-500 text-lg max-w-xl leading-relaxed"
          >
            From intent to execution in seconds — no pipelines to configure, no
            agents to babysit.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              <MovingBorder
                duration={4000 + i * 500}
                containerClassName="h-full rounded-3xl"
                className="bg-white"
                borderGradient={`radial-gradient(circle, ${step.gradient})`}
              >
                <div className="p-8 h-full flex flex-col min-h-[26rem]">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-400 font-mono">
                      {step.number}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 border border-zinc-200 bg-zinc-50 rounded-full px-3 py-1">
                      {step.detail}
                    </span>
                  </div>

                  {/* Visual */}
                  <div className="flex-1 flex items-center justify-center mb-8 rounded-2xl border border-zinc-200/80 bg-zinc-50/50 overflow-hidden min-h-[10rem]">
                    {step.visual}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-950 uppercase tracking-tight mb-3 font-heading">
                      {step.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </MovingBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Step Visuals ─────────────────────────────────────────── */

function DefineVisual() {
  return (
    <div className="w-full p-5 space-y-3">
      <div className="rounded-xl border border-zinc-200 bg-white p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Goal</span>
        </div>
        <p className="text-sm text-zinc-700 leading-relaxed font-light">
          &ldquo;Research competitors, draft a 10-page market analysis, and create an executive summary.&rdquo;
        </p>
      </div>
      <div className="flex items-center gap-2 px-4">
        <div className="flex-1 h-px bg-gradient-to-r from-violet-400/40 to-transparent" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-4 h-4 rounded-full border-t border-violet-500 border-r border-transparent"
        />
        <span className="text-[10px] font-mono text-zinc-400">parsing...</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["Research", "Analysis", "Writing"].map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.3 + 0.5 }}
            className="rounded-lg border border-violet-200 bg-violet-50 p-2 text-center text-[9px] font-bold text-violet-600 uppercase tracking-wider"
          >
            {t}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AssembleVisual() {
  const agents = [
    { name: "Researcher", active: true },
    { name: "Analyst", active: true },
    { name: "Writer", active: false },
    { name: "Critic", active: true },
  ];
  return (
    <div className="w-full p-5 space-y-2.5">
      {agents.map((a, i) => (
        <motion.div
          key={a.name}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.15 + 0.2, duration: 0.4 }}
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-zinc-200 bg-white"
        >
          <div
            className={`w-2 h-2 rounded-full flex-shrink-0 ${
              a.active ? "bg-emerald-500 animate-pulse" : "bg-zinc-300"
            }`}
          />
          <span className="flex-1 text-[11px] font-bold uppercase tracking-widest text-zinc-700">
            {a.name}
          </span>
          <span
            className={`text-[9px] font-bold uppercase tracking-wider ${
              a.active ? "text-emerald-600" : "text-zinc-400"
            }`}
          >
            {a.active ? "Ready" : "Standby"}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function ExecuteVisual() {
  return (
    <div className="w-full p-5 space-y-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] font-mono text-zinc-400">execution progress</span>
        <motion.span
          className="text-[10px] font-bold font-mono text-emerald-600"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          LIVE
        </motion.span>
      </div>
      {[
        { label: "Research phase", done: true, progress: 100 },
        { label: "Analysis phase", done: true, progress: 100 },
        { label: "Writing phase", done: false, progress: 68 },
        { label: "Review phase", done: false, progress: 0 },
      ].map((task) => (
        <div key={task.label} className="space-y-1">
          <div className="flex items-center justify-between text-[9px] font-mono">
            <div className="flex items-center gap-2">
              {task.done ? (
                <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <div
                  className={`w-2 h-2 rounded-full border ${
                    task.progress > 0 ? "border-sky-500" : "border-zinc-300"
                  }`}
                />
              )}
              <span className="text-zinc-500">{task.label}</span>
            </div>
            <span
              className={
                task.done
                  ? "text-emerald-600"
                  : task.progress > 0
                  ? "text-sky-600"
                  : "text-zinc-400"
              }
            >
              {task.progress}%
            </span>
          </div>
          <div className="h-1 rounded-full bg-zinc-100 overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${
                task.done
                  ? "bg-emerald-500"
                  : task.progress > 0
                  ? "bg-sky-500"
                  : "bg-zinc-200"
              }`}
              initial={{ width: "0%" }}
              animate={{ width: `${task.progress}%` }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
