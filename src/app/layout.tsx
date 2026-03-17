import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OctaClaw – The Spatial Workspace for AI Collaboration",
  description:
    "Design, connect, and run AI agents in a visual workspace. Build intelligent workflows for the next generation of teams.",
  keywords: ["octaclaw", "AI workspace", "AI agents", "spatial AI", "AI collaboration"],
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
    title: "OctaClaw – The Spatial Workspace for AI Collaboration",
    description:
      "Design, connect, and run AI agents in a visual workspace. Build intelligent workflows for the next generation of teams.",
    url: "https://octaclaw.com",
    siteName: "OctaClaw",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OctaClaw – The Spatial Workspace for AI Collaboration",
    description:
      "Design, connect, and run AI agents in a visual workspace.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
