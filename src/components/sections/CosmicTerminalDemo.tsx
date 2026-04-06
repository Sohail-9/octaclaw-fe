"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const INITIAL_LOGS = [
  { time: "00:00", level: "system", node: "DAG_Runner", text: "Compiled 3 workflow nodes. Initializing swarm...", delay: 500 },
  { time: "00:01", level: "info", node: "Agent:Research", text: "Booting semantic search tools...", delay: 800 },
  { time: "00:01", level: "info", node: "Agent:Writer", text: "Awaiting Research dependency...", delay: 900 },
  { time: "00:02", level: "network", node: "Agent:Research", text: "Querying vector database endpoints...", delay: 1400 },
  { time: "00:04", level: "success", node: "Agent:Research", text: "Context retrieved. Yielding payload to graph.", delay: 2200 },
  { time: "00:04", level: "status", node: "DAG_Runner", text: "Node 'Research' complete. Parralelizing 'Writer' & 'Reviewer'.", delay: 2400 },
  { time: "00:05", level: "info", node: "Agent:Writer", text: "Context received. Synthesizing draft...", delay: 3000 },
  { time: "00:05", level: "info", node: "Agent:Reviewer", text: "Analyzing semantic parameters...", delay: 3200 },
  { time: "00:07", level: "success", node: "Agent:Writer", text: "Draft generated. Passing to Reviewer.", delay: 4500 },
  { time: "00:08", level: "success", node: "Agent:Reviewer", text: "Quality checks passed. DAG Execution Complete.", delay: 5500 },
];

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

function DecryptedText({ text, delayMs = 0 }: { text: string; delayMs?: number }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout | null = null;
    
    // Start decryption after delay
    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              // Skip spaces
              if (char === " ") return " ";
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          if (interval) clearInterval(interval);
        }

        iteration += 1 / 2; // Speed of decryption
      }, 30);
    }, delayMs);

    return () => {
      clearTimeout(startTimeout);
      if (interval) clearInterval(interval);
    };
  }, [text, delayMs]);

  // Syntax Highlighting strings like 'Research' or "Writer"
  const highlightRegex = /(['"].*?['"])/g;
  const parts = displayText.split(highlightRegex);

  return (
    <>
      {parts.map((part, i) => {
        if (part.match(highlightRegex)) {
          return (
            <span key={i} className="text-[#DEB7FF]">
              {part}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export default function CosmicTerminalDemo({ mode = "execution" }: { mode?: "execution" | "multiplayer" }) {
  const [typedCommand, setTypedCommand] = useState("");
  const [showCommand, setShowCommand] = useState(false);
  const [logs, setLogs] = useState<{ time: string; level: string; node: string; text: string }[]>([]);

  useEffect(() => {
    // Type out the command
    const command = mode === "execution" ? "octa run swarm.yaml" : "octa sync --team";
    let i = 0;
    const typeInterval = setInterval(() => {
      setTypedCommand(command.slice(0, i + 1));
      i++;
      if (i >= command.length) {
        clearInterval(typeInterval);
        setTimeout(() => setShowCommand(true), 300);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [mode]);

  useEffect(() => {
    if (!showCommand) return;

    // Simulate logs arriving
    const timeouts = INITIAL_LOGS.map((log) => {
      return setTimeout(() => {
        setLogs((prev) => [...prev, log]);
      }, log.delay);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [showCommand]);

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden font-mono"
      style={{
        background: "#0E0E0F",
        padding: "2px", // for the gradient border illusion
      }}
    >
      {/* Subtle background glow effect simulating "Obsidian Terminal" */}
      <div 
        className="absolute -inset-10 opacity-30 blur-[60px]"
        style={{
          background: "radial-gradient(circle at top right, #7B2CBF, transparent 60%)"
        }}
      />
      
      {/* Terminal Window Container */}
      <div 
        className="relative h-[26rem] rounded-[14px] overflow-hidden flex flex-col"
        style={{
          backgroundColor: "#131314", // surface dim
          boxShadow: "0 0 32px 0 rgba(106, 11, 170, 0.08)", // ambient shadow
        }}
      >
        {/* Header Bar */}
        <div 
          className="flex items-center px-4 py-3 shrink-0"
          style={{ backgroundColor: "#1C1B1C" }} // surface_container_low
        >
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <div className="ml-4 flex items-center">
            <span 
              className="text-[10px] uppercase tracking-widest font-heading font-medium"
              style={{ color: "#988D9E", fontFamily: "var(--font-space-grotesk)" }} // outline color
            >
              OCTACLAW_OS
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div 
          className="flex-1 p-6 overflow-y-auto w-full overflow-x-hidden"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          <div className="flex flex-col space-y-5">
            {/* The Command Sequence */}
            <div className="flex items-center gap-2">
              <span style={{ color: "#DEB7FF", fontFamily: "var(--font-space-grotesk)" }} className="font-semibold text-[15px]">
                [root@octaclaw]~:
              </span>
              <span className="text-[15px] text-white">
                {typedCommand}
                {!showCommand && <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-2 bg-[#DEB7FF] h-4 ml-0.5 align-middle" />}
              </span>
            </div>

            {/* The Logs */}
            {showCommand && (
              <div className="flex flex-col space-y-3">
                {logs.map((log, idx) => {
                  let levelColor = "#CFC2D5"; // on_surface_variant
                  if (log.level === "info") levelColor = "#DEB7FF";
                  if (log.level === "success") levelColor = "#7B2CBF"; // using primary_container equivalent for accent
                  if (log.level === "network") levelColor = "#E0B6FF";
                  if (log.level === "system") levelColor = "#FFFFFF";

                  return (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 sm:gap-4 text-xs sm:text-sm"
                    >
                      <span style={{ color: "#4C4353" }} className="shrink-0">
                        {log.time}
                      </span>
                      <span 
                        style={{ color: levelColor }}
                        className="font-medium shrink-0 w-[60px] sm:w-[80px]"
                      >
                        [{log.level}]
                      </span>
                      <span className="shrink-0 w-[100px] sm:w-[120px]" style={{ color: "#988D9E", fontFamily: "var(--font-mono)" }}>
                        {log.node}
                      </span>
                      <span style={{ color: "#CFC2D5" }}>
                        <DecryptedText text={log.text} delayMs={200} />
                      </span>
                    </motion.div>
                  );
                })}
                {/* Active running state */}
                {logs.length >= INITIAL_LOGS.length && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-start gap-4 text-sm mt-4"
                  >
                     <span style={{ color: "#DEB7FF", fontFamily: "var(--font-space-grotesk)" }} className="font-semibold text-[15px]">[root@octaclaw]~:</span>
                     <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-2 bg-[#DEB7FF] h-4 ml-0.5 align-middle mt-[2px]" />
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
