"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "<150ms", label: "DAG planning time", accent: "text-violet-600" },
  { value: "∞", label: "Parallel agents", accent: "text-emerald-600" },
  { value: "8+", label: "Model providers", accent: "text-sky-600" },
  { value: "100%", label: "Deterministic replay", accent: "text-amber-600" },
];

export default function MetricsStrip() {
  return (
    <section className="relative">
      <div className="border-y border-zinc-200/70 bg-zinc-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-50/60 via-transparent to-emerald-50/40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 py-10 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 md:divide-x divide-zinc-200/60">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center gap-1.5 px-4"
              >
                <span className={`text-3xl sm:text-4xl font-bold font-heading tracking-tight tabular-nums ${m.accent}`}>
                  {m.value}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500">
                  {m.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
