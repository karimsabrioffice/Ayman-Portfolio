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
  { value: '5+', label: 'Years Experience' },
  { value: '3', label: 'Agencies' },
  { value: '50+', label: 'Campaigns Managed' },
  { value: '100%', label: 'Client Satisfaction' },
];

const skills = [
  {
    num: '01',
    title: 'Workflow Management',
    desc: 'Streamlining processes between creative, media, and client servicing teams for seamless delivery.',
    icon: Workflow,
    color: 'bg-blue-500/20 text-blue-400',
  },
  {
    num: '02',
    title: 'Campaign Planning & Briefing',
    desc: 'Developing comprehensive campaign briefs that align client goals with creative execution.',
    icon: ClipboardList,
    color: 'bg-purple-500/20 text-purple-400',
  },
  {
    num: '03',
    title: 'Team Coordination',
    desc: 'Bridging communication across departments to ensure alignment and efficient collaboration.',
    icon: Users,
    color: 'bg-cyan-500/20 text-cyan-400',
  },
  {
    num: '04',
    title: 'Timeline & Deadline Management',
    desc: 'Keeping projects on schedule with clear milestones and proactive risk management.',
    icon: Clock,
    color: 'bg-amber-500/20 text-amber-400',
  },
  {
    num: '05',
    title: 'Client Relations',
    desc: 'Building lasting partnerships through transparent communication and consistent delivery.',
    icon: Handshake,
    color: 'bg-emerald-500/20 text-emerald-400',
  },
  {
    num: '06',
    title: 'Performance Tracking',
    desc: 'Monitoring KPIs and generating actionable insights from campaign data analytics.',
    icon: ChartColumn,
    color: 'bg-rose-500/20 text-rose-400',
  },
  {
    num: '07',
    title: 'Campaign Optimization',
    desc: 'Iteratively improving campaign performance through data-driven adjustments and A/B testing.',
    icon: TrendingUp,
    color: 'bg-indigo-500/20 text-indigo-400',
  },
  {
    num: '08',
    title: 'Quality Control',
    desc: 'Ensuring all deliverables meet brand standards and client expectations before launch.',
    icon: ShieldCheck,
    color: 'bg-teal-500/20 text-teal-400',
  },
];

const experiences = [
  {
    title: 'Account Manager',
    company: 'Rama Medical Group',
    period: 'Apr 2025 — Present',
    color: 'bg-blue-500',
    dotColor: 'bg-blue-500',
    borderColor: 'border-blue-500/30',
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
    borderColor: 'border-purple-500/30',
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
    borderColor: 'border-emerald-500/30',
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
    borderColor: 'border-amber-500/30',
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
    borderColor: 'border-rose-500/30',
    items: [
      'Supervised daily operations with adherence to quality standards',
      'Developed strategies to increase sales and customer satisfaction',
    ],
  },
];

