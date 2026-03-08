import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OctaClaw – [Tagline from PRD]",
  description: "[Description from PRD]",
  keywords: ["octaclaw"],
  openGraph: {
    title: "OctaClaw",
    description: "[Description from PRD]",
    url: "https://octaclaw.com",
    siteName: "OctaClaw",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OctaClaw",
    description: "[Description from PRD]",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
