"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Fingerprint, Activity } from "lucide-react";
import RunningRobot from "./RunningRobot";

interface AgentIDCardProps {
  email: string;
  onDismiss: () => void;
}

export default function AgentIDCard({ email, onDismiss }: AgentIDCardProps) {
  const agentId = `OCTA-${Math.floor(Math.random() * 9000) + 1000}-${(Math.random() + 1).toString(36).substring(7).toUpperCase()}`;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      className="fixed inset-0 flex items-center justify-center z-[20000] p-6 bg-bg-base/80 backdrop-blur-md"
      onClick={onDismiss}
    >
      <motion.div 
        className="relative w-full max-w-md aspect-[1.6/1] bg-bg-surface border border-brand-primary/30 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
        whileHover={{ rotateY: 5, rotateX: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Holographic Header */}
        <div className="h-12 bg-brand-primary/10 border-b border-brand-primary/20 px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-brand-primary" />
            <span className="text-[10px] font-mono font-bold text-brand-primary tracking-widest uppercase">Sovereign Agent ID</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="flex-1 p-6 flex gap-6 relative">
          {/* Decorative Grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(var(--brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--brand-primary) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          
          {/* Robot Headshot Area */}
          <div className="w-24 h-24 bg-bg-base border border-brand-primary/10 rounded-xl flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 to-transparent" />
            <RunningRobot variant="static" className="scale-125" />
            <div className="absolute bottom-1 left-0 right-0 text-center">
              <span className="text-[6px] font-mono text-brand-primary/40 uppercase">Biometric Verified</span>
            </div>
          </div>

          {/* Identity Details */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-4">
              <label className="text-[8px] font-mono text-text-muted uppercase tracking-widest mb-1 block">Identification</label>
              <h3 className="text-xl font-bold text-text-main font-heading tracking-tight">{email.split('@')[0]}</h3>
              <p className="text-[10px] font-mono text-brand-primary font-bold truncate max-w-[200px]">{email}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[7px] font-mono text-text-muted uppercase tracking-widest mb-0.5 block">Serial No.</label>
                <p className="text-[11px] font-mono font-bold text-text-main">{agentId}</p>
              </div>
              <div>
                <label className="text-[7px] font-mono text-text-muted uppercase tracking-widest mb-0.5 block">Authorization</label>
                <p className="text-[11px] font-mono font-bold text-brand-secondary">CLASS-A_ORCH</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card Footer with Fingerprint/Metrics */}
        <div className="h-14 bg-bg-base/30 border-t border-brand-primary/10 px-6 flex items-center justify-between backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 opacity-60">
              <Fingerprint size={12} className="text-brand-primary" />
              <span className="text-[7px] font-mono text-text-main font-bold tracking-tighter">DNA_SEQ_SYNC</span>
            </div>
            <div className="flex items-center gap-1.5 opacity-60">
              <Activity size={12} className="text-brand-secondary" />
              <span className="text-[7px] font-mono text-text-main font-bold tracking-tighter">NEURAL_LINK_OK</span>
            </div>
          </div>
          
          <button 
            onClick={onDismiss}
            className="px-4 py-1.5 bg-brand-primary/20 hover:bg-brand-primary/30 border border-brand-primary/30 rounded text-[9px] font-bold text-brand-primary uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            Authorize Entry
          </button>
        </div>

        {/* Scanline Overlay */}
        <motion.div 
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-px bg-brand-primary/20 z-30 pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
}
