"use client";

import { motion } from "framer-motion";
import { LineChart, BarChart3, TrendingUp, Layers, Code, Globe } from "lucide-react";

const PILLARS = [
  {
    title: "Phase 1: Foundation",
    metrics: "Target: MVP Resilience",
    icon: <Code className="text-primary-light" size={24} />,
    items: [
      "No-Code Visual Architect Dashboard",
      "Comprehensive E2E Workflow Testing",
      "Pre-built Industry Specific Templates",
    ],
  },
  {
    title: "Phase 2: Expansion",
    metrics: "Target: Market Penetration",
    icon: <Globe className="text-tertiary" size={24} />,
    items: [
      "Multi-Channel Slack/Email Adapters",
      "Enterprise RBAC & Audit Logging",
      "Model Agnostic Fallbacks (Anthropic/OpenAI)",
    ],
  },
  {
    title: "Phase 3: Scale to $1M ARR",
    metrics: "Target: 3,500+ Active Seats",
    icon: <TrendingUp className="text-secondary" size={24} />,
    items: [
      "Managed Cloud SaaS Hosted Platform",
      "Swarm Freemium Model ($50-500/seat)",
      "Agent vs Agent Global Marketplace",
    ],
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-24 sm:py-32 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 py-1.5 px-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-light mb-6"
          >
            <LineChart size={14} />
            Investor Thesis
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl text-white font-bold tracking-tight font-heading leading-tight"
          >
            The Path to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-light">Market Leadership.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-text-muted font-manrope font-medium"
          >
            OctaClaw holds undeniable technical superiority over the linear agent frameworks currently dominating the market space. Here is our 12-to-24 month strategic roadmap to capture massive enterprise value and reach Series A scale.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group surface-low rounded-3xl p-8 border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                {pillar.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white font-heading mb-2">{pillar.title}</h3>
              <div className="text-sm font-bold text-primary-light/80 font-mono tracking-tight mb-6 flex items-center gap-2">
                <BarChart3 size={14} />
                {pillar.metrics}
              </div>
              
              <ul className="space-y-4 flex-grow">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-start text-text-muted font-manrope text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 mr-3 shrink-0 group-hover:bg-primary-light transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        


      </div>
    </section>
  );
}
