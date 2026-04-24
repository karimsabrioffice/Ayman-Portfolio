'use client';

import { Calendar, Check } from 'lucide-react';
import { experiences } from './data';
import { Section } from './AboutSection';
import { useInView } from './useInView';

function ExperienceCard({ exp, index }: { exp: typeof experiences[number]; index: number }) {
  const { ref, inView } = useInView();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-6 md:gap-0 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
        <div
          className={`w-3 h-3 rounded-full ${exp.dotColor}`}
          style={{ boxShadow: `0 0 0 4px rgb(5,5,8)` }}
        />
      </div>

      {isEven ? (
        <>
          <div className="hidden md:block md:w-1/2 md:pr-12" />
          <div className="ml-10 md:ml-0 md:w-1/2 md:pl-12">
            <ExpContent exp={exp} />
          </div>
        </>
      ) : (
        <>
          <div className="ml-10 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
            <ExpContent exp={exp} alignRight />
          </div>
          <div className="hidden md:block md:w-1/2 md:pl-12" />
        </>
      )}
    </div>
  );
}

function ExpContent({ exp, alignRight }: { exp: typeof experiences[number]; alignRight?: boolean }) {
  return (
    <div
      className="group rounded-2xl p-6 transition-all duration-300 hover:translate-x-1"
      style={{
        background: 'rgba(15,17,21,0.6)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderLeftWidth: '3px',
        borderLeftColor: exp.leftBorderColor,
      }}
    >
      <div className={`flex items-center gap-2 mb-2 ${alignRight ? 'md:justify-end' : ''}`}>
        <Calendar size={12} className={exp.textColor} />
        <span className="text-slate-500 text-xs">{exp.period}</span>
      </div>
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-white font-semibold text-lg">
        {exp.title}
      </h3>
      <p className={`text-sm mb-4 ${exp.textColor}`}>{exp.company}</p>
      <ul className={`space-y-2 ${alignRight ? 'md:text-right' : ''}`}>
        {exp.items.map((item, j) => (
          <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
            <Check size={14} className={`mt-0.5 flex-shrink-0 ${exp.textColor} ${alignRight ? 'md:order-2 md:ml-2' : ''}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <Section id="experience" label="Career Path" heading="Work Experience">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-white/[0.06]" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}
