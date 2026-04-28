"use client";

import { motion } from "framer-motion";
import { NeoCard } from "@/components/ui/neo/NeoCard";
import { Zap, Shield, Cpu, Share2, Terminal, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Parallel First",
    description: "Multi-agent swarm executes tasks concurrently. 10x faster than linear chains.",
    icon: Zap,
    color: "bg-neo-primary"
  },
  {
    title: "Safe Runtime",
    description: "Sandboxed execution with automated verification at every step.",
    icon: Shield,
    color: "bg-neo-secondary"
  },
  {
    title: "MCP Native",
    description: "Built-in support for Model Context Protocol. Works with any tool, any repo.",
    icon: Terminal,
    color: "bg-neo-accent"
  },
  {
    title: "Swarm Logic",
    description: "Self-healing orchestrator that re-plans on the fly if an agent fails.",
    icon: Cpu,
    color: "bg-neo-primary"
  },
  {
    title: "Memory Layer",
    description: "The primary context-retention engine. Persists complex agent states and project memory across sessions.",
    icon: Brain,
    color: "bg-neo-accent"
  },
  {
    title: "Collaborative",
    description: "Distributed worker queues allow agent teams to scale infinitely.",
    icon: Share2,
    color: "bg-neo-accent"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-32 px-6 bg-neo-bg text-neo-stroke">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <div className="inline-block px-4 py-1 mb-6 bg-neo-surface border-2 border-neo-stroke shadow-neo-sm font-black uppercase text-[10px] tracking-[0.3em]">
            Core Capabilities
          </div>
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter italic text-neo-stroke leading-none">
            Built for <span className="text-neo-secondary">Scale.</span><br />
            Hardened for <span className="text-neo-primary">Production.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <NeoCard 
                variant="surface" 
                className="h-full border-neo-stroke/10 group hover:border-neo-primary transition-all duration-300 hover:translate-y-[-4px]"
              >
                <div className="flex flex-col h-full">
                  <div className={cn(
                    "w-12 h-12 border-2 border-neo-stroke flex items-center justify-center mb-6 shadow-neo-sm transition-transform group-hover:scale-110 group-hover:rotate-3",
                    feature.color
                  )}>
                    <feature.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-4 italic">
                    {feature.title}
                  </h3>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-neo-stroke/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </NeoCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
