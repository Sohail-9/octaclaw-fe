"use client";

import { useEffect, useRef, useState } from "react";

// ─── Constants ───────────────────────────────────────────────
const TILE = 28;
const COLS = 20;
const ROWS = 14;
const W = COLS * TILE;
const H = ROWS * TILE;

// ─── Types ───────────────────────────────────────────────────
type Mode = "proximity" | "multiplayer";

interface Pos { x: number; y: number }

interface Agent {
  id: string;
  label: string;
  desk: Pos;    // top-left tile of desk (2×1)
  color: string;
  glowColor: string;
  status: string;
  strategy: string;
}

interface Teammate {
  id: string;
  initials: string;
  color: string;
  path: Pos[];
}

// ─── Office layout ───────────────────────────────────────────
const FLOOR_ROOMS = [
  { x: 1, y: 1, w: 8, h: 5, label: "Research Lab", color: "rgba(124,58,255,0.06)" },
  { x: 11, y: 1, w: 8, h: 5, label: "Build Zone", color: "rgba(16,185,129,0.06)" },
  { x: 1, y: 8, w: 8, h: 5, label: "QA Room", color: "rgba(251,146,60,0.06)" },
  { x: 11, y: 8, w: 8, h: 5, label: "Command Center", color: "rgba(99,102,241,0.08)" },
];

const AGENTS: Agent[] = [
  {
    id: "researcher",
    label: "Researcher",
    desk: { x: 2, y: 2 },
    color: "#a855f7",
    glowColor: "rgba(168,85,247,0.4)",
    status: "running",
    strategy: "Searching Web",
  },
  {
    id: "builder",
    label: "Builder",
    desk: { x: 13, y: 2 },
    color: "#22c55e",
    glowColor: "rgba(34,197,94,0.4)",
    status: "done",
    strategy: "Writing Code",
  },
  {
    id: "tester",
    label: "Tester",
    desk: { x: 2, y: 9 },
    color: "#f97316",
    glowColor: "rgba(249,115,22,0.4)",
    status: "pending",
    strategy: "Awaiting Build",
  },
  {
    id: "ceo",
    label: "CEO Desk",
    desk: { x: 13, y: 9 },
    color: "#6366f1",
    glowColor: "rgba(99,102,241,0.4)",
    status: "idle",
    strategy: "Command Center",
  },
];

// Predefined walk paths for main avatar (proximity mode)
const PROXIMITY_PATH: Pos[] = [
  { x: 10, y: 7 }, { x: 9, y: 7 }, { x: 8, y: 7 }, { x: 7, y: 6 },
  { x: 6, y: 5 }, { x: 5, y: 4 }, { x: 4, y: 3 }, { x: 4, y: 3 },
  { x: 4, y: 3 }, // linger near researcher
  { x: 5, y: 4 }, { x: 6, y: 5 }, { x: 7, y: 6 }, { x: 8, y: 7 },
  { x: 10, y: 7 }, { x: 12, y: 6 }, { x: 13, y: 5 }, { x: 14, y: 4 },
  { x: 14, y: 3 }, { x: 14, y: 3 }, // linger near builder
  { x: 13, y: 5 }, { x: 12, y: 6 }, { x: 10, y: 7 },
];

// Predefined walk paths for multiplayer mode (CEO room)
const CEO_PATH: Pos[] = [
  { x: 10, y: 7 }, { x: 11, y: 8 }, { x: 13, y: 9 },
  { x: 14, y: 10 }, { x: 15, y: 10 }, { x: 15, y: 10 },
  { x: 15, y: 10 }, { x: 15, y: 10 }, // sit at CEO desk
  { x: 14, y: 10 }, { x: 13, y: 9 }, { x: 11, y: 8 }, { x: 10, y: 7 },
];

const TEAMMATE_A: Pos[] = [
  { x: 3, y: 7 }, { x: 4, y: 7 }, { x: 5, y: 7 },
  { x: 6, y: 7 }, { x: 6, y: 6 }, { x: 6, y: 5 },
  { x: 6, y: 6 }, { x: 6, y: 7 }, { x: 5, y: 7 },
  { x: 4, y: 7 }, { x: 3, y: 7 },
];

const TEAMMATE_B: Pos[] = [
  { x: 17, y: 5 }, { x: 16, y: 6 }, { x: 15, y: 7 },
  { x: 14, y: 7 }, { x: 13, y: 7 }, { x: 13, y: 7 },
  { x: 14, y: 7 }, { x: 15, y: 7 }, { x: 16, y: 6 },
  { x: 17, y: 5 },
];

// ─── Helpers ─────────────────────────────────────────────────
function tileCenter(p: Pos) {
  return { cx: p.x * TILE + TILE / 2, cy: p.y * TILE + TILE / 2 };
}

