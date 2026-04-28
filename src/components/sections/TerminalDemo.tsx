"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Terminal, Shield, Cpu, Zap, Activity, Database, CheckCircle2 } from "lucide-react";

type AgentStatus = "idle" | "running" | "done";

interface LogLine {
  id: number;
  kind: "tool" | "info" | "success" | "dim";
  text: string;
}

interface AgentState {
  status: AgentStatus;
  lines: LogLine[];
  elapsed?: string;
}

const AGENT_META = [
  { role: "ARCHITECT", model: "OPUS-4", color: "text-neo-primary" },
  { role: "BUILDER", model: "SONNET-4", color: "text-neo-secondary" },
  { role: "TESTER", model: "HAIKU-4", color: "text-neo-accent" },
] as const;

const EMPTY_AGENT: AgentState = { status: "idle", lines: [] };

let lineId = 0;

export default function TerminalDemo() {
  const [cycle, setCycle] = useState(0);
  const [headerPhase, setHeaderPhase] = useState(0);
  const [agents, setAgents] = useState<AgentState[]>([EMPTY_AGENT, EMPTY_AGENT, EMPTY_AGENT]);
  const [memoryLine, setMemoryLine] = useState<string | null>(null);
  const [complete, setComplete] = useState(false);

  const pushLine = (idx: number, kind: LogLine["kind"], text: string) => {
    const id = ++lineId;
    setAgents((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], lines: [...next[idx].lines, { id, kind, text }] };
      return next;
    });
  };

  const setStatus = (idx: number, status: AgentStatus, elapsed?: string) => {
    setAgents((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], status, ...(elapsed ? { elapsed } : {}) };
      return next;
    });
  };

  useEffect(() => {
    setHeaderPhase(0);
    setAgents([EMPTY_AGENT, EMPTY_AGENT, EMPTY_AGENT]);
    setMemoryLine(null);
    setComplete(false);

    const t = (ms: number, fn: () => void) => setTimeout(fn, ms);

    const timers = [
      t(400, () => setHeaderPhase(1)),
      t(1000, () => setHeaderPhase(2)),
      t(1700, () => setHeaderPhase(3)),
      t(2400, () => setAgents([EMPTY_AGENT, EMPTY_AGENT, EMPTY_AGENT])),
      t(2900, () => {
        setStatus(0, "running");
        setStatus(1, "running");
        setStatus(2, "running");
      }),
      t(3200, () => pushLine(0, "tool", 'READ("package.json") -> 847B')),
      t(4000, () => pushLine(0, "info", "ANALYZING AUTH REQUIREMENTS...")),
      t(4900, () => pushLine(0, "tool", 'WRITE("schema.sql") -> 2.1KB')),
      t(5600, () => {
        pushLine(0, "success", "SCHEMA READY // SYNCED TO MEMORY");
        setStatus(0, "done", "2.7s");
      }),
      t(3200, () => pushLine(1, "dim", "WAITING FOR ARCHITECT SCHEMA...")),
      t(5700, () => pushLine(1, "info", "SCHEMA RECEIVED // STARTING IMPL")),
      t(6400, () => pushLine(1, "tool", 'READ("app/middleware.ts") -> 3.4KB')),
      t(7200, () => pushLine(1, "tool", 'WRITE("lib/oauth.ts") -> OK')),
      t(8000, () => pushLine(1, "tool", 'WRITE("lib/session.ts") -> OK')),
      t(8600, () => {
        pushLine(1, "success", "ENDPOINTS LIVE // 2 FILES WRITTEN");
        setStatus(1, "done", "5.7s");
      }),
      t(3200, () => pushLine(2, "info", "ANALYZING CONTRACTS")),
      t(4100, () => pushLine(2, "info", "GENERATING TEST MATRIX (14 CASES)")),
      t(5800, () => pushLine(2, "tool", 'EXEC("vitest auth.spec")')),
      t(7300, () => pushLine(2, "info", "14/14 PASSED ✓")),
      t(8900, () => {
        pushLine(2, "success", "COVERAGE 94% // 0 FAILURES");
        setStatus(2, "done", "6.0s");
      }),
      t(5800, () =>
        setMemoryLine(
          "MEM_LAYER: 14 ENTITIES EXTRACTED // AUTH_SCHEMA, JWT_CONFIG, OAUTH_FLOW"
        )
      ),
      t(9400, () => setComplete(true)),
      t(16000, () => setCycle((c) => c + 1)),
    ];

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-6xl mx-auto border-4 border-neo-stroke bg-neo-bg shadow-neo relative overflow-hidden group"
    >
      {/* ── Cyber Header ─────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-6 py-4 bg-neo-surface border-b-4 border-neo-stroke">
        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-neo-stroke" />
            <div className="w-4 h-4 bg-neo-primary" />
            <div className="w-4 h-4 bg-neo-secondary" />
          </div>
          <div className="flex items-center gap-3 font-mono">
            <Activity className="w-4 h-4 text-neo-primary animate-pulse" />
            <span className="text-[11px] font-black tracking-[0.3em] uppercase text-neo-stroke/60">
              Swarm Command Center
            </span>
          </div>
        </div>
        <div className="flex items-center gap-6 font-mono text-[10px] font-black text-neo-stroke/40">
          <div className="flex items-center gap-2">
            <Database className="w-3 h-3" />
            MEMORY_SYNC: ACTIVE
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-3 h-3" />
            CORE_USAGE: 88%
          </div>
        </div>
      </div>

      <div className="flex h-[450px]">
        {/* ── TaskDAG Sidebar ────────────────────────────────────── */}
        <div className="w-48 border-r-4 border-neo-stroke bg-neo-bg/50 p-6 flex flex-col gap-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-neo-stroke/40">TaskDAG Graph</span>
          <div className="flex flex-col gap-4">
            {["INIT", "PLAN", "SWARM", "DONE"].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className={cn(
                  "w-3 h-3 border-2 border-neo-stroke",
                  i < headerPhase + 1 ? "bg-neo-primary" : "bg-transparent"
                )} />
                <span className={cn(
                  "text-[10px] font-black uppercase tracking-widest font-mono",
                  i < headerPhase + 1 ? "text-neo-stroke" : "text-neo-stroke/20"
                )}>{step}</span>
              </div>
            ))}
          </div>
          <div className="mt-auto border-2 border-neo-stroke p-3 bg-neo-surface">
            <div className="text-[9px] font-black text-neo-stroke/40 uppercase mb-1">Status</div>
            <div className="text-[11px] font-black text-neo-primary uppercase">Parallel Ready</div>
          </div>
        </div>

        {/* ── Main Command Output ────────────────────────────────── */}
        <div className="flex-1 flex flex-col">
          {/* Active Goal */}
          <div className="px-8 py-6 border-b-4 border-neo-stroke/10">
            <AnimatePresence>
              {headerPhase >= 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono space-y-2">
                  <div className="flex items-center gap-3 text-[10px] font-black text-neo-secondary uppercase tracking-[0.2em]">
                    <Shield className="w-4 h-4" />
                    Protocol Session: 0x7F3A
                  </div>
                  <h2 className="text-xl font-black uppercase text-neo-stroke italic">
                    <span className="text-neo-stroke/30 mr-3">&gt;</span>
                    "BUILD OAUTH2 AUTH END-TO-END"
                  </h2>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Agent Columns */}
          <div className="flex-1 grid grid-cols-3 divide-x-4 divide-neo-stroke/10 bg-neo-surface/30">
            {AGENT_META.map((meta, i) => (
              <div key={meta.role} className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className={cn("text-[11px] font-black uppercase tracking-widest", meta.color)}>
                    {meta.role}
                  </span>
                  <div className="px-2 py-0.5 border-2 border-neo-stroke text-[8px] font-black text-neo-stroke/40">
                    {meta.model}
                  </div>
                </div>

                {/* Status Bar */}
                <div className="h-6 flex items-center gap-3">
                  {agents[i].status === "running" && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className={cn("w-2 h-2", meta.color.replace('text', 'bg'))}
                    />
                  )}
                  {agents[i].status === "done" && <CheckCircle2 className="w-4 h-4 text-neo-primary" />}
                  <span className={cn(
                    "text-[10px] font-black uppercase tracking-widest",
                    agents[i].status === "running" ? meta.color : "text-neo-stroke/20"
                  )}>
                    {agents[i].status} {agents[i].elapsed && `// ${agents[i].elapsed}`}
                  </span>
                </div>

                {/* Log Stream */}
                <div className="flex-1 font-mono text-[10px] space-y-2 uppercase leading-tight overflow-hidden">
                  {agents[i].lines.map((line) => (
                    <motion.div
                      key={line.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={cn(
                        line.kind === "tool" ? "text-neo-secondary" :
                          line.kind === "success" ? "text-neo-primary" :
                            line.kind === "dim" ? "opacity-20" : "opacity-60"
                      )}
                    >
                      {line.kind === "tool" && <span className="mr-2 text-neo-stroke/20">$</span>}
                      {line.text}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer Stats ─────────────────────────────────────────── */}
      <AnimatePresence>
        {complete && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            className="border-t-4 border-neo-stroke bg-neo-primary px-8 py-4 flex justify-between items-center"
          >
            <div className="flex gap-8">
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-black/40 uppercase">Time Saved</span>
                <span className="text-xl font-black text-black">6.4s / 52%</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-black/40 uppercase">Efficiency</span>
                <span className="text-xl font-black text-black">3.2x Parallel</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-black text-black uppercase tracking-widest italic">Swarm Sequence Complete</span>
              <div className="w-8 h-8 bg-black border-2 border-neo-stroke flex items-center justify-center">
                <Zap className="w-4 h-4 text-neo-primary fill-neo-primary" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
    </motion.div>
  );
}
