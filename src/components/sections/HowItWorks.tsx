"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Map work in one canvas",
    description: "Create DAGs visually and assign humans and agents to each stage of execution.",
  },
  {
    title: "Run with full visibility",
    description: "Watch runs live, inspect node-level traces, and catch failures before they ship.",
  },
  {
    title: "Collaborate and iterate",
    description: "Comment in context, replay paths, and improve workflows with the whole team aligned.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="howitworks" className="relative py-20 sm:py-24 px-6 bg-[#0D0818]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">How it works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="oc-card p-7"
            >
              <p className="text-xs text-[#cdbbff] font-semibold">STEP {index + 1}</p>
              <h3 className="mt-3 text-xl text-white font-extrabold">{step.title}</h3>
              <p className="mt-3 text-sm text-[#c9c2df] leading-relaxed">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
