'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import Navigation from '@/components/portfolio/Navigation';
import HeroSection from '@/components/portfolio/HeroSection';
import StatsSection from '@/components/portfolio/StatsSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import CampaignSection from '@/components/portfolio/CampaignSection';
import EducationSection from '@/components/portfolio/EducationSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';
import Lightbox from '@/components/portfolio/Lightbox';
import BackToTop from '@/components/portfolio/BackToTop';

// Dynamic import GalaxyBackground to avoid SSR canvas issues
const GalaxyBackground = dynamic(() => import('@/components/GalaxyBackground'), {
  ssr: false,
});

// Dynamic import MouseEffects to avoid SSR canvas issues
const MouseEffects = dynamic(() => import('@/components/MouseEffects'), {
  ssr: false,
});

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
      {/* ───── Galaxy Background (replaces Glow Orbs) ───── */}
      <GalaxyBackground />

      {/* ───── Mouse Effects (cursor trail, tilt, magnetic) ───── */}
      <MouseEffects />

      {/* ───── Navigation ───── */}
      <Navigation scrolled={scrolled} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* ───── Hero Section ───── */}
      <HeroSection />

      {/* ───── Stats Section ───── */}
      <StatsSection />

      {/* ───── About / What I Do ───── */}
      <AboutSection />

      {/* ───── Work Experience ───── */}
      <ExperienceSection />

      {/* ───── Campaign Showcase ───── */}
      <CampaignSection onImageClick={openLightbox} />

      {/* ───── Education & Certifications ───── */}
      <EducationSection />

      {/* ───── Contact ───── */}
      <ContactSection />

      {/* ───── Footer ───── */}
      <Footer />

      {/* ───── Lightbox Modal ───── */}
      <Lightbox lightboxImg={lightboxImg} closeLightbox={closeLightbox} />

      {/* ───── Back to Top Button ───── */}
      <BackToTop show={showTopBtn} onClick={scrollToTop} />
    </div>
  );
}
