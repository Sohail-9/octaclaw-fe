import type { Metadata } from "next";
import { Inter, Syne, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OctaClaw | A Spatial Workspace for Humans and AI Agents",
  description:
    "Most AI tools are built for solo use. OctaClaw is built for teams — a live spatial environment where humans and agents work side by side.",
  keywords: ["octaclaw", "agent dag", "agent orchestration", "Spatial Workspace", "debugging"],
  metadataBase: new URL("https://octaclaw.com"),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
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
    title: "OctaClaw | A Spatial Workspace for Humans and AI Agents",
    description:
      "Most AI tools are built for solo use. OctaClaw is built for teams.",
    url: "https://octaclaw.com",
    siteName: "OctaClaw",
    images: [{ url: "/logo.png", width: 800, height: 800 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OctaClaw | A Spatial Workspace for Humans and AI Agents",
    description:
      "Most AI tools are built for solo use. OctaClaw is built for teams.",
    images: ["/logo.png"],
  },
};

import BackgroundEffects from "@/components/layout/BackgroundEffects";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${syne.variable} ${spaceGrotesk.variable} antialiased min-h-screen bg-bg-base text-text-main transition-colors duration-500`}>
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
