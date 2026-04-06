"use client";

import { motion } from "framer-motion";
import { GitBranch, Database, Shield, GlobeLock, Users } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-24">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-medium text-white font-heading leading-[1.1] tracking-tight"
            >
              Enterprise-Grade <br />
              <span className="text-text-muted">Agent Orchestration.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md text-base text-text-muted font-normal font-sans"
          >
            Built for massive concurrency, replacing slow sequential wrappers with a highly-available parallel execution engine.
          </motion.p>
        </div>

        {/* ── Minimal Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Main Feature: Graph Orchestration (Col Span 8) */}
          {/* Main Feature: Graph Orchestration (Col Span 8) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 group relative overflow-hidden rounded-[24px] magic-border-container"
          >
            <div className="magic-border-content bg-surface-low p-8 sm:p-10 min-h-[360px] flex flex-col justify-between hover:bg-[#0c101c] transition-colors overflow-hidden">
              <div className="relative z-10 max-w-lg">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white/10 transition-colors shadow-lg">
                  <GitBranch size={18} className="text-white" />
                </div>
                <h3 className="text-2xl font-medium text-white font-heading tracking-tight">Graph Orchestration</h3>
                <p className="mt-3 text-text-muted text-base font-sans leading-relaxed">
                  Execute non-linear task dependencies with automated error recovery. Built natively for parallel threads.
                </p>
              </div>
              
              {/* Visual Abstract Layer */}
              <div className="absolute right-0 bottom-0 top-1/4 w-1/2 opacity-30 pointer-events-none group-hover:opacity-70 transition-opacity duration-700">
                 <div className="flex flex-col gap-2 font-mono text-[10px] text-white/50 p-6">
                    <div className="bg-black/60 p-2.5 rounded-md border border-white/10 backdrop-blur-md w-4/5 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                      &quot;node&quot;: &quot;Planner&quot;, &quot;threads&quot;: 4
                    </div>
                    <div className="bg-black/60 p-2.5 rounded-md border border-white/10 backdrop-blur-md ml-4 w-4/5 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                      &quot;node&quot;: &quot;Scraper&quot;, &quot;depends&quot;: [&quot;Planner&quot;]
                    </div>
                    <div className="bg-black/60 p-2.5 rounded-md border border-secondary/30 backdrop-blur-md ml-8 w-4/5 text-secondary shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                      &quot;status&quot;: &quot;Awaiting Execution&quot;
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Side Feature: Swarm Specialists (Col Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 group relative overflow-hidden rounded-[24px] bg-surface-low border border-white/5 p-8 flex flex-col justify-between hover:border-white/10 transition-colors"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white/10 transition-colors">
                <Users size={18} className="text-white" />
              </div>
              <h3 className="text-xl font-medium text-white font-heading tracking-tight">Swarm Specialists</h3>
              <p className="mt-3 text-text-muted font-sans text-sm leading-relaxed">
                Deploy customized role-based agents (Builders, Reviewers) that seamlessly coordinate in isolated environments.
              </p>
            </div>
          </motion.div>

          {/* Bottom Card 1: Unified Memory (Col Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 group relative overflow-hidden rounded-[24px] bg-surface-low border border-white/5 p-8 flex flex-col items-center text-center justify-center hover:border-white/10 transition-colors"
          >
             <div className="mb-5 text-text-muted group-hover:text-white transition-colors duration-500">
                <Database strokeWidth={1} size={32} />
             </div>
             <h3 className="text-lg font-medium text-white font-heading tracking-tight">Unified Reflexion</h3>
             <p className="mt-2 text-text-muted text-sm font-sans leading-relaxed">
                Long-term persistence matching across sessions with episodic memory hashes.
             </p>
          </motion.div>

          {/* Bottom Card 2: Checkpointing (Col Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 group relative overflow-hidden rounded-[24px] bg-surface-low border border-white/5 p-8 flex flex-col items-center text-center justify-center hover:border-white/10 transition-colors"
          >
             <div className="mb-5 text-text-muted group-hover:text-white transition-colors duration-500">
                <Shield strokeWidth={1} size={32} />
             </div>
             <h3 className="text-lg font-medium text-white font-heading tracking-tight">Durable States</h3>
             <p className="mt-2 text-text-muted text-sm font-sans leading-relaxed">
                Immutable workflow states allowing deterministic resuming on runtime faults.
             </p>
          </motion.div>

          {/* Bottom Card 3: Local-First (Col Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-4 group relative overflow-hidden rounded-[24px] bg-surface-low border border-white/5 p-8 flex flex-col items-center text-center justify-center hover:border-white/10 transition-colors"
          >
             <div className="mb-5 text-text-muted group-hover:text-secondary transition-colors duration-500">
                <GlobeLock strokeWidth={1} size={32} />
             </div>
             <h3 className="text-lg font-medium text-white font-heading tracking-tight">Zero-Trust Environment</h3>
             <p className="mt-2 text-text-muted text-sm font-sans leading-relaxed">
                Secure local-first execution. Keep sensitive prompt intellectual property completely on-premise.
             </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
