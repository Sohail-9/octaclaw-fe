"use client";

import { motion } from "framer-motion";

export default function FeaturesBento() {
  return (
    <section id="features" className="relative py-28 px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(124,58,237,0.15), transparent)" }} />

      {/* Ambient background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-44 w-[580px] h-[580px] rounded-full blur-[140px]"
          style={{ background: "rgba(139,92,246,0.08)" }} />
        <div className="absolute top-1/2 -right-44 w-[500px] h-[500px] rounded-full blur-[140px]"
          style={{ background: "rgba(52,211,153,0.07)" }} />
        <div className="absolute bottom-10 left-1/3 w-[420px] h-[420px] rounded-full blur-[120px]"
          style={{ background: "rgba(99,102,241,0.06)" }} />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-600 mb-7 glass-pill"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-[3.6rem] text-zinc-950 tracking-tight leading-[1.08] mb-5"
          >
            Everything you need to ship
            <br className="hidden md:block" />
            agents to production.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed"
          >
            OctaClaw handles orchestration, fault tolerance, and observability so you can focus on what matters.
          </motion.p>
        </div>

        {/* ── Hero card — dark gradient (full width) ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="w-full rounded-3xl overflow-hidden mb-4 relative bento-dark"
        >
          <div className="card-noise" />

          <div className="relative flex items-center justify-center py-10 px-8 overflow-hidden">
            <div className="absolute inset-0 dotted-grid opacity-20" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)" }} />
            {/* Top violet glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1"
              style={{ background: "linear-gradient(to right, transparent, rgba(167,139,250,0.8), transparent)", filter: "blur(2px)" }} />
            <div className="relative z-10 w-full">
              <DAGVisual />
            </div>
          </div>

          <div className="px-8 md:px-10 py-8 border-t border-white/[0.08]">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full px-3 py-1.5 mb-4 clay-violet">
                  Core Architecture
                </span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                  Parallel DAG Execution
                </h3>
                <p className="text-zinc-400 text-base leading-relaxed max-w-2xl">
                  Decompose any goal into directed acyclic task graphs. Specialist agents execute
                  concurrently across independent lanes — eliminating bottlenecks by orders of magnitude.
                </p>
              </div>
              <div className="flex md:flex-col gap-5 md:gap-4 flex-shrink-0">
                {[
                  { n: "4×", label: "faster than sequential" },
                  { n: "∞",  label: "parallel agent lanes" },
                ].map((s) => (
                  <div key={s.label} className="text-center md:text-right">
                    <div className="text-2xl font-bold text-violet-300 font-heading">{s.n}</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wide">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 3-col secondary cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {[
            {
              bentoClass: "bento-emerald",
              tag: "Routing",
              tagClass: "clay-emerald",
              title: "Universal Model Router",
              desc: "Route each agent to the optimal provider. One API across Anthropic, OpenAI, Gemini, Groq, and more.",
              visual: <ProvidersVisual />,
            },
            {
              bentoClass: "bento-amber",
              tag: "Reliability",
              tagClass: "clay-amber",
              title: "Zero-Config Recovery",
              desc: "Automatic fault detection and re-instantiation. Swarms self-heal without human intervention.",
              visual: <RecoveryVisual />,
            },
            {
              bentoClass: "bento-violet",
              tag: "Observability",
              tagClass: "clay-violet",
              title: "Real-Time Telemetry",
              desc: "Every agent action and tool call streamed live. Full structured traces with run IDs and on-demand replay.",
              visual: <TelemetryVisual />,
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              className={`rounded-2xl overflow-hidden flex flex-col relative ${f.bentoClass}`}
            >
              <div className="card-noise" />
              <div className="flex-1 min-h-[11rem] overflow-hidden relative z-10">
                {f.visual}
              </div>
              <div className="p-6 border-t border-black/[0.06] relative z-10">
                <div className={`inline-flex items-center text-[9px] font-bold uppercase tracking-[0.2em] rounded-full px-2.5 py-1 mb-3 ${f.tagClass}`}>
                  {f.tag}
                </div>
                <h3 className="font-heading text-zinc-950 text-lg font-bold tracking-tight mb-1.5">{f.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── 2-col bottom cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              bentoClass: "bento-indigo",
              tag: "Debugging",
              tagClass: "clay-violet",
              title: "Deterministic Replay",
              desc: "Every swarm run is checkpointed. Replay any execution from any point — for debugging, auditing, or compliance. No black boxes.",
              visual: <ReplayVisual />,
            },
            {
              bentoClass: "bento-rose",
              tag: "Tooling",
              tagClass: "clay-rose",
              title: "50+ Built-in Tools",
              desc: "Web search, code execution, browser automation, file I/O, API calls, database queries — agents have a full toolkit out of the box.",
              visual: <ToolsVisual />,
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`rounded-2xl overflow-hidden flex flex-col relative ${f.bentoClass}`}
            >
              <div className="card-noise" />
              <div className="flex-1 min-h-[11rem] overflow-hidden relative z-10">
                {f.visual}
              </div>
              <div className="p-6 border-t border-black/[0.06] relative z-10">
                <div className={`inline-flex items-center text-[9px] font-bold uppercase tracking-[0.2em] rounded-full px-2.5 py-1 mb-3 ${f.tagClass}`}>
                  {f.tag}
                </div>
                <h3 className="font-heading text-zinc-950 text-lg font-bold tracking-tight mb-1.5">{f.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── DAG Visual (light paths on dark) ────────────────────────── */
function DAGVisual() {
  const nodes = [
    { cx: 250, cy: 38,  color: "#a78bfa", label: "AGENT·A", labelY: -22, delay: 0.5 },
    { cx: 250, cy: 100, color: "#34d399", label: "AGENT·B", labelY:  26, delay: 0.7 },
    { cx: 250, cy: 162, color: "#60a5fa", label: "AGENT·C", labelY:  26, delay: 0.9 },
  ];
  return (
    <div className="w-full flex items-center justify-center">
      <svg viewBox="0 0 520 210" className="w-full max-w-2xl max-h-48 md:max-h-52">
        <motion.path d="M 80 100 Q 160 38 240 38" stroke="rgba(167,139,250,0.7)" strokeWidth="2" fill="none"
          strokeDasharray="8 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9, delay: 0.4 }}
          style={{ animationName: "dashFlow", animationDuration: "1s", animationIterationCount: "infinite", animationTimingFunction: "linear" }} />
        <motion.path d="M 80 100 L 240 100" stroke="rgba(52,211,153,0.7)" strokeWidth="2" fill="none"
          strokeDasharray="8 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9, delay: 0.6 }}
          style={{ animationName: "dashFlow", animationDuration: "1s", animationIterationCount: "infinite", animationTimingFunction: "linear" }} />
        <motion.path d="M 80 100 Q 160 162 240 162" stroke="rgba(96,165,250,0.7)" strokeWidth="2" fill="none"
          strokeDasharray="8 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9, delay: 0.8 }}
          style={{ animationName: "dashFlow", animationDuration: "1s", animationIterationCount: "infinite", animationTimingFunction: "linear" }} />
        <motion.path d="M 262 38 Q 370 38 430 100"  stroke="rgba(167,139,250,0.35)" strokeWidth="1.5" fill="none" strokeDasharray="6 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 1.3 }} style={{ animationName: "dashFlow", animationDuration: "1.8s", animationIterationCount: "infinite", animationTimingFunction: "linear" }} />
        <motion.path d="M 262 100 L 430 100"         stroke="rgba(52,211,153,0.35)"  strokeWidth="1.5" fill="none" strokeDasharray="6 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 1.5 }} style={{ animationName: "dashFlow", animationDuration: "1.8s", animationIterationCount: "infinite", animationTimingFunction: "linear" }} />
        <motion.path d="M 262 162 Q 370 162 430 100" stroke="rgba(96,165,250,0.35)"  strokeWidth="1.5" fill="none" strokeDasharray="6 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 1.7 }} style={{ animationName: "dashFlow", animationDuration: "1.8s", animationIterationCount: "infinite", animationTimingFunction: "linear" }} />

        <motion.g initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
          <circle cx="60" cy="100" r="22" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.7)" strokeWidth="2" />
          <circle cx="60" cy="100" r="7"  fill="#a78bfa" />
          <motion.circle cx="60" cy="100" r="14" fill="rgba(167,139,250,0.08)" animate={{ r: [14, 24, 14], opacity: [0.6, 0, 0.6] }} transition={{ duration: 3, repeat: Infinity }} />
          <text x="60" y="133" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="monospace" fontWeight="bold">GOAL</text>
        </motion.g>

        {nodes.map((a) => (
          <motion.g key={a.label} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: a.delay }}>
            <circle cx={a.cx} cy={a.cy} r="16" fill="rgba(255,255,255,0.08)" stroke={a.color} strokeWidth="2" />
            <circle cx={a.cx} cy={a.cy} r="5"  fill={a.color} />
            <motion.circle cx={a.cx} cy={a.cy} r="10" fill={`${a.color}20`} animate={{ r: [10, 20, 10], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2.2, repeat: Infinity, delay: a.delay }} />
            <text x={a.cx} y={a.cy + a.labelY} textAnchor="middle" fill={a.color} fontSize="7" fontFamily="monospace" fontWeight="bold">{a.label}</text>
          </motion.g>
        ))}

        <motion.g initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 2.0 }}>
          <circle cx="450" cy="100" r="22" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.20)" strokeWidth="2" strokeDasharray="5 3" />
          <motion.circle cx="450" cy="100" r="7" fill="rgba(255,255,255,0.4)" animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 1.8, repeat: Infinity }} />
          <text x="450" y="133" textAnchor="middle" fill="rgba(255,255,255,0.28)" fontSize="8" fontFamily="monospace" fontWeight="bold">OUTPUT</text>
        </motion.g>

        {[
          { x: 272, y: 34,  text: "research",   color: "rgba(167,139,250,0.6)" },
          { x: 272, y: 96,  text: "analyze",    color: "rgba(52,211,153,0.6)" },
          { x: 272, y: 158, text: "synthesize", color: "rgba(96,165,250,0.6)" },
        ].map((l) => (
          <motion.text key={l.text} x={l.x} y={l.y} textAnchor="start" fill={l.color} fontSize="7" fontFamily="monospace"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
            {l.text}
          </motion.text>
        ))}
      </svg>
    </div>
  );
}

