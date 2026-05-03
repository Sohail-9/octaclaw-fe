"use client";

import { motion } from "framer-motion";
import RunningRobot from "./RunningRobot";

export default function RobotSectionDivider() {
  return (
    <div className="relative w-full h-px bg-border-subtle/20 my-12 overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-0 -translate-y-1/2 z-10"
        animate={{
          x: ["-10%", "110%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <RunningRobot className="scale-[0.2] opacity-30 hover:opacity-100 transition-opacity" variant="running" />
      </motion.div>
      
      {/* Glow effect on the line */}
      <motion.div 
        className="absolute top-0 h-px bg-brand-primary/50"
        animate={{
          left: ["0%", "100%"],
          width: ["0%", "20%", "0%"]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}
