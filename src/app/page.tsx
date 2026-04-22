'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Workflow,
  ClipboardList,
  Users,
  Clock,
  Handshake,
  ChartColumn,
  TrendingUp,
  ShieldCheck,
  Mail,
  MapPin,
  Clock3,
  Crown,
  MapPinned,
  LayoutGrid,
  Sun,
  Star,
  Send,
  Linkedin,
  ArrowRight,
  CheckCircle2,
  Target,
  Eye,
  MessageSquare,
  Calendar,
  GraduationCap,
  Check,
  Globe,
  Smartphone,
  ImageIcon,
  Building2,
  BarChart3,
  ThumbsUp,
  Instagram,
  Twitter,
  ArrowUp,
  User,
  Phone,
  MessageCircle,
  Award,
  BookOpen,
  ZoomIn,
} from 'lucide-react';

/* ─────────────── Intersection Observer Hook ─────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─────────────── Data ─────────────── */
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Campaigns', href: '#campaign' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const stats = [
  { value: '5+', label: 'Years Experience', icon: Calendar, iconColor: 'text-blue-400', iconBg: 'bg-blue-500/15' },
  { value: '3', label: 'Agencies', icon: Building2, iconColor: 'text-purple-400', iconBg: 'bg-purple-500/15' },
  { value: '50+', label: 'Campaigns Managed', icon: BarChart3, iconColor: 'text-amber-400', iconBg: 'bg-amber-500/15' },
  { value: '100%', label: 'Client Satisfaction', icon: ThumbsUp, iconColor: 'text-emerald-400', iconBg: 'bg-emerald-500/15' },
];

const skills = [
  {
    num: '01',
    title: 'Workflow Management',
    desc: 'Oversee end-to-end workflows across creative, media, and client servicing teams, ensuring smooth operations and timely campaign delivery.',
    icon: Workflow,
    color: 'bg-blue-500/20 text-blue-400',
    accentColor: 'blue',
  },
  {
    num: '02',
    title: 'Campaign Planning & Briefing',
    desc: 'Develop clear, structured briefs that define objectives, deliverables, and timelines, ensuring alignment across all teams before execution.',
    icon: ClipboardList,
    color: 'bg-purple-500/20 text-purple-400',
    accentColor: 'purple',
  },
  {
    num: '03',
    title: 'Team Coordination',
    desc: 'Manage task allocation across designers, copywriters, and developers while resolving bottlenecks and aligning priorities to maintain productivity.',
    icon: Users,
    color: 'bg-cyan-500/20 text-cyan-400',
    accentColor: 'cyan',
  },
  {
    num: '04',
    title: 'Timeline & Deadline Management',
    desc: 'Plan, track, and manage project timelines to ensure all deliverables are completed on schedule and meet client expectations.',
    icon: Clock,
    color: 'bg-amber-500/20 text-amber-400',
    accentColor: 'amber',
  },
  {
    num: '05',
    title: 'Client Relations',
    desc: 'Act as the main point of contact for clients, managing communication, handling feedback cycles, and maintaining strong, long-term relationships.',
    icon: Handshake,
    color: 'bg-emerald-500/20 text-emerald-400',
    accentColor: 'emerald',
  },
  {
    num: '06',
    title: 'Performance Tracking',
    desc: 'Monitor campaign progress and workflow efficiency, providing reports with insights and recommendations to support decision-making.',
    icon: ChartColumn,
    color: 'bg-rose-500/20 text-rose-400',
    accentColor: 'rose',
  },
  {
    num: '07',
    title: 'Campaign Optimization',
    desc: 'Collaborate with media and content teams to analyze performance and continuously improve campaign results.',
    icon: TrendingUp,
    color: 'bg-violet-500/20 text-violet-400',
    accentColor: 'violet',
  },
  {
    num: '08',
    title: 'Quality Control',
    desc: 'Review all deliverables before submission to ensure accuracy, consistency, and alignment with brand guidelines.',
    icon: ShieldCheck,
    color: 'bg-teal-500/20 text-teal-400',
    accentColor: 'teal',
  },
];

