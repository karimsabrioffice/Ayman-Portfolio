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

const SITE_URL = "https://ayman-faried-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ayman Faried — Traffic & Account Manager",
  description:
    "Portfolio of Ayman Faried — Traffic Manager with 5+ years of experience in campaign management, client relations, and workflow optimization across top agencies.",
  keywords: [
    "Ayman Faried",
    "Traffic Manager",
    "Account Manager",
    "Campaign Manager",
    "Marketing",
    "Portfolio",
    "Saudi Arabia",
    "Cairo",
  ],
  authors: [{ name: "Ayman Faried" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ayman Faried — Traffic & Account Manager",
    url: SITE_URL,
    siteName: "Ayman Faried",
    description:
      "Portfolio of Ayman Faried — Traffic Manager with 5+ years of experience in campaign management, client relations, and workflow optimization.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayman Faried — Traffic & Account Manager",
    description:
      "Traffic & Account Manager with 5+ years running social media campaigns for brands in Saudi Arabia and Egypt.",
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
