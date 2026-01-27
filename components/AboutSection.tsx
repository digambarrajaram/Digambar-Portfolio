import { about } from '@/data/portfolio';

export default function AboutSection() {
  // Ripple effect handler
  const createRipple = (event: React.MouseEvent<HTMLElement>) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  return (
    <section className="py-24 fade-in-up scroll-reveal" suppressHydrationWarning={true}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <span className="typography-caption text-[#60A5FA] slide-in-left">About Me</span>
        </div>
        <h2 className="typography-heading-1 text-[#F8FAFC] mb-8 leading-tight slide-in-right stagger-1">
          {about.headline}
        </h2>
        <div className="space-y-8">
          {about.intro.map((paragraph, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-2xl border border-[#2A3441] hover:border-[#3B82F6]/30 transition-all duration-300 hover:shadow-xl hover:scale-[1.01] card-interactive stagger-${(index % 6) + 1} group cursor-pointer`}
              onClick={createRipple}
            >
              <p className="typography-body-large text-[#CBD5E1] leading-relaxed group-hover:text-[#E5E7EB] transition-colors duration-300">
                {paragraph}
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* About Section CTA */}
        <div className="mt-12 text-center">
          <a
            href="/about"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#F8FAFC] glass-card border border-[#2A3441] rounded-xl transition-all duration-300 hover:border-[#3B82F6]/50 hover:bg-[#1A1F2E] hover:scale-105 hover:shadow-xl"
          >
            <span className="mr-2">Learn More About Me</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
