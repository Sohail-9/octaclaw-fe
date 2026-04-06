"use client";

import { motion } from "framer-motion";
import { LineChart, TrendingUp, Code, Globe, Server } from "lucide-react";

const PILLARS = [
  {
    title: "Phase 1: Robust Local Execution (Current)",
    metrics: "Graph-based DAG engine",
    icon: <Code className="text-white" size={20} />,
    items: [
      "Local SQLite/JSON persistence",
      "Worker-thread parallelism",
      "Atomic checkpoints",
    ],
  },
  {
    title: "Phase 2: Enterprise Coordination Layer",
    metrics: "Multi-user tenancy",
    icon: <Globe className="text-white" size={20} />,
    items: [
      "Audit-ready logging (Reflexion)",
      "Advanced tool permissioning",
      "Cross-channel orchestration (Discord/Telegram integration)",
    ],
  },
  {
    title: "Phase 3: Globally Distributed Multi-Agent Swarm Matrix",
    metrics: "Decentralized agent nodes",
    icon: <TrendingUp className="text-secondary" size={20} />,
    items: [
      "Cross-region state synchronization",
      "P2P swarm communication",
      "High-availability enterprise workloads",
    ],
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-24 sm:py-32 px-6 overflow-hidden border-t border-white/5 bg-surface">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 px-4 text-[10px] font-bold uppercase tracking-widest text-text-muted mb-6"
          >
            <LineChart size={14} className="text-secondary" />
            Infrastructure Roadmap
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl text-white font-medium tracking-tight font-heading leading-tight"
          >
            The Path to <br />
            <span className="text-text-muted">Market Leadership.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-base text-text-muted font-sans font-normal"
          >
            A strategic timeline to capture the enterprise coordination layer. Evolving from robust local execution to a globally distributed multi-agent swarm matrix.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group bg-surface-low rounded-2xl p-8 sm:p-10 border border-white/5 hover:border-white/10 transition-colors flex flex-col h-full"
            >
              <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-8 shrink-0">
                {pillar.icon}
              </div>
              
              <h3 className="text-xl font-medium text-white font-heading mb-2">{pillar.title}</h3>
              <div className="text-[11px] font-medium text-text-muted font-mono tracking-widest uppercase mb-8 flex items-center gap-2 border-b border-white/5 pb-4">
                <Server size={12} className="text-text-muted/50" />
                {pillar.metrics}
              </div>
              
              <ul className="space-y-4 flex-grow">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-start text-text-muted font-sans text-sm leading-relaxed">
                    <span className="text-white/20 mt-0.5 mr-3 font-mono text-[10px] group-hover:text-secondary transition-colors">0{i+1}</span>
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
