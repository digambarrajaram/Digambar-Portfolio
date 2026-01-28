'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { personalInfo, about } from '@/data/portfolio';
import Stats from './Stats';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById('hero');

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
        <section
          id="hero"
          className="relative w-full"
        >
        <div className="site-container pt-1 pb-1 sm:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div
            className={`space-y-3 text-center lg:text-left transition-all duration-700 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            <h1 className="font-black leading-[0.95] tracking-tighter text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block text-slate-50">
                {personalInfo.name.split(' ')[0]}
              </span>
              <span className="block bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                {personalInfo.name.split(' ')[1]}
              </span>
            </h1>

            <h2 className="max-w-2xl mx-auto lg:mx-0 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-200">
              {personalInfo.title}
            </h2>

            <p className="max-w-3xl mx-auto lg:mx-0 text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-slate-400">
              {about.headline}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-8 py-4 text-lg font-semibold text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/30"
              >
                View My Work →
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border-2 border-emerald-500/30 px-8 py-4 text-lg font-semibold text-emerald-300 hover:bg-emerald-500/10"
              >
                Let’s Connect
              </Link>
            </div>

            {/* STATS */}
            <div className="pt-6 border-t border-slate-700/50">
              <Stats />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-700 ease-out delay-150
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            <div className="relative max-w-[300px] sm:max-w-[360px] lg:max-w-[440px]">
              {/* GLOWS */}
              <div className="absolute -top-8 -right-8 h-20 w-20 rounded-full bg-emerald-500/20 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-blue-500/15 blur-2xl" />

              {/* IMAGE CARD */}
              <div className="relative rounded-3xl border border-slate-600/60 bg-slate-800/60 backdrop-blur-xl p-3 shadow-2xl">
                <div className="overflow-hidden rounded-2xl bg-slate-900">
                  <Image
                    src="/Digambar_Photo.png"
                    alt={`${personalInfo.name} – ${personalInfo.title}`}
                    width={460}
                    height={560}
                    priority
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
