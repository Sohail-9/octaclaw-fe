import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
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

export const metadata: Metadata = {
  title: "OctaClaw | A Spatial Workspace for Humans and AI Agents",
  description:
    "Design, run, and debug agent DAG execution on one canvas. Join the OctaClaw waitlist for early access.",
  keywords: ["octaclaw", "agent dag", "agent orchestration", "canvas", "debugging"],
  metadataBase: new URL("https://octaclaw.com"),
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
      "Design, run, and debug agent DAG execution on one canvas. Join the OctaClaw waitlist for early access.",
    url: "https://octaclaw.com",
    siteName: "OctaClaw",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OctaClaw | A Spatial Workspace for Humans and AI Agents",
    description:
      "Design, run, and debug agent DAG execution on one canvas. Join the OctaClaw waitlist for early access.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${syne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
