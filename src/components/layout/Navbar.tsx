"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NeoButton } from "@/components/ui/neo/NeoButton";
import { Sun, Moon, Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Command Center", href: "#terminal" },
    { name: "Waitlist", href: "#waitlist" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-neo-bg/80 backdrop-blur-md border-b-2 border-neo-stroke/10 px-6 py-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo_v2.png"
            alt="OctaClaw"
            width={32}
            height={32}
            className="h-8 w-8 object-contain group-hover:scale-110 transition-transform"
          />
          <span className="text-xl font-black uppercase tracking-tighter text-neo-stroke italic">
            Octa<span className="text-neo-primary">Claw</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-neo-stroke/40 hover:text-neo-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 border-2 border-neo-stroke flex items-center justify-center shadow-neo-sm bg-neo-surface hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
          >
            {theme === "light" ? <Moon className="w-4 h-4 text-neo-stroke" /> : <Sun className="w-4 h-4 text-neo-stroke" />}
          </button>
          
          <div className="hidden md:block">
            <NeoButton size="sm" variant="primary">
              Join Swarm
            </NeoButton>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden w-10 h-10 border-2 border-neo-stroke flex items-center justify-center shadow-neo-sm bg-neo-primary hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
          >
            <Menu className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-neo-bg flex flex-col p-8 border-l-4 border-neo-stroke"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-xl font-black uppercase tracking-tighter italic">
                Menu // <span className="text-neo-primary">Nav</span>
              </span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-12 h-12 border-2 border-neo-stroke flex items-center justify-center shadow-neo-sm bg-neo-surface"
              >
                <X className="w-6 h-6 text-neo-stroke" />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-5xl font-black uppercase tracking-tighter italic text-neo-stroke hover:text-neo-primary transition-colors flex items-center justify-between group"
                  >
                    {item.name}
                    <ArrowRight className="w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto">
              <NeoButton 
                className="w-full h-20 text-xl font-black uppercase italic"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Swarm Runtime
              </NeoButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
