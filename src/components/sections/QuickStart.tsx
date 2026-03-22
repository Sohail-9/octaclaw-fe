"use client";

import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const steps = [
  { title: "1. Install Globally", code: "npm i -g octaclaw" },
  { title: "2. Scaffold Workspace", code: "octa init" },
  { title: "3. Run Agent DAG", code: "octa run code-review" },
  { title: "4. Chat Instantly", code: "octa chat" },
];

export default function QuickStartSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="quickstart" className="relative py-16 sm:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl text-white font-bold tracking-tight font-heading"
          >
            Quick Start
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-text-muted"
          >
            From zero to multi-agent deployment in seconds.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-xs font-bold text-primary-light/60 uppercase tracking-widest ml-1">
                {step.title}
              </h3>
              <div className="flex items-center justify-between gap-3 surface-low rounded-2xl p-4 shadow-2xl group border border-white/5">
                <div className="flex items-center overflow-x-auto min-w-0 no-scrollbar">
                  <span className="text-primary-mid/50 font-mono mr-3 shrink-0">$</span>
                  <code className="text-[#e5e7eb] font-mono text-sm whitespace-nowrap">
                    {step.code}
                  </code>
                </div>
                <button
                  onClick={() => handleCopy(step.code)}
                  className="shrink-0 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-text-muted hover:text-white transition-all duration-200 border border-white/5 flex items-center justify-center"
                  aria-label="Copy code"
                >
                  {copied === step.code ? (
                    <Check size={16} className="text-primary-light" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
