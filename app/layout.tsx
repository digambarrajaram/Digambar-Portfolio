import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebVitals from "@/components/WebVitals";
import { MobileMenuProvider } from "@/components/MobileMenuContext";
import MobileMenuOverlay from "@/components/MobileMenuOverlay";
import { Analytics } from "@vercel/analytics/next";

/* ================================
   Fonts
================================ */
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

/* ================================
   Viewport
================================ */
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

/* ================================
   Metadata (SEO + Favicon FIX)
================================ */
export const metadata: Metadata = {
  title: "Digambar Rajaram | Infrastructure & DevOps Engineer",
  description:
    "Professional portfolio of Digambar Rajaram - Infrastructure, DevOps & Cloud Engineer specializing in AWS, Terraform, Docker, Kubernetes, and CI/CD automation.",

  keywords: [
    "DevOps",
    "Cloud Engineer",
    "AWS",
    "Terraform",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "GitHub Actions",
    "Infrastructure as Code",
  ],

  authors: [{ name: "Digambar Rajaram" }],
  creator: "Digambar Rajaram",
  publisher: "Digambar Rajaram",

  metadataBase: new URL("https://digambarrajaram.cloud"),
  alternates: {
    canonical: "/",
  },

  /* ✅ THIS REMOVES VERCEL ICON */
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digambarrajaram.cloud",
    title: "Digambar Rajaram | Infrastructure & DevOps Engineer",
    description:
      "Professional portfolio showcasing Infrastructure, DevOps and Cloud Engineering projects.",
    siteName: "Digambar Rajaram Portfolio",
    images: [
      {
        url: "/Digambar_Photo.png",
        width: 1200,
        height: 630,
        alt: "Digambar Rajaram - Infrastructure & DevOps Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Digambar Rajaram | Infrastructure & DevOps Engineer",
    description:
      "Professional portfolio showcasing Infrastructure, DevOps and Cloud Engineering projects.",
    images: ["/Digambar_Photo.png"],
    creator: "@digambarrajaram",
  },

  robots: {
    index: true,
    follow: true,
  },
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
