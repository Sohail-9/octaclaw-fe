"use client";

import { motion } from "framer-motion";

export default function SpatialWorkspaceSection() {
  return (
    <section id="spatial-workspace" className="relative py-20 sm:py-24 px-6 bg-[#120c21]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="oc-card p-8 sm:p-10 text-center"
        >
          <h2 className="text-3xl sm:text-5xl text-white font-extrabold">The shared room for humans and agents</h2>
          <p className="mt-4 text-[#d5cfee] max-w-3xl mx-auto">
            OctaClaw gives your team and agents one spatial workspace. You can see every active run, jump into any node,
            discuss issues in context, and move from alert to fix without switching tools.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
