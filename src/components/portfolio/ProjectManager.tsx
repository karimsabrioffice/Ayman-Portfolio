'use client';

import { Play, FolderKanban } from 'lucide-react';
import { Section } from './AboutSection';
import { useInView } from './useInView';

const videoUrls = [
  'https://drive.google.com/file/d/1QF_E0c6yt7mC0Hm3N5qLJoLy0lzv5gAk/preview',
  'https://drive.google.com/file/d/1VObhoyMAGB5I9McPIVjIWD2wZPfbOfWq/preview',
  'https://drive.google.com/file/d/1DM1jltsbJyTZ0N0szApaxAEKpHp1j0gu/preview',
  'https://drive.google.com/file/d/1l7nh3p2iE7TX-rSIwMslPBSL2SPGTzN-/preview',
  'https://drive.google.com/file/d/1F0T7GqLmbHBY_9_WB_l-FIb0fsjKpVbU/preview',
];

function ProjectVideoCard({ url, index }: { url: string; index: number }) {
  const { ref, inView } = useInView();
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div
        className="rounded-2xl overflow-hidden card-hover"
        style={{
          background: 'rgba(15,17,21,0.6)',
          border: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        {/* Video Player */}
        <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
          <iframe
            src={url}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full rounded-2xl"
            style={{ border: 'none' }}
            title={`Project Video ${num}`}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default function ProjectManager() {
  return (
    <Section id="projects" label="Production" heading="Project Manager">
      <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mb-12">
        Managed multiple video production projects from concept to final delivery, coordinating teams and ensuring on-time, high-quality results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoUrls.map((url, i) => (
          <ProjectVideoCard key={i} url={url} index={i} />
        ))}
      </div>
    </Section>
  );
}
