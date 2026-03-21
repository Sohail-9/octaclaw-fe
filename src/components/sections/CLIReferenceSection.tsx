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
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-4 mb-8 text-center sm:text-left">
          <div className="p-3 mb-4 sm:mb-0 rounded-xl bg-[#7c3aff]/10 border border-[#7c3aff]/20 inline-flex items-center justify-center">
            <Terminal className="text-[#a855f7]" size={28} />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">CLI Reference</h2>
            <p className="text-[#c9c2df] text-sm mt-1">Built by developers, for developers.</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 overflow-hidden bg-[#1A1025]/50 backdrop-blur-sm"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="py-4 px-6 text-sm font-semibold text-[#c9c2df] w-[220px]">Command</th>
                  <th className="py-4 px-6 text-sm font-semibold text-[#c9c2df]">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {commands.map((c) => (
                  <tr key={c.cmd} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6">
                      <code className="text-[#c4a1ff] font-mono text-sm">{c.cmd}</code>
                    </td>
                    <td className="py-4 px-6 text-[#b9b2cf] text-sm">
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
