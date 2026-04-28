"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  { role: "Architect", model: "opus-4-6",    accent: "#22d3ee" },
  { role: "Builder",   model: "sonnet-4-6",  accent: "#a78bfa" },
  { role: "Tester",    model: "haiku-4-5",   accent: "#fbbf24" },
] as const;

const EMPTY_AGENT: AgentState = { status: "idle", lines: [] };

let lineId = 0;

export default function TerminalDemo() {
  const [cycle, setCycle]           = useState(0);
  const [headerPhase, setHeaderPhase] = useState(0);
  const [agents, setAgents]         = useState<AgentState[]>([EMPTY_AGENT, EMPTY_AGENT, EMPTY_AGENT]);
  const [memoryLine, setMemoryLine] = useState<string | null>(null);
  const [complete, setComplete]     = useState(false);

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
      // ── Header ────────────────────────────────────────────────
      t(400,  () => setHeaderPhase(1)),
      t(1000, () => setHeaderPhase(2)),
      t(1700, () => setHeaderPhase(3)),

      // ── Agents mount (idle) ───────────────────────────────────
      t(2400, () => setAgents([EMPTY_AGENT, EMPTY_AGENT, EMPTY_AGENT])),

      // ── All agents → running simultaneously ───────────────────
      t(2900, () => {
        setStatus(0, "running");
        setStatus(1, "running");
        setStatus(2, "running");
      }),

      // ── Agent 0: Architect ─────────────────────────────────────
      t(3200, () => pushLine(0, "tool", 'read_file("package.json") → 847 b')),
      t(4000, () => pushLine(0, "info", "Analyzing auth requirements...")),
      t(4900, () => pushLine(0, "tool", 'write_file("schema.sql") → 2.1 kb')),
      t(5600, () => {
        pushLine(0, "success", "Schema ready · pushed to shared memory");
        setStatus(0, "done", "2.7s");
      }),

      // ── Agent 1: Builder (depends on Architect) ────────────────
      t(3200, () => pushLine(1, "dim",  "Waiting on Architect's schema...")),
      t(5700, () => pushLine(1, "info", "Schema received ✓  starting impl")),
      t(6400, () => pushLine(1, "tool", 'read_file("app/middleware.ts") → 3.4 kb')),
      t(7200, () => pushLine(1, "tool", 'write_file("lib/oauth.ts") → OK')),
      t(8000, () => pushLine(1, "tool", 'write_file("lib/session.ts") → OK')),
      t(8600, () => {
        pushLine(1, "success", "2 files written · endpoints live");
        setStatus(1, "done", "5.7s");
      }),

      // ── Agent 2: Tester (runs fully in parallel) ───────────────
      t(3200, () => pushLine(2, "info", "Analyzing endpoint contracts")),
      t(4100, () => pushLine(2, "info", "Generating test matrix · 14 cases")),
      t(5800, () => pushLine(2, "tool", 'run_cmd("vitest --run auth.spec")')),
      t(7300, () => pushLine(2, "info", "14 / 14 passed ✓")),
      t(8900, () => {
        pushLine(2, "success", "0 failures · coverage 94%");
        setStatus(2, "done", "6.0s");
      }),

      // ── Semantic memory update ─────────────────────────────────
      t(5800, () =>
        setMemoryLine(
          "◆ Memory  →  14 entities extracted · auth-schema, jwt-config, session-store, oauth-flow ..."
        )
      ),

      // ── Completion bar ─────────────────────────────────────────
      t(9400, () => setComplete(true)),

      // ── Restart ────────────────────────────────────────────────
      t(16000, () => setCycle((c) => c + 1)),
    ];

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
      className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-[0_0_80px_rgba(0,0,0,0.5)]"
    >
      {/* ── Title bar ─────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-5 py-3 bg-white/[0.025] border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]/80" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]/80" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]/80" />
          </div>
          <span className="text-white/25 text-[11px] font-mono tracking-widest uppercase">
            octaclaw · agent swarm
          </span>
        </div>
        <div className="flex items-center gap-4 font-mono text-[10px] text-white/20">
          {AGENT_META.map((m) => (
            <span key={m.role} style={{ color: m.accent + "55" }}>{m.role}</span>
          ))}
        </div>
      </div>

      {/* ── Goal / Planner header ──────────────────────────────── */}
      <div className="px-6 py-4 space-y-1.5 border-b border-white/[0.05]">
        <AnimatePresence>
          {headerPhase >= 1 && (
            <motion.div key="session" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="flex items-center gap-2 font-mono text-[12px]"
            >
              <span className="text-emerald-400">●</span>
              <span className="text-white/35">session-7f3a</span>
              <span className="text-white/15">·</span>
              <span className="text-white/35">~/acme-corp</span>
              <span className="text-white/15">·</span>
              <span className="text-white/35">main ✓</span>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {headerPhase >= 2 && (
            <motion.div key="goal" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="font-mono text-[13px] pt-0.5"
            >
              <span className="text-white/25">Goal  →  </span>
              <span className="text-white/80">&quot;Build OAuth2 authentication end-to-end&quot;</span>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {headerPhase >= 3 && (
            <motion.div key="planner" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-white/30 pt-0.5"
            >
              <span>◆ Planner → parallel_task</span>
              <span className="text-white/10">·</span>
              <span>TaskDAG compiled</span>
              <span className="text-white/10">·</span>
              <span>3 threads · model-routed</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Agent columns ─────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.05]">
        {AGENT_META.map((meta, i) => {
          const agent = agents[i];
          return (
            <div key={meta.role} className="p-5 min-h-[160px] sm:min-h-[200px] flex flex-col gap-3">
              {/* Agent label + model */}
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-[11px] font-bold tracking-wide"
                  style={{ color: meta.accent }}
                >
                  {meta.role}
                </span>
                <span className="font-mono text-[10px] text-white/20">{meta.model}</span>
              </div>

              {/* Status */}
              <div className="h-4 flex items-center">
                {agent.status === "idle" && (
                  <span className="font-mono text-[10px] text-white/15 uppercase tracking-widest">idle</span>
                )}
                {agent.status === "running" && (
                  <span className="flex items-center gap-1.5">
                    <motion.span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: meta.accent }}
                      animate={{ opacity: [1, 0.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <span
                      className="font-mono text-[10px] uppercase tracking-widest"
                      style={{ color: meta.accent + "88" }}
                    >
                      running
                    </span>
                  </span>
                )}
                {agent.status === "done" && (
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="font-mono text-[10px] text-emerald-400/70 uppercase tracking-widest">
                      done · {agent.elapsed}
                    </span>
                  </span>
                )}
              </div>

              {/* Log stream */}
              <div className="flex-1 space-y-1.5 font-mono text-[11px] leading-snug">
                <AnimatePresence>
                  {agent.lines.map((line) => (
                    <motion.div
                      key={line.id}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.22 }}
                      className={
                        line.kind === "tool"
                          ? "text-violet-300/65"
                          : line.kind === "success"
                          ? "text-emerald-400/75"
                          : line.kind === "dim"
                          ? "text-white/18"
                          : "text-white/40"
                      }
                    >
                      {line.kind === "tool"    ? <span className="text-white/20 mr-1">&gt;</span>   : null}
                      {line.kind === "success" ? <span className="text-emerald-400 mr-1">✓</span>   : null}
                      {line.text}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Semantic memory bar ────────────────────────────────── */}
      <AnimatePresence>
        {memoryLine && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-6 py-2.5 border-t border-white/[0.05] font-mono text-[11px] text-white/25 truncate"
          >
            {memoryLine}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Completion footer ──────────────────────────────────── */}
      <AnimatePresence>
        {complete && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-6 py-3.5 border-t border-white/[0.06] flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[12px]"
          >
            <span className="text-yellow-400">✦</span>
            <span className="text-white/55">Complete · 6.0s wall clock</span>
            <span className="text-white/15">·</span>
            <span className="text-emerald-400/65">saved ~6.4s vs sequential</span>
            <span className="text-white/15">·</span>
            <span className="text-white/30">3,841 tokens · 1,204 saved</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
