'use client';

import { useState } from 'react';
import { Instagram, CalendarDays, Images, ZoomIn } from 'lucide-react';
import { Section } from './AboutSection';

interface Client {
  slug: string;
  name: string;
  industry: string;
  instagram: string;
  handle: string;
  plans: number;
  designs: number;
  accent: string;
}

// Plans and design counts come from the monthly content-plan decks for each client.
const clients: Client[] = [
  { slug: 'goc', name: 'GOC Orthopedic Clinic', industry: 'Orthopedics · Healthcare', instagram: 'https://www.instagram.com/goc.ganzouri', handle: '@goc.ganzouri', plans: 6, designs: 62, accent: '#3b82f6' },
  { slug: 'selal-egypt', name: 'Selal Egypt', industry: 'Fishing & Marine Logistics', instagram: 'https://www.instagram.com/selalegypt', handle: '@selalegypt', plans: 8, designs: 44, accent: '#06b6d4' },
  { slug: 'dr-esraa-rostom', name: 'Dr. Esraa Rostom', industry: 'Lymphatic Care · Healthcare', instagram: 'https://www.instagram.com/dresraarostom1', handle: '@dresraarostom1', plans: 3, designs: 33, accent: '#d4a373' },
  { slug: 'abaza-steel', name: 'Abaza Steel', industry: 'Steel Fabrication', instagram: 'https://www.instagram.com/k.abazasteel', handle: '@k.abazasteel', plans: 2, designs: 16, accent: '#ef4444' },
  { slug: 'abaza-marine', name: 'Abaza Marine', industry: 'Marine Engineering', instagram: 'https://www.instagram.com/k.abazamarine', handle: '@k.abazamarine', plans: 1, designs: 5, accent: '#f59e0b' },
];

const imageCount: Record<string, number> = { 'abaza-marine': 5 };

export default function ContentPlansSection({ onImageClick }: { onImageClick: (src: string) => void }) {
  const [active, setActive] = useState(clients[0].slug);
  const client = clients.find((c) => c.slug === active)!;
  const count = imageCount[client.slug] ?? 6;
  const images = Array.from({ length: count }, (_, i) => `/content-plans/${client.slug}/${i + 1}.webp`);

  return (
    <Section id="content-plans" label="Emporia Marketing Agency" heading="Social Media Content Plans">
      <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl -mt-6 mb-10">
        Monthly content plans I build for each client — post ideas, copy, captions, and creative direction — then follow through
        with the design team until every post is live. A selection of the designs from each plan:
      </p>

      {/* Client tabs */}
      <div role="tablist" aria-label="Clients" className="flex gap-2 overflow-x-auto pb-2 mb-8 -mx-1 px-1">
        {clients.map((c) => {
          const selected = c.slug === active;
          return (
            <button
              key={c.slug}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(c.slug)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selected ? 'text-black bg-white' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
              style={selected ? undefined : { border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {c.name}
            </button>
          );
        })}
      </div>

      {/* Client header */}
      <div
        className="flex flex-col md:flex-row md:items-center justify-between gap-5 rounded-2xl p-6 mb-6"
        style={{ background: 'rgba(15,17,21,0.6)', border: '1px solid rgba(255,255,255,0.05)', borderLeft: `3px solid ${client.accent}` }}
      >
        <div>
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-white">{client.name}</h3>
          <p className="text-slate-400 text-sm mt-1">{client.industry}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-slate-300" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
            <CalendarDays size={13} /> {client.plans} monthly {client.plans === 1 ? 'plan' : 'plans'}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-slate-300" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
            <Images size={13} /> {client.designs} designs
          </span>
          <a
            href={client.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-white transition-colors duration-200 hover:bg-pink-500/20"
            style={{ background: 'rgba(236,72,153,0.12)', border: '1px solid rgba(236,72,153,0.3)' }}
          >
            <Instagram size={13} /> {client.handle}
          </a>
        </div>
      </div>

      {/* Designs */}
      <div key={client.slug} className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => onImageClick(src)}
            aria-label={`${client.name} — design ${i + 1}`}
            className="gallery-item group relative rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.05)', aspectRatio: '4 / 5' }}
          >
            <img
              src={src}
              alt={`${client.name} social media design ${i + 1}`}
              width={900}
              height={1125}
              loading="lazy"
              className="gallery-image w-full h-full object-cover"
            />
            <span className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center bg-black/50 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ZoomIn size={15} />
            </span>
          </button>
        ))}
      </div>
    </Section>
  );
}
