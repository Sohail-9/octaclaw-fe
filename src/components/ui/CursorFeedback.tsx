"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import RunningRobot from "./RunningRobot";

export default function CursorFeedback() {
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newClick = { id: Date.now(), x: e.clientX, y: e.clientY };
      setClicks((prev) => [...prev, newClick]);
      setTimeout(() => {
        setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
      }, 1000);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={click.id}
            initial={{ opacity: 0, scale: 0.2, x: click.x - 28, y: click.y - 32 }}
            animate={{ opacity: [0, 1, 0], scale: [0.2, 0.5, 0.3], y: click.y - 60 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute"
          >
            <RunningRobot variant="static" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
