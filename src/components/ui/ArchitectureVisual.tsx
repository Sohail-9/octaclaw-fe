"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Terminal, Brain, Shield, HardDrive, Cpu, Share2, Play, CheckCircle2, Zap } from "lucide-react";
import RunningRobot from "./RunningRobot";

const steps = [
  { id: "input", icon: Terminal, label: "Intent Input", desc: "Natural language goals" },
  { id: "planner", icon: Brain, label: "TaskDAG Planner", desc: "Decomposing into parallel tasks" },
  { id: "runtime", icon: Cpu, label: "Active Runtime", desc: "Executing agent swarms" },
  { id: "memory", icon: Share2, label: "Semantic Memory", desc: "Persistent knowledge sync" },
];

export default function ArchitectureVisual() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto mt-12 px-4">
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Connecting Line (Background) */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-brand-primary/0 via-brand-primary/20 to-brand-primary/0 -translate-y-1/2 hidden md:block" />

        {steps.map((step, i) => {
          const Icon = step.icon;
          const isActive = activeStep === i;
          
          return (
            <div key={step.id} className="relative flex flex-col items-center group">
              {/* Node */}
              <motion.div
                animate={{
                  scale: isActive ? 1.1 : 1,
                  borderColor: isActive ? 'var(--brand-primary)' : 'var(--border-subtle)',
                  backgroundColor: isActive ? 'var(--bg-card)' : 'var(--bg-surface)',
                  boxShadow: isActive ? '0 0 30px rgba(110,231,183,0.1)' : 'none'
                }}
                className="w-20 h-20 rounded-2xl border-2 flex items-center justify-center relative z-10 transition-all duration-500 mb-6 group-hover:border-brand-primary/40"
              >
                <Icon size={32} className={isActive ? "text-brand-primary" : "text-text-muted"} />
                
                {/* Holographic Glint */}
                {isActive && (
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                  />
                )}

                {/* Laser Scan Beam */}
                {isActive && (
                  <motion.div
                    animate={{ height: ["0%", "100%", "0%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-0 right-0 w-full bg-brand-primary/10 border-b border-brand-primary/50 z-0 pointer-events-none"
                  />
                )}

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="active-ring"
                    className="absolute -inset-2 rounded-[22px] border border-brand-primary/30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}

                {/* Robot following the flow */}
                {isActive && (
                  <motion.div 
                    layoutId="robot-tracker"
                    className="absolute -top-10 -right-10 z-20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 0.4 }}
                  >
                    <RunningRobot variant="running" />
                  </motion.div>
                )}
              </motion.div>

              {/* Text info */}
              <div className="text-center">
                <h4 className={`text-sm font-bold uppercase tracking-widest mb-1 font-mono transition-colors ${isActive ? "text-brand-primary" : "text-text-muted"}`}>
                  {step.label}
                </h4>
                <p className="text-[10px] font-mono text-text-muted opacity-60 max-w-[140px]">
                  {step.desc}
                </p>
              </div>

              {/* Progress arrow for mobile */}
              {i < steps.length - 1 && (
                <div className="md:hidden my-4 text-border-subtle">
                  <Zap size={16} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Dynamic Detail Card below the visual */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-16 p-8 rounded-3xl border border-border-subtle bg-bg-surface/50 backdrop-blur-xl flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden"
      >
        {/* Decorative corner glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-primary opacity-10 blur-[80px] rounded-full" />
        
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-32 h-32 rounded-3xl bg-bg-card border border-border-subtle flex items-center justify-center relative">
            <RunningRobot className="scale-75" variant={activeStep % 2 === 0 ? "static" : "running"} />
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded bg-brand-primary/10 text-[9px] font-bold text-brand-primary uppercase tracking-widest mb-4">
            System Phase {activeStep + 1}
          </div>
          <h3 className="text-3xl font-bold text-text-main mb-4 font-heading tracking-tight">
            {activeStep === 0 && "Parsing Intent"}
            {activeStep === 1 && "Optimizing DAG"}
            {activeStep === 2 && "Swarm Dispatch"}
            {activeStep === 3 && "Memory Synthesis"}
          </h3>
          <p className="text-text-muted text-sm font-mono leading-relaxed max-w-xl">
            {activeStep === 0 && "The runtime converts high-level user instructions into deterministic execution plans, ensuring no ambiguity in agent directives."}
            {activeStep === 1 && "Tasks are analyzed for dependencies and parallelized into a Directed Acyclic Graph, minimizing execution time."}
            {activeStep === 2 && "Agents are spawned concurrently across secure sandboxes, each specialized for a specific node in the task graph."}
            {activeStep === 3 && "Findings are recursively integrated back into the semantic memory graph, building a persistent knowledge base for the team."}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
