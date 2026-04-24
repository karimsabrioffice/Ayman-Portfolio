'use client';

import { skills } from './data';
import { useInView } from './useInView';

function Section({
  id,
  label,
  heading,
  children,
  className = '',
}: {
  id?: string;
  label?: string;
  heading?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {label && (
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-3 font-medium">
            {label}
          </p>
        )}
        {heading && (
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">
            {heading}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

export { Section };

export default function AboutSection() {
  return (
    <Section id="about" label="About Me" heading="What I Do">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={i}
              className="group card-hover relative rounded-2xl p-6 overflow-hidden"
              style={{
                background: 'rgba(15,17,21,0.6)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderLeftWidth: '2px',
                borderLeftColor: 'transparent',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                const colors: Record<string, string> = {
                  blue: '#3b82f6', purple: '#8b5cf6', cyan: '#06b6d4',
                  amber: '#f59e0b', emerald: '#10b981', rose: '#f43f5e',
                  violet: '#7c3aed', teal: '#14b8a6',
                };
                const c = colors[s.accentColor] || '#3b82f6';
                (e.currentTarget as HTMLElement).style.borderLeftColor = c;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 24px ${c}15, 0 0 0 1px ${c}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderLeftColor = 'transparent';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {/* Watermark number */}
              <span className="absolute top-3 right-4 font-[family-name:var(--font-space-grotesk)] text-5xl font-bold text-white/[0.05] select-none">
                {s.num}
              </span>
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4 ${s.color} transition-transform duration-300 group-hover:scale-110`}>
                <Icon size={20} />
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-white font-semibold text-base mb-2">
                {s.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
