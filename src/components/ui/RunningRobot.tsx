"use client";

import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface RunningRobotProps {
  className?: string;
  variant?: "static" | "running";
}

export default function RunningRobot({ className, variant = "running" }: RunningRobotProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const robotRef = useRef<HTMLDivElement>(null);

  const handlePetClick = () => {
    if (isJumping) return;
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 600);
  };

  // Mouse tracking motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for tracking
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  // Map mouse position to eye and body movement
  const eyeX = useTransform(springX, [-200, 200], [-3, 3]);
  const eyeY = useTransform(springY, [-200, 200], [-1, 1]);
  const tiltX = useTransform(springY, [-200, 200], [5, -5]);
  const tiltY = useTransform(springX, [-200, 200], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!robotRef.current) return;
      const rect = robotRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate relative distance
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Periodic blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 4000);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div 
      ref={robotRef}
      className={`relative cursor-pointer group w-14 h-16 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handlePetClick}
    >
      {/* Robot Body Container */}
      <motion.div 
        className="relative w-full h-full"
        style={{ rotateX: tiltX, rotateY: tiltY }}
        animate={{
          y: isJumping ? -30 : 0,
          rotate: isJumping ? 360 : 0,
          scale: isJumping ? 1.2 : 1,
        }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        
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
          
          {/* Eyes - Now track the mouse */}
          <motion.div 
            className="flex gap-2.5 mb-1.5"
            style={{ x: eyeX, y: eyeY }}
          >
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
          </motion.div>

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

        {/* Legs */}
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
      </motion.div>

      {/* Action Popover */}
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
