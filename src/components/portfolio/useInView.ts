'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

/* ─────────────── Optimized Intersection Observer Hook ─────────────── */
// Uses a shared IntersectionObserver instance per threshold to avoid
// creating many separate observers.

const observerCache = new Map<string, IntersectionObserver>();

function getObserver(threshold: number, rootMargin: string): IntersectionObserver {
  const key = `${threshold}:${rootMargin}`;
  if (observerCache.has(key)) return observerCache.get(key)!;

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cb = (entry.target as HTMLElement).__inViewCallback;
          if (cb) {
            cb(true);
            obs.unobserve(entry.target);
          }
        }
      });
    },
    { threshold, rootMargin }
  );
  observerCache.set(key, obs);
  return obs;
}

export function useInView(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  const handleInView = useCallback((value: boolean) => {
    setInView(value);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = getObserver(threshold, '100px 0px');
    (el as HTMLElement).__inViewCallback = handleInView;
    obs.observe(el);
    return () => {
      obs.unobserve(el);
      delete (el as HTMLElement).__inViewCallback;
    };
  }, [threshold, handleInView]);

  return { ref, inView };
}