const educations = [
  {
    degree: 'Bachelor of Commerce',
    school: 'Cairo University',
    period: '2017 - 2021',
    field: 'Business Administration',
  },
  {
    degree: 'German University in Cairo (GUC)',
    school: 'Transfer',
    period: '2016 - 2017',
    field: 'Business Administration',
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
function StatCard({ stat, delay }: { stat: { value: string; label: string }; delay: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`rounded-2xl p-6 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ background: 'rgba(15,17,21,0.6)', border: '1px solid rgba(255,255,255,0.05)', transitionDelay: `${delay}ms` }}
    >
      <p className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold gradient-text-stat mb-2">
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <div className="relative min-h-screen" style={{ background: 'rgb(5, 5, 8)' }}>
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
          {/* Logo */}
          <a href="#" className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white">
            AF.
          </a>

          {/* Desktop Links */}
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

          {/* CTA + Hamburger */}
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

        {/* Mobile Drawer */}
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
              Account Manager
            </p>

            {/* Name */}
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-6 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
              <span className="gradient-text-hero">Ayman</span>
              <br />
              <span className="gradient-text-hero">Faried</span>
            </h1>

            {/* Description */}
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg mb-8 animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
              Experienced Account Manager specializing in campaign management, client relations, and workflow optimization. Proven track record of delivering impactful marketing campaigns across the MENA region.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in-left" style={{ animationDelay: '0.4s' }}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-slate-200 transition-colors duration-200"
              >
                Get In Touch
                <ArrowRight size={16} />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-full text-white transition-colors duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}
              >
                View Experience
              </a>
            </div>
          </div>

          {/* Right — Photo */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in-right">
            <div className="relative animate-float">
              {/* Glow behind photo */}
              <div
                className="absolute -inset-4 rounded-3xl blur-xl opacity-40"
                style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(139,92,246,0.3), rgba(245,158,11,0.2))' }}
              />
              {/* Photo container */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{ border: '2px solid rgba(255,255,255,0.08)' }}
              >
                <img
                  src="https://z-cdn-media.chatglm.cn/files/def378c1-382c-437c-8156-40986f0e4b0a.jpeg?auth_key=1876880202-4966b58ccaeb408c84de949e865ba22e-0-e9c028844aca87d06a1be7dd8925b5ad"
                  alt="Ayman Faried — Account Manager"
                  className="w-64 h-80 sm:w-72 sm:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={18} className="text-slate-500 animate-scroll-indicator" />
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
                className="group relative rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300"
                style={{ background: 'rgba(15,17,21,0.6)', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                {/* Watermark number */}
                <span className="absolute top-3 right-4 font-[family-name:var(--font-space-grotesk)] text-5xl font-bold text-white/[0.03] select-none">
                  {s.num}
                </span>
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4 ${s.color}`}>
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
        <CampaignRama />
        {/* Campaign 02 */}
        <CampaignAlshakreen />
        {/* Campaign 03 */}
        <CampaignSunbulah />
      </Section>

      {/* ───── Education ───── */}
      <Section id="education" label="Education" heading="Academic Background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {educations.map((edu, i) => (
            <div
              key={i}
              className="rounded-2xl p-6"
              style={{ background: 'rgba(15,17,21,0.6)', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-white font-semibold">
                    {edu.degree}
                  </h3>
                  <p className="text-slate-400 text-sm">{edu.school}</p>
                </div>
              </div>
              <p className="text-slate-500 text-sm">{edu.period}</p>
              <p className="text-slate-400 text-sm mt-1">{edu.field}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ───── Contact ───── */}
      <Section id="contact" label="Get In Touch" heading="Let's Work Together">
        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mb-12">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            {[
              { icon: Mail, label: 'Email', value: 'aymanfaried17@gmail.com', href: 'mailto:aymanfaried17@gmail.com' },
              { icon: MapPin, label: 'Location', value: 'Cairo, Egypt', href: undefined },
              { icon: Clock3, label: 'Availability', value: 'Open to opportunities', href: undefined },
            ].map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div
                  className="flex items-center gap-4 rounded-2xl p-5 transition-colors duration-200 hover:bg-white/[0.03]"
                  style={{ background: 'rgba(15,17,21,0.6)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">{item.label}</p>
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={i} href={item.href}>{content}</a>
              ) : (
                <div key={i}>{content}</div>
              );
            })}

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href="https://www.linkedin.com/in/aymanfaried17"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl p-6 space-y-5"
            style={{ background: 'rgba(15,17,21,0.6)', border: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div>
              <label className="block text-sm text-slate-400 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all resize-none"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-slate-200 transition-colors duration-200"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </Section>

      {/* ───── Footer ───── */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">AF.</span>
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Ayman Faried. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/aymanfaried17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors duration-200"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─────────────── Experience Card ─────────────── */
function ExperienceCard({ exp, index }: { exp: (typeof experiences)[number]; index: number }) {
  const { ref, inView } = useInView();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-6 md:gap-0 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
        <div className={`w-3 h-3 rounded-full ${exp.dotColor} ring-4`} style={{ ringColor: 'rgb(5,5,8)' }} />
      </div>

      {/* Spacer for desktop */}
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

function ExpContent({ exp, alignRight }: { exp: (typeof experiences)[number]; alignRight?: boolean }) {
  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: 'rgba(15,17,21,0.6)', border: `1px solid rgba(255,255,255,0.05)` }}
    >
      <div className={`flex items-center gap-2 mb-2 ${alignRight ? 'md:justify-end' : ''}`}>
        <span className={`w-2 h-2 rounded-full ${exp.color}`} />
        <span className="text-slate-500 text-xs">{exp.period}</span>
      </div>
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-white font-semibold text-lg">
        {exp.title}
      </h3>
      <p className="text-slate-400 text-sm mb-4">{exp.company}</p>
      <ul className={`space-y-2 ${alignRight ? 'md:text-right' : ''}`}>
        {exp.items.map((item, j) => (
          <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
            <span className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${exp.color} ${alignRight ? 'md:order-2 md:ml-2' : ''}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────── Campaign 01 — Rama Clinics ─────────────── */
function CampaignRama() {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`mb-20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 mb-8">
        <img
          src="https://z-cdn-media.chatglm.cn/files/9d94c84a-2f04-4503-aa2e-342431bff5ad.png?auth_key=1876880941-541e26890c0d4afaa430ab413dc01509-0-01783a3eaa1fcb8a8f7a030a64c0d489"
          alt="Rama Clinics Brand Campaign"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.95) 0%, rgba(5,5,8,0.3) 50%, transparent 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          {/* Tags */}
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

      {/* Metadata Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: 'Role', value: 'Account Manager' },
          { label: 'Market', value: 'Saudi Arabia' },
          { label: 'Platform', value: 'Social Media' },
          { label: 'Creatives', value: '3 Designs' },
        ].map((m, i) => (
          <div
            key={i}
            className="rounded-xl p-4"
            style={{ background: 'rgba(15,17,21,0.6)', border: '1px solid rgba(255,255,255,0.05)' }}
          >
            <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">{m.label}</p>
            <p className="text-white text-sm font-medium">{m.value}</p>
          </div>
        ))}
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            src: 'https://z-cdn-media.chatglm.cn/files/b4dd6242-f071-44b1-a1ce-1853efa807e8.png?auth_key=1876880941-7130c4d7544341c3abb2ff387d560b24-0-7df42f3db015224960943f963f4516cc',
            title: 'Traditional Heritage',
            desc: 'Cultural street with QR integration',
          },
          {
            src: 'https://z-cdn-media.chatglm.cn/files/9d94c84a-2f04-4503-aa2e-342431bff5ad.png?auth_key=1876880941-541e26890c0d4afaa430ab413dc01509-0-01783a3eaa1fcb8a8f7a030a64c0d489',
            title: 'Luxury Night Branding',
            desc: 'Modern-traditional cityscape',
          },
          {
            src: 'https://z-cdn-media.chatglm.cn/files/008be7b7-7763-4179-9cf5-ecd58e3fa633.png?auth_key=1876880941-195887eb92834d54b25dcb2ef35afaee-0-41160742d41db5588fddc9891b1e4ef9',
            title: 'Premium Lifestyle',
            desc: 'Private jet luxury experience',
          },
        ].map((img, i) => (
          <div key={i} className="gallery-item group relative rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
            <img src={img.src} alt={img.title} className="gallery-image w-full h-64 object-cover" />
            <div className="gallery-overlay absolute inset-0 flex items-end p-5" style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.9) 0%, transparent 60%)' }}>
              <div>
                <p className="text-white font-medium text-sm">{img.title}</p>
                <p className="text-slate-400 text-xs">{img.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────── Campaign 02 — Alshakreen ─────────────── */
function CampaignAlshakreen() {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`mb-20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 mb-8">
        <img
          src="https://z-cdn-media.chatglm.cn/files/ccfc575c-fca8-42cc-9133-25077d13539d.png?auth_key=1876881557-0f32bd3ad40c49219fd59d800fbd446f-0-c92a85c9b921482e6871ec7965dff7b8"
          alt="Alshakreen Desert Heritage Campaign"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.95) 0%, rgba(5,5,8,0.3) 50%, transparent 100%)' }} />
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

      {/* Metadata */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: 'Role', value: 'Account Manager' },
          { label: 'Market', value: 'Saudi Arabia' },
          { label: 'Platform', value: 'Social Media' },
          { label: 'Creatives', value: '4 Designs' },
        ].map((m, i) => (
          <div
            key={i}
            className="rounded-xl p-4"
            style={{ background: 'rgba(15,17,21,0.6)', border: '1px solid rgba(255,255,255,0.05)' }}
          >
            <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">{m.label}</p>
            <p className="text-white text-sm font-medium">{m.value}</p>
          </div>
        ))}
      </div>

      {/* What I Did */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { icon: Target, title: 'Brief & Strategy', desc: 'Translating client vision into a clear creative direction rooted in Saudi culture.' },
          { icon: Eye, title: 'Creative Oversight', desc: 'Reviewing every visual and copy asset for brand alignment and cultural authenticity.' },
          { icon: MessageSquare, title: 'Delivery & Feedback', desc: 'Coordinating revisions and ensuring final deliverables exceeded client expectations.' },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="rounded-xl p-5"
              style={{ background: 'rgba(15,17,21,0.6)', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <Icon size={18} className="text-orange-400 mb-3" />
              <h4 className="text-white text-sm font-semibold mb-1">{item.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            src: 'https://z-cdn-media.chatglm.cn/files/57d80953-37ab-4e85-8fe3-c2cd860bfeba.png?auth_key=1876881557-58f2a85f9153414fa2e186e60fc7b884-0-12bde7a8aaa3442162f9a9f5f8b839ae',
            title: 'Desert Falconry Scene',
          },
          {
            src: 'https://z-cdn-media.chatglm.cn/files/98c2ebdb-e71f-4c37-9b90-09853c97e3a7.png?auth_key=1876881557-7a06ec4ba0e44da0a1970c75b565278c-0-be4f9effcfa7cab9243616b3b3ecb58d',
            title: 'Eid Al-Adha Gathering',
          },
          {
            src: 'https://z-cdn-media.chatglm.cn/files/ccfc575c-fca8-42cc-9133-25077d13539d.png?auth_key=1876881557-0f32bd3ad40c49219fd59d800fbd446f-0-c92a85c9b921482e6871ec7965dff7b8',
            title: 'Heritage Architecture',
          },
          {
            src: 'https://z-cdn-media.chatglm.cn/files/ff4600b1-3104-4049-bb7c-7b0237b93a3a.png?auth_key=1876881557-c98cbd3e3c38421d874b800d7b0a9309-0-f9fbf92388fc97ca1d5bd6101c56e9b7',
            title: 'Gift Unboxing Moment',
          },
        ].map((img, i) => (
          <div key={i} className="gallery-item group relative rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
            <img src={img.src} alt={img.title} className="gallery-image w-full h-64 object-cover" />
            <div className="gallery-overlay absolute inset-0 flex items-end p-5" style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.9) 0%, transparent 60%)' }}>
              <p className="text-white font-medium text-sm">{img.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────── Campaign 03 — Sunbulah ─────────────── */
function CampaignSunbulah() {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 mb-8">
        <img
          src="https://media.base44.com/images/public/69e9227a61bcc5bb750353a2/600cbf931_E09B9609-AA81-47F9-B210-0AA2C2780A8E.png"
          alt="Sunbulah Campaign"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.95) 0%, rgba(5,5,8,0.3) 50%, transparent 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/15 text-yellow-400 border border-yellow-500/20">
              <Star size={12} /> Campaign 03
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/15 text-blue-400 border border-blue-500/20">
              <MapPinned size={12} /> Saudi Arabia
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-500/15 text-purple-400 border border-purple-500/20">
              <LayoutGrid size={12} /> Social Media
            </span>
          </div>
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-white">
            Sunbulah <span className="gradient-text-gold">Campaign</span>
          </h3>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          {
            src: 'https://media.base44.com/images/public/69e9227a61bcc5bb750353a2/600cbf931_E09B9609-AA81-47F9-B210-0AA2C2780A8E.png',
            title: 'Traditional Flavors',
            desc: 'Heritage cuisine visuals',
          },
          {
            src: 'https://media.base44.com/images/public/69e9227a61bcc5bb750353a2/600cbf921_1E89C0DD-06FB-4B61-871E-8FA9B2C49F5D.png',
            title: 'Heritage Cuisine',
            desc: 'Authentic Saudi food styling',
          },
        ].map((img, i) => (
          <div key={i} className="gallery-item group relative rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
            <img src={img.src} alt={img.title} className="gallery-image w-full h-64 md:h-80 object-cover" />
            <div className="gallery-overlay absolute inset-0 flex items-end p-5" style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.9) 0%, transparent 60%)' }}>
              <div>
                <p className="text-white font-medium text-sm">{img.title}</p>
                <p className="text-slate-400 text-xs">{img.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
