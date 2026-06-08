"use client";

import { motion } from "framer-motion";

const before = [
  { problem: "Sequential pipelines", detail: "Each agent waits for the previous — one failure cascades everywhere" },
  { problem: "Single model lock-in", detail: "Every task routed to the same LLM regardless of fit or cost" },
  { problem: "Black-box execution", detail: "No visibility into what agents are doing or why they failed" },
  { problem: "Manual failure recovery", detail: "Developer on-call to restart agents and re-run jobs" },
  { problem: "Hours to complete complex tasks", detail: "Sequential execution means you wait, and wait, and wait" },
];

const after = [
  { win: "Parallel DAG execution", detail: "Agents work simultaneously across independent task lanes" },
  { win: "Multi-model routing", detail: "Each subtask gets the best model — GPT-4o, Claude, Gemini, Groq" },
  { win: "Full telemetry + traces", detail: "Every action, tool call, and message logged with structured traces" },
  { win: "Automatic self-healing", detail: "Fault detection and agent re-instantiation without human intervention" },
  { win: "Minutes, not hours", detail: "Parallel execution compresses complex workflows by 10× or more" },
];

export default function WhyOctaClaw() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-zinc-50/60">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200/80 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-4 py-1.5 rounded-full border border-zinc-200 bg-white text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8"
          >
            Why OctaClaw
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.05em] text-zinc-950 uppercase font-heading leading-[0.88] mb-6"
          >
            The old way is
            <br />
            <span className="text-zinc-400">holding you back.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-500 text-lg max-w-lg leading-relaxed"
          >
            Manual agent pipelines are brittle, slow, and opaque. OctaClaw was
            built from the ground up to solve every one of those problems.
          </motion.p>
        </div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center">
                <svg className="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight text-zinc-500 font-heading">
                Manual pipelines
              </h3>
            </div>
            <ul className="space-y-5">
              {before.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 + 0.2 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2.5 h-2.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[13px] font-semibold text-zinc-600 mb-0.5">{item.problem}</span>
                    <span className="text-[12px] text-zinc-400 leading-snug">{item.detail}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-violet-200/60 bg-white p-8 shadow-[0_8px_40px_rgba(139,92,246,0.06)]"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight text-zinc-950 font-heading">
                With OctaClaw
              </h3>
            </div>
            <ul className="space-y-5">
              {after.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 + 0.3 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2.5 h-2.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[13px] font-semibold text-zinc-900 mb-0.5">{item.win}</span>
                    <span className="text-[12px] text-zinc-500 leading-snug">{item.detail}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { value: "10×", label: "Faster execution vs sequential", accent: "text-violet-600" },
            { value: "Zero", label: "Manual intervention required", accent: "text-emerald-600" },
            { value: "100%", label: "Auditability on every run", accent: "text-sky-600" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-5">
              <span className={`text-3xl font-bold font-heading tracking-tight ${stat.accent}`}>
                {stat.value}
              </span>
              <span className="text-[12px] text-zinc-500 leading-snug font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
