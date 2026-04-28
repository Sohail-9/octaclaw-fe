"use client";

import React from "react";
import Image from "next/image";
import { Github, Twitter, MessageSquare, Shield, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neo-bg text-neo-stroke border-t-2 border-neo-stroke/10 py-20 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-6">
              <Image 
                src="/logo_v2.png" 
                alt="OctaClaw" 
                width={36} 
                height={36} 
                className="h-9 w-9 object-contain"
              />
              <span className="text-xl font-black uppercase tracking-tighter text-neo-stroke italic">
                Octa<span className="text-neo-primary">Claw</span>
              </span>
            </div>
            <p className="text-neo-stroke/60 font-bold uppercase text-[10px] tracking-widest leading-relaxed">
              The high-performance runtime for autonomous agent swarms. Built for developers who need scale, safety, and speed.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-neo-accent mb-6">Connect</h4>
            <div className="flex gap-4">
              {[
                { Icon: Github, url: "https://github.com/0xLabs-Org" },
                { Icon: Linkedin, url: "https://www.linkedin.com/company/octaclaw/?viewAsMember=true" }
              ].map((item, i) => (
                <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-neo-stroke/20 bg-neo-surface flex items-center justify-center hover:border-neo-primary transition-colors shadow-neo-sm">
                  <item.Icon className="w-5 h-5 text-neo-stroke" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-neo-stroke/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-neo-stroke/40">
            © 2026 OCTACLAW // PARALLEL RUNTIME INDUSTRIES
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[9px] font-black uppercase tracking-[0.4em] text-neo-stroke/40 hover:text-neo-primary">Privacy Protocol</a>
            <a href="#" className="text-[9px] font-black uppercase tracking-[0.4em] text-neo-stroke/40 hover:text-neo-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
