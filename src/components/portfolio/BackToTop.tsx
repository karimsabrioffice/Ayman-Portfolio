'use client';

import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  show: boolean;
  onClick: () => void;
}

export default function BackToTop({ show, onClick }: BackToTopProps) {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      style={{
        background: 'rgba(15,17,21,0.8)',
        border: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(12px)',
      }}
      aria-label="Back to top"
    >
      <ArrowUp size={18} className="text-slate-400" />
    </button>
  );
}
