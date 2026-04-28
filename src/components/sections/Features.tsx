"use client";

import { motion } from "framer-motion";
import { GitBranch, Database, Shield, GlobeLock, Users } from "lucide-react";

const cardBase =
  "group relative overflow-hidden rounded-[20px] border border-border-subtle bg-bg-card p-8 hover:border-border-focus transition-colors duration-300";

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-text-main tracking-tight max-w-md"
          >
            Built for real
            <br />
            <span className="text-text-muted">agent throughput.</span>
          </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-sm text-sm text-text-muted leading-relaxed"
        >
          Not wrappers. Not chains. A first-class parallel execution engine
          with an OctaClaw scheduler, retry logic, and token optimization built in.
        </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Main card — Graph Orchestration */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`md:col-span-8 ${cardBase} min-h-[340px] flex flex-col justify-between`}
          >
            <div className="relative z-10 max-w-md">
              <div className="w-10 h-10 rounded-lg bg-bg-surface flex items-center justify-center mb-6 border border-border-subtle group-hover:border-border-focus transition-colors">
                <GitBranch size={18} className="text-text-main" />
              </div>
              <h3 className="text-2xl font-bold text-text-main tracking-tight">
                Autonomous Orchestration
              </h3>
              <p className="mt-3 text-text-muted text-sm leading-relaxed">
                Break any goal into a parallel swarm of agents. Dependencies
                are respected automatically — parallel tasks run concurrently, serial
                ones wait. Built-in retry on failure.
              </p>
            </div>

            {/* Code visual */}
            <div className="mt-8 font-mono text-[11px] text-text-muted/50 space-y-1.5">
              <div className="bg-bg-surface px-3 py-2 rounded-lg border border-border-subtle w-4/5">
                <span className="text-text-muted/30">node</span>{" "}
                <span className="text-text-main/50">&quot;Planner&quot;</span>
                {" "}threads: 4
              </div>
              <div className="bg-bg-surface px-3 py-2 rounded-lg border border-border-subtle ml-5 w-4/5">
                <span className="text-text-muted/30">node</span>{" "}
                <span className="text-text-main/50">&quot;Scraper&quot;</span>
                {" "}depends: [&quot;Planner&quot;]
              </div>
              <div className="bg-bg-surface px-3 py-2 rounded-lg border border-border-focus ml-10 w-4/5 text-emerald-400/60">
                status: running
              </div>
            </div>
          </motion.div>

          {/* Swarm Specialists */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`md:col-span-4 ${cardBase} flex flex-col justify-between`}
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-bg-surface flex items-center justify-center mb-6 border border-border-subtle group-hover:border-border-focus transition-colors">
                <Users size={18} className="text-text-main" />
              </div>
              <h3 className="text-xl font-bold text-text-main tracking-tight">
                Swarm Specialists
              </h3>
              <p className="mt-3 text-text-muted text-sm leading-relaxed">
                Deploy role-based agents — Builder, Reviewer, Planner, Synthesizer
                — each with isolated context and purpose.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className={`md:col-span-4 ${cardBase} flex flex-col items-center text-center justify-center`}
          >
            <div className="mb-5 text-text-muted group-hover:text-text-main transition-colors duration-300">
              <Database strokeWidth={1.5} size={28} />
            </div>
            <h3 className="text-lg font-bold text-text-main tracking-tight">
              Semantic Graph Memory
            </h3>
            <p className="mt-2 text-text-muted text-sm leading-relaxed">
              A recursive graph engine that extracts entities and relations into a persistent knowledge matrix. Move beyond basic chat history into a self-evolving semantic brain.
            </p>
          </motion.div>

          {/* Durable States */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`md:col-span-4 ${cardBase} flex flex-col items-center text-center justify-center`}
          >
            <div className="mb-5 text-text-muted group-hover:text-text-main transition-colors duration-300">
              <Shield strokeWidth={1.5} size={28} />
            </div>
            <h3 className="text-lg font-bold text-text-main tracking-tight">
              Durable States
            </h3>
            <p className="mt-2 text-text-muted text-sm leading-relaxed">
              Checkpoint-based workflow states allow deterministic resumption on
              any runtime fault.
            </p>
          </motion.div>

          {/* Zero-Trust */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className={`md:col-span-4 ${cardBase} flex flex-col items-center text-center justify-center`}
          >
            <div className="mb-5 text-text-muted group-hover:text-text-main transition-colors duration-300">
              <GlobeLock strokeWidth={1.5} size={28} />
            </div>
            <h3 className="text-lg font-bold text-text-main tracking-tight">
              Local-First
            </h3>
            <p className="mt-2 text-text-muted text-sm leading-relaxed">
              Run entirely on-premise. No data leaves your infrastructure.
              MCP-compatible for custom tool integrations.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
