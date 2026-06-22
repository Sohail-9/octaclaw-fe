"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "<150ms",
    label: "DAG planning latency",
    clayClass: "clay-violet",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    value: "∞",
    label: "Parallel agent lanes",
    clayClass: "clay-emerald",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    value: "8+",
    label: "Model providers",
    clayClass: "clay-sky",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    value: "100%",
    label: "Deterministic replay",
    clayClass: "clay-amber",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function MetricsStrip() {
  return (
    <section className="relative">
      <div className="border-y border-zinc-100/80"
        style={{ background: "rgba(255,255,255,0.80)", backdropFilter: "blur(8px)" }}>
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09, type: "spring", stiffness: 200, damping: 20 }}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${m.clayClass}`}>
                  {m.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold font-heading text-zinc-950 tracking-tight mb-1">
                    {m.value}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                    {m.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