const experiences = [
  {
    title: 'Traffic Manager',
    company: 'Rama Medical Group',
    period: 'Apr 2025 — Present',
    color: 'bg-blue-500',
    dotColor: 'bg-blue-500',
    textColor: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    leftBorderColor: '#3b82f6',
    items: [
      'Managing workflow between creative, media, and client servicing teams',
      'Monitoring project timelines and ensuring on-schedule delivery',
      'Analyzing workflow efficiency and providing performance reports',
    ],
  },
  {
    title: 'Account Manager',
    company: 'Run Marketing Agency',
    period: 'Jan 2024 — Present',
    color: 'bg-purple-500',
    dotColor: 'bg-purple-500',
    textColor: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    leftBorderColor: '#8b5cf6',
    items: [
      'Implementing and communicating client feedback to social media teams',
      'Providing monthly performance reports with key metrics analysis',
    ],
  },
  {
    title: 'Account Manager',
    company: 'Azraak Marketing Agency',
    period: 'Nov 2022 — Dec 2023',
    color: 'bg-emerald-500',
    dotColor: 'bg-emerald-500',
    textColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    leftBorderColor: '#10b981',
    items: [
      'Primary liaison between clients and marketing team',
      'Managed content calendars and timely posting across platforms',
    ],
  },
  {
    title: 'Branch Manager',
    company: "McDonald's Manfoods",
    period: 'Sep 2020 — Oct 2022',
    color: 'bg-amber-500',
    dotColor: 'bg-amber-500',
    textColor: 'text-amber-400',
    borderColor: 'border-amber-500/30',
    leftBorderColor: '#f59e0b',
    items: [
      'Managed daily operations ensuring food quality and safety',
      'Achieved sales targets and contributed to revenue growth',
    ],
  },
  {
    title: 'Branch Manager',
    company: "Queen's Peak Restaurant",
    period: 'Jan 2019 — Aug 2020',
    color: 'bg-rose-500',
    dotColor: 'bg-rose-500',
    textColor: 'text-rose-400',
    borderColor: 'border-rose-500/30',
    leftBorderColor: '#f43f5e',
    items: [
      'Supervised daily operations with adherence to quality standards',
      'Developed strategies to increase sales and customer satisfaction',
    ],
  },
];

const educations = [
  {
    degree: 'Bachelor of Commerce',
    school: 'Mansoura University',
    period: '2016 — 2020',
    field: 'Business Administration',
    accentColor: '#3b82f6',
  },
];

