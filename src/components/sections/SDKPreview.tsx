"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SDKEarlyAccessButton() {
  const [shimmer, setShimmer] = useState(false);
  return (
    <button onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}>
      <motion.span
        onHoverStart={() => { setShimmer(true); setTimeout(() => setShimmer(false), 600); }}
        whileTap={{ scale: 0.96 }}
        className="relative overflow-hidden inline-flex items-center gap-2.5 h-11 px-7 rounded-full text-white text-[13px] font-bold tracking-tight cursor-pointer"
        style={{
          background: "linear-gradient(145deg, #c4b5fd 0%, #8b5cf6 55%, #7c3aed 100%)",
          boxShadow: "0 8px 24px rgba(124,58,237,0.22), 0 3px 8px rgba(124,58,237,0.12), inset 0 2px 6px rgba(255,255,255,0.45), inset 0 -2px 6px rgba(0,0,0,0.20)",
        }}
      >
        <motion.span
          key={shimmer ? "on" : "off"}
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)" }}
          initial={{ x: "-110%" }}
          animate={shimmer ? { x: "110%" } : { x: "-110%" }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        />
        Get Early Access
        <motion.svg
          className="w-3.5 h-3.5 relative"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </motion.svg>
      </motion.span>
    </button>
  );
}

type Tok = { t: string; c?: string };
const kw  = (t: string): Tok => ({ t, c: "text-purple-400" });
const id  = (t: string): Tok => ({ t, c: "text-sky-400" });
const str = (t: string): Tok => ({ t, c: "text-emerald-400" });
const num = (t: string): Tok => ({ t, c: "text-amber-400" });
const cmt = (t: string): Tok => ({ t, c: "text-zinc-500 italic" });
const op  = (t: string): Tok => ({ t, c: "text-zinc-500" });
const df  = (t: string): Tok => ({ t, c: "text-zinc-300" });

const PY: Tok[][] = [
  [kw("import"), df(" asyncio")],
  [kw("from"), df(" octaclaw "), kw("import"), df(" "), id("OctaClaw"), op(", "), id("Swarm")],
  [],
  [id("client"), df(" = "), id("OctaClaw"), op("("), df("api_key="), id("os"), op("."), df("environ["), str('"OCTACLAW_KEY"'), op("])")],
  [],
  [cmt("# Define your goal in plain language")],
  [id("result"), df(" = "), kw("await"), df(" "), id("client"), op("."), id("swarm"), op("."), id("run"), op("(")],
  [df("    goal="), str('"Analyze Q4 competitor landscape and"')],
  [df("         "), str('" produce an executive summary"'), op(",")],
  [df("    model="), str('"claude-3-5-sonnet-20241022"'), op(",")],
  [df("    parallel="), kw("True"), op(",")],
  [df("    max_agents="), num("6"), op(",")],
  [op(")")],
  [],
  [cmt("# Full telemetry available on every run")],
  [id("print"), op("(f"), str('"✓ Completed in {result.elapsed_ms}ms"'), op(")")],
  [id("print"), op("(f"), str('"✓ Agents used: {result.agent_count}"'), op(")")],
  [id("print"), op("("), id("result"), op("."), df("summary"), op(")")],
];

const TS: Tok[][] = [
  [kw("import"), df(" { "), id("OctaClaw"), df(" } "), kw("from"), df(" "), str('"@octaclaw/sdk"'), op(";")],
  [],
  [kw("const"), df(" "), id("client"), df(" = "), kw("new"), df(" "), id("OctaClaw"), op("({")],
  [df("  apiKey: "), id("process"), op("."), df("env.OCTACLAW_KEY"), op(",")],
  [op("});")],
  [],
  [cmt("// Define your goal in plain language")],
  [kw("const"), df(" "), id("result"), df(" = "), kw("await"), df(" "), id("client"), op("."), id("swarm"), op("."), id("run"), op("({")],
  [df("  goal: "), str('"Analyze Q4 competitor landscape and"')],
  [df("      + "), str('" produce an executive summary"'), op(",")],
  [df("  model: "), str('"claude-3-5-sonnet-20241022"'), op(",")],
  [df("  parallel: "), kw("true"), op(",")],
  [df("  maxAgents: "), num("6"), op(",")],
  [op("});")],
  [],
  [cmt("// Full telemetry available on every run")],
  [id("console"), op(".log("), str("`✓ Completed in ${result.elapsedMs}ms`"), op(");")],
  [id("console"), op(".log("), str("`✓ Agents used: ${result.agentCount}`"), op(");")],
  [id("console"), op(".log("), id("result"), op("."), df("summary"), op(");")],
];

