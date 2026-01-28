'use client';

import dynamic from 'next/dynamic';

/* =========================================================
   LAZY LOAD SECTIONS (SAFE CODE SPLITTING)
   ========================================================= */

const HeroSection = dynamic(() => import('@/components/HeroSection'), {
  ssr: false,
  loading: () => (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="animate-pulse text-slate-400">Loading...</div>
    </section>
  ),
});

/* 🔑 IMPORTANT FIX:
   Home page must load ONLY the summary version
*/
const AboutSummary = dynamic(() => import('@/components/AboutSummary'), {
  ssr: false,
  loading: () => (
    <section className="py-24 flex items-center justify-center">
      <div className="animate-pulse text-slate-400">Loading...</div>
    </section>
  ),
});

const TechnologiesSection = dynamic(
  () => import('@/components/TechnologiesSection'),
  {
    ssr: false,
    loading: () => (
      <section className="py-24 flex items-center justify-center">
        <div className="animate-pulse text-slate-400">Loading...</div>
      </section>
    ),
  }
);

/* =========================================================
   HOME PAGE
   ========================================================= */

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSummary />   {/* ✅ FIXED */}
      <TechnologiesSection />
    </>
  );
}
