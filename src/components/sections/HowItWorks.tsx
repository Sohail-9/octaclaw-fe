"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Scaffold your Spatial Office",
    description: "Initialize your 2D workspace and physically drop diverse AI agents into their dedicated desks.",
  },
  {
    title: "Watch execution unfold live",
    description: "Deploy workflows from the Command Center. Watch as your agents walk, work, and collaborate in real-time.",
  },
  {
    title: "Intercept and guide mid-run",
    description: "Walk your avatar up to any agent's radius to open their panel. Inspect logs or inject prompts on the fly.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="howitworks" className="relative py-16 sm:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading">How it works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card p-8 group overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-bold text-primary-light bg-primary/10 px-2 py-0.5 rounded uppercase tracking-widest">
                  Step {index + 1}
                </span>
                <div className="h-[1px] flex-grow bg-white/5" />
              </div>
              <h3 className="text-xl text-white font-bold font-heading">{step.title}</h3>
              <p className="mt-4 text-text-muted leading-relaxed">{step.description}</p>
              
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="text-6xl font-black font-heading">{index + 1}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
