'use client';

import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div className="order-2 lg:order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 animate-fade-in-left" style={{ background: 'rgba(34,197,94,0.14)', border: '1px solid rgba(34,197,94,0.35)' }}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-green-300 text-xs font-semibold">Available for Opportunities</span>
          </div>

          {/* Subtitle */}
          <p className="text-slate-400 text-sm uppercase tracking-[0.2em] mb-3 animate-fade-in-left" style={{ animationDelay: '0.1s' }}>
            Account Manager &amp; Content Creator
          </p>

          {/* Name */}
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-2 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            <span className="text-white">Ayman</span>
            <br />
            <span className="text-white">Faried</span>
          </h1>

          {/* Decorative gradient line under name */}
          <div className="gradient-line w-32 mb-6 animate-fade-in-left" style={{ animationDelay: '0.25s' }} />

          {/* Description */}
          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg mb-8 animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
            Account Manager &amp; Content Creator with 5+ years running campaigns end-to-end — from brief to delivery — for healthcare and lifestyle brands in Saudi Arabia and Egypt, and creating content on camera.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in-left" style={{ animationDelay: '0.4s' }}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              Get In Touch
              <ArrowRight size={16} />
            </a>
            <a
              href="#campaign"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-full text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
              style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}
            >
              View Campaigns
            </a>
          </div>
        </div>

        {/* Right — Photo with decorative double border */}
        <div className="order-1 lg:order-2 flex justify-center animate-fade-in-right">
          <div className="relative animate-float">
            {/* Glow behind photo */}
            <div
              className="absolute -inset-6 rounded-3xl blur-xl opacity-40"
              style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(139,92,246,0.3), rgba(245,158,11,0.2))' }}
            />
            {/* Double border photo container */}
            <div className="photo-border-outer">
              <div className="photo-border-inner">
                <div>
                  <img
                    src="/profile.webp"
                    width={576}
                    height={612}
                    alt="Ayman Faried — Account Manager & Content Creator"
                    className="w-64 h-80 sm:w-72 sm:h-96 object-cover"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-slate-600 text-[10px] tracking-[0.3em] uppercase font-medium">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-slate-700 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-slate-500 animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}
