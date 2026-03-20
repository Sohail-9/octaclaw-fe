"use client";

import { motion } from "framer-motion";

const teamNames = ["Product teams", "Automation studios", "SaaS founders", "Dev tool builders", "Growth teams"];

export default function SocialProofSection() {
  return (
    <section className="relative py-16 px-6 bg-[#120c21]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="oc-card p-8 text-center"
        >
          <p className="text-3xl sm:text-4xl text-white font-extrabold">1,842 builders already joined</p>
          <p className="mt-2 text-[#c9c2df]">Used by teams shipping production automations and agent systems.</p>

          <div className="mt-7 grid grid-cols-2 sm:grid-cols-5 gap-3">
            {teamNames.map((team) => (
              <div key={team} className="rounded-xl border border-white/12 bg-white/5 px-3 py-2 text-xs sm:text-sm text-[#e4ddf6]">
                {team}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