export default function SDKPreview() {
  const [tab, setTab] = useState<"python" | "typescript">("python");
  const lines = tab === "python" ? PY : TS;

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(124,58,237,0.10), transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(52,211,153,0.10), transparent)" }} />

      {/* Soft static orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-16 top-1/3 w-[400px] h-[400px] rounded-full blur-[110px]"
          style={{ background: "rgba(139,92,246,0.10)" }} />
        <div className="absolute -right-16 top-1/3 w-[400px] h-[400px] rounded-full blur-[110px]"
          style={{ background: "rgba(52,211,153,0.09)" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left: copy — glass card */}
          <div className="rounded-3xl p-8 glass-card">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-600 mb-8 glass-pill-violet"
            >
              Developer Experience
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-zinc-950 tracking-tight leading-[1.05] mb-6"
            >
              Ship in minutes,
              <br />
              <span className="bg-gradient-to-r from-violet-600 via-violet-500 to-emerald-500 bg-clip-text text-transparent">not weeks.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-500 text-lg leading-relaxed mb-8"
            >
              A clean, typed SDK for Python and TypeScript. Describe your goal, choose
              your model, and let OctaClaw handle the orchestration.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 mb-10"
            >
              {[
                "Fully typed Python & TypeScript SDKs",
                "Streaming results and real-time hooks",
                "Built-in retry, checkpointing, and replay",
                "OpenTelemetry compatible trace exports",
              ].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center gap-3 text-[13px] text-zinc-600 cursor-default"
                >
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 clay-emerald">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <SDKEarlyAccessButton />
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill-emerald text-[11px] font-semibold text-emerald-700">
                <svg className="w-3 h-3 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Free during beta
              </span>
            </motion.div>
          </div>

          {/* Right: code block (dark UI chrome — intentional) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.10), transparent 70%)" }} />

            <div className="relative rounded-2xl overflow-hidden"
              style={{
                background: "rgba(11,11,18,0.84)",
                backdropFilter: "blur(24px) saturate(160%)",
                WebkitBackdropFilter: "blur(24px) saturate(160%)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.22), 0 8px 24px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center border-b border-white/[0.07]" style={{ background: "rgba(7,7,14,0.90)" }}>
                <div className="flex gap-1.5 px-4 py-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <div className="flex ml-2">
                  {(["python", "typescript"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTab(t)}
                      className={`px-4 py-2.5 text-[11px] font-mono font-bold uppercase tracking-wider transition-all duration-200 rounded-t-md ${
                        tab === t
                          ? "text-violet-300 bg-white/[0.08] border-b-2 border-violet-500"
                          : "text-zinc-600 border-b-2 border-transparent hover:text-zinc-400"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 overflow-x-auto">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={tab}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="text-[13px] font-mono leading-[1.8] text-zinc-300"
                  >
                    {lines.map((tokens, i) => (
                      <div key={i} className="min-h-[1.8em] flex">
                        <span className="w-7 flex-shrink-0 text-right text-zinc-700 mr-4 select-none text-[11px] leading-[1.8]">
                          {i + 1}
                        </span>
                        <span className="flex-1">
                          {tokens.length === 0
                            ? <span>&nbsp;</span>
                            : tokens.map((tok, j) => <span key={j} className={tok.c ?? "text-zinc-300"}>{tok.t}</span>)
                          }
                        </span>
                      </div>
                    ))}
                  </motion.pre>
                </AnimatePresence>
              </div>

              <div className="border-t border-white/[0.05] px-6 py-3" style={{ background: "#09090f" }}>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 text-[11px] font-mono font-bold">✓</span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    Completed in <span className="text-emerald-400 font-bold">4.2s</span> · 4 agents · 48 tool calls · 32 sources
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
