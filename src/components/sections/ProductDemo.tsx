"use client";

import { motion } from "framer-motion";

type NodeStatus = "done" | "running" | "pending";

const nodes: Array<{
  id: string;
  label: string;
  status: NodeStatus;
  cx: number;
  cy: number;
  w: number;
  h: number;
}> = [
    { id: "n1", label: "Lead Intake", status: "done", cx: 120, cy: 100, w: 168, h: 72 },
    { id: "n2", label: "Research Agent", status: "done", cx: 360, cy: 100, w: 188, h: 72 },
    { id: "n3", label: "Policy Check", status: "running", cx: 620, cy: 100, w: 180, h: 72 },
    { id: "n4", label: "Send Action", status: "pending", cx: 870, cy: 100, w: 168, h: 72 },
    { id: "n5", label: "Planner", status: "running", cx: 240, cy: 290, w: 160, h: 72 },
    { id: "n6", label: "Draft Reply", status: "pending", cx: 500, cy: 290, w: 168, h: 72 },
    { id: "n7", label: "Synthesizer", status: "pending", cx: 760, cy: 290, w: 168, h: 72 },
  ];

const EDGES: Array<[string, string]> = [
  ["n1", "n2"],
  ["n1", "n5"],
  ["n2", "n3"],
  ["n5", "n6"],
  ["n3", "n4"],
  ["n6", "n7"],
  ["n3", "n7"],
];

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export default function ProductDemoSection() {
  return (
    <section id="demo" className="relative py-20 sm:py-24 px-6 bg-[#0D0818]">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-5xl text-white font-extrabold">
            See it in action
          </h2>
          <p className="mt-3 text-[#cec6e6] max-w-2xl mx-auto text-base sm:text-lg">
            A live DAG view of agents running, waiting, and finishing in real time.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[24px] overflow-hidden"
          style={{
            border: "1px solid rgba(124,58,255,0.45)",
            boxShadow:
              "0 0 60px rgba(124,58,255,0.22), 0 0 120px rgba(124,58,255,0.08)",
            background:
              "radial-gradient(ellipse 65% 55% at 80% 0%, rgba(124,58,255,0.45) 0%, transparent 68%)," +
              "radial-gradient(ellipse 40% 35% at 70% 6%, rgba(168,85,247,0.30) 0%, transparent 62%)," +
              "radial-gradient(ellipse 28% 22% at 10% 95%, rgba(192,132,252,0.18) 0%, transparent 58%)," +
              "#0D0818",
          }}
        >
          {/* Toolbar */}
          <div className="flex items-center gap-2 px-5 pt-4 pb-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            </div>
            <span
              className="ml-3 text-[10px] tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.25)", fontFamily: "monospace" }}
            >
              run_8f2a · live execution
            </span>
            <span
              className="ml-auto flex items-center gap-1.5 text-[10px]"
              style={{ color: "#a855f7" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#a855f7]"
                style={{ animation: "pulse-dot 1.3s ease-in-out infinite" }}
              />
              2 running
            </span>
          </div>

          {/* SVG canvas */}
          <div className="relative w-full" style={{ paddingBottom: "40%" }}>
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 390"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <marker id="ag" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                  <path d="M1 2L8 5L1 8" stroke="#22c55e" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
                <marker id="ap" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                  <path d="M1 2L8 5L1 8" stroke="#a855f7" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
                <marker id="ad" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                  <path d="M1 2L8 5L1 8" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
                <filter id="fg" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3.5" result="b" />
                  <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="fp" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4.5" result="b" />
                  <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* Edges - calculated from node coordinates, always connected */}
              {EDGES.map(([fid, tid]) => {
                const a = getNode(fid);
                const b = getNode(tid);
                const sameRow = Math.abs(a.cy - b.cy) < 50;
                const color =
                  a.status === "done" && b.status === "done"
                    ? "#22c55e"
                    : b.status === "pending" && a.status === "pending"
                      ? "rgba(255,255,255,0.15)"
                      : "#a855f7";
                const mark = color === "#22c55e" ? "ag" : color === "#a855f7" ? "ap" : "ad";
                const animated = color !== "rgba(255,255,255,0.15)";

                if (sameRow) {
                  return (
                    <line
                      key={fid + tid}
                      x1={a.cx + a.w / 2} y1={a.cy}
                      x2={b.cx - b.w / 2} y2={b.cy}
                      stroke={color}
                      strokeWidth="2"
                      strokeDasharray="8 5"
                      markerEnd={`url(#${mark})`}
                      style={animated ? { animation: "flow-line 1.6s linear infinite" } : {}}
                    />
                  );
                }

                const my = (a.cy + b.cy) / 2;
                return (
                  <path
                    key={fid + tid}
                    d={`M${a.cx} ${a.cy + a.h / 2} C${a.cx} ${my},${b.cx} ${my},${b.cx} ${b.cy - b.h / 2}`}
                    stroke={color}
                    strokeWidth="2"
                    strokeDasharray="7 5"
                    fill="none"
                    markerEnd={`url(#${mark})`}
                    style={animated ? { animation: "flow-line 1.8s linear infinite" } : {}}
                  />
                );
              })}

              {/* Nodes */}
              {nodes.map((node) => {
                const x = node.cx - node.w / 2;
                const y = node.cy - node.h / 2;
                const isDone = node.status === "done";
                const isRunning = node.status === "running";
                const border = isDone ? "rgba(34,197,94,0.7)" : isRunning ? "rgba(168,85,247,0.85)" : "rgba(255,255,255,0.08)";
                const bg = isDone ? "#081A10" : isRunning ? "#100828" : "#110D1E";
                const badgeBg = isDone ? "#052E1A" : isRunning ? "#1A0A38" : "#1A1025";
                const dotCol = isDone ? "#22c55e" : isRunning ? "#a855f7" : "#fb923c";
                const textCol = isDone ? "#ECFDF5" : isRunning ? "#F5F3FF" : "#D1D5DB";

                return (
                  <g key={node.id} filter={isDone ? "url(#fg)" : isRunning ? "url(#fp)" : undefined}>
                    {isRunning && (
                      <rect
                        x={x - 3} y={y - 3}
                        width={node.w + 6} height={node.h + 6}
                        rx="15" fill="none"
                        stroke={border} strokeWidth="1" opacity="0.35"
                      />
                    )}
                    <rect
                      x={x} y={y}
                      width={node.w} height={node.h}
                      rx="13" fill={bg}
                      stroke={border} strokeWidth={isRunning ? 2 : 1.5}
                    />
                    <text
                      x={node.cx} y={node.cy - 10}
                      textAnchor="middle" dominantBaseline="central"
                      fontFamily="Syne, sans-serif" fontWeight="700" fontSize="13"
                      fill={textCol}
                    >
                      {node.label}
                    </text>
                    <rect
                      x={node.cx - 42} y={node.cy + 10}
                      width="84" height="20" rx="10"
                      fill={badgeBg}
                    />
                    <circle
                      cx={node.cx - 24} cy={node.cy + 20} r="4"
                      fill={dotCol}
                      style={isRunning ? { animation: "pulse-dot 1.3s ease-in-out infinite" } : {}}
                    />
                    <text
                      x={node.cx - 14} y={node.cy + 20}
                      dominantBaseline="central"
                      fontFamily="Inter, sans-serif" fontSize="11"
                      fill={dotCol}
                    >
                      {node.status}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-5 px-5 pb-4 pt-1">
            {[
              { color: "#22c55e", label: "done", pulse: false },
              { color: "#a855f7", label: "running", pulse: true },
              { color: "#fb923c", label: "pending", pulse: false },
            ].map(({ color, label, pulse }) => (
              <div key={label} className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: color,
                    animation: pulse ? "pulse-dot 1.3s ease-in-out infinite" : undefined,
                  }}
                />
                <span className="text-[10px] tracking-wide uppercase" style={{ color: "rgba(255,255,255,0.52)" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
