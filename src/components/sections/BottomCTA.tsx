"use client";

import { motion } from "framer-motion";

export default function BottomCTA() {
  return (
    <section className="relative px-4 py-20 sm:py-32 flex justify-center z-20 overflow-hidden">
      <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#030712] border border-[#1e293b] p-12 sm:p-20 text-center flex flex-col items-center">
        
        {/* Soft radial glow behind CTA text */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-gradient-to-b from-[#38bdf8]/10 via-[#81e6d9]/5 to-transparent blur-3xl pointer-events-none" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Ready to scale your agentic fleet?
        </motion.h2>

        <motion.p
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7, delay: 0.15 }}
           className="text-base sm:text-lg text-[#94a3b8] max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Join the waitlist to get early access to the spatial control layer and start optimizing your agent workflows today.
        </motion.p>

        <motion.button
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           whileHover={{ scale: 1.03 }}
           whileTap={{ scale: 0.98 }}
           transition={{ duration: 0.4, delay: 0.3 }}
           className="bg-[#81e6d9] hover:bg-[#4fd1c5] transition-colors rounded-full py-3.5 px-8 text-[#0f172a] font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(129,230,217,0.3)] relative overflow-hidden group"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[200%] group-hover:animate-[shimmer-btn_1.5s_infinite_linear]" />
          <span className="relative z-10">Join the Waitlist</span>
        </motion.button>
      </div>
    </section>
  );
}
