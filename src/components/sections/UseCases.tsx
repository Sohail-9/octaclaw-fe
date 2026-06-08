"use client";

import { motion } from "framer-motion";

const cases = [
  {
    icon: "🔍",
    title: "Market Research & Intelligence",
    description:
      "Deploy researcher + analyst + writer agents in parallel to produce comprehensive market reports in minutes, not days.",
    agents: ["Researcher", "Analyst", "Writer", "Critic"],
    accent: "border-violet-200 hover:border-violet-300",
    tag: "bg-violet-50 text-violet-600 border-violet-200",
  },
  {
    icon: "⚙️",
    title: "Automated Code Review",
    description:
      "Multi-agent code audits: security scanner, performance profiler, style checker, and documentation writer running concurrently.",
    agents: ["Security", "Profiler", "Linter", "Documenter"],
    accent: "border-sky-200 hover:border-sky-300",
    tag: "bg-sky-50 text-sky-600 border-sky-200",
  },
  {
    icon: "✍️",
    title: "Content Production at Scale",
    description:
      "Brief → research → draft → edit → publish. A full editorial pipeline automated with specialized agents for each stage.",
    agents: ["Researcher", "Writer", "Editor", "SEO"],
    accent: "border-emerald-200 hover:border-emerald-300",
    tag: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
  {
    icon: "🗄️",
    title: "Data Pipeline Automation",
    description:
      "Extract, transform, analyze, and report across multiple data sources simultaneously with fault-tolerant agent coordination.",
    agents: ["ETL", "Analyst", "Validator", "Reporter"],
    accent: "border-amber-200 hover:border-amber-300",
    tag: "bg-amber-50 text-amber-600 border-amber-200",
  },
  {
    icon: "🏆",
    title: "Competitive Intelligence",
    description:
      "Continuously monitor competitors, synthesize signals from multiple sources, and surface insights before your rivals do.",
    agents: ["Scout", "Analyst", "Strategist", "Briefer"],
    accent: "border-rose-200 hover:border-rose-300",
    tag: "bg-rose-50 text-rose-600 border-rose-200",
  },
  {
    icon: "📄",
    title: "Document Processing",
    description:
      "Ingest, classify, extract, validate, and summarize large document sets with parallel agents — at any volume.",
    agents: ["Classifier", "Extractor", "Validator", "Summarizer"],
    accent: "border-indigo-200 hover:border-indigo-300",
    tag: "bg-indigo-50 text-indigo-600 border-indigo-200",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-6 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200/80 to-transparent" />

      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] bg-violet-600/[0.025] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-4 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8"
          >
            Use Cases
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.05em] text-zinc-950 uppercase font-heading leading-[0.88] mb-6"
          >
            Any workflow.
            <br />
            <span className="text-zinc-400">Any industry.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-500 text-lg max-w-xl leading-relaxed"
          >
            If it can be broken into parallel tasks, OctaClaw can orchestrate it.
          </motion.p>
        </div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative p-6 rounded-2xl border bg-white transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] ${c.accent}`}
            >
              {/* Icon */}
              <div className="text-3xl mb-4">{c.icon}</div>

              {/* Title */}
              <h3 className="text-[15px] font-bold text-zinc-950 tracking-tight mb-2.5 font-heading uppercase">
                {c.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-zinc-500 leading-relaxed mb-5">
                {c.description}
              </p>

              {/* Agent tags */}
              <div className="flex flex-wrap gap-1.5">
                {c.agents.map((agent) => (
                  <span
                    key={agent}
                    className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${c.tag}`}
                  >
                    {agent}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
