"use client";

import Image from "next/image";

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/logo_v2.png"
        alt="Octaclaw Logo"
        fill
        className="object-contain"
      />
    </div>
  );
}
