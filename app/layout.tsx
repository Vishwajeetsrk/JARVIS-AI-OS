import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JARVIS AI OS · NEXORA APEX Platform",
  description:
    "Autonomous AI Operating System with 18-agent fleet, Career OS 2.0, Content Studio, Agency OS, and PC Device Bridge.",
  icons: {
    icon: "/main-logo.png",
    shortcut: "/main-logo.png",
    apple: "/main-logo.png",
  },
  openGraph: {
    title: "JARVIS AI OS · NEXORA APEX Platform",
    description: "Autonomous AI Operating System by Vishwajeet Srk",
    images: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
