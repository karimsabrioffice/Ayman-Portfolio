'use client';

import { useEffect, useRef } from 'react';

/* ─────────────── Galaxy / Milky Way Background ─────────────── */
// Canvas-based galaxy with milky way band, twinkling stars,
// nebula clouds, and occasional shooting stars.
// Fixed: white line artifacts caused by fillRect on nebulae — now uses arc/circle drawing

interface Star {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface Nebula {
  x: number;
  y: number;
  radius: number;
  r: number;
  g: number;
  b: number;
  baseOpacity: number;
  floatOffset: number;
  floatSpeed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
}

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

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

    // Generate stars
    const starCount = Math.min(250, Math.floor((width * height) / 6000));
    const stars: Star[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.3,
        baseOpacity: Math.random() * 0.4 + 0.15,
        twinkleSpeed: Math.random() * 0.003 + 0.001,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }

    // Generate nebula clouds — use RGB components for smooth gradient construction
    const nebulae: Nebula[] = [
      { x: width * 0.15, y: height * 0.25, radius: 300, r: 59, g: 130, b: 246, baseOpacity: 0.045, floatOffset: 0, floatSpeed: 0.0003 },
      { x: width * 0.75, y: height * 0.55, radius: 250, r: 139, g: 92, b: 246, baseOpacity: 0.04, floatOffset: 2, floatSpeed: 0.0004 },
      { x: width * 0.45, y: height * 0.8, radius: 220, r: 16, g: 185, b: 129, baseOpacity: 0.035, floatOffset: 4, floatSpeed: 0.00035 },
    ];

    // Shooting star
    const shootingStar: ShootingStar = {
      x: 0, y: 0, length: 80, speed: 6, angle: Math.PI / 4,
      opacity: 0, active: false,
    };

    let lastShootingTime = 0;
    const shootingInterval = 8000 + Math.random() * 12000;

    const triggerShootingStar = (time: number) => {
      shootingStar.x = Math.random() * width * 0.6;
      shootingStar.y = Math.random() * height * 0.3;
      shootingStar.length = 60 + Math.random() * 80;
      shootingStar.speed = 4 + Math.random() * 4;
      shootingStar.angle = Math.PI / 6 + Math.random() * Math.PI / 6;
      shootingStar.opacity = 1;
      shootingStar.active = true;
      lastShootingTime = time;
    };

    const draw = (time: number) => {
      // Clear with transparent black — avoids any white artifacts
      ctx.clearRect(0, 0, width, height);

      // ─── Milky Way Band ───
      // Draw using a rotated rounded band with smooth gradients
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(-Math.PI / 6);

      // Outer soft glow
      const outerGrad = ctx.createLinearGradient(0, -120, 0, 120);
      outerGrad.addColorStop(0, 'rgba(139,92,246,0)');
      outerGrad.addColorStop(0.2, 'rgba(139,92,246,0.008)');
      outerGrad.addColorStop(0.4, 'rgba(59,130,246,0.015)');
      outerGrad.addColorStop(0.5, 'rgba(180,160,255,0.025)');
      outerGrad.addColorStop(0.6, 'rgba(59,130,246,0.015)');
      outerGrad.addColorStop(0.8, 'rgba(139,92,246,0.008)');
      outerGrad.addColorStop(1, 'rgba(139,92,246,0)');
      ctx.fillStyle = outerGrad;
      ctx.fillRect(-width, -120, width * 2, 240);

      // Inner brighter core
      const shimmerOpacity = 0.012 + Math.sin(time * 0.0004) * 0.006;
      const innerGrad = ctx.createLinearGradient(0, -30, 0, 30);
      innerGrad.addColorStop(0, 'rgba(200,180,255,0)');
      innerGrad.addColorStop(0.3, `rgba(200,180,255,${shimmerOpacity * 0.5})`);
      innerGrad.addColorStop(0.5, `rgba(220,200,255,${shimmerOpacity})`);
      innerGrad.addColorStop(0.7, `rgba(200,180,255,${shimmerOpacity * 0.5})`);
      innerGrad.addColorStop(1, 'rgba(200,180,255,0)');
      ctx.fillStyle = innerGrad;
      ctx.fillRect(-width, -30, width * 2, 60);

      ctx.restore();

      // ─── Nebula Clouds ───
      // Use radialGradient + arc (NOT fillRect) to avoid white edge artifacts
      ctx.globalCompositeOperation = 'screen';

      nebulae.forEach((neb) => {
        const floatX = Math.sin(time * neb.floatSpeed + neb.floatOffset) * 25;
        const floatY = Math.cos(time * neb.floatSpeed * 0.7 + neb.floatOffset) * 18;
        const scaleOsc = 1 + Math.sin(time * neb.floatSpeed * 0.5 + neb.floatOffset) * 0.06;
        const opacityOsc = neb.baseOpacity + Math.sin(time * 0.001 + neb.floatOffset) * 0.015;

        const cx = neb.x + floatX;
        const cy = neb.y + floatY;
        const r = Math.max(1, neb.radius * scaleOsc);

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, `rgba(${neb.r},${neb.g},${neb.b},${opacityOsc * 1.8})`);
        grad.addColorStop(0.3, `rgba(${neb.r},${neb.g},${neb.b},${opacityOsc * 1.2})`);
        grad.addColorStop(0.6, `rgba(${neb.r},${neb.g},${neb.b},${opacityOsc * 0.6})`);
        grad.addColorStop(1, `rgba(${neb.r},${neb.g},${neb.b},0)`);

        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      ctx.globalCompositeOperation = 'source-over';

      // ─── Stars ───
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const opacity = star.baseOpacity + twinkle * 0.25;
        const clampedOpacity = Math.max(0.03, Math.min(0.9, opacity));

        // Star core
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${clampedOpacity})`;
        ctx.fill();

        // Subtle glow for larger stars
        if (star.size > 1.0) {
          const glowGrad = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.size * 3
          );
          glowGrad.addColorStop(0, `rgba(200,210,255,${clampedOpacity * 0.2})`);
          glowGrad.addColorStop(1, 'rgba(200,210,255,0)');
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = glowGrad;
          ctx.fill();
        }
      });

      // ─── Shooting Star ───
      if (!shootingStar.active && time - lastShootingTime > shootingInterval) {
        triggerShootingStar(time);
      }

      if (shootingStar.active) {
        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.opacity -= 0.01;

        if (shootingStar.opacity <= 0 || shootingStar.x > width || shootingStar.y > height) {
          shootingStar.active = false;
          shootingStar.opacity = 0;
        } else {
          const tailX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
          const tailY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length;

          const grad = ctx.createLinearGradient(tailX, tailY, shootingStar.x, shootingStar.y);
          grad.addColorStop(0, 'rgba(255,255,255,0)');
          grad.addColorStop(0.6, `rgba(255,255,255,${shootingStar.opacity * 0.4})`);
          grad.addColorStop(1, `rgba(255,255,255,${shootingStar.opacity * 0.9})`);

          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(shootingStar.x, shootingStar.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Head glow
          const headGrad = ctx.createRadialGradient(
            shootingStar.x, shootingStar.y, 0,
            shootingStar.x, shootingStar.y, 4
          );
          headGrad.addColorStop(0, `rgba(255,255,255,${shootingStar.opacity})`);
          headGrad.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.beginPath();
          ctx.arc(shootingStar.x, shootingStar.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = headGrad;
          ctx.fill();
        }
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
