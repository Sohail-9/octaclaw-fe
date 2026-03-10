"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    quote: "The cleanest way we’ve found to map multi‑agent workflows end‑to‑end.",
    author: "Founder, AI Studio",
  },
  {
    quote: "The spatial canvas makes complex agent systems feel obvious and collaborative.",
    author: "Head of Platform, DevTools",
  },
  {
    quote: "We went from idea to executable workflow in minutes, not days.",
    author: "ML Engineer, Growth Team",
  },
];

export default function SocialProofSection() {
  return (
    <section className="relative py-24 bg-[#0B0B0F]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-space)" }}
          >
            What Builders Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#94a3b8] max-w-2xl mx-auto"
          >
            Early teams are using OctaClaw to design, connect, and run AI systems faster.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 border border-white/10"
            >
              <p className="text-[#e2e8f0] leading-relaxed mb-4">“{item.quote}”</p>
              <div className="text-xs text-[#94a3b8]">{item.author}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
