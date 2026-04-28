import React from "react";
import { NeoButton } from "@/components/ui/neo/NeoButton";
import { NeoCard } from "@/components/ui/neo/NeoCard";
import { NeoInput } from "@/components/ui/neo/NeoInput";
import { ArrowRight, Sparkles, Zap, Shield, Layout } from "lucide-react";

export default function NeoDemoPage() {
  return (
    <div className="min-h-screen bg-neo-bg p-8 md:p-20 font-sans text-neo-stroke">
      <header className="max-w-6xl mx-auto mb-20 text-center">
        <div className="inline-block px-4 py-1 mb-6 bg-neo-secondary border-2 border-neo-stroke shadow-neo-sm font-black uppercase text-sm">
          Design System v1.0
        </div>
        <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter italic">
          Octa<span className="text-neo-primary">Claw</span> Neo
        </h1>
        <p className="text-xl font-bold max-w-2xl mx-auto text-gray-700">
          A high-contrast, high-energy UI kit inspired by Formaly.io. 
          Built for speed, clarity, and bold interactions.
        </p>
      </header>

      <main className="max-w-6xl mx-auto space-y-24">
        {/* Buttons Section */}
        <section>
          <h2 className="text-3xl font-black mb-10 uppercase border-b-4 border-neo-stroke pb-2 inline-block">
            Interactive Buttons
          </h2>
          <div className="flex flex-wrap gap-6 items-center">
            <NeoButton>Get Started Free</NeoButton>
            <NeoButton variant="secondary">Book a Demo</NeoButton>
            <NeoButton variant="outline">Learn More</NeoButton>
            <NeoButton variant="white">Sign In</NeoButton>
            <NeoButton size="sm" variant="primary">Small</NeoButton>
            <NeoButton size="lg" variant="primary" className="flex items-center gap-2">
              Start Building <ArrowRight className="w-5 h-5" />
            </NeoButton>
          </div>
        </section>

        {/* Cards Section */}
        <section>
          <h2 className="text-3xl font-black mb-10 uppercase border-b-4 border-neo-stroke pb-2 inline-block">
            Feature Cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NeoCard className="hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
              <div className="w-12 h-12 bg-neo-primary border-2 border-neo-stroke shadow-neo-sm flex items-center justify-center mb-6">
                <Zap className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase">Lightning Fast</h3>
              <p className="font-bold text-gray-600">
                Deploy your forms in seconds with our AI-powered generation engine.
              </p>
            </NeoCard>

            <NeoCard variant="secondary">
              <div className="w-12 h-12 bg-white border-2 border-neo-stroke shadow-neo-sm flex items-center justify-center mb-6">
                <Shield className="text-neo-stroke w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase">Safe & Secure</h3>
              <p className="font-bold text-gray-600">
                Enterprise-grade security built into every single interaction.
              </p>
            </NeoCard>

            <NeoCard variant="white" className="border-neo-primary">
              <div className="w-12 h-12 bg-neo-secondary border-2 border-neo-stroke shadow-neo-sm flex items-center justify-center mb-6">
                <Layout className="text-neo-stroke w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase text-neo-primary">Modular Design</h3>
              <p className="font-bold text-gray-600">
                Highly customizable components that adapt to your brand identity.
              </p>
            </NeoCard>
          </div>
        </section>

        {/* Forms Section */}
        <section className="max-w-md">
          <h2 className="text-3xl font-black mb-10 uppercase border-b-4 border-neo-stroke pb-2 inline-block">
            Form Controls
          </h2>
          <div className="space-y-6">
            <NeoInput label="Full Name" placeholder="John Doe" />
            <NeoInput label="Email Address" placeholder="john@example.com" type="email" />
            <NeoButton className="w-full">Subscribe Now</NeoButton>
          </div>
        </section>

        {/* Hero Preview */}
        <section className="bg-white border-4 border-neo-stroke shadow-neo-lg p-12 text-center overflow-hidden relative">
            <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-3 h-3 rounded-full border-2 border-neo-stroke bg-red-400"></div>
                <div className="w-3 h-3 rounded-full border-2 border-neo-stroke bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full border-2 border-neo-stroke bg-green-400"></div>
            </div>
            <h2 className="text-5xl font-black mb-6 uppercase">
                Ready to transform your <span className="bg-neo-secondary px-2">workflow?</span>
            </h2>
            <div className="flex justify-center gap-4">
                <NeoButton size="lg">Get Started</NeoButton>
                <NeoButton variant="outline" size="lg">Watch Video</NeoButton>
            </div>
        </section>
      </main>

      <footer className="mt-40 pt-20 border-t-2 border-neo-stroke text-center font-black uppercase tracking-widest text-sm">
        © 2026 OctaClaw. Built with Neobrutalism.
      </footer>
    </div>
  );
}
