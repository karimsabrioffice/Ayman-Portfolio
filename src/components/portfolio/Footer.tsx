'use client';

import { Linkedin, Instagram, Facebook } from 'lucide-react';
import { navLinks } from './data';

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8">
      {/* Gradient line separator */}
      <div className="gradient-line-footer mb-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div>
            <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white">AF.</span>
            <p className="text-slate-600 text-xs mt-2">Traffic &amp; Account Manager · Cairo</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-500 text-xs hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Social & Copyright — Facebook replaces Twitter */}
          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/ayman-faried-0a8405347/" aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://instagram.com/aymanfaried17" aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors duration-200"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://web.facebook.com/ayman.faried" aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors duration-200"
              >
                <Facebook size={16} />
              </a>
            </div>
            <p className="text-slate-600 text-xs">
              &copy; {new Date().getFullYear()} Ayman Faried
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
