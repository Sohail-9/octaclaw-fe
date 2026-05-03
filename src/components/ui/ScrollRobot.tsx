"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import RunningRobot from "./RunningRobot";
import { useEffect, useState } from "react";

export default function ScrollRobot() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map progress to vertical position (e.g., from 10% to 90% of viewport height)
  const y = useTransform(smoothProgress, [0, 1], ["10vh", "90vh"]);

  useEffect(() => {
    // Only show after scrolling a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed right-4 sm:right-8 z-[100] pointer-events-none hidden lg:block"
      style={{ y }}
    >
      <div className="relative group pointer-events-auto">
        <RunningRobot className="scale-50 opacity-40 group-hover:opacity-100 transition-opacity" variant="running" />
        
        {/* Progress label */}
        <motion.div 
          className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/80 border border-white/10 backdrop-blur-md px-2 py-1 rounded text-[8px] font-mono text-white/40 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
        >
          SYNCING... {Math.round(scrollYProgress.get() * 100)}%
        </motion.div>

        {/* Trail effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-t from-brand-primary/20 to-transparent -translate-y-full" />
      </div>
    </motion.div>
  );
}
