"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Terminal, ExternalLink, Share2, Info, Zap } from "lucide-react";
import DarioAgent, { DarioState } from "./DarioAgent";
import { cn } from "@/lib/utils";

interface AgentPreviewCardProps {
  name?: string;
  agentId?: string;
  className?: string;
}

export default function AgentPreviewCard({ 
  name = "DARIO-01", 
  agentId = "octa-core-0x72",
  className 
}: AgentPreviewCardProps) {
  const [activeState, setActiveState] = useState<DarioState>("idle");
  const [copied, setCopied] = useState(false);

  const states: { id: DarioState; label: string; icon: string }[] = [
    { id: "idle", label: "Idle", icon: "⏸️" },
    { id: "run_right", label: "Run", icon: "🏃" },
    { id: "jump", label: "Jump", icon: "🦘" },
    { id: "wave", label: "Wave", icon: "👋" },
    { id: "review", label: "Review", icon: "🔍" },
    { id: "waiting", label: "Wait", icon: "⏳" },
    { id: "failed", label: "Panic", icon: "😱" },
  ];

  const command = `npx octaclaw run ${name.toLowerCase()}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("w-full max-w-5xl mx-auto p-4 md:p-8", className)}>
      <div className="bg-bg-surface border border-border-subtle rounded-[2.5rem] overflow-hidden shadow-[0_32px_128px_-32px_rgba(0,0,0,0.6)] flex flex-col lg:flex-row min-h-[600px]">
        
        {/* Left Side: Preview Area */}
        <div className="flex-[1.4] relative bg-[#0a0a0a] flex flex-col items-center justify-center p-12 overflow-hidden border-r border-white/5">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[conic-gradient(from_0deg,transparent_0deg,var(--brand-primary)_40deg,transparent_60deg,transparent_180deg,var(--brand-secondary)_220deg,transparent_240deg)] opacity-[0.07] animate-spin-slow" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(10,10,10,1)_85%)]" />
          </div>

          <div className="absolute inset-0 pointer-events-none z-20">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-40" />
            <motion.div 
              animate={{ top: ["-10%", "110%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[1px] bg-brand-primary/10 shadow-[0_0_15px_var(--brand-primary)]"
            />
          </div>

          <motion.div 
            key={activeState}
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 drop-shadow-[0_0_50px_rgba(var(--brand-primary-rgb),0.3)]"
          >
            <DarioAgent state={activeState} scale={1.2} />
          </motion.div>

          <div className="mt-12 w-48 h-6 bg-brand-primary/5 blur-2xl rounded-[100%] scale-x-150" />

          <div className="absolute bottom-8 left-8 flex items-center gap-3">
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-ping absolute inset-0 opacity-40" />
              <div className="w-2.5 h-2.5 rounded-full bg-brand-primary relative" />
            </div>
            <span className="text-[10px] font-mono font-bold text-brand-primary uppercase tracking-[0.2em]">Synchronization Stable</span>
          </div>
        </div>

        {/* Right Side: Controls & Info */}
        <div className="flex-1 p-8 md:p-14 flex flex-col gap-10 bg-bg-surface">
          <div className="space-y-3">
            <h2 className="text-5xl font-bold font-heading tracking-tight text-text-main flex items-center gap-4">
              {name}
              <Zap size={24} className="text-brand-secondary fill-brand-secondary" />
            </h2>
            <p className="text-base text-text-muted leading-relaxed max-w-md">
              A hyper-reactive agent core designed for distributed task execution.
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-4 gap-3">
              {states.map((state) => (
                <button
                  key={state.id}
                  onClick={() => setActiveState(state.id)}
                  className={cn(
                    "flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-300",
                    activeState === state.id 
                      ? "bg-brand-primary/10 border-brand-primary/50 text-brand-primary" 
                      : "bg-bg-base border-border-subtle text-text-muted hover:border-brand-primary/30"
                  )}
                >
                  <span className="text-2xl mb-2">{state.icon}</span>
                  <span className="text-[10px] font-black uppercase tracking-tight">{state.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-5 mt-auto">
            <div 
              onClick={copyToClipboard}
              className="relative bg-black border border-white/10 rounded-2xl p-5 flex items-center justify-between cursor-pointer hover:border-brand-primary/40 transition-all"
            >
              <code className="text-sm font-mono text-brand-primary font-bold overflow-hidden text-ellipsis whitespace-nowrap">
                <span className="text-white/20 mr-3">$</span>
                {command}
              </code>
              <div className="flex-shrink-0">
                {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} className="text-white/40" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
