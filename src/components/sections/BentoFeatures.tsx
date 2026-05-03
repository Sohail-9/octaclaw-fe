"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Terminal,
  Cpu,
  Database,
  Layers,
  Workflow,
  Zap,
  Box,
  Globe,
  Lock,
  GitBranch,
  Component,
  ShieldCheck,
  Binary,
  Code2,
  Activity,
  MessageSquare,
  ChevronRight,
  Play,
  CheckCircle2,
  Loader2,
  Clock,
  Shield,
  HardDrive,
  Network,
  Brain,
  Share2,
  Search,
  Eye,
  Link2
} from "lucide-react";
import RunningRobot from "../ui/RunningRobot";

export default function BentoFeatures() {
  const [activeStep, setActiveStep] = useState(0);
  const [memoryActive, setMemoryActive] = useState(0);

  // TaskDAG Simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Memory Simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setMemoryActive((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="howitworks" className="relative pt-12 pb-24 sm:pt-16 sm:pb-32 px-6 overflow-hidden bg-bg-base transition-colors duration-500">
      {/* Background Grids */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(var(--brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--brand-primary) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-1/3 left-1/4 w-[50%] h-[50%] bg-brand-primary opacity-[0.06] dark:opacity-[0.04] blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-md border border-brand-primary/20 bg-brand-primary/5 px-3 py-1 text-[10px] font-mono font-bold tracking-widest text-brand-primary uppercase mb-6"
          >
            <Activity size={12} className="animate-pulse" />
            Active Runtime
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-text-main mb-6 font-heading"
          >
            The Architecture of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Intelligence</span>.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[320px]">

          {/* ACTIONABLE VISUAL: LIVE TASKDAG ENGINE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 md:row-span-2 group relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-surface/50 backdrop-blur-sm hover:border-brand-primary/30 transition-all duration-500 shadow-sm"
          >
            <div className="p-6 h-full flex flex-col">
              <div className="relative flex-1 rounded-xl overflow-hidden border border-border-subtle bg-bg-card shadow-inner mb-6 flex flex-col">
                <div className="relative z-10 flex items-center justify-between px-4 py-2.5 bg-bg-base/80 border-b border-border-subtle">
                  <div className="flex items-center gap-3 text-[10px] font-mono">
                    <span className="flex items-center gap-1.5 text-text-muted"><Terminal size={12} className="text-brand-primary" /> octa_runtime</span>
                    <span className="text-brand-primary font-bold">READY</span>
                    <span className="text-text-muted animate-pulse">|</span>
                  </div>
                  <div className="flex gap-1.5 items-center">
                    <RunningRobot className="scale-[0.25] -mr-4 opacity-50 group-hover:opacity-100 transition-opacity" variant="running" />
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/40" />
                  </div>
                </div>

                <div className="flex-1 p-5 flex flex-col gap-4 relative">
                  <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(var(--brand-primary) 0.5px, transparent 0.5px)", backgroundSize: "20px 20px" }} />
                  <motion.div
                    animate={{ borderColor: activeStep === 0 ? 'var(--brand-primary)' : 'var(--border-subtle)' }}
                    className="relative z-10 flex items-center gap-3 bg-bg-base/90 border rounded-lg px-4 py-2 transition-colors duration-500"
                  >
                    <div className="flex items-center gap-2 min-w-[60px]">
                      <Play size={10} className="text-brand-primary fill-brand-primary" />
                      <span className="text-[9px] font-bold font-mono text-text-muted uppercase">Intent</span>
                    </div>
                    <div className="w-px h-3 bg-border-subtle" />
                    <span className="text-[11px] font-mono text-text-main">
                      {activeStep === 0 ? "Compiling goal..." : "Build OAuth2 authentication end-to-end"}
                    </span>
                  </motion.div>

                  <div className="flex-1 grid grid-cols-12 gap-4 h-full pt-2">
                    <div className="col-span-3 flex flex-col items-center justify-center">
                      <motion.div
                        animate={{
                          scale: activeStep === 1 ? 1.05 : 1,
                          borderColor: activeStep === 1 ? 'var(--brand-primary)' : 'var(--border-subtle)'
                        }}
                        className="w-full p-3 rounded-lg border bg-bg-base flex flex-col gap-2 transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold font-mono text-text-main">PLANNER</span>
                          {activeStep === 1 ? <Loader2 size={10} className="animate-spin text-brand-primary" /> : activeStep > 1 ? <CheckCircle2 size={10} className="text-brand-primary" /> : null}
                        </div>
                        <div className="h-1 w-full bg-border-subtle rounded-full overflow-hidden">
                          <motion.div
                            animate={{ width: activeStep >= 1 ? '100%' : '0%' }}
                            className="h-full bg-brand-primary"
                          />
                        </div>
                      </motion.div>
                    </div>

                    <div className="col-span-6 flex flex-col justify-center gap-2">
                      {[
                        { name: "Architect", step: 1 },
                        { name: "Builder", step: 2 },
                        { name: "Tester", step: 2 }
                      ].map((agent, i) => (
                        <motion.div
                          key={agent.name}
                          animate={{
                            x: activeStep >= 2 ? 0 : -10,
                            opacity: activeStep >= 2 ? 1 : 0.3,
                            borderColor: (activeStep === 2 && i < 2) ? 'var(--brand-secondary)' : 'var(--border-subtle)'
                          }}
                          className="p-2.5 rounded border bg-bg-base flex items-center justify-between shadow-sm"
                        >
                          <div className="flex items-center gap-2">
                            <div className={`w-1 h-1 rounded-full ${activeStep === 2 ? 'bg-brand-secondary animate-pulse' : 'bg-text-muted/20'}`} />
                            <span className="text-[10px] font-mono text-text-main">{agent.name}</span>
                          </div>
                          <div className="flex gap-1">
                            <div className="w-8 h-1 bg-border-subtle rounded-full" />
                            <div className="w-4 h-1 bg-border-subtle rounded-full" />
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="col-span-3 flex flex-col items-center justify-center">
                      <motion.div
                        animate={{
                          scale: activeStep === 3 ? 1.1 : 1,
                          opacity: activeStep === 3 ? 1 : 0.5,
                          borderColor: activeStep === 3 ? 'var(--brand-primary)' : 'var(--border-subtle)'
                        }}
                        className="w-16 h-16 rounded-2xl border-2 bg-bg-surface flex flex-col items-center justify-center shadow-lg relative overflow-hidden"
                      >
                        {activeStep === 3 && (
                          <motion.div
                            initial={{ y: 20 }}
                            animate={{ y: 0 }}
                            className="absolute inset-0 bg-brand-primary/10"
                          />
                        )}
                        <Play size={24} className={activeStep === 3 ? "text-brand-primary fill-brand-primary" : "text-text-muted"} />
                        <span className="text-[8px] font-bold font-mono mt-1">PUSH</span>
                      </motion.div>
                    </div>
                  </div>
                </div>

                <div className="bg-bg-base border-t border-border-subtle p-3 h-20 overflow-hidden font-mono text-[9px]">
                  <div className="text-brand-primary font-bold mb-1">LIVE LOG STREAM:</div>
                  <div className="space-y-0.5 text-text-muted">
                    {activeStep >= 0 && <div>[00:01:03] <span className="text-text-main">INIT</span> kernel.v3.scheduler</div>}
                    {activeStep >= 1 && <div>[00:01:05] <span className="text-brand-primary">PLAN</span> graph_compiled: 14 nodes, 8 edges</div>}
                    {activeStep >= 2 && <div>[00:01:08] <span className="text-brand-secondary">EXEC</span> architect.spawn(opus-4) {"->"} schema.sql</div>}
                    {activeStep >= 2 && <div>[00:01:10] <span className="text-brand-secondary">EXEC</span> builder.spawn(sonnet-4) {"->"} auth_middleware.ts</div>}
                    {activeStep >= 3 && <div className="text-brand-primary font-bold animate-pulse">{">>>"} DEPLOYMENT_READY: 200 OK</div>}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-text-main mb-2 font-heading tracking-tight">Autonomous Orchestration</h3>
                <p className="text-text-muted text-sm font-mono leading-relaxed">
                  Natural language intent is decomposed into a directed acyclic graph, dispatching agents in parallel for zero sequential bottleneck.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ACTIONABLE VISUAL: SEMANTIC GRAPH MEMORY */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-surface/50 backdrop-blur-sm hover:border-brand-primary/30 transition-all duration-500 shadow-sm p-6 flex flex-col"
          >
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                  <Brain size={22} />
                </div>
                <div className="flex items-center gap-2">
                  {memoryActive === 0 ? (
                    <span className="text-[8px] font-mono text-text-muted animate-pulse">Scanning...</span>
                  ) : (
                    <span className="px-2 py-0.5 rounded border border-brand-primary/20 bg-brand-primary/5 text-[8px] font-mono font-bold text-brand-primary">LATEST_SYNC: 0.2ms ago</span>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold font-heading text-text-main mb-3">Semantic Graph Memory</h3>
              <p className="text-text-muted text-sm font-mono leading-relaxed mb-6">
                Recursive entity extraction into a persistent knowledge matrix.
              </p>

              {/* Actionable Graph Visual */}
              <div className="relative flex-1 bg-bg-card rounded-xl border border-border-subtle overflow-hidden p-4 group-hover:bg-bg-card-hover transition-colors flex flex-col">
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(var(--brand-primary) 0.5px, transparent 0.5px)", backgroundSize: "16px 16px" }} />

                {/* Live Extraction Stream */}
                <div className="absolute top-2 left-2 z-20 flex flex-col gap-1">
                  <AnimatePresence mode="popLayout">
                    {memoryActive > 0 && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex items-center gap-1.5 px-2 py-1 rounded bg-bg-base/80 border border-brand-primary/20 text-[7px] font-mono font-bold text-brand-primary"
                      >
                        <Search size={8} /> EXTRACT: {['Auth', 'Schema', 'User', 'Token', 'OAuth'][memoryActive]}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="relative flex-1 w-full flex items-center justify-center mt-4">
                  {/* Central Brain Node */}
                  <motion.div
                    animate={{
                      scale: memoryActive > 0 ? [1, 1.05, 1] : 1,
                      boxShadow: memoryActive > 0 ? "0 0 20px rgba(110,231,183,0.2)" : "none"
                    }}
                    className="w-12 h-12 rounded-full border border-brand-primary/40 bg-brand-primary/10 flex items-center justify-center relative z-20 transition-all"
                  >
                    <div className="relative">
                      <Share2 size={16} className={memoryActive > 0 ? "text-brand-primary" : "text-text-muted"} />
                      <RunningRobot className="absolute -top-6 -right-6 scale-[0.3] opacity-0 group-hover:opacity-100 transition-opacity" variant="static" />
                    </div>
                  </motion.div>

                  {/* Interactive Satellite Nodes */}
                  {[0, 72, 144, 216, 288].map((angle, i) => (
                    <div key={i}>
                      <motion.div
                        animate={{
                          x: Math.cos(angle * Math.PI / 180) * 45,
                          y: Math.sin(angle * Math.PI / 180) * 45,
                          scale: memoryActive === (i + 1) ? 1.2 : 1,
                          borderColor: memoryActive === (i + 1) ? 'var(--brand-primary)' : 'var(--border-subtle)',
                          backgroundColor: memoryActive === (i + 1) ? 'var(--bg-base)' : 'transparent'
                        }}
                        className="absolute w-5 h-5 rounded-full border bg-bg-base/40 flex items-center justify-center text-[7px] font-bold text-text-main z-10 transition-colors"
                      >
                        {['U', 'S', 'T', 'O', 'A'][i]}
                      </motion.div>
                      {/* Connecting Lines */}
                      <motion.div
                        animate={{
                          opacity: memoryActive === (i + 1) ? 0.6 : 0.1,
                          scaleX: memoryActive === (i + 1) ? 1.1 : 1
                        }}
                        className="absolute w-[45px] h-px bg-gradient-to-r from-brand-primary/50 to-transparent origin-left z-0"
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: `rotate(${angle}deg)`
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Actionable Status Footer */}
                <div className="relative z-10 mt-2 flex items-center justify-between px-2 py-1 bg-bg-base/60 rounded border border-border-subtle text-[8px] font-mono">
                  <div className="flex items-center gap-1.5 text-text-muted">
                    <Database size={8} /> 1.2k relations
                  </div>
                  <div className="flex items-center gap-1.5 text-brand-primary font-bold">
                    <Link2 size={8} /> GRAPH_SYNCED
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border-subtle">
              <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                <span className="text-text-muted uppercase tracking-tighter flex items-center gap-1.5"><Eye size={10} /> Knowledge Matrix Status</span>
                <span className="text-brand-primary font-bold">OPTIMIZED</span>
              </div>
              <div className="w-full h-1.5 bg-border-subtle rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: memoryActive > 0 ? ['70%', '85%'] : '70%' }}
                  className="h-full bg-brand-primary shadow-[0_0_8px_rgba(110,231,183,0.5)]"
                />
              </div>
            </div>
          </motion.div>

          {/* ROW 3: MCP, SOVEREIGNTY, ZERO TRUST */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 group relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-surface/50 p-6 hover:border-brand-secondary/30 transition-all duration-500 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center text-brand-secondary">
                <Component size={20} />
              </div>
              <div className="text-[9px] font-mono text-text-muted">MCP_V1.0</div>
            </div>
            <h3 className="text-lg font-bold font-heading text-text-main mb-2">MCP Interface</h3>
            <p className="text-text-muted text-xs font-mono leading-relaxed">
              Native support for safe, typed access to any tool or dataset.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 group relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-surface/50 p-6 hover:border-brand-primary/30 transition-all duration-500 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                <HardDrive size={20} />
              </div>
              <div className="text-[9px] font-mono text-brand-primary font-bold">LOCAL_FIRST</div>
            </div>
            <RunningRobot className="absolute bottom-2 right-2 scale-[0.35] opacity-20 group-hover:opacity-60 transition-all group-hover:translate-x-[-10px]" variant="running" />
            <h3 className="text-lg font-bold font-heading text-text-main mb-2">Data Sovereignty</h3>
            <p className="text-text-muted text-xs font-mono leading-relaxed">
              Run entire swarms on-premise. Your data never crosses a trust boundary.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 group relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-surface/50 p-6 hover:border-brand-secondary/30 transition-all duration-500 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center text-brand-secondary">
                <Shield size={20} />
              </div>
              <div className="text-[9px] font-mono text-text-muted">ZERO_TRUST</div>
            </div>
            <h3 className="text-lg font-bold font-heading text-text-main mb-2">Sandbox Runtime</h3>
            <p className="text-text-muted text-xs font-mono leading-relaxed">
              Deterministic isolation for untrusted agent code via gVisor.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
