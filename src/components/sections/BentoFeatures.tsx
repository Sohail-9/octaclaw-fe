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
import ArchitectureVisual from "../ui/ArchitectureVisual";

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

        <ArchitectureVisual />
      </div>
    </section>
  );
}
