import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OctaClaw // The Parallel Agent Swarm Runtime",
  description:
    "High-performance multi-agent orchestration for complex developer goals. Built for scale, safety, and speed with TaskDAG technology.",
  keywords: ["octaclaw", "agent orchestration", "AI agents", "DAG execution", "multi-agent runtime", "LLM orchestration"],
  metadataBase: new URL("https://octaclaw.com"),
  icons: {
    icon: "/logo_v2.png",
    apple: "/logo_v2.png",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "OctaClaw // The Parallel Agent Swarm Runtime",
    description: "High-performance multi-agent orchestration for complex developer goals. Built for scale, safety, and speed.",
    url: "https://octaclaw.com",
    siteName: "OctaClaw",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OctaClaw // The Parallel Agent Swarm Runtime",
    description: "High-performance multi-agent orchestration for complex developer goals.",
    images: ["/og-image.png"],
  },
};

import { CyberGrid } from "@/components/layout/CyberGrid";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-bg-base text-text-main transition-colors duration-500 relative`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                let theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
                document.body.setAttribute('data-theme', theme);
              } catch (e) {}
            `,
          }}
        />
        
        {/* Cyber Effects Layer */}
        <CyberGrid />
        <div className="cyber-overlay" />
        <div className="noise-grain" />

        {children}
        <Analytics />
      </body>
    </html>
  );
}
