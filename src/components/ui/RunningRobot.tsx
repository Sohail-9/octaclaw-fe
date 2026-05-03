"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface RunningRobotProps {
  className?: string;
  variant?: "static" | "running";
}

export default function RunningRobot({ className, variant = "running" }: RunningRobotProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  // Periodic blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 4000);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className={`relative cursor-pointer group w-14 h-16 ${className}`}>
      {/* Robot Body Container */}
      <div className="relative w-full h-full">
        
        {/* Antenna / Key Shape from Screenshot - Now with "Waving" animation */}
        <motion.div 
          className="absolute -top-5 right-1 flex flex-col items-end origin-bottom z-10"
          animate={{
            rotate: isHovered ? [0, 15, -15, 15, 0] : [0, 5, 0],
          }}
          transition={{
            duration: isHovered ? 0.5 : 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-1.5 h-6 bg-[#4A4A4A]" />
          <div className="w-4 h-1.5 bg-[#4A4A4A] absolute top-0 right-0 shadow-sm" />
          <div className="w-4 h-1.5 bg-[#4A4A4A] absolute top-3 right-0 shadow-sm" />
        </motion.div>

        {/* Main Body */}
        <div className="w-14 h-12 bg-[#262626] border-[3px] border-[#404040] rounded-sm flex flex-col items-center justify-center relative overflow-hidden shadow-2xl z-0">
          
          {/* Eyes - Pixel style horizontal lines with blinking */}
          <div className="flex gap-2.5 mb-1.5">
            <motion.div
              className="w-3.5 h-[3.5px] bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.6)]"
              animate={{
                scaleY: (isBlinking || isHovered) ? 0.1 : 1,
              }}
              transition={{ duration: 0.1 }}
            />
            <motion.div
              className="w-3.5 h-[3.5px] bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.6)]"
              animate={{
                scaleY: (isBlinking || isHovered) ? 0.1 : 1,
              }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Bottom detail line */}
          <div className="w-8 h-[2px] bg-[#333] rounded-full mt-1" />

          {/* Internal Scanline */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent h-4 w-full"
            animate={{
              top: ["-100%", "200%"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Legs - Fixed position to avoid container height changes */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between px-3 h-4">
          <motion.div
            className="w-2.5 bg-[#262626] border-x-[3px] border-b-[3px] border-[#404040]"
            animate={variant === "running" ? {
              height: ["40%", "80%", "40%"],
            } : { height: "60%" }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="w-2.5 bg-[#262626] border-x-[3px] border-b-[3px] border-[#404040]"
            animate={variant === "running" ? {
              height: ["80%", "40%", "80%"],
            } : { height: "60%" }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      {/* Action Popover - Uses absolute to float independent of everything */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 5, x: "-50%" }}
          animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
          className="absolute -top-8 left-1/2 whitespace-nowrap bg-white text-black text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-sm shadow-md border border-black z-[100] pointer-events-none"
        >
          ACTIVE
        </motion.div>
      )}
    </div>
  );
}