/* ── Secondary Visuals ──────────────────────────────────────── */

function ProvidersVisual() {
  const providers = [
    { name: "Anthropic Claude", color: "#7c3aed", active: true },
    { name: "OpenAI GPT-4o",    color: "#059669", active: true },
    { name: "Google Gemini",    color: "#2563eb", active: true },
    { name: "Groq LLaMA",       color: "#d97706", active: true },
    { name: "xAI Grok",         color: "#374151", active: false },
    { name: "Mistral AI",       color: "#ea580c", active: false },
    { name: "Cohere",           color: "#0891b2", active: false },
    { name: "+ 1 more",         color: "#9ca3af", active: false },
  ];
  return (
    <div className="w-full p-4 space-y-1.5">
      {providers.map((p, i) => (
        <motion.div key={p.name}
          initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: i * 0.06 + 0.2 }}
          className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/60 border border-black/[0.05]"
          style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
        >
          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: p.color }} />
          <span className="text-[10px] font-mono text-zinc-700 flex-1">{p.name}</span>
          {p.active && (
            <motion.span className="text-[8px] font-mono font-bold" style={{ color: p.color }}
              animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}>
              active
            </motion.span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function RecoveryVisual() {
  const steps = [
    { label: "Running",        detail: "3/3 active",       dot: "bg-emerald-500", text: "text-emerald-700", bg: "bg-white/60",       status: "done" },
    { label: "Fault Detected", detail: "agent-2 timeout",  dot: "bg-red-500",     text: "text-red-600",     bg: "bg-red-50/70",      status: "done" },
    { label: "Re-routing",     detail: "swarm adapting",   dot: "bg-amber-500",   text: "text-amber-700",   bg: "bg-amber-50/70",    status: "active" },
    { label: "Recovered",      detail: "checkpoint used",  dot: "bg-zinc-300",    text: "text-zinc-400",    bg: "bg-white/40",       status: "pending" },
  ];
  return (
    <div className="w-full p-5 space-y-2">
      {steps.map((step, i) => (
        <motion.div key={step.label}
          initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: i * 0.18 + 0.2 }}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border border-black/[0.05] ${step.bg}`}
        >
          {step.status === "done"    && <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
          {step.status === "active"  && <motion.div className={`w-2 h-2 rounded-full flex-shrink-0 ${step.dot}`} animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 0.9, repeat: Infinity }} />}
          {step.status === "pending" && <div className="w-2 h-2 rounded-full border border-zinc-300 flex-shrink-0" />}
          <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${step.text}`}>{step.label}</span>
          <span className="ml-auto text-[9px] font-mono text-zinc-400">{step.detail}</span>
        </motion.div>
      ))}
    </div>
  );
}