function dist(a: Pos, b: Pos) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

function nearestAgent(pos: Pos): Agent | null {
  let best: Agent | null = null;
  let bestD = Infinity;
  for (const ag of AGENTS) {
    const d = dist(pos, { x: ag.desk.x + 1, y: ag.desk.y });
    if (d < 2.5 && d < bestD) { best = ag; bestD = d; }
  }
  return best;
}

// ─── Status helpers ───────────────────────────────────────────
function statusColor(status: string) {
  if (status === "running") return "#a855f7";
  if (status === "done") return "#22c55e";
  if (status === "pending") return "#f97316";
  return "#6366f1";
}

function statusDot(status: string) {
  return (
    <circle r="3.5" fill={statusColor(status)}>
      {status === "running" && (
        <animate attributeName="opacity" values="1;0.3;1" dur="1.3s" repeatCount="indefinite" />
      )}
    </circle>
  );
}

// ─── Component ───────────────────────────────────────────────
export default function MiniOfficeDemo({ mode = "proximity" }: { mode?: Mode }) {
  const [step, setStep] = useState(0);
  const [tmAStep, setTmAStep] = useState(0);
  const [tmBStep, setTmBStep] = useState(0);
  const [ceoStep, setCeoStep] = useState(0);
  const [fPrompt, setFPrompt] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [panelAgent, setPanelAgent] = useState<Agent | null>(null);
  const tickRef = useRef(0);

  const path = mode === "proximity" ? PROXIMITY_PATH : CEO_PATH;
  const avatarPos = path[step % path.length];

  useEffect(() => {
    const id = setInterval(() => {
      tickRef.current++;

      // Main avatar
      setStep(s => {
        const next = (s + 1) % path.length;
        return next;
      });

      // Teammates (multiplayer mode)
      if (mode === "multiplayer") {
        setTmAStep(s => (s + 1) % TEAMMATE_A.length);
        setTmBStep(s => (s + 1) % TEAMMATE_B.length);
        setCeoStep(s => {
          const next = (s + 1) % CEO_PATH.length;
          // Show F prompt when near CEO desk (steps 4-7)
          setFPrompt(next >= 4 && next <= 7);
          return next;
        });
      }
    }, 600);
    return () => clearInterval(id);
  }, [mode, path.length]);

  // Proximity panel logic
  useEffect(() => {
    if (mode !== "proximity") return;
    const nearest = nearestAgent(avatarPos);
    if (nearest) {
      setPanelAgent(nearest);
      setPanelOpen(true);
    } else {
      setPanelOpen(false);
    }
  }, [avatarPos, mode]);

  const { cx: ax, cy: ay } = tileCenter(avatarPos);
  const tmAPos = TEAMMATE_A[tmAStep % TEAMMATE_A.length];
  const tmBPos = TEAMMATE_B[tmBStep % TEAMMATE_B.length];
  const ceoPosData = CEO_PATH[ceoStep % CEO_PATH.length];

  return (
    <div className="relative w-full rounded-2xl overflow-hidden"
      style={{
        border: "1px solid rgba(124,58,255,0.35)",
        boxShadow: "0 0 40px rgba(124,58,255,0.18), 0 0 80px rgba(124,58,255,0.08)",
        background: "#0D0818",
      }}
    >
      {/* Toolbar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        <span className="ml-2 text-[9px] font-mono tracking-widest uppercase text-white/20">
          {mode === "proximity" ? "octaclaw · office · live" : "octaclaw · command center · 3 online"}
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] text-emerald-400/70 font-mono">connected</span>
        </div>
      </div>

      {/* SVG Office */}
      <div className="relative overflow-hidden" style={{ paddingBottom: `${(H / W) * 100}%` }}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox={`0 0 ${W} ${H}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width={TILE} height={TILE} patternUnits="userSpaceOnUse">
              <path d={`M ${TILE} 0 L 0 0 0 ${TILE}`} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            </pattern>
            <filter id="glow-purple" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="glow-green" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="glow-soft" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <radialGradient id="bg-grad" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#130D24" />
              <stop offset="100%" stopColor="#0D0818" />
            </radialGradient>
          </defs>

          {/* Background */}
          <rect width={W} height={H} fill="url(#bg-grad)" />
          <rect width={W} height={H} fill="url(#grid)" />

          {/* Ambient glow top-right */}
          <ellipse cx={W * 0.85} cy={H * 0.05} rx={W * 0.35} ry={H * 0.35}
            fill="rgba(124,58,255,0.12)" />

          {/* Rooms */}
          {FLOOR_ROOMS.map(r => (
            <g key={r.label}>
              <rect
                x={r.x * TILE} y={r.y * TILE}
                width={r.w * TILE} height={r.h * TILE}
                rx="6" fill={r.color}
                stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"
              />
              <text
                x={r.x * TILE + 8} y={r.y * TILE + 14}
                fontFamily="monospace" fontSize="7"
                fill="rgba(255,255,255,0.2)" letterSpacing="1"
              >
                {r.label.toUpperCase()}
              </text>
            </g>
          ))}

          {/* Agent desks */}
          {AGENTS.map(ag => {
            const dx = ag.desk.x * TILE;
            const dy = ag.desk.y * TILE;
            const isNear = mode === "proximity" && panelAgent?.id === ag.id;
            return (
              <g key={ag.id} filter={isNear ? "url(#glow-soft)" : undefined}>
                {/* Desk surface */}
                <rect
                  x={dx} y={dy} width={TILE * 2} height={TILE}
                  rx="4"
                  fill={isNear ? `${ag.color}22` : "rgba(255,255,255,0.04)"}
                  stroke={ag.color}
                  strokeWidth={isNear ? 1.5 : 0.8}
                  strokeOpacity={isNear ? 0.9 : 0.4}
                />
                {/* Monitor */}
                <rect x={dx + 10} y={dy + 5} width={TILE - 4} height={TILE - 14} rx="2"
                  fill="rgba(0,0,0,0.6)" stroke={ag.color} strokeWidth="0.5" strokeOpacity="0.5" />
                {/* Screen glow */}
                <rect x={dx + 12} y={dy + 7} width={TILE - 8} height={TILE - 18} rx="1"
                  fill={`${ag.color}30`} />
                {/* Chair */}
                <rect x={dx + TILE / 2 - 5} y={dy + TILE + 2} width={10} height={8} rx="2"
                  fill="rgba(255,255,255,0.06)" stroke={ag.color} strokeWidth="0.5" strokeOpacity="0.4" />
                {/* Agent label */}
                <text
                  x={dx + TILE + 2} y={dy + TILE - 5}
                  fontFamily="monospace" fontSize="6.5"
                  fill={ag.color} textAnchor="middle" opacity="0.8"
                >
                  {ag.label}
                </text>
                {/* Status dot on desk */}
                <g transform={`translate(${dx + TILE * 2 - 8}, ${dy + 8})`}>
                  {statusDot(ag.status)}
                </g>
              </g>
            );
          })}

          {/* Proximity radius ring — proximity mode only */}
          {mode === "proximity" && panelOpen && panelAgent && (() => {
            const { cx: dc, cy: dd } = tileCenter({ x: panelAgent.desk.x + 1, y: panelAgent.desk.y });
            return (
              <g>
                <circle cx={dc} cy={dd} r={TILE * 2.5}
                  fill={`${panelAgent.color}08`}
                  stroke={panelAgent.color} strokeWidth="1"
                  strokeDasharray="4 3" strokeOpacity="0.4">
                  <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
                </circle>
              </g>
            );
          })()}

          {/* F-to-sit prompt — multiplayer mode */}
          {mode === "multiplayer" && fPrompt && (() => {
            const { cx: cc, cy: cd } = tileCenter(ceoPosData);
            return (
              <g transform={`translate(${cc - 12}, ${cd - 36})`}>
                <rect width="24" height="20" rx="4"
                  fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
                <text x="12" y="14" textAnchor="middle"
                  fontFamily="monospace" fontWeight="bold" fontSize="10" fill="white">
                  F
                </text>
                <text x="12" y="30" textAnchor="middle"
                  fontFamily="sans-serif" fontSize="6" fill="rgba(255,255,255,0.5)">
                  sit at desk
                </text>
              </g>
            );
          })()}

          {/* Teammate A — multiplayer mode */}
          {mode === "multiplayer" && (() => {
            const { cx: tc, cy: td } = tileCenter(tmAPos);
            return (
              <g>
                <circle cx={tc} cy={td} r="9"
                  fill="url(#tma-grad)"
                  stroke="white" strokeWidth="1" opacity="0.75" />
                <defs>
                  <radialGradient id="tma-grad">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#be185d" />
                  </radialGradient>
                </defs>
                <text x={tc} y={td + 3.5} textAnchor="middle"
                  fontFamily="monospace" fontWeight="bold" fontSize="7" fill="white">
                  AL
                </text>
              </g>
            );
          })()}

          {/* Teammate B — multiplayer mode */}
          {mode === "multiplayer" && (() => {
            const { cx: tc, cy: td } = tileCenter(tmBPos);
            return (
              <g>
                <circle cx={tc} cy={td} r="9"
                  fill="url(#tmb-grad)"
                  stroke="white" strokeWidth="1" opacity="0.75" />
                <defs>
                  <radialGradient id="tmb-grad">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#0369a1" />
                  </radialGradient>
                </defs>
                <text x={tc} y={td + 3.5} textAnchor="middle"
                  fontFamily="monospace" fontWeight="bold" fontSize="7" fill="white">
                  JD
                </text>
              </g>
            );
          })()}

          {/* Main Avatar */}
          <g filter="url(#glow-purple)">
            <circle cx={ax} cy={ay} r="10"
              fill="url(#avatar-grad)"
              stroke="#a855f7" strokeWidth="1.5" />
            <defs>
              <radialGradient id="avatar-grad">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#5b21b6" />
              </radialGradient>
            </defs>
            {/* Person icon */}
            <circle cx={ax} cy={ay - 3} r="3" fill="rgba(255,255,255,0.9)" />
            <path d={`M${ax - 5} ${ay + 6} Q${ax} ${ay + 2} ${ax + 5} ${ay + 6}`}
              fill="rgba(255,255,255,0.7)" />
          </g>
          {/* Name tag */}
          <rect x={ax - 16} y={ay + 13} width="32" height="10" rx="3"
            fill="rgba(0,0,0,0.7)" />
          <text x={ax} y={ay + 21} textAnchor="middle"
            fontFamily="monospace" fontSize="6" fill="rgba(255,255,255,0.8)">
            {mode === "proximity" ? "You (PM)" : "You (CEO)"}
          </text>

          {/* Agent Panel — proximity mode */}
          {mode === "proximity" && panelOpen && panelAgent && (() => {
            const panelX = Math.min(ax + 14, W - 110);
            const panelY = Math.max(ay - 70, 4);
            return (
              <g>
                {/* Panel shadow */}
                <rect x={panelX + 2} y={panelY + 2} width="106" height="74" rx="8"
                  fill="rgba(0,0,0,0.4)" />
                {/* Panel bg */}
                <rect x={panelX} y={panelY} width="106" height="74" rx="8"
                  fill="#1a1a1c" stroke={panelAgent.color}
                  strokeWidth="1" strokeOpacity="0.5" />
                {/* Header */}
                <rect x={panelX} y={panelY} width="106" height="20" rx="8"
                  fill={`${panelAgent.color}20`} />
                <rect x={panelX} y={panelY + 12} width="106" height="8"
                  fill={`${panelAgent.color}20`} />
                <text x={panelX + 8} y={panelY + 14}
                  fontFamily="monospace" fontWeight="bold" fontSize="7"
                  fill={panelAgent.color} letterSpacing="1">
                  AGENT PANEL
                </text>
                {/* Strategy */}
                <text x={panelX + 8} y={panelY + 34}
                  fontFamily="sans-serif" fontSize="7" fill="rgba(255,255,255,0.5)">
                  Strategy:
                </text>
                <text x={panelX + 50} y={panelY + 34}
                  fontFamily="sans-serif" fontSize="7" fill={panelAgent.color}>
                  {panelAgent.strategy}
                </text>
                {/* Progress bar */}
                <rect x={panelX + 8} y={panelY + 40} width="90" height="4" rx="2"
                  fill="rgba(0,0,0,0.4)" />
                <rect x={panelX + 8} y={panelY + 40} width="50" height="4" rx="2"
                  fill={panelAgent.color}>
                  <animate attributeName="width" values="30;58;30" dur="3s" repeatCount="indefinite" />
                </rect>
                {/* Inject Prompt button */}
                <rect x={panelX + 8} y={panelY + 52} width="90" height="14" rx="4"
                  fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                <text x={panelX + 53} y={panelY + 62}
                  textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="white" opacity="0.8">
                  Inject Prompt
                </text>
              </g>
            );
          })()}

          {/* Live sync pill — multiplayer */}
          {mode === "multiplayer" && (
            <g transform={`translate(${W - 72}, ${H - 18})`}>
              <rect width="68" height="12" rx="6" fill="rgba(0,0,0,0.5)" />
              <circle cx="10" cy="6" r="2.5" fill="#22c55e">
                <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" />
              </circle>
              <text x="17" y="9.5" fontFamily="monospace" fontSize="6" fill="rgba(34,197,94,0.8)">
                3 online · live sync
              </text>
            </g>
          )}

        </svg>
      </div>

      {/* Legend bar */}
      <div className="flex items-center gap-4 px-4 py-2 border-t border-white/5">
        {[
          { col: "#a855f7", label: "running" },
          { col: "#22c55e", label: "done" },
          { col: "#f97316", label: "pending" },
          { col: "#6366f1", label: "idle" },
        ].map(({ col, label }) => (
          <div key={label} className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: col }} />
            <span className="text-[9px] font-mono uppercase tracking-wide"
              style={{ color: "rgba(255,255,255,0.3)" }}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}