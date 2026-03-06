import type { Metadata } from "next";
import { generateBaseMetadata } from "@/lib/metadata";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebVitals from "@/components/WebVitals";
import { MobileMenuProvider } from "@/components/MobileMenuContext";
import MobileMenuOverlay from "@/components/MobileMenuOverlay";
import { Analytics } from "@vercel/analytics/next";

/* =================================
   Fonts
================================= */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* =================================
   Base Metadata (SEO) - Generated from portfolio.ts
   Note: Using centralized metadata utility for consistency
========================================= */
export const metadata: Metadata = generateBaseMetadata();

/* =================================
   Viewport
   ================================= */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

/* ================================
   Root Layout
   ================================ */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Performance Monitoring */}
        <WebVitals />

        {/* Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Global Mobile Menu Context */}
        <MobileMenuProvider>
          {/* Fixed Header */}
          <Header />

          {/* Main Content */}
          <main
            id="main-content"
            role="main"
            className="page-gradient min-h-screen max-w-screen overflow-x-hidden"
          >
            {children}
          </main>

          {/* Footer */}
          <Footer />

          {/* Mobile Menu Overlay */}
          <MobileMenuOverlay />
        </MobileMenuProvider>

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