/* ─────────────── Section Wrapper ─────────────── */
function Section({
  id,
  label,
  heading,
  children,
  className = '',
}: {
  id?: string;
  label?: string;
  heading?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {label && (
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-3 font-medium">
            {label}
          </p>
        )}
        {heading && (
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">
            {heading}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

/* ─────────────── Stat Card ─────────────── */
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

/* ─────────────── Main Page ─────────────── */
export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const openLightbox = (src: string) => setLightboxImg(src);
  const closeLightbox = () => setLightboxImg(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeLightbox(); };
    if (lightboxImg) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    }
    return () => {
      if (lightboxImg) document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightboxImg]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTopBtn(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen noise-overlay" style={{ background: 'rgb(5, 5, 8)' }}>
      {/* ───── Background Glow Orbs ───── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)', animationDelay: '2s' }}
        />
        <div
          className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] rounded-full animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)', animationDelay: '3s' }}
        />
      </div>

      {/* ───── Navigation ───── */}
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

      {/* ───── Hero Section ───── */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 animate-fade-in-left" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-green-400 text-xs font-medium">Available for Opportunities</span>
            </div>

            {/* Subtitle */}
            <p className="text-slate-400 text-sm uppercase tracking-[0.2em] mb-3 animate-fade-in-left" style={{ animationDelay: '0.1s' }}>
              Traffic Manager
            </p>

            {/* Name — WHITE text, bold and striking */}
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-2 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
              <span className="text-white">Ayman</span>
              <br />
              <span className="text-white">Faried</span>
            </h1>

            {/* Decorative gradient line under name */}
            <div className="gradient-line w-32 mb-6 animate-fade-in-left" style={{ animationDelay: '0.25s' }} />

            {/* Description */}
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg mb-8 animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
              Experienced Traffic Manager specializing in campaign management, client relations, and workflow optimization. Proven track record of delivering impactful marketing campaigns across the MENA region.
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
                href="#experience"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-full text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}
              >
                View Experience
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
                      src="/profile.png"
                      alt="Ayman Faried — Traffic Manager"
                      className="w-64 h-80 sm:w-72 sm:h-96 object-cover"
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

      {/* ───── Stats Section ───── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <StatCard key={i} stat={s} delay={i * 100} />
          ))}
        </div>
      </section>

      {/* ───── About / What I Do ───── */}
      <Section id="about" label="About Me" heading="What I Do">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="group card-hover relative rounded-2xl p-6 overflow-hidden"
                style={{
                  background: 'rgba(15,17,21,0.6)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderLeftWidth: '2px',
                  borderLeftColor: 'transparent',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  const colors: Record<string, string> = {
                    blue: '#3b82f6', purple: '#8b5cf6', cyan: '#06b6d4',
                    amber: '#f59e0b', emerald: '#10b981', rose: '#f43f5e',
                    violet: '#7c3aed', teal: '#14b8a6',
                  };
                  const c = colors[s.accentColor] || '#3b82f6';
                  (e.currentTarget as HTMLElement).style.borderLeftColor = c;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 24px ${c}15, 0 0 0 1px ${c}20`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderLeftColor = 'transparent';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {/* Watermark number */}
                <span className="absolute top-3 right-4 font-[family-name:var(--font-space-grotesk)] text-5xl font-bold text-white/[0.05] select-none">
                  {s.num}
                </span>
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4 ${s.color} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-white font-semibold text-base mb-2">
                  {s.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ───── Work Experience ───── */}
      <Section id="experience" label="Career Path" heading="Work Experience">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-white/[0.06]" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </Section>

      {/* ───── Campaign Showcase ───── */}
      <Section id="campaign" label="Featured Work" heading="Campaign Showcase">
        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mb-12">
          A selection of campaigns I&apos;ve managed end-to-end — from briefing and strategy through creative oversight to delivery and performance reporting.
        </p>

        {/* Campaign 01 */}
        <CampaignRama onImageClick={openLightbox} />

        {/* Decorative Separator */}
        <div className="campaign-separator">
          <span className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-500 border border-white/[0.06]" style={{ background: 'rgba(15,17,21,0.8)' }}>
            Campaign 02
          </span>
        </div>

        {/* Campaign 02 */}
        <CampaignAlshakreen onImageClick={openLightbox} />

        {/* Decorative Separator */}
        <div className="campaign-separator">
          <span className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-500 border border-white/[0.06]" style={{ background: 'rgba(15,17,21,0.8)' }}>
            Campaign 03
          </span>
        </div>

        {/* Campaign 03 */}
        <CampaignOriel onImageClick={openLightbox} />
      </Section>

      {/* ───── Education & Certifications ───── */}
      <Section id="education">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column — Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="gradient-line w-8" />
              <span className="text-xs uppercase tracking-[0.25em] text-blue-400 font-medium">Education</span>
            </div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white mb-6">Academic</h3>
            <div className="space-y-4">
              {educations.map((edu, i) => (
                <div
                  key={i}
                  className="group rounded-2xl p-6 card-hover"
                  style={{
                    background: 'rgba(15,17,21,0.6)',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-blue-500/15 text-blue-400 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <GraduationCap size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-[family-name:var(--font-space-grotesk)] text-white font-semibold">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-400 text-sm mt-0.5">{edu.field}</p>
                      <p className="text-slate-500 text-sm mt-0.5">{edu.school}</p>
                      <div className="flex items-center gap-2 text-slate-600 text-xs mt-2">
                        <Calendar size={12} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Certifications / Courses */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="gradient-line w-8" />
              <span className="text-xs uppercase tracking-[0.25em] text-blue-400 font-medium">Certifications</span>
            </div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white mb-6">Courses</h3>
            <div className="space-y-4">
              {[
                { title: 'Digital Marketing', subtitle: 'Professional Certification', icon: Award, iconColor: 'text-purple-400', iconBg: 'bg-purple-500/15' },
                { title: 'Social Media Strategy', subtitle: 'Professional Certification', icon: BookOpen, iconColor: 'text-emerald-400', iconBg: 'bg-emerald-500/15' },
                { title: 'Project Management', subtitle: 'Professional Certification', icon: Award, iconColor: 'text-amber-400', iconBg: 'bg-amber-500/15' },
              ].map((cert, i) => {
                const CertIcon = cert.icon;
                return (
                  <div
                    key={i}
                    className="group rounded-2xl p-6 card-hover"
                    style={{
                      background: 'rgba(15,17,21,0.6)',
                      border: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex-shrink-0 w-11 h-11 rounded-full ${cert.iconBg} ${cert.iconColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                        <CertIcon size={20} />
                      </div>
                      <div>
                        <h4 className="font-[family-name:var(--font-space-grotesk)] text-white font-semibold">
                          {cert.title}
                        </h4>
                        <p className="text-slate-500 text-sm">{cert.subtitle}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* ───── Contact ───── */}
      <Section id="contact" label="Let's Connect" heading="Get In Touch">
        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-center mb-12">
          Interested in working together? Feel free to reach out.
        </p>

        <div className="max-w-3xl mx-auto">
          {/* Contact Cards — 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { icon: Phone, label: 'Phone', value: '+20 101 258 1428', href: 'tel:+201012581428', iconColor: 'text-blue-400', iconBg: 'bg-blue-500/15' },
              { icon: Mail, label: 'Email', value: 'aymanfaried17@gmail.com', href: 'mailto:aymanfaried17@gmail.com', iconColor: 'text-purple-400', iconBg: 'bg-purple-500/15' },
              { icon: MessageCircle, label: 'WhatsApp', value: '+20 101 258 1428', href: 'https://wa.me/201012581428', iconColor: 'text-emerald-400', iconBg: 'bg-emerald-500/15' },
              { icon: MapPin, label: 'Location', value: 'Cairo, Egypt', href: undefined, iconColor: 'text-amber-400', iconBg: 'bg-amber-500/15' },
            ].map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div
                  className="group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:bg-white/[0.03] card-hover"
                  style={{ background: 'rgba(15,17,21,0.6)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div className={`flex-shrink-0 w-11 h-11 rounded-full ${item.iconBg} ${item.iconColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>{content}</a>
              ) : (
                <div key={i}>{content}</div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href="mailto:aymanfaried17@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-slate-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              <Send size={16} />
              Send Me an Email
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <a
              href="https://www.linkedin.com/in/aymanfaried17"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://instagram.com/aymanfaried17"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://x.com/aymanfaried17"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-200 hover:bg-white/10 transition-all duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </Section>

      {/* ───── Footer ───── */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8">
        {/* Gradient line separator */}
        <div className="gradient-line-footer mb-10" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
            {/* Logo & Tagline */}
            <div>
              <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white">AF.</span>
              <p className="text-slate-600 text-xs mt-2">Designed with passion</p>
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

            {/* Social & Copyright */}
            <div className="flex flex-col items-end gap-3">
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/aymanfaried17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition-colors duration-200"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://instagram.com/aymanfaried17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition-colors duration-200"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://x.com/aymanfaried17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition-colors duration-200"
                >
                  <Twitter size={16} />
                </a>
              </div>
              <p className="text-slate-600 text-xs">
                &copy; {new Date().getFullYear()} Ayman Faried
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* ───── Lightbox Modal ───── */}
      {lightboxImg && (
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
      )}

      {/* ───── Back to Top Button ───── */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        style={{
          background: 'rgba(15,17,21,0.8)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(12px)',
        }}
        aria-label="Back to top"
      >
        <ArrowUp size={18} className="text-slate-400" />
      </button>
    </div>
  );
}

/* ─────────────── Experience Card ─────────────── */
function ExperienceCard({ exp, index }: { exp: typeof experiences[number]; index: number }) {
  const { ref, inView } = useInView();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-6 md:gap-0 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
        <div
          className={`w-3 h-3 rounded-full ${exp.dotColor}`}
          style={{ boxShadow: `0 0 0 4px rgb(5,5,8)` }}
        />
      </div>

      {isEven ? (
        <>
          <div className="hidden md:block md:w-1/2 md:pr-12" />
          <div className="ml-10 md:ml-0 md:w-1/2 md:pl-12">
            <ExpContent exp={exp} />
          </div>
        </>
      ) : (
        <>
          <div className="ml-10 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
            <ExpContent exp={exp} alignRight />
          </div>
          <div className="hidden md:block md:w-1/2 md:pl-12" />
        </>
      )}
    </div>
  );
}

function ExpContent({ exp, alignRight }: { exp: typeof experiences[number]; alignRight?: boolean }) {
  return (
    <div
      className="group rounded-2xl p-6 transition-all duration-300 hover:translate-x-1"
      style={{
        background: 'rgba(15,17,21,0.6)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderLeftWidth: '3px',
        borderLeftColor: exp.leftBorderColor,
      }}
    >
      <div className={`flex items-center gap-2 mb-2 ${alignRight ? 'md:justify-end' : ''}`}>
        <Calendar size={12} className={exp.textColor} />
        <span className="text-slate-500 text-xs">{exp.period}</span>
      </div>
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-white font-semibold text-lg">
        {exp.title}
      </h3>
      <p className={`text-sm mb-4 ${exp.textColor}`}>{exp.company}</p>
      <ul className={`space-y-2 ${alignRight ? 'md:text-right' : ''}`}>
        {exp.items.map((item, j) => (
          <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
            <Check size={14} className={`mt-0.5 flex-shrink-0 ${exp.textColor} ${alignRight ? 'md:order-2 md:ml-2' : ''}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────── Campaign 01 — Rama Clinics ─────────────── */
function CampaignRama({ onImageClick }: { onImageClick: (src: string) => void }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Hero Banner — clickable */}
      <div className="relative rounded-2xl overflow-hidden h-80 md:h-96 mb-8 cursor-pointer" onClick={() => onImageClick('https://z-cdn-media.chatglm.cn/files/9d94c84a-2f04-4503-aa2e-342431bff5ad.png?auth_key=1876880941-541e26890c0d4afaa430ab413dc01509-0-01783a3eaa1fcb8a8f7a030a64c0d489')}>
        <img
          src="https://z-cdn-media.chatglm.cn/files/9d94c84a-2f04-4503-aa2e-342431bff5ad.png?auth_key=1876880941-541e26890c0d4afaa430ab413dc01509-0-01783a3eaa1fcb8a8f7a030a64c0d489"
          alt="Rama Clinics Brand Campaign"
          className="w-full h-full object-cover"
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
            src: 'https://z-cdn-media.chatglm.cn/files/b4dd6242-f071-44b1-a1ce-1853efa807e8.png?auth_key=1876880941-7130c4d7544341c3abb2ff387d560b24-0-7df42f3db015224960943f963f4516cc',
            title: 'Traditional Heritage',
            desc: 'Cultural street with QR integration',
            num: '01',
          },
          {
            src: 'https://z-cdn-media.chatglm.cn/files/9d94c84a-2f04-4503-aa2e-342431bff5ad.png?auth_key=1876880941-541e26890c0d4afaa430ab413dc01509-0-01783a3eaa1fcb8a8f7a030a64c0d489',
            title: 'Luxury Night Branding',
            desc: 'Modern-traditional cityscape',
            num: '02',
          },
          {
            src: 'https://z-cdn-media.chatglm.cn/files/008be7b7-7763-4179-9cf5-ecd58e3fa633.png?auth_key=1876880941-195887eb92834d54b25dcb2ef35afaee-0-41160742d41db5588fddc9891b1e4ef9',
            title: 'Premium Lifestyle',
            desc: 'Private jet luxury experience',
            num: '03',
          },
        ].map((img, i) => (
          <div key={i} className="gallery-item group relative rounded-2xl overflow-hidden cursor-pointer" style={{ border: '1px solid rgba(255,255,255,0.05)' }} onClick={() => onImageClick(img.src)}>
            <img src={img.src} alt={img.title} className="gallery-image w-full h-72 md:h-96 object-cover" />
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
      <div className="relative rounded-2xl overflow-hidden h-80 md:h-96 mb-8 cursor-pointer" onClick={() => onImageClick('https://z-cdn-media.chatglm.cn/files/ccfc575c-fca8-42cc-9133-25077d13539d.png?auth_key=1876881557-0f32bd3ad40c49219fd59d800fbd446f-0-c92a85c9b921482e6871ec7965dff7b8')}>
        <img
          src="https://z-cdn-media.chatglm.cn/files/ccfc575c-fca8-42cc-9133-25077d13539d.png?auth_key=1876881557-0f32bd3ad40c49219fd59d800fbd446f-0-c92a85c9b921482e6871ec7965dff7b8"
          alt="Alshakreen Desert Heritage Campaign"
          className="w-full h-full object-cover"
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
            src: 'https://z-cdn-media.chatglm.cn/files/57d80953-37ab-4e85-8fe3-c2cd860bfeba.png?auth_key=1876881557-58f2a85f9153414fa2e186e60fc7b884-0-12bde7a8aaa3442162f9a9f5f8b839ae',
            title: 'Desert Falconry Scene',
            num: '01',
          },
          {
            src: 'https://z-cdn-media.chatglm.cn/files/98c2ebdb-e71f-4c37-9b90-09853c97e3a7.png?auth_key=1876881557-7a06ec4ba0e44da0a1970c75b565278c-0-be4f9effcfa7cab9243616b3b3ecb58d',
            title: 'Eid Al-Adha Gathering',
            num: '02',
          },
          {
            src: 'https://z-cdn-media.chatglm.cn/files/ccfc575c-fca8-42cc-9133-25077d13539d.png?auth_key=1876881557-0f32bd3ad40c49219fd59d800fbd446f-0-c92a85c9b921482e6871ec7965dff7b8',
            title: 'Heritage Architecture',
            num: '03',
          },
          {
            src: 'https://z-cdn-media.chatglm.cn/files/ff4600b1-3104-4049-bb7c-7b0237b93a3a.png?auth_key=1876881557-c98cbd3e3c38421d874b800d7b0a9309-0-f9fbf92388fc97ca1d5bd6101c56e9b7',
            title: 'Gift Unboxing Moment',
            num: '04',
          },
        ].map((img, i) => (
          <div key={i} className="gallery-item group relative rounded-2xl overflow-hidden cursor-pointer" style={{ border: '1px solid rgba(255,255,255,0.05)' }} onClick={() => onImageClick(img.src)}>
            <img src={img.src} alt={img.title} className="gallery-image w-full h-72 md:h-[420px] object-cover" />
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
    { src: '/campaigns/orielclinics/1.png', title: 'Brand Identity', desc: 'Visual brand expression', num: '01' },
    { src: '/campaigns/orielclinics/2.png', title: 'Social Media Design', desc: 'Digital creative assets', num: '02' },
    { src: '/campaigns/orielclinics/3.png', title: 'Campaign Creative', desc: 'Marketing visuals', num: '03' },
    { src: '/campaigns/orielclinics/4.png', title: 'Content Strategy', desc: 'Engaging content design', num: '04' },
    { src: '/campaigns/orielclinics/5.png', title: 'Visual Storytelling', desc: 'Brand narrative design', num: '05' },
    { src: '/campaigns/orielclinics/6.png', title: 'Digital Presence', desc: 'Online brand experience', num: '06' },
  ];
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Hero Banner — clickable */}
      <div className="relative rounded-2xl overflow-hidden h-80 md:h-96 mb-8 cursor-pointer" onClick={() => onImageClick('/campaigns/orielclinics/1.png')}>
        <img
          src="/campaigns/orielclinics/1.png"
          alt="Oriel Clinics Campaign"
          className="w-full h-full object-cover"
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

      {/* Gallery — 2 columns with 6 images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div key={i} className="gallery-item group relative rounded-2xl overflow-hidden cursor-pointer" style={{ border: '1px solid rgba(255,255,255,0.05)' }} onClick={() => onImageClick(img.src)}>
            <img src={img.src} alt={img.title} className="gallery-image w-full h-64 md:h-80 object-cover" />
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
