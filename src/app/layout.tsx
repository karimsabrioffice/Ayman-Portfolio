import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ayman Faried — Account Manager & Campaign Strategist",
  description:
    "Portfolio of Ayman Faried — Account Manager with 5+ years of experience in campaign management, client relations, and workflow optimization across top agencies.",
  keywords: [
    "Ayman Faried",
    "Account Manager",
    "Campaign Manager",
    "Marketing",
    "Portfolio",
    "Saudi Arabia",
    "Cairo",
  ],
  authors: [{ name: "Ayman Faried" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Ayman Faried — Account Manager & Campaign Strategist",
    description:
      "Portfolio of Ayman Faried — Account Manager with 5+ years of experience in campaign management, client relations, and workflow optimization.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
        style={{ background: "rgb(5, 5, 8)", color: "#ffffff" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
