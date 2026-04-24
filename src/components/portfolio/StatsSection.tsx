'use client';

import { stats } from './data';
import { useInView } from './useInView';

function StatCard({ stat, delay }: { stat: typeof stats[number]; delay: number }) {
  const { ref, inView } = useInView();
  const Icon = stat.icon;
  return (
    <div
      ref={ref}
      className={`stat-card group rounded-2xl p-6 text-center card-hover transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{
        background: 'rgba(15,17,21,0.6)',
        border: '1px solid rgba(255,255,255,0.05)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4 ${stat.iconBg} ${stat.iconColor} transition-transform duration-300 group-hover:scale-110`}>
        <Icon size={20} />
      </div>
      <p className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-6xl font-bold gradient-text-stat mb-2">
        {stat.value}
      </p>
      <p className="text-slate-400 text-sm">{stat.label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <StatCard key={i} stat={s} delay={i * 100} />
        ))}
      </div>
    </section>
  );
}
