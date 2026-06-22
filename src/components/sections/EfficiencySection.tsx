"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Define Your Goal",
    description: "Describe what you need in plain language. OctaClaw parses your intent, identifies required capabilities, and generates a structured execution plan automatically.",
    detail: "Natural language → structured plan",
    bentoClass: "bento-violet",
    clayClass: "clay-violet" as const,
    dotColor: "bg-violet-500",
    visual: <DefineVisual />,
  },
  {
    number: "02",
    title: "Swarm Assembled",
    description: "Specialist agents are instantiated with their own tools, context windows, and objectives. The orchestrator coordinates resource allocation across the entire swarm.",
    detail: "Parallel agent instantiation",
    bentoClass: "bento-emerald",
    clayClass: "clay-emerald" as const,
    dotColor: "bg-emerald-500",
    visual: <AssembleVisual />,
  },
  {
    number: "03",
    title: "Autonomous Execution",
    description: "The swarm executes in parallel, self-corrects on failure, and delivers results with full audit trails, checkpointed states, and deterministic replay capability.",
    detail: "Fault-tolerant execution",
    bentoClass: "bento-sky",
    clayClass: "clay-sky" as const,
    dotColor: "bg-sky-500",
    visual: <ExecuteVisual />,
  },
];

export default function EfficiencySection() {
  return (
    <section id="how-it-works" className="py-28 px-6 relative overflow-hidden bg-white">
      {/* Edge fades blend white section into #f8f7ff page bg */}
      <div className="absolute inset-x-0 top-0 h-20 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, #f8f7ff, transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #f8f7ff, transparent)" }} />
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(124,58,237,0.12), transparent)" }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-600 mb-7 glass-pill"
          >
            How It Works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-[3.6rem] text-zinc-950 tracking-tight leading-[1.08] mb-5"
          >
            From intent to execution
            <br className="hidden md:block" />
            in three steps.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-lg text-zinc-500 max-w-lg leading-relaxed"
          >
            No pipelines to wire up. No agents to babysit. Describe the goal — OctaClaw handles everything from planning to delivery.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[3.25rem] left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px"
            style={{ background: "linear-gradient(to right, rgba(167,139,250,0.4), rgba(52,211,153,0.4), rgba(56,189,248,0.4))" }} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.14 }}
                className="relative"
              >
                {/* Clay step number circle */}
                <div className="hidden md:flex relative z-10 justify-center mb-8">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${step.clayClass}`}>
                    <span className="font-heading text-sm font-black text-white">{step.number}</span>
                  </div>
                </div>

                {/* Bento card */}
                <div className={`relative rounded-3xl overflow-hidden flex flex-col ${step.bentoClass}`}>
                  <div className="card-noise" />

                  {/* Mobile number watermark */}
                  <span className="absolute top-4 right-5 font-heading font-black select-none pointer-events-none leading-none md:hidden"
                    style={{ fontSize: "5rem", lineHeight: 1, color: "rgba(0,0,0,0.06)" }}>
                    {step.number}
                  </span>

                  {/* Detail pill */}
                  <div className="px-6 pt-6 relative z-10">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] ${step.clayClass}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0" />
                      {step.detail}
                    </span>
                  </div>

                  {/* Visual */}
                  <div className="relative z-10 mx-6 mt-4 mb-0 rounded-2xl overflow-hidden min-h-[10rem] bg-white/50 flex items-center"
                    style={{ border: "1px solid rgba(255,255,255,0.80)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                  >
                    {step.visual}
                  </div>

                  {/* Text */}
                  <div className="px-6 py-6 relative z-10">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-zinc-950 tracking-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Step Visuals ─────────────────────────────────────────── */

function DefineVisual() {
  return (
    <div className="w-full p-5 space-y-3">
      <div className="rounded-2xl p-4 bg-white/80" style={{ border: "1px solid rgba(167,139,250,0.20)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Goal Input</span>
        </div>
        <p className="text-sm text-zinc-700 leading-relaxed">
          &ldquo;Research competitors, draft a 10-page market analysis, and create an executive summary.&rdquo;
        </p>
      </div>
      <div className="flex items-center gap-2 px-2">
        <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(139,92,246,0.40), transparent)" }} />
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-4 h-4 rounded-full border-2 border-t-violet-500 border-r-violet-500 border-b-transparent border-l-transparent" />
        <span className="text-[10px] font-mono text-zinc-500">parsing...</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
            { label: "Research", cls: "clay-sky" },
            { label: "Analysis", cls: "clay-emerald" },
            { label: "Writing",  cls: "clay-amber" },
          ].map(({ label, cls }, i) => (
          <motion.div key={label} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.3 + 0.5, type: "spring", stiffness: 260, damping: 18 }}
            className={`rounded-xl py-2 text-center text-[9px] font-bold text-white uppercase tracking-wider ${cls}`}>
            {label}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AssembleVisual() {
  const agents = [
    { name: "Researcher", active: true,  clayClass: "clay-violet" },
    { name: "Analyst",    active: true,  clayClass: "clay-emerald" },
    { name: "Writer",     active: false, clayClass: "" },
    { name: "Critic",     active: true,  clayClass: "clay-sky" },
  ];
  return (
    <div className="w-full p-5 space-y-2.5">
      {agents.map((a, i) => (
        <motion.div key={a.name}
          initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.15 + 0.2, duration: 0.4 }}
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/70"
          style={{ border: "1px solid rgba(52,211,153,0.15)", boxShadow: "0 2px 6px rgba(0,0,0,0.03)" }}
        >
          <div className={`w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center ${a.active ? a.clayClass : "bg-zinc-200"}`}>
            <motion.div className="w-1.5 h-1.5 rounded-full bg-white"
              animate={a.active ? { opacity: [1, 0.3, 1] } : {}}
              transition={{ duration: 1.4, repeat: Infinity }} />
          </div>
          <span className="flex-1 text-[11px] font-bold uppercase tracking-widest text-zinc-700">{a.name}</span>
          <span className={`text-[9px] font-bold uppercase tracking-wider ${a.active ? "text-emerald-600" : "text-zinc-400"}`}>
            {a.active ? "Ready" : "Standby"}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function ExecuteVisual() {
  const tasks = [
    { label: "Research phase",  done: true,  progress: 100 },
    { label: "Analysis phase",  done: true,  progress: 100 },
    { label: "Writing phase",   done: false, progress: 68 },
    { label: "Review phase",    done: false, progress: 0 },
  ];
  return (
    <div className="w-full p-5 space-y-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] font-mono text-zinc-500">execution progress</span>
        <motion.span className="text-[10px] font-bold font-mono text-sky-600"
          animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
          LIVE
        </motion.span>
      </div>
      {tasks.map((task) => (
        <div key={task.label} className="space-y-1">
          <div className="flex items-center justify-between text-[9px] font-mono">
            <div className="flex items-center gap-2">
              {task.done ? (
                <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <div className={`w-2 h-2 rounded-full border ${task.progress > 0 ? "border-sky-500" : "border-zinc-300"}`} />
              )}
              <span className="text-zinc-600">{task.label}</span>
            </div>
            <span className={task.done ? "text-emerald-600" : task.progress > 0 ? "text-sky-600" : "text-zinc-400"}>
              {task.progress}%
            </span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden bg-white/80" style={{ boxShadow: "inset 0 1px 3px rgba(0,0,0,0.06)" }}>
            <motion.div
              className={`h-full rounded-full ${task.done ? "bg-emerald-500" : task.progress > 0 ? "bg-sky-500" : "bg-transparent"}`}
              style={(!task.done && task.progress > 0) ? { background: "linear-gradient(to right, #38bdf8, #818cf8)" } : {}}
              initial={{ width: "0%" }} animate={{ width: `${task.progress}%` }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
