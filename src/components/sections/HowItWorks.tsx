"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NeoCard } from "@/components/ui/neo/NeoCard";
import { MessageSquare, Cpu, Zap, ArrowRight } from "lucide-react";

const steps = [
  {
    phase: "01",
    title: "Sync Goal",
    icon: MessageSquare,
    color: "bg-neo-secondary",
    description: "Submit a natural-language goal through CLI or API.",
  },
  {
    phase: "02",
    title: "Plan Path",
    icon: Cpu,
    color: "bg-neo-primary",
    description: "OctaClaw selects the optimal parallel strategy.",
  },
  {
    phase: "03",
    title: "Execute",
    icon: Zap,
    color: "bg-neo-accent",
    description: "A swarm of agents executes and synthesizes results.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="howitworks" className="relative py-32 px-6 bg-neo-bg text-neo-stroke overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20">
          <div className="inline-block px-4 py-1 mb-6 bg-neo-surface border-2 border-neo-stroke shadow-neo-sm font-black uppercase text-[10px] tracking-[0.3em]">
            System Architecture
          </div>
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter italic text-neo-stroke leading-none">
            From goal to output<br />
            <span className="text-neo-primary">in one command.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <NeoCard variant="surface" className="h-full border-neo-stroke/20 group hover:border-neo-stroke transition-all duration-300">
                <div className="flex justify-between items-start mb-10">
                  <div className={cn(
                    "w-16 h-16 border-2 border-neo-stroke shadow-neo-sm flex items-center justify-center transition-transform group-hover:scale-110",
                    step.color
                  )}>
                    <step.icon className="w-8 h-8 text-black" />
                  </div>
                  <span className="text-5xl font-black text-neo-stroke opacity-5 font-mono group-hover:opacity-10 transition-opacity">
                    {step.phase}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black mb-4 uppercase tracking-wider text-neo-stroke">
                  {step.title}
                </h3>
                <p className="font-bold text-gray-500 leading-tight mb-8 text-xs uppercase tracking-widest">
                  {step.description}
                </p>
              </NeoCard>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neo-primary/5 to-transparent pointer-events-none" />
    </section>
  );
}
