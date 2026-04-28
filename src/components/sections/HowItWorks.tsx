"use client";

import { motion } from "framer-motion";

const steps = [
  {
    phase: "01",
    title: "Goal Ingestion",
    description:
      "Submit a natural-language goal through the CLI, HTTP API, or a distributed worker queue. OctaClaw normalizes the input for the planning engine.",
  },
  {
    phase: "02",
    title: "OctaClaw Planning",
    description:
      "The Planner classifies intent into Conversational, Direct, or Parallel paths. It selects the optimal strategy for the OctaClaw engine.",
  },
  {
    phase: "03",
    title: "Swarm Execution",
    description:
      "The Scheduler drives a dynamic swarm of specialized agents. Parallel tasks execute concurrently with automated retries and final result synthesis.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="howitworks" className="relative py-24 sm:py-32 px-6 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] tracking-[0.2em] uppercase font-semibold text-text-muted mb-4"
          >
            How it works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-text-main"
          >
            From goal to output
            <br />
            <span className="text-text-muted">in one command.</span>
          </motion.h2>
        </div>

        {/* Flow connector — desktop only */}
        <div className="hidden md:flex items-center justify-between mb-6 px-1">
          {steps.map((step, index) => (
            <div key={step.phase} className="flex items-center flex-1">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full border border-border-focus bg-bg-surface flex items-center justify-center font-mono text-[10px] font-bold text-text-muted/60">
                  {step.phase}
                </span>
                <span className="text-[11px] font-mono text-text-muted/40 uppercase tracking-widest">
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 flex items-center mx-4">
                  <div className="flex-1 h-px bg-border-subtle" />
                  <span className="text-text-muted/25 text-[10px] mx-1">›</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border-subtle rounded-2xl overflow-hidden border border-border-subtle">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-bg-base p-8 sm:p-10"
            >
              <div className="text-[11px] font-bold text-text-muted/40 uppercase tracking-[0.2em] font-mono mb-6">
                Phase {step.phase}
              </div>
              <h3 className="text-xl font-bold text-text-main tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
