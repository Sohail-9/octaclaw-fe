"use client";

import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import DarioAgent, { DarioState } from "./DarioAgent";

export default function MouseFollowingPet() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeState, setActiveState] = useState<DarioState>("idle");
  const [isSwarming, setIsSwarming] = useState(false);
  
  // High-performance refs to avoid re-renders
  const stateRef = useRef<DarioState>("idle");
  const lastX = useRef(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs
  const springX = useSpring(mouseX, { stiffness: 100, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 25 });



  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Determine new state based on direction
      let nextState = stateRef.current;
      if (clientX > lastX.current + 2) {
        nextState = "run_right";
      } else if (clientX < lastX.current - 2) {
        nextState = "run_left";
      }
      
      // ONLY trigger a React render if the state actually changed
      if (nextState !== stateRef.current) {
        stateRef.current = nextState;
        setActiveState(nextState);
      }
      
      lastX.current = clientX;
      // Framer Motion values update outside of React's render cycle (high performance)
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    // Use a separate effect or interval for idle detection to avoid re-binding
    const idleCheck = setInterval(() => {
      // If mouse hasn't moved much and we aren't already idle
      if (Math.abs(mouseX.get() - lastX.current) < 1 && stateRef.current !== "idle") {
        stateRef.current = "idle";
        setActiveState("idle");
      }
    }, 150);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(idleCheck);
    };
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none" 
      style={{ zIndex: 999999 }}
    >
      <motion.div
        className="absolute pointer-events-none"
        style={{ 
          left: springX, 
          top: springY,
        }}
      >
        {/* Centering wrapper */}
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 bg-brand-primary/10 blur-xl rounded-full scale-150 opacity-30" />
          <DarioAgent
            scale={0.3}
            state={activeState}
          />
        </div>
      </motion.div>

    </div>
  );
}

