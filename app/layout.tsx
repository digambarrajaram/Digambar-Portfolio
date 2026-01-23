import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digambar Rajaram | DevOps & Cloud Engineer",
  description: "Professional portfolio of Digambar Rajaram - DevOps & Cloud Engineer specializing in AWS, Terraform, Docker, Kubernetes, and CI/CD automation.",
  keywords: ["DevOps", "Cloud Engineer", "AWS", "Terraform", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Infrastructure as Code"],
  authors: [{ name: "Digambar Rajaram" }],
  creator: "Digambar Rajaram",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digambar-portfolio.vercel.app",
    title: "Digambar Rajaram | DevOps & Cloud Engineer",
    description: "Professional portfolio showcasing DevOps and Cloud Engineering projects, expertise in AWS, Terraform, Kubernetes, and CI/CD automation.",
    siteName: "Digambar Rajaram Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digambar Rajaram | DevOps & Cloud Engineer",
    description: "Professional portfolio showcasing DevOps and Cloud Engineering projects.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
