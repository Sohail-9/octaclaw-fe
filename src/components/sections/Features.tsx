"use client";

import { motion } from "framer-motion";
import { Gauge, ShieldCheck, GitBranch, Terminal, Layout, Shield } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-24">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-black text-white font-heading leading-none"
            >
              Engineered for <br />
              <span className="text-tertiary">Autonomous Flow.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md text-lg text-text-muted font-medium"
          >
            Plan, run, and improve your agent DAGs without rebuilding the same logic every sprint.
          </motion.p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Feature: Spatial Workspace (Col Span 8) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 group relative overflow-hidden rounded-[32px] surface-low p-8 sm:p-12 min-h-[400px] flex flex-col justify-between"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/20">
                <Layout size={24} className="text-primary-light" />
              </div>
              <h3 className="text-3xl font-bold text-white font-heading tracking-tight">Spatial Workspace</h3>
              <p className="mt-4 text-text-muted text-lg max-w-sm">
                Design complex AI workflows using a visual spatial workspace. Coordinate agents in three dimensions.
              </p>
            </div>
            
            {/* Visual Preview */}
            <div className="absolute top-1/2 right-0 w-1/2 h-full -rotate-12 translate-y-8 pointer-events-none opacity-40 group-hover:opacity-60 group-hover:rotate-0 transition-all duration-700">
               <div className="w-full h-full bg-gradient-to-br from-primary/20 to-tertiary/10 rounded-3xl border border-white/5 backdrop-blur-sm p-4">
                  <div className="flex flex-col gap-3">
                    <div className="h-4 w-3/4 bg-white/10 rounded-full animate-pulse" />
                    <div className="h-4 w-1/2 bg-white/5 rounded-full" />
                    <div className="mt-4 grid grid-cols-4 gap-2">
                       {Array.from({length: 8}).map((_, i) => (
                         <div key={i} className="aspect-square bg-primary/20 rounded-lg border border-primary/10" />
                       ))}
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Side Feature: Autonomous Agents (Col Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 group relative overflow-hidden rounded-[32px] surface-high p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-tertiary/20 flex items-center justify-center mb-6 border border-tertiary/20">
                <Terminal size={24} className="text-tertiary" />
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">Autonomous Agents</h3>
              <p className="mt-3 text-text-muted">
                Deploy agents that collaborate and execute workflows automatically.
              </p>
            </div>
            
            {/* Mini Terminal Preview */}
            <div className="mt-8 p-3 rounded-xl bg-black/40 font-mono text-[10px] text-cyber-mint/80 border border-white/5">
              <div>$ octa run agent-alpha</div>
              <div className="mt-1 flex gap-2">
                <div className="h-2 w-2 rounded-full bg-cyber-mint animate-pulse" />
                <span>executing workspace_init...</span>
              </div>
            </div>
          </motion.div>

          {/* Bottom Card 1: Enterprise (Col Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 group relative overflow-hidden rounded-[32px] surface-high p-8 flex flex-col items-center text-center justify-center"
          >
             <div className="relative">
                <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full scale-150 animate-pulse" />
                <Shield size={48} className="text-primary-light relative z-10" />
             </div>
             <h3 className="mt-6 text-xl font-bold text-white font-heading">Enterprise Grade</h3>
             <p className="mt-2 text-text-muted text-sm">
                Private models & scalable infrastructure.
             </p>
          </motion.div>

          {/* Bottom Card 2: Visibility (Col Span 8) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-8 group relative overflow-hidden rounded-[32px] bg-gradient-to-r from-surface-high to-surface-low p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8"
          >
             <div className="flex-1">
                <h3 className="text-2xl font-bold text-white font-heading italic tracking-tight">Full Visibility Tracing</h3>
                <p className="mt-4 text-text-muted">Step-level traces show exactly where runs break. Catch failures before your customers do.</p>
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
