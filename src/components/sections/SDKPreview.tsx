"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const pythonCode = `import asyncio
from octaclaw import OctaClaw, Swarm

client = OctaClaw(api_key=os.environ["OCTACLAW_KEY"])

# Define your goal in plain language
result = await client.swarm.run(
    goal="Analyze Q4 competitor landscape and"
         " produce an executive summary",
    model="claude-3-5-sonnet-20241022",
    parallel=True,
    max_agents=6,
)

# Full telemetry available on every run
print(f"✓ Completed in {result.elapsed_ms}ms")
print(f"✓ Agents used: {result.agent_count}")
print(result.summary)`;

const tsCode = `import { OctaClaw } from "@octaclaw/sdk";

const client = new OctaClaw({
  apiKey: process.env.OCTACLAW_KEY,
});

// Define your goal in plain language
const result = await client.swarm.run({
  goal: "Analyze Q4 competitor landscape and"
      + " produce an executive summary",
  model: "claude-3-5-sonnet-20241022",
  parallel: true,
  maxAgents: 6,
});

// Full telemetry available on every run
console.log(\`✓ Completed in \${result.elapsedMs}ms\`);
console.log(\`✓ Agents used: \${result.agentCount}\`);
console.log(result.summary);`;

function tokenize(code: string, lang: "python" | "typescript") {
  const lines = code.split("\n");
  return lines.map((line, i) => {
    const parts: React.ReactNode[] = [];
    let remaining = line;
    let key = 0;

    const push = (text: string, cls?: string) => {
      if (!text) return;
      parts.push(
        cls ? (
          <span key={key++} className={cls}>{text}</span>
        ) : (
          <span key={key++} className="text-zinc-300">{text}</span>
        )
      );
    };

    // Comments
    const commentChar = lang === "python" ? "#" : "//";
    const commentIdx = remaining.indexOf(commentChar);
    if (commentIdx !== -1) {
      const before = remaining.slice(0, commentIdx);
      const comment = remaining.slice(commentIdx);
      remaining = before;
      // process before, then push comment
      tokenizePart(before, lang, parts, key);
      parts.push(<span key={`c${i}`} className="text-zinc-600 italic">{comment}</span>);
      return <div key={i} className="min-h-[1.4em]">{parts}</div>;
    }

    tokenizePart(remaining, lang, parts, key);
    return <div key={i} className="min-h-[1.4em]">{parts}</div>;
  });
}

function tokenizePart(text: string, lang: "python" | "typescript", parts: React.ReactNode[], startKey: number) {
  let remaining = text;
  let key = startKey;

  const push = (t: string, cls?: string) => {
    if (!t) return;
    parts.push(
      cls ? <span key={key++} className={cls}>{t}</span> : <span key={key++} className="text-zinc-300">{t}</span>
    );
  };

  const pyKeywords = ["import", "from", "await", "async", "True", "False", "os", "print", "def", "return", "class", "if", "else", "for", "in"];
  const tsKeywords = ["import", "from", "const", "let", "await", "async", "true", "false", "new", "console", "log", "process"];
  const keywords = lang === "python" ? pyKeywords : tsKeywords;

  // Strings
  remaining = remaining.replace(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g, (m) => {
    push(m, "text-emerald-400");
    return "";
  });

  // Keywords
  const wordPattern = /\b\w+\b/g;
  let lastIndex = 0;
  const matches = [];
  let m;
  while ((m = wordPattern.exec(remaining)) !== null) {
    matches.push({ word: m[0], index: m.index });
  }

  if (matches.length === 0) {
    push(remaining);
    return;
  }

  let cursor = 0;
  for (const match of matches) {
    if (match.index > cursor) {
      push(remaining.slice(cursor, match.index));
    }
    if (keywords.includes(match.word)) {
      push(match.word, "text-purple-400");
    } else if (/^[A-Z]/.test(match.word)) {
      push(match.word, "text-sky-400");
    } else if (/^\d+$/.test(match.word)) {
      push(match.word, "text-amber-400");
    } else {
      push(match.word);
    }
    cursor = match.index + match.word.length;
  }
  if (cursor < remaining.length) {
    push(remaining.slice(cursor));
  }
}

export default function SDKPreview() {
  const [tab, setTab] = useState<"python" | "typescript">("python");
  const code = tab === "python" ? pythonCode : tsCode;

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-zinc-50/60">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200/80 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex px-4 py-1.5 rounded-full border border-zinc-200 bg-white text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8"
            >
              Developer Experience
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold tracking-[-0.05em] text-zinc-950 uppercase font-heading leading-[0.88] mb-6"
            >
              Ship in minutes,
              <br />
              <span className="text-zinc-400">not weeks.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-500 text-lg leading-relaxed mb-8"
            >
              A clean, typed SDK for Python and TypeScript. Describe your goal, choose
              your model, and let OctaClaw handle the orchestration — from DAG planning to
              result delivery.
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
                <li key={item} className="flex items-center gap-3 text-[13px] text-zinc-600">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="p-[2px] rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-emerald-400 shadow-[0_4px_24px_rgba(139,92,246,0.22)]">
                <Link
                  href="#waitlist"
                  className="inline-flex items-center h-10 px-7 rounded-full bg-white text-zinc-900 text-[13px] font-bold tracking-tight hover:bg-zinc-50 transition-colors duration-200 active:scale-95"
                >
                  Get Early Access
                </Link>
              </div>
              <span className="text-[12px] text-zinc-400">Free during beta</span>
            </motion.div>
          </div>

          {/* Right: code block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/[0.06] to-emerald-500/[0.04] blur-3xl rounded-3xl" />

            <div className="relative rounded-2xl bg-[#0d0d14] border border-white/[0.07] shadow-[0_32px_64px_rgba(0,0,0,0.18)] overflow-hidden">
              {/* Tab bar */}
              <div className="flex items-center gap-0 border-b border-white/[0.06] bg-[#09090f]">
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
                      className={`px-4 py-3 text-[11px] font-mono font-bold uppercase tracking-wider transition-all duration-200 border-b-2 ${
                        tab === t
                          ? "text-violet-400 border-violet-500"
                          : "text-zinc-600 border-transparent hover:text-zinc-400"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Code */}
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
                    {code.split("\n").map((line, i) => (
                      <div key={i} className="min-h-[1.8em] flex">
                        <span className="w-7 flex-shrink-0 text-right text-zinc-700 mr-4 select-none text-[11px] leading-[1.8]">
                          {i + 1}
                        </span>
                        <span
                          className="flex-1"
                          dangerouslySetInnerHTML={{
                            __html: line
                              .replace(/&/g, "&amp;")
                              .replace(/</g, "&lt;")
                              .replace(/>/g, "&gt;")
                              // strings
                              .replace(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g, '<span class="text-emerald-400">$1</span>')
                              // comments
                              .replace(/(#.*$|\/\/.*$)/g, '<span class="text-zinc-600 italic">$1</span>')
                              // keywords
                              .replace(/\b(import|from|await|async|const|let|True|true|False|false|os|print|new|process|return)\b/g, '<span class="text-purple-400">$1</span>')
                              // functions/methods
                              .replace(/\b(OctaClaw|Swarm|client|swarm|run|log|console|result)\b/g, '<span class="text-sky-400">$1</span>')
                              // numbers
                              .replace(/\b(\d+)\b/g, '<span class="text-amber-400">$1</span>')
                              // template literals in ts
                              .replace(/(`[^`]*`)/g, '<span class="text-emerald-400">$1</span>'),
                          }}
                        />
                      </div>
                    ))}
                  </motion.pre>
                </AnimatePresence>
              </div>

              {/* Output footer */}
              <div className="border-t border-white/[0.05] bg-[#09090f] px-6 py-3">
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
