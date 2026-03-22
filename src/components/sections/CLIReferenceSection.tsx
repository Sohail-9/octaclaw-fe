"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const commands = [
  { cmd: "octa init", desc: "scaffold workspace" },
  { cmd: "octa chat", desc: "interactive session" },
  { cmd: "octa run [recipe]", desc: "run predefined DAG" },
  { cmd: "octa doctor", desc: "validate config" },
  { cmd: "octa logs", desc: "stream background agent logs" },
];

export default function CLIReferenceSection() {
  return (
    <section id="cli-reference" className="relative py-16 sm:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-6 mb-12 text-center sm:text-left">
          <div className="p-4 mb-4 sm:mb-0 rounded-2xl bg-primary/10 border border-white/5 inline-flex items-center justify-center">
            <Terminal className="text-primary-light" size={32} />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-heading">CLI Reference</h2>
            <p className="text-text-muted text-lg mt-2 font-medium">Built by developers, for developers.</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/5 overflow-hidden glass shadow-3xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-white/5">
                  <th className="py-5 px-8 text-xs font-bold uppercase tracking-widest text-text-muted w-[220px]">Command</th>
                  <th className="py-5 px-8 text-xs font-bold uppercase tracking-widest text-text-muted">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {commands.map((c) => (
                  <tr key={c.cmd} className="hover:bg-primary/5 transition-colors group">
                    <td className="py-5 px-8">
                      <code className="text-primary-light font-mono text-sm font-semibold">{c.cmd}</code>
                    </td>
                    <td className="py-5 px-8 text-white/70 text-sm leading-relaxed">
                      {c.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