function TelemetryVisual() {
  const logs = [
    { time: "00:00", agent: "system",  msg: "Swarm initialized",               color: "text-zinc-600" },
    { time: "00:01", agent: "orch",    msg: "4 parallel tasks created",         color: "text-indigo-700" },
    { time: "00:01", agent: "agent-1", msg: "tool: web_search(…)",              color: "text-sky-700" },
    { time: "00:02", agent: "agent-2", msg: "tool: code_exec(python)",          color: "text-emerald-700" },
    { time: "00:02", agent: "system",  msg: "Checkpoint α saved",               color: "text-zinc-600" },
    { time: "00:03", agent: "agent-1", msg: "32 sources retrieved",             color: "text-sky-700" },
    { time: "00:03", agent: "orch",    msg: "3/3 active lanes",                 color: "text-indigo-700" },
    { time: "00:04", agent: "agent-3", msg: "Drafting section 2/5…",            color: "text-amber-700" },
  ];
  return (
    <div className="w-full h-full flex flex-col" style={{ minHeight: "190px" }}>
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-black/[0.06] flex-shrink-0 bg-white/50">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-rose-400/70" />
          <div className="w-2 h-2 rounded-full bg-amber-400/70" />
          <div className="w-2 h-2 rounded-full bg-emerald-400/70" />
        </div>
        <span className="ml-2 text-[9px] font-mono text-zinc-500 flex-1">live telemetry</span>
        <motion.span className="text-[8px] font-mono text-emerald-600 font-bold" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.4, repeat: Infinity }}>● LIVE</motion.span>
      </div>
      <div className="flex-1 overflow-hidden relative bg-white/25">
        <motion.div animate={{ y: ["0%", "-50%"] }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }}>
          {[...logs, ...logs].map((log, i) => (
            <div key={i} className="flex items-start gap-2 px-4 py-1.5 border-b border-black/[0.04]">
              <span className="text-[8px] font-mono text-zinc-400 flex-shrink-0 pt-px w-9">[{log.time}]</span>
              <span className="text-[8px] font-mono text-zinc-500 uppercase font-bold flex-shrink-0 w-14 pt-px">{log.agent}</span>
              <span className={`text-[9px] font-mono leading-snug ${log.color}`}>{log.msg}</span>
            </div>
          ))}
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-violet-50/90 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

