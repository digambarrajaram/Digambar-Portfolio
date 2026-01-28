'use client';

import { useEffect, useState } from 'react';

const techCategories = [
  {
    title: 'Cloud Infrastructure',
    technologies: [
      'AWS',
      'Terraform',
      'VMware vSphere',
      'VPC Networking',
      'Security Groups',
    ],
    accent: 'emerald',
  },
  {
    title: 'DevOps & Automation',
    technologies: [
      'GitHub Actions',
      'Jenkins',
      'Docker',
      'Kubernetes',
      'Ansible',
      'Shell Scripting',
    ],
    accent: 'blue',
  },
  {
    title: 'Observability',
    technologies: ['CloudWatch', 'Prometheus', 'Grafana'],
    accent: 'purple',
  },
  {
    title: 'AI / ML',
    technologies: [
      'OpenAI',
      'Amazon Bedrock',
      'SageMaker',
      'Langfuse',
      'Vector Databases',
    ],
    accent: 'pink',
  },
  {
    title: 'Frontend / Backend',
    technologies: ['Next.js', 'FastAPI', 'Python', 'Gradio'],
    accent: 'cyan',
  },
];

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
      className="relative w-full pt-0"
    >
      <div className="site-container pb-10 sm:pb-24">
        {/* HEADER */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Tech Stack & Tools
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Technologies I use to build secure, scalable, production-grade systems
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {techCategories.map((category, index) => (
            <div
              key={category.title}
              className={`relative rounded-2xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-xl p-6 sm:p-8 shadow-xl transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* GLOW */}
              <div
                aria-hidden
                className={`absolute -top-10 -right-10 h-28 w-28 rounded-full blur-3xl ${
                  category.accent === 'emerald'
                    ? 'bg-emerald-500/15'
                    : category.accent === 'blue'
                    ? 'bg-blue-500/15'
                    : category.accent === 'purple'
                    ? 'bg-purple-500/15'
                    : category.accent === 'pink'
                    ? 'bg-pink-500/15'
                    : 'bg-cyan-500/15'
                }`}
              />

              <h3 className="relative mb-4 text-xl font-semibold text-slate-200">
                {category.title}
              </h3>

              <div className="relative flex flex-wrap gap-2 sm:gap-3">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium border cursor-default
                      ${
                        category.accent === 'emerald'
                          ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20'
                          : category.accent === 'blue'
                          ? 'border-blue-500/30 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20'
                          : category.accent === 'purple'
                          ? 'border-purple-500/30 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20'
                          : category.accent === 'pink'
                          ? 'border-pink-500/30 bg-pink-500/10 text-pink-300 hover:bg-pink-500/20'
                          : 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20'
                      }
                    `}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
