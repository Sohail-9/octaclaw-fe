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

  // Separate springs for followers to create the "Swarm" trail
  const f1X = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const f1Y = useSpring(mouseY, { stiffness: 40, damping: 25 });
  const f2X = useSpring(mouseX, { stiffness: 30, damping: 30 });
  const f2Y = useSpring(mouseY, { stiffness: 30, damping: 30 });
  const f3X = useSpring(mouseX, { stiffness: 20, damping: 35 });
  const f3Y = useSpring(mouseY, { stiffness: 20, damping: 35 });

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

      {/* Swarm Followers (Subtle shadow agents) */}
      {isMounted && (
        <>
          <motion.div
            className="fixed top-0 left-0 w-1 h-1 bg-brand-primary/30 rounded-full z-[9999] pointer-events-none"
            style={{ x: f1X, y: f1Y }}
          />
          <motion.div
            className="fixed top-0 left-0 w-1 h-1 bg-brand-primary/20 rounded-full z-[9999] pointer-events-none"
            style={{ x: f2X, y: f2Y }}
          />
          <motion.div
            className="fixed top-0 left-0 w-1 h-1 bg-brand-primary/10 rounded-full z-[9999] pointer-events-none"
            style={{ x: f3X, y: f3Y }}
          />
        </>
      )}

      {/* Swarm Agents (On click) */}
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
