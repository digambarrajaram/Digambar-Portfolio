'use client';

import { useEffect, useState } from 'react';
import { technologies } from '@/data/portfolio';

export default function TechnologiesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById('technologies');
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
      id="technologies"
      className="relative w-full py-16 sm:py-24"
    >
      <div className="site-container">
        {/* HEADER - Matching AboutDetails SectionHeader pattern */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          <span className="inline-block mb-4 px-4 py-1 text-xs font-bold tracking-widest uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            Expertise
          </span>
          <h2 className="text-4xl font-extrabold text-slate-50 sm:text-5xl">
            Technologies
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Technologies I use to build secure, scalable, production-grade systems
          </p>
        </div>

        {/* TECH TAGS GRID - Using technologies array */}
        <div
          className={`flex flex-wrap justify-center gap-3 sm:gap-4 transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          {technologies.map((tech, index) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-xl px-5 py-2.5 text-base font-medium bg-slate-800/60 text-slate-200 border border-slate-700/50 hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-300 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300"
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
