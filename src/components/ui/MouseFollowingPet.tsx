"use client";

import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import RunningRobot from "./RunningRobot";

type PetStatus = "idle" | "running" | "waiting" | "ready";

const statusMessages = {
  idle: "READY",
  running: "EXECUTING...",
  waiting: "WAITING",
  ready: "REVIEW",
};

export default function MouseFollowingPet() {
  const [status, setStatus] = useState<PetStatus>("idle");
  const [isMounted, setIsMounted] = useState(false);
  const [isSwarming, setIsSwarming] = useState(false);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for trailing effect
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const triggerSwarm = () => {
    if (isSwarming) return;
    setIsSwarming(true);
    setStatus("running");
    setTimeout(() => {
      setIsSwarming(false);
      setStatus("idle");
    }, 4000);
  };

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX + 25);
      mouseY.set(e.clientY + 25);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  return (
    <div className="fixed top-0 left-0 z-[10000] pointer-events-none">
      {/* Main Pet */}
      <motion.div
        className="absolute w-14 h-16 pointer-events-auto cursor-pointer"
        style={{ x: springX, y: springY }}
        onClick={triggerSwarm}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-brand-primary/10 blur-xl rounded-full scale-150" />
          <RunningRobot
            className="scale-[0.4]"
            variant={status === "running" ? "running" : "static"}
          />
        </div>
      </motion.div>

      {/* Swarm Agents */}
      <AnimatePresence>
        {isSwarming && Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: mouseX.get(), y: mouseY.get(), opacity: 0, scale: 0 }}
            animate={{
              x: mouseX.get() + Math.cos(i * 60) * 80,
              y: mouseY.get() + Math.sin(i * 60) * 80,
              opacity: 1,
              scale: 0.25,
              rotate: [0, 360]
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.1
            }}
            className="absolute"
          >
            <RunningRobot variant="running" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
