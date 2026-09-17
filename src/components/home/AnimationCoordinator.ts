"use client";

import { useEffect, useState, useRef } from 'react';

// Singleton observer to avoid creating multiple IntersectionObservers
let globalObserver: IntersectionObserver | null = null;
const observerCallbacks = new Map<Element, (isIntersecting: boolean) => void>();
const intersectionStates = new Map<Element, boolean>();

function getGlobalObserver() {
  if (typeof window === 'undefined') return null;
  if (!globalObserver) {
    globalObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        intersectionStates.set(entry.target, entry.isIntersecting);
        const callback = observerCallbacks.get(entry.target);
        if (callback) {
          callback(entry.isIntersecting && !document.hidden);
        }
      });
    }, {
      root: null,
      rootMargin: '100px', // slight buffer
      threshold: 0
    });
  }
  return globalObserver;
}

export function useSectionVisibility(ref: React.RefObject<Element | null>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleVisibility = (intersecting: boolean) => {
      setIsVisible(intersecting);
    };

    const handleDocVisibility = () => {
      const isIntersecting = intersectionStates.get(el) || false;
      setIsVisible(isIntersecting && !document.hidden);
    };

    observerCallbacks.set(el, handleVisibility);
    const observer = getGlobalObserver();
    if (observer) observer.observe(el);

    document.addEventListener('visibilitychange', handleDocVisibility);

    return () => {
      if (observer) observer.unobserve(el);
      observerCallbacks.delete(el);
      intersectionStates.delete(el);
      document.removeEventListener('visibilitychange', handleDocVisibility);
    };
  }, [ref]);

  return isVisible;
}

export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);
  return reducedMotion;
}