function ReplayVisual() {
  const checkpoints = ["α", "β", "γ", "δ"];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-5 gap-5">
      <div className="w-full flex items-center gap-2">
        <div className="flex-1 h-2 rounded-full bg-white/60 overflow-hidden" style={{ boxShadow: "inset 0 1px 3px rgba(0,0,0,0.08)" }}>
          <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(to right, #6366f1, #818cf8)" }}
            initial={{ width: "0%" }} animate={{ width: "68%" }} transition={{ duration: 1.5, delay: 0.3 }} />
        </div>
        <span className="text-[10px] font-mono text-indigo-600 font-bold">68%</span>
      </div>
      <div className="w-full flex items-center justify-between relative">
        <div className="absolute left-0 right-0 h-px bg-black/[0.08]" />
        {checkpoints.map((cp, i) => (
          <motion.div key={cp} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.15 + 0.4 }}
            className="relative z-10 flex flex-col items-center gap-1.5"
          >
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold font-mono"
              style={i < 3
                ? { background: "linear-gradient(145deg, #a5b4fc, #6366f1)", boxShadow: "0 8px 20px rgba(99,102,241,0.38), inset 0 2px 4px rgba(255,255,255,0.40)", color: "#fff" }
                : { background: "white", border: "1px solid rgba(0,0,0,0.08)", color: "#9ca3af", boxShadow: "0 2px 6px rgba(0,0,0,0.06)" }
              }
            >
              {cp}
            </div>
            <span className={`text-[8px] font-mono uppercase tracking-wider ${i < 3 ? "text-indigo-500" : "text-zinc-300"}`}>Saved</span>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl clay-violet">
        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>
        <span className="text-[9px] font-mono text-white font-bold">Replay from checkpoint β</span>
      </div>
    </div>
  );
}

function ToolsVisual() {
  const tools = [
    { name: "web_search", c: "clay-sky" },
    { name: "code_exec",  c: "clay-emerald" },
    { name: "browser",    c: "clay-violet" },
    { name: "file_io",    c: "clay-amber" },
    { name: "api_call",   c: "clay-rose" },
    { name: "db_query",   c: "clay-violet" },
    { name: "email",      c: "clay-emerald" },
    { name: "calendar",   c: "clay-sky" },
    { name: "+ 42 more",  c: "clay-amber" },
  ];
  return (
    <div className="w-full h-full p-5 flex flex-wrap gap-2 content-start">
      {tools.map((t, i) => (
        <motion.span key={t.name}
          initial={{ opacity: 0, scale: 0.75, y: 8 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.35, delay: i * 0.07 + 0.2, type: "spring", stiffness: 260, damping: 18 }}
          className={`text-[9px] font-mono font-bold uppercase tracking-wide px-2.5 py-1.5 rounded-xl ${t.c}`}
        >
          {t.name}
        </motion.span>
      ))}
    </div>
  );
}
