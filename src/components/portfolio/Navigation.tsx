'use client';

import { Menu, X } from 'lucide-react';
import { navLinks } from './data';

interface NavigationProps {
  scrolled: boolean;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export default function Navigation({ scrolled, mobileOpen, setMobileOpen }: NavigationProps) {
  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-300 ${scrolled ? 'top-3' : 'top-5'}`}
    >
      <div
        className="flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl"
        style={{
          background: 'rgba(5, 5, 8, 0.7)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
        }}
      >
        <a href="#" className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white">
          AF.
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:aymanfaried17@gmail.com"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-slate-200 transition-colors duration-200"
          >
            Hire Me
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden mt-2 rounded-2xl p-4 animate-fade-in-up"
          style={{
            background: 'rgba(5, 5, 8, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 text-sm"
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:aymanfaried17@gmail.com"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-slate-200 transition-colors"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
