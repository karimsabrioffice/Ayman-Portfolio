'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

/** Shows a play button and only loads the Google Drive embed after a click. */
export default function VideoEmbed({ src, title, className = 'rounded-t-2xl' }: { src: string; title: string; className?: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
      {playing ? (
        <iframe
          src={src}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className={`absolute inset-0 w-full h-full ${className}`}
          style={{ border: 'none' }}
          title={title}
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play: ${title}`}
          className={`group absolute inset-0 w-full h-full flex items-center justify-center ${className}`}
          style={{ background: 'radial-gradient(circle at 50% 40%, rgba(99,102,241,0.25), rgba(5,5,8,0.95) 70%)' }}
        >
          <span className="w-16 h-16 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <Play size={26} className="ml-1" />
          </span>
        </button>
      )}
    </div>
  );
}
