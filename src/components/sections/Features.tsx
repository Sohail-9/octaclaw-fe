"use client";

import { motion } from "framer-motion";
import { Maximize, Cpu, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Visual AI Workspace",
    description: "Design AI workflows using a spatial canvas interface.",
    icon: <Maximize className="text-purple-400 mb-4" size={32} />,
    delay: 0.1,
  },
  {
    title: "Composable AI Systems",
    description: "Connect tools, models, and workflows visually.",
    icon: <Cpu className="text-blue-400 mb-4" size={32} />,
    delay: 0.3,
  },
  {
    title: "Built for AI Builders",
    description: "Designed for developers experimenting with next-generation AI systems.",
    icon: <ShieldCheck className="text-purple-400 mb-4" size={32} />,
    delay: 0.5,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 bg-[#0B0B0F] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Build AI Systems <span className="text-gradient">Visually</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#94a3b8] max-w-2xl mx-auto text-lg"
          >
            Everything you need to design, deploy, and scale intelligent agent networks — without the complexity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: feature.delay }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-8 rounded-2xl border border-white/10 hover:border-[#7C3AED]/50 transition-all group relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {feature.icon}
                <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: "var(--font-space)" }}>
                  {feature.title}
                </h3>
                <p className="text-[#94a3b8] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
