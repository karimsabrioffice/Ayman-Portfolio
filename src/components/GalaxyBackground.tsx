'use client';

import { useEffect, useRef } from 'react';

/* ─────────────── Galaxy / Milky Way Background ─────────────── */
// Canvas-based galaxy with milky way band, twinkling stars,
// nebula clouds, and occasional shooting stars.

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface Nebula {
  x: number;
  y: number;
  radius: number;
  color: string;
  opacity: number;
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
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener('resize', resize);

    // Generate stars
    const starCount = Math.min(300, Math.floor((width * height) / 5000));
    const stars: Star[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.3,
        opacity: Math.random() * 0.5 + 0.2,
        twinkleSpeed: Math.random() * 0.002 + 0.001,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }

    // Generate nebula clouds
    const nebulae: Nebula[] = [
      { x: width * 0.2, y: height * 0.3, radius: 250, color: '59,130,246', opacity: 0.06, floatOffset: 0, floatSpeed: 0.0003 },
      { x: width * 0.7, y: height * 0.6, radius: 200, color: '139,92,246', opacity: 0.05, floatOffset: 2, floatSpeed: 0.0004 },
      { x: width * 0.5, y: height * 0.8, radius: 180, color: '16,185,129', opacity: 0.04, floatOffset: 4, floatSpeed: 0.00035 },
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
      ctx.clearRect(0, 0, width, height);

      // Milky way band — diagonal gradient band
      const milkyWayGrad = ctx.createLinearGradient(0, height, width, 0);
      milkyWayGrad.addColorStop(0, 'rgba(139,92,246,0.015)');
      milkyWayGrad.addColorStop(0.3, 'rgba(59,130,246,0.025)');
      milkyWayGrad.addColorStop(0.5, 'rgba(200,180,255,0.04)');
      milkyWayGrad.addColorStop(0.7, 'rgba(59,130,246,0.025)');
      milkyWayGrad.addColorStop(1, 'rgba(139,92,246,0.015)');

      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(-Math.PI / 6);
      ctx.fillStyle = milkyWayGrad;
      ctx.fillRect(-width, -80, width * 2, 160);
      ctx.restore();

      // Milky way shimmer
      const shimmerOpacity = 0.02 + Math.sin(time * 0.0005) * 0.01;
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(-Math.PI / 6);
      ctx.fillStyle = `rgba(200,180,255,${shimmerOpacity})`;
      ctx.fillRect(-width, -40, width * 2, 80);
      ctx.restore();

      // Draw nebulae
      nebulae.forEach((neb) => {
        const floatX = Math.sin(time * neb.floatSpeed + neb.floatOffset) * 20;
        const floatY = Math.cos(time * neb.floatSpeed * 0.7 + neb.floatOffset) * 15;
        const scaleOsc = 1 + Math.sin(time * neb.floatSpeed * 0.5 + neb.floatOffset) * 0.05;
        const opacityOsc = neb.opacity + Math.sin(time * 0.001 + neb.floatOffset) * 0.02;

        const grad = ctx.createRadialGradient(
          neb.x + floatX, neb.y + floatY, 0,
          neb.x + floatX, neb.y + floatY, neb.radius * scaleOsc
        );
        grad.addColorStop(0, `rgba(${neb.color},${opacityOsc * 2})`);
        grad.addColorStop(0.5, `rgba(${neb.color},${opacityOsc})`);
        grad.addColorStop(1, `rgba(${neb.color},0)`);

        ctx.fillStyle = grad;
        ctx.fillRect(
          neb.x + floatX - neb.radius * scaleOsc,
          neb.y + floatY - neb.radius * scaleOsc,
          neb.radius * scaleOsc * 2,
          neb.radius * scaleOsc * 2
        );
      });

      // Draw stars
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const opacity = star.opacity + twinkle * 0.3;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0.05, Math.min(1, opacity))})`;
        ctx.fill();

        // Add subtle glow for larger stars
        if (star.size > 1.2) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200,210,255,${Math.max(0, opacity * 0.15)})`;
          ctx.fill();
        }
      });

      // Shooting star
      if (!shootingStar.active && time - lastShootingTime > shootingInterval) {
        triggerShootingStar(time);
      }

      if (shootingStar.active) {
        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.opacity -= 0.008;

        if (shootingStar.opacity <= 0 || shootingStar.x > width || shootingStar.y > height) {
          shootingStar.active = false;
          shootingStar.opacity = 0;
        } else {
          const tailX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
          const tailY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length;

          const grad = ctx.createLinearGradient(tailX, tailY, shootingStar.x, shootingStar.y);
          grad.addColorStop(0, `rgba(255,255,255,0)`);
          grad.addColorStop(0.7, `rgba(255,255,255,${shootingStar.opacity * 0.5})`);
          grad.addColorStop(1, `rgba(255,255,255,${shootingStar.opacity})`);

          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(shootingStar.x, shootingStar.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Head glow
          ctx.beginPath();
          ctx.arc(shootingStar.x, shootingStar.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${shootingStar.opacity})`;
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
      style={{ opacity: 0.9 }}
      aria-hidden="true"
    />
  );
}
