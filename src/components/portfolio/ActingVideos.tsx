'use client';

import { Play, Clapperboard } from 'lucide-react';
import { Section } from './AboutSection';
import { useInView } from './useInView';
import VideoEmbed from './VideoEmbed';

interface VideoItem {
  title: string;
  driveUrl: string;
  num: string;
}

const videos: VideoItem[] = [
  {
    title: '3 أشخاص من مجالات مختلفة عاملين',
    driveUrl: 'https://drive.google.com/file/d/1TI_0hlrru1ED-yCbqAUcYH5pzZGrS-Xc/preview',
    num: '01',
  },
  {
    title: 'المدير الجديد',
    driveUrl: 'https://drive.google.com/file/d/1jLGxxGcfKfefpS6F-tbdjDOtrtMEkh40/preview',
    num: '02',
  },
  {
    title: 'Ai and Tech',
    driveUrl: 'https://drive.google.com/file/d/1BftSbUy8s9FrxO-aU9-b1uuFgxTX3O01/preview',
    num: '03',
  },
  {
    title: 'عملت كل حاجة عشان تترقى',
    driveUrl: 'https://drive.google.com/file/d/1_eS_XebrxC6g4DTAbEZ0nxKPX1oKa6ru/preview',
    num: '04',
  },
];

function VideoCard({ video }: { video: VideoItem }) {
  const { ref, inView } = useInView();

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
        <VideoEmbed src={video.driveUrl} title={video.title} />

        {/* Video Info */}
        <div className="p-5 flex items-center gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center">
            <Play size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-indigo-400/60 text-xs font-mono mb-1 block">{video.num}</span>
            <p dir="auto" className="text-white font-medium text-sm leading-relaxed truncate">{video.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ActingVideos() {
  return (
    <Section id="acting" label="Acting" heading="Acting Videos">
      <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mb-12">
        A showcase of my acting work — featuring short films and performances that highlight my range as a performer.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, i) => (
          <VideoCard key={i} video={video} />
        ))}
      </div>
    </Section>
  );
}
