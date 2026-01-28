'use client';

import AboutSummary from '@/components/AboutSummary';
import AboutDetails from '@/components/AboutDetails';

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full pt-5 pb-20">
      <div className="site-container space-y-15">
        <AboutSummary />
        <AboutDetails />
      </div>
    </section>
  );
}
