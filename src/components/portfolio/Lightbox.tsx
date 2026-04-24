'use client';

import { X } from 'lucide-react';

interface LightboxProps {
  lightboxImg: string | null;
  closeLightbox: () => void;
}

export default function Lightbox({ lightboxImg, closeLightbox }: LightboxProps) {
  if (!lightboxImg) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 animate-fade-in-up"
      onClick={closeLightbox}
      style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)' }}
    >
      <button
        onClick={closeLightbox}
        className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200 z-10"
        style={{ border: '1px solid rgba(255,255,255,0.1)' }}
      >
        <X size={20} />
      </button>
      <img
        src={lightboxImg}
        alt="Campaign preview"
        className="max-w-full max-h-[90vh] object-contain rounded-xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
