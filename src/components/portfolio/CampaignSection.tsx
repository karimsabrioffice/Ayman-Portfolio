'use client';

import {
  Crown,
  MapPinned,
  LayoutGrid,
  Sun,
  Star,
  Heart,
  User,
  Globe,
  Smartphone,
  ImageIcon,
  Target,
  Eye,
  MessageSquare,
  ZoomIn,
} from 'lucide-react';
import { Section } from './AboutSection';
import { useInView } from './useInView';

/* ─────────────── Campaign 01 — Rama Clinics ─────────────── */
function CampaignRama({ onImageClick }: { onImageClick: (src: string) => void }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Hero Banner — clickable */}
      <div className="relative rounded-2xl overflow-hidden h-80 md:h-96 mb-8 cursor-pointer" onClick={() => onImageClick('/campaigns/rama/2.webp')}>
        <img
          src="/campaigns/rama/2.webp"
          alt="Rama Clinics Brand Campaign"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.95) 0%, rgba(5,5,8,0.3) 50%, transparent 100%)' }} />
        {/* Zoom icon */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-black/40 text-white/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
          <ZoomIn size={16} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/15 text-amber-400 border border-amber-500/20">
              <Crown size={12} /> Campaign 01
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/15 text-blue-400 border border-blue-500/20">
              <MapPinned size={12} /> Saudi Arabia
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-500/15 text-purple-400 border border-purple-500/20">
              <LayoutGrid size={12} /> Social Media
            </span>
          </div>
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-white">
            Rama Clinics <span className="gradient-text-gold">Brand Campaign</span>
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-base leading-relaxed max-w-3xl mb-8">
        End-to-end social media campaign for Rama Clinics in Saudi Arabia — luxury branding with cultural fusion themes.
      </p>

      {/* Metadata Cards with icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: 'Role', value: 'Traffic Manager', icon: User, iconColor: 'text-amber-400' },
          { label: 'Market', value: 'Saudi Arabia', icon: Globe, iconColor: 'text-blue-400' },
          { label: 'Platform', value: 'Social Media', icon: Smartphone, iconColor: 'text-purple-400' },
          { label: 'Creatives', value: '3 Designs', icon: ImageIcon, iconColor: 'text-emerald-400' },
        ].map((m, i) => {
          const MIcon = m.icon;
          return (
            <div
              key={i}
              className="rounded-xl p-4 flex items-start gap-3"
              style={{ background: 'rgba(15,17,21,0.6)', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <MIcon size={16} className={`${m.iconColor} mt-0.5 flex-shrink-0`} />
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">{m.label}</p>
                <p className="text-white text-sm font-medium">{m.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Gallery — taller images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            src: '/campaigns/rama/1.webp',
            title: 'Traditional Heritage',
            desc: 'Cultural street with QR integration',
            num: '01',
          },
          {
            src: '/campaigns/rama/2.webp',
            title: 'Luxury Night Branding',
            desc: 'Modern-traditional cityscape',
            num: '02',
          },
          {
            src: '/campaigns/rama/3.webp',
            title: 'Premium Lifestyle',
            desc: 'Private jet luxury experience',
            num: '03',
          },
        ].map((img, i) => (
          <div key={i} className="gallery-item group relative rounded-2xl overflow-hidden cursor-pointer" style={{ border: '1px solid rgba(255,255,255,0.05)' }} onClick={() => onImageClick(img.src)}>
            <img src={img.src} alt={img.title} className="gallery-image w-full h-72 md:h-96 object-cover" loading="lazy" />
            <div className="gallery-overlay absolute inset-0 flex items-end p-5" style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.9) 0%, transparent 60%)' }}>
              <div>
                <span className="text-amber-400/60 text-xs font-mono mb-1 block">{img.num}</span>
                <p className="text-white font-medium text-sm">{img.title}</p>
                <p className="text-slate-400 text-xs">{img.desc}</p>
              </div>
            </div>
            {/* Zoom icon */}
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center bg-black/40 text-white/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              <ZoomIn size={14} />
            </div>
            {/* Gold/warm border glow on hover */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: 'inset 0 0 0 1px rgba(245,158,11,0.3), 0 0 20px rgba(245,158,11,0.1)' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────── Campaign 02 — Alshakreen ─────────────── */
function CampaignAlshakreen({ onImageClick }: { onImageClick: (src: string) => void }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Hero Banner — clickable */}
      <div className="relative rounded-2xl overflow-hidden h-80 md:h-96 mb-8 cursor-pointer" onClick={() => onImageClick('/campaigns/alshakreen/3.webp')}>
        <img
          src="/campaigns/alshakreen/3.webp"
          alt="Alshakreen Desert Heritage Campaign"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.95) 0%, rgba(5,5,8,0.3) 50%, transparent 100%)' }} />
        {/* Zoom icon */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-black/40 text-white/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
          <ZoomIn size={16} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-orange-500/15 text-orange-400 border border-orange-500/20">
              <Sun size={12} /> Campaign 02
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/15 text-blue-400 border border-blue-500/20">
              <MapPinned size={12} /> Saudi Arabia
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-500/15 text-purple-400 border border-purple-500/20">
              <LayoutGrid size={12} /> Social Media
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/15 text-amber-400 border border-amber-500/20">
              Heritage Theme
            </span>
          </div>
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-white">
            Alshakreen <span className="gradient-text-warm">Desert Heritage Campaign</span>
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-base leading-relaxed max-w-3xl mb-8">
        Social media campaign celebrating Saudi heritage and desert culture — featuring falconry, traditional gatherings, and Eid Al-Adha festivities.
      </p>

      {/* Metadata with icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: 'Role', value: 'Traffic Manager', icon: User, iconColor: 'text-orange-400' },
          { label: 'Market', value: 'Saudi Arabia', icon: Globe, iconColor: 'text-blue-400' },
          { label: 'Platform', value: 'Social Media', icon: Smartphone, iconColor: 'text-purple-400' },
          { label: 'Creatives', value: '4 Designs', icon: ImageIcon, iconColor: 'text-emerald-400' },
        ].map((m, i) => {
          const MIcon = m.icon;
          return (
            <div
              key={i}
              className="rounded-xl p-4 flex items-start gap-3"
              style={{ background: 'rgba(15,17,21,0.6)', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <MIcon size={16} className={`${m.iconColor} mt-0.5 flex-shrink-0`} />
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">{m.label}</p>
                <p className="text-white text-sm font-medium">{m.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* What I Did — numbered circular badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { icon: Target, title: 'Brief & Strategy', desc: 'Translating client vision into a clear creative direction rooted in Saudi culture.', num: '1' },
          { icon: Eye, title: 'Creative Oversight', desc: 'Reviewing every visual and copy asset for brand alignment and cultural authenticity.', num: '2' },
          { icon: MessageSquare, title: 'Delivery & Feedback', desc: 'Coordinating revisions and ensuring final deliverables exceeded client expectations.', num: '3' },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="rounded-xl p-5 card-hover"
              style={{ background: 'rgba(15,17,21,0.6)', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-bold font-[family-name:var(--font-space-grotesk)]">
                  {item.num}
                </span>
                <Icon size={16} className="text-orange-400" />
              </div>
              <h4 className="text-white text-sm font-semibold mb-1">{item.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Gallery — taller images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            src: '/campaigns/alshakreen/1.webp',
            title: 'Desert Falconry Scene',
            num: '01',
          },
          {
            src: '/campaigns/alshakreen/2.webp',
            title: 'Eid Al-Adha Gathering',
            num: '02',
          },
          {
            src: '/campaigns/alshakreen/3.webp',
            title: 'Heritage Architecture',
            num: '03',
          },
          {
            src: '/campaigns/alshakreen/4.webp',
            title: 'Gift Unboxing Moment',
            num: '04',
          },
        ].map((img, i) => (
          <div key={i} className="gallery-item group relative rounded-2xl overflow-hidden cursor-pointer" style={{ border: '1px solid rgba(255,255,255,0.05)' }} onClick={() => onImageClick(img.src)}>
            <img src={img.src} alt={img.title} className="gallery-image w-full h-72 md:h-[420px] object-cover" loading="lazy" />
            <div className="gallery-overlay absolute inset-0 flex items-end p-5" style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.9) 0%, transparent 60%)' }}>
              <div>
                <span className="text-orange-400/60 text-xs font-mono mb-1 block">{img.num}</span>
                <p className="text-white font-medium text-sm">{img.title}</p>
              </div>
            </div>
            {/* Zoom icon */}
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center bg-black/40 text-white/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              <ZoomIn size={14} />
            </div>
            {/* Warm border glow on hover */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: 'inset 0 0 0 1px rgba(249,115,22,0.3), 0 0 20px rgba(249,115,22,0.1)' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────── Campaign 03 — Oriel Clinics ─────────────── */
function CampaignOriel({ onImageClick }: { onImageClick: (src: string) => void }) {
  const { ref, inView } = useInView();
  const images = [
    { src: '/campaigns/orielclinics/1.webp', title: 'Brand Identity', desc: 'Visual brand expression', num: '01' },
    { src: '/campaigns/orielclinics/2.webp', title: 'Social Media Design', desc: 'Digital creative assets', num: '02' },
    { src: '/campaigns/orielclinics/3.webp', title: 'Campaign Creative', desc: 'Marketing visuals', num: '03' },
    { src: '/campaigns/orielclinics/4.webp', title: 'Content Strategy', desc: 'Engaging content design', num: '04' },
    { src: '/campaigns/orielclinics/5.webp', title: 'Visual Storytelling', desc: 'Brand narrative design', num: '05' },
    { src: '/campaigns/orielclinics/6.webp', title: 'Digital Presence', desc: 'Online brand experience', num: '06' },
  ];
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Hero Banner — clickable */}
      <div className="relative rounded-2xl overflow-hidden h-80 md:h-96 mb-8 cursor-pointer" onClick={() => onImageClick('/campaigns/orielclinics/1.webp')}>
        <img
          src="/campaigns/orielclinics/1.webp"
          alt="Oriel Clinics Campaign"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.95) 0%, rgba(5,5,8,0.3) 50%, transparent 100%)' }} />
        {/* Zoom icon */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-black/40 text-white/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
          <ZoomIn size={16} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
              <Star size={12} /> Campaign 03
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/15 text-blue-400 border border-blue-500/20">
              <MapPinned size={12} /> Egypt
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-500/15 text-purple-400 border border-purple-500/20">
              <LayoutGrid size={12} /> Social Media
            </span>
          </div>
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-white">
            Oriel Clinics <span className="gradient-text-gold">Campaign</span>
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-base leading-relaxed max-w-3xl mb-8">
        Social media creatives for Oriel Clinics in Egypt — six designs managed from brief through creative review to final delivery.
      </p>

      {/* Gallery — 2 columns with 6 images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div key={i} className="gallery-item group relative rounded-2xl overflow-hidden cursor-pointer" style={{ border: '1px solid rgba(255,255,255,0.05)' }} onClick={() => onImageClick(img.src)}>
            <img src={img.src} alt={img.title} className="gallery-image w-full h-64 md:h-80 object-cover" loading="lazy" />
            <div className="gallery-overlay absolute inset-0 flex items-end p-5" style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.9) 0%, transparent 60%)' }}>
              <div>
                <span className="text-emerald-400/60 text-xs font-mono mb-1 block">{img.num}</span>
                <p className="text-white font-medium text-sm">{img.title}</p>
                <p className="text-slate-400 text-xs">{img.desc}</p>
              </div>
            </div>
            {/* Green border glow on hover */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: 'inset 0 0 0 1px rgba(16,185,129,0.3), 0 0 20px rgba(16,185,129,0.1)' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────── Campaign 04 — Stars Smile ─────────────── */
function CampaignStarsSmile({ onImageClick }: { onImageClick: (src: string) => void }) {
  const { ref, inView } = useInView();
  const images = [
    { src: '/campaigns/starssmile/1.webp', title: "Mother's Day Celebration", desc: 'Warm maternal love campaign', num: '01' },
    { src: '/campaigns/starssmile/2.webp', title: 'Elegant Brand Design', desc: 'Luxury visual identity', num: '02' },
    { src: '/campaigns/starssmile/3.webp', title: 'Cultural Fusion Creative', desc: 'Heritage meets modernity', num: '03' },
    { src: '/campaigns/starssmile/4.webp', title: 'Seasonal Campaign', desc: 'Festive social media design', num: '04' },
    { src: '/campaigns/starssmile/5.webp', title: 'Brand Storytelling', desc: 'Emotional brand narrative', num: '05' },
    { src: '/campaigns/starssmile/6.webp', title: 'Digital Creative Suite', desc: 'Multi-platform assets', num: '06' },
    { src: '/campaigns/starssmile/7.webp', title: 'Campaign Highlights', desc: 'Visual campaign summary', num: '07' },
  ];
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Hero Banner — clickable */}
      <div className="relative rounded-2xl overflow-hidden h-80 md:h-96 mb-8 cursor-pointer" onClick={() => onImageClick('/campaigns/starssmile/1.webp')}>
        <img
          src="/campaigns/starssmile/1.webp"
          alt="Stars Smile Social Campaign"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.95) 0%, rgba(5,5,8,0.3) 50%, transparent 100%)' }} />
        {/* Zoom icon */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-black/40 text-white/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
          <ZoomIn size={16} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-rose-500/15 text-rose-400 border border-rose-500/20">
              <Heart size={12} /> Campaign 04
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/15 text-blue-400 border border-blue-500/20">
              <MapPinned size={12} /> Saudi Arabia
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-500/15 text-purple-400 border border-purple-500/20">
              <LayoutGrid size={12} /> Social Media
            </span>
          </div>
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-white">
            Stars Smile <span className="gradient-text-rose">Social Campaign</span>
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-base leading-relaxed max-w-3xl mb-8">
        Social media campaign for Stars Smile in Saudi Arabia — elegant, emotionally resonant designs celebrating cultural moments with warm, luxurious aesthetics.
      </p>

      {/* Metadata Cards with icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: 'Role', value: 'Traffic Manager', icon: User, iconColor: 'text-rose-400' },
          { label: 'Market', value: 'Saudi Arabia', icon: Globe, iconColor: 'text-blue-400' },
          { label: 'Platform', value: 'Social Media', icon: Smartphone, iconColor: 'text-purple-400' },
          { label: 'Creatives', value: '7 Designs', icon: ImageIcon, iconColor: 'text-emerald-400' },
        ].map((m, i) => {
          const MIcon = m.icon;
          return (
            <div
              key={i}
              className="rounded-xl p-4 flex items-start gap-3"
              style={{ background: 'rgba(15,17,21,0.6)', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <MIcon size={16} className={`${m.iconColor} mt-0.5 flex-shrink-0`} />
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">{m.label}</p>
                <p className="text-white text-sm font-medium">{m.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Gallery — 7 images in responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div key={i} className="gallery-item group relative rounded-2xl overflow-hidden cursor-pointer" style={{ border: '1px solid rgba(255,255,255,0.05)' }} onClick={() => onImageClick(img.src)}>
            <img src={img.src} alt={img.title} className="gallery-image w-full h-64 md:h-80 object-cover" loading="lazy" />
            <div className="gallery-overlay absolute inset-0 flex items-end p-5" style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.9) 0%, transparent 60%)' }}>
              <div>
                <span className="text-rose-400/60 text-xs font-mono mb-1 block">{img.num}</span>
                <p className="text-white font-medium text-sm">{img.title}</p>
                <p className="text-slate-400 text-xs">{img.desc}</p>
              </div>
            </div>
            {/* Zoom icon */}
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center bg-black/40 text-white/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              <ZoomIn size={14} />
            </div>
            {/* Rose border glow on hover */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: 'inset 0 0 0 1px rgba(244,63,94,0.3), 0 0 20px rgba(244,63,94,0.1)' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────── Campaign Section (wrapper) ─────────────── */
export default function CampaignSection({ onImageClick }: { onImageClick: (src: string) => void }) {
  return (
    <Section id="campaign" label="Featured Work" heading="Campaign Showcase">
      <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mb-12">
        A selection of campaigns I&apos;ve managed end-to-end — from briefing and strategy through creative oversight to delivery and performance reporting.
      </p>

      {/* Campaign 01 */}
      <CampaignRama onImageClick={onImageClick} />

      {/* Decorative Separator */}
      <div className="campaign-separator">
        <span className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-500 border border-white/[0.06]" style={{ background: 'rgba(15,17,21,0.8)' }}>
          Campaign 02
        </span>
      </div>

      {/* Campaign 02 */}
      <CampaignAlshakreen onImageClick={onImageClick} />

      {/* Decorative Separator */}
      <div className="campaign-separator">
        <span className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-500 border border-white/[0.06]" style={{ background: 'rgba(15,17,21,0.8)' }}>
          Campaign 03
        </span>
      </div>

      {/* Campaign 03 */}
      <CampaignOriel onImageClick={onImageClick} />

      {/* Decorative Separator */}
      <div className="campaign-separator">
        <span className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-500 border border-white/[0.06]" style={{ background: 'rgba(15,17,21,0.8)' }}>
          Campaign 04
        </span>
      </div>

      {/* Campaign 04 */}
      <CampaignStarsSmile onImageClick={onImageClick} />
    </Section>
  );
}
