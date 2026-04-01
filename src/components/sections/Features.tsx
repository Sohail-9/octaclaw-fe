"use client";

import { motion } from "framer-motion";
import { GitBranch, Database, Shield, Zap, Terminal } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-24">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-black text-white font-heading leading-none"
            >
              Enterprise-Grade <br />
              <span className="text-tertiary">Agent Orchestration.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md text-lg text-text-muted font-medium font-manrope"
          >
            Built for massive concurrency, replacing slow sequential AI wrappers with a parallel execution engine.
          </motion.p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Feature: Graph Orchestration (Col Span 8) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 group relative overflow-hidden rounded-[32px] surface-low p-8 sm:p-12 min-h-[400px] flex flex-col justify-between"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/20">
                <GitBranch size={24} className="text-primary-light" />
              </div>
              <h3 className="text-3xl font-bold text-white font-heading tracking-tight">Parallel Execution Engine</h3>
              <p className="mt-4 text-text-muted text-lg max-w-md font-manrope">
                Stop waiting for slow, one-at-a-time chat generation. Our engine automatically breaks down complex goals and executes them concurrently across a swarm of agents.
              </p>
            </div>
            
            {/* Visual Preview */}
            <div className="absolute top-1/2 right-0 w-1/2 h-full -rotate-12 translate-y-8 pointer-events-none opacity-40 group-hover:opacity-60 group-hover:rotate-0 transition-all duration-700">
               <div className="w-full h-full bg-gradient-to-br from-primary/20 to-tertiary/10 rounded-3xl border border-white/5 backdrop-blur-sm p-4">
                  <div className="flex flex-col gap-3 font-mono text-xs text-primary-light/80">
                    <div className="bg-black/40 p-2 rounded-lg border border-white/5">
                      {"{ node: 'Research', depends_on: [] }"}
                    </div>
                    <div className="bg-black/40 p-2 rounded-lg border border-white/5 ml-4">
                      {"{ node: 'Write', depends_on: ['Research'] }"}
                    </div>
                    <div className="bg-black/40 p-2 rounded-lg border border-white/5 ml-4">
                      {"{ node: 'Code', depends_on: ['Research'] }"}
                    </div>
                    <div className="bg-black/40 p-2 rounded-lg border border-white/5 ml-8 mt-2">
                       {"{ node: 'Review', depends_on: ['Write', 'Code'] }"}
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Side Feature: Unified Memory (Col Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 group relative overflow-hidden rounded-[32px] surface-high p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-tertiary/20 flex items-center justify-center mb-6 border border-tertiary/20">
                <Database size={24} className="text-tertiary" />
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">Infinite Context Memory</h3>
              <p className="mt-3 text-text-muted font-manrope">
                Native semantic retrieval allows your agents to learn from past runs. No more starting from scratch every time you deploy a workflow.
              </p>
            </div>
          </motion.div>

          {/* Bottom Card 1: Checkpointing (Col Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 group relative overflow-hidden rounded-[32px] surface-high p-8 flex flex-col items-center text-center justify-center cursor-default"
          >
             <div className="relative">
                <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full scale-150 animate-pulse" />
                <Shield size={48} className="text-primary-light relative z-10" />
             </div>
             <h3 className="mt-6 text-xl font-bold text-white font-heading">Fault-Tolerant Runs</h3>
             <p className="mt-2 text-text-muted text-sm font-manrope">
                Never lose progress on a multi-hour autonomous task. Atomic state-saving allows you to pause, inspect, and resume workflows effortlessly.
             </p>
          </motion.div>

          {/* Bottom Card 2: 2D Spatial Observability (Col Span 8) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-8 group relative overflow-hidden rounded-[32px] bg-gradient-to-r from-surface-high to-surface-low p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8"
          >
             <div className="flex-1">
                <h3 className="text-2xl font-bold text-white font-heading tracking-tight">Visual Observability</h3>
                <p className="mt-4 text-text-muted font-manrope">
                  Stop staring at terminal logs. Our spatial dashboard gives your team a top-down view of the swarm. Monitor active agents and intercept workflows in real-time.
                </p>
             </div>
             <div className="flex gap-2">
                {Array.from({length: 4}).map((_, i) => (
                  <div key={i} className="w-1.5 h-12 bg-primary/20 rounded-full overflow-hidden">
                    <motion.div 
                      className="w-full bg-primary"
                      animate={{ height: ["0%", "80%", "30%", "100%", "50%"] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    />
                  </div>
                ))}
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
