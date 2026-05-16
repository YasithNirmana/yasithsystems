import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YasithSystems — AI Automation & Property Operations",
  description:
    "Helping real estate businesses reduce manual work, improve tenant response times, and automate operations with AI-powered systems.",
  keywords:
    "AI automation, property management, real estate operations, tenant communication, maintenance workflow",
  openGraph: {
    title: "YasithSystems — AI Automation & Property Operations",
    description:
      "Reduce manual work, improve tenant response times, and automate operations.",
    url: "https://yasithsystems.com",
    siteName: "YasithSystems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#020817] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
