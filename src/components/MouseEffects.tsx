'use client';

import { useEffect, useRef, useCallback } from 'react';

/* ─────────────── Mouse Effects Component ─────────────── */
// 1. Cursor glow trail — small glowing dots that follow the cursor
// 2. Floating particles — small particles orbit near the cursor
// 3. 3D Tilt on cards — subtle perspective shift on hover
// 4. Magnetic buttons — buttons slightly pull toward cursor

interface Trail {
  x: number;
  y: number;
  opacity: number;
  size: number;
}

export default function MouseEffects() {
  const trailsRef = useRef<Trail[]>([]);
  const mouseRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // ─── 3D Tilt Effect ───
  const initTiltEffect = useCallback(() => {
    const cards = document.querySelectorAll('.card-hover, .photo-border-outer');

    const handleMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -3;
      const rotateY = ((x - centerX) / centerX) * 3;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transition = 'transform 0.1s ease-out';
    };

    cards.forEach((card) => {
      (card as HTMLElement).style.willChange = 'transform';
      card.addEventListener('mousemove', handleMouseMove as EventListener);
      card.addEventListener('mouseleave', handleMouseLeave as EventListener);
      card.addEventListener('mouseenter', handleMouseEnter as EventListener);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', handleMouseMove as EventListener);
        card.removeEventListener('mouseleave', handleMouseLeave as EventListener);
        card.removeEventListener('mouseenter', handleMouseEnter as EventListener);
      });
    };
  }, []);

  // ─── Magnetic Button Effect ───
  const initMagneticButtons = useCallback(() => {
    const buttons = document.querySelectorAll('a[class*="rounded-full"], button[class*="rounded-full"]');

    const handleMouseMove = (e: MouseEvent) => {
      const btn = e.currentTarget as HTMLElement;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      btn.style.transition = 'transform 0.2s ease-out';
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const btn = e.currentTarget as HTMLElement;
      btn.style.transform = 'translate(0, 0)';
      btn.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    };

    buttons.forEach((btn) => {
      (btn as HTMLElement).style.willChange = 'transform';
      btn.addEventListener('mousemove', handleMouseMove as EventListener);
      btn.addEventListener('mouseleave', handleMouseLeave as EventListener);
    });

    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener('mousemove', handleMouseMove as EventListener);
        btn.removeEventListener('mouseleave', handleMouseLeave as EventListener);
      });
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // Cursor trail
    const MAX_TRAILS = 20;
    let trailTimer = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Floating particles around cursor
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; life: number }[] = [];
    let particleTimer = 0;

    window.addEventListener('mousemove', onMouseMove);

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // ─── Add trail point every 2 frames ───
      trailTimer++;
      if (trailTimer % 2 === 0 && mx > 0 && my > 0) {
        trailsRef.current.push({
          x: mx,
          y: my,
          opacity: 0.5,
          size: 3,
        });
        if (trailsRef.current.length > MAX_TRAILS) {
          trailsRef.current.shift();
        }
      }

      // ─── Draw & fade trails ───
      trailsRef.current.forEach((trail, i) => {
        trail.opacity -= 0.02;
        trail.size *= 0.96;

        if (trail.opacity > 0) {
          const grad = ctx.createRadialGradient(trail.x, trail.y, 0, trail.x, trail.y, trail.size * 3);
          grad.addColorStop(0, `rgba(139,92,246,${trail.opacity * 0.6})`);
          grad.addColorStop(0.5, `rgba(59,130,246,${trail.opacity * 0.3})`);
          grad.addColorStop(1, 'rgba(59,130,246,0)');
          ctx.beginPath();
          ctx.arc(trail.x, trail.y, trail.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }
      });

      // Remove dead trails
      trailsRef.current = trailsRef.current.filter(t => t.opacity > 0);

      // ─── Cursor glow ───
      if (mx > 0 && my > 0) {
        const cursorGrad = ctx.createRadialGradient(mx, my, 0, mx, my, 60);
        cursorGrad.addColorStop(0, 'rgba(139,92,246,0.06)');
        cursorGrad.addColorStop(0.5, 'rgba(59,130,246,0.03)');
        cursorGrad.addColorStop(1, 'rgba(59,130,246,0)');
        ctx.beginPath();
        ctx.arc(mx, my, 60, 0, Math.PI * 2);
        ctx.fillStyle = cursorGrad;
        ctx.fill();
      }

      // ─── Floating particles ───
      particleTimer++;
      if (particleTimer % 8 === 0 && mx > 0 && my > 0 && particles.length < 15) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.8 + 0.3;
        particles.push({
          x: mx + (Math.random() - 0.5) * 30,
          y: my + (Math.random() - 0.5) * 30,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.4 + 0.2,
          life: 1,
        });
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.008;
        p.opacity = p.life * 0.4;

        if (p.life > 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(139,92,246,${p.opacity})`;
          ctx.fill();
        }
      });

      // Remove dead particles
      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].life <= 0) particles.splice(i, 1);
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    // Init tilt and magnetic after a short delay (wait for DOM)
    const initTimeout = setTimeout(() => {
      initTiltEffect();
      initMagneticButtons();
    }, 500);

    // Re-init on dynamic content changes
    const observer = new MutationObserver(() => {
      clearTimeout(initTimeout);
      setTimeout(() => {
        initTiltEffect();
        initMagneticButtons();
      }, 200);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
      clearTimeout(initTimeout);
      observer.disconnect();
    };
  }, [initTiltEffect, initMagneticButtons]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
      aria-hidden="true"
    />
  );
}
