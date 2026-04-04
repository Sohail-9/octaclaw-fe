"use client";

import { motion } from "framer-motion";
import { Copy, Navigation, Zap } from "lucide-react";

const steps = [
  {
    title: "Configure Initialization",
    description: "Define the DAG configuration in JSON/YAML. Declare specialist roles, tools, and execution boundaries.",
    icon: <Copy size={20} className="text-secondary" />,
  },
  {
    title: "Deploy Target Workflow",
    description: "Launch execution from the CLI or dashboard. The engine automatically threads and isolates parallel routines.",
    icon: <Navigation size={20} className="text-white" />,
  },
  {
    title: "Intercept & Steer",
    description: "Observe live network telemetry. Inject context, manipulate vector states, or approve destructive actions mid-flight.",
    icon: <Zap size={20} className="text-white" />,
  },
];

export default function HowItWorksSection() {
  return (
    <section id="howitworks" className="relative py-16 sm:py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-medium tracking-tight text-white font-heading"
          >
            Lifecycle Architecture
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-low border border-white/5 p-8 sm:p-10 rounded-2xl group overflow-hidden relative hover:border-white/10 transition-colors"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <div className="text-[10px] font-bold text-text-muted/60 uppercase tracking-widest font-mono">
                  Phase 0{index + 1}
                </div>
              </div>
              <h3 className="text-xl text-white font-medium font-heading tracking-tight mb-4 group-hover:text-secondary transition-colors">{step.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed font-sans">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
