import { useEffect } from 'react';

function animateCounter(el: HTMLElement, target: number, duration: number = 800): void {
  let start: number | null = null;

  function ease(t: number): number {
    return 1 - Math.pow(1 - t, 3);
  }

  function step(timestamp: number): void {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.floor(ease(progress) * target);

    el.textContent = el.textContent?.replace(
      /[\d,]+/,
      value.toLocaleString()
    ) ?? value.toLocaleString();

    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export function useCounterAnimation(): void {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-count-target]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const raw = el.dataset.countTarget;
        if (!raw) return;
        const target = parseInt(raw.replace(/,/g, ''), 10);
        const duration = parseInt(el.dataset.countDuration ?? '800', 10);
        animateCounter(el, target, duration);
        observer.unobserve(el);
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}