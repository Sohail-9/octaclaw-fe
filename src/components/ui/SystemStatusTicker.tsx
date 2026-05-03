"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Activity, Cpu, ShieldCheck, Globe } from "lucide-react";

export default function SystemStatusTicker() {
  const [latency, setLatency] = useState(14);
  const [nodes, setNodes] = useState(128);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 10) + 10);
      if (Math.random() > 0.8) setNodes(n => n + (Math.random() > 0.5 ? 1 : -1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-8 bg-bg-base/80 backdrop-blur-md border-t border-border-subtle z-[9999] px-6 hidden sm:flex items-center justify-between text-[9px] font-mono tracking-widest text-text-muted/60">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-brand-primary animate-pulse" />
          <span className="uppercase font-bold">System Status: <span className="text-brand-primary">Operational</span></span>
        </div>
        <div className="flex items-center gap-2 border-l border-border-subtle pl-6">
          <Activity size={10} />
          <span>LATENCY: <span className="text-text-main">{latency}MS</span></span>
        </div>
        <div className="flex items-center gap-2 border-l border-border-subtle pl-6">
          <Cpu size={10} />
          <span>NODES: <span className="text-text-main">{nodes}</span></span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <ShieldCheck size={10} className="text-brand-secondary" />
          <span className="uppercase">Zero Trust Sandbox: <span className="text-brand-secondary">Active</span></span>
        </div>
        <div className="flex items-center gap-2 border-l border-border-subtle pl-6">
          <Globe size={10} />
          <span>REGION: <span className="text-text-main">GLOBAL-MESH</span></span>
        </div>
      </div>
    </div>
  );
}
