"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
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

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for trailing effect
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      // Offset to follow behind/near the cursor
      mouseX.set(e.clientX + 25);
      mouseY.set(e.clientY + 25);
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // Demo cycle for status
    const interval = setInterval(() => {
      setStatus((prev) => {
        if (prev === "idle") return "running";
        if (prev === "running") return "waiting";
        return "idle";
      });
    }, 8000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-14 h-16 z-[10000] pointer-events-none flex items-center justify-center"
      style={{
        x: springX,
        y: springY,
      }}
    >
      <div className="relative">
        {/* Subtle glow behind the pet to make it pop */}
        <div className="absolute inset-0 bg-brand-primary/10 blur-xl rounded-full scale-150" />
        
        {/* The Pet - Small and subtle */}
        <RunningRobot 
          className="scale-[0.4]" 
          variant={status === "running" ? "running" : "static"} 
        />
      </div>
    </motion.div>
  );
}
