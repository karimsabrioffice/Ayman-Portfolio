'use client';

import { Calendar, GraduationCap, Award, BookOpen } from 'lucide-react';
import { educations } from './data';
import { Section } from './AboutSection';

export default function EducationSection() {
  return (
    <Section id="education">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column — Education */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="gradient-line w-8" />
            <span className="text-xs uppercase tracking-[0.25em] text-blue-400 font-medium">Education</span>
          </div>
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white mb-6">Academic</h3>
          <div className="space-y-4">
            {educations.map((edu, i) => (
              <div
                key={i}
                className="group rounded-2xl p-6 card-hover"
                style={{
                  background: 'rgba(15,17,21,0.6)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-blue-500/15 text-blue-400 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <GraduationCap size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-[family-name:var(--font-space-grotesk)] text-white font-semibold">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-400 text-sm mt-0.5">{edu.field}</p>
                    <p className="text-slate-500 text-sm mt-0.5">{edu.school}</p>
                    <div className="flex items-center gap-2 text-slate-600 text-xs mt-2">
                      <Calendar size={12} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column — Certifications / Courses */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="gradient-line w-8" />
            <span className="text-xs uppercase tracking-[0.25em] text-blue-400 font-medium">Courses</span>
          </div>
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white mb-6">Courses</h3>
          <div className="space-y-4">
            {[
              { title: 'Digital Marketing', subtitle: 'Professional Certification', icon: Award, iconColor: 'text-purple-400', iconBg: 'bg-purple-500/15' },
              { title: 'Social Media Strategy', subtitle: 'Professional Certification', icon: BookOpen, iconColor: 'text-emerald-400', iconBg: 'bg-emerald-500/15' },
              { title: 'Project Management', subtitle: 'Professional Certification', icon: Award, iconColor: 'text-amber-400', iconBg: 'bg-amber-500/15' },
            ].map((cert, i) => {
              const CertIcon = cert.icon;
              return (
                <div
                  key={i}
                  className="group rounded-2xl p-6 card-hover"
                  style={{
                    background: 'rgba(15,17,21,0.6)',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex-shrink-0 w-11 h-11 rounded-full ${cert.iconBg} ${cert.iconColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <CertIcon size={20} />
                    </div>
                    <div>
                      <h4 className="font-[family-name:var(--font-space-grotesk)] text-white font-semibold">
                        {cert.title}
                      </h4>
                      <p className="text-slate-500 text-sm">{cert.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
