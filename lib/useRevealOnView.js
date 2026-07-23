"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reveal elements when they enter the viewport.
 * Uses IntersectionObserver (works with Lenis) plus a safety timeout so
 * client-side navigations never leave content stuck at opacity 0.
 */
export function revealElements(elements, {
  y = 24,
  x = 0,
  duration = 0.75,
  stagger = 0.08,
  ease = "power3.out",
  rootMargin = "0px 0px -8% 0px",
  safetyMs = 200,
} = {}) {
  const els = (Array.isArray(elements) ? elements : [elements]).filter(Boolean);
  if (!els.length || typeof window === "undefined") return () => {};

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReduced) {
    gsap.set(els, { opacity: 1, y: 0, x: 0, clearProps: "transform" });
    return () => {};
  }

  let revealed = false;
  const reveal = () => {
    if (revealed) return;
    revealed = true;
    gsap.to(els, {
      opacity: 1,
      y: 0,
      x: 0,
      duration,
      stagger,
      ease,
      overwrite: true,
    });
  };

  gsap.set(els, { opacity: 0, y, x });

  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        reveal();
        io.disconnect();
      }
    },
    { root: null, rootMargin, threshold: 0.05 }
  );

  els.forEach((el) => io.observe(el));

  const safety = window.setTimeout(() => {
    const inView = els.some((el) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.95 && r.bottom > 0;
    });
    if (inView) reveal();
  }, safetyMs);

  // Help other ScrollTrigger-based sections after soft navigations.
  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
    ScrollTrigger.update();
  });

  return () => {
    io.disconnect();
    window.clearTimeout(safety);
  };
}

/** Hook form of revealElements for a list of refs resolved each run. */
export function useRevealOnView(getElements, deps = [], options) {
  useEffect(() => {
    const els = typeof getElements === "function" ? getElements() : getElements;
    return revealElements(els, options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
