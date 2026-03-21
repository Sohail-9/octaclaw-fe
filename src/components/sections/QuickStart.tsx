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
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl text-white font-semibold tracking-tight"
          >
            Quick Start
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-base text-[#9ca3af]"
          >
            From zero to multi-agent in 90 seconds.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col gap-2"
            >
              <h3 className="text-sm font-semibold text-[#8b8b93] ml-1">
                {step.title}
              </h3>
              <div className="flex items-center justify-between gap-3 bg-[#2a2a2d] border border-white/5 rounded-xl p-3 shadow-inner group">
                <div className="flex items-center overflow-x-auto min-w-0 no-scrollbar">
                  <span className="text-[#6b7280] font-mono mr-2 shrink-0">$</span>
                  <code className="text-[#e5e7eb] font-mono text-[13px] whitespace-nowrap">
                    {step.code}
                  </code>
                </div>
                <button
                  onClick={() => handleCopy(step.code)}
                  className="shrink-0 p-1.5 rounded-[8px] sm:rounded-[10px] bg-white/5 hover:bg-white/10 text-[#9ca3af] hover:text-white transition-colors border border-white/5 flex items-center justify-center opacity-80 group-hover:opacity-100"
                  aria-label="Copy code"
                >
                  {copied === step.code ? (
                    <Check size={14} className="text-emerald-400 sm:w-[15px] sm:h-[15px]" />
                  ) : (
                    <Copy size={14} className="sm:w-[15px] sm:h-[15px]" />
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
