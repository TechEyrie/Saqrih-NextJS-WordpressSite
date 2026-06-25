import { useEffect } from "react";

function normalizeTheme(theme) {
  if (theme === "light" || theme === "dark" || theme === "media" || theme === "adaptive") {
    return theme;
  }
  if (theme === "deep-dark") return "dark";
  return "dark";
}

/** Cheap header theme via IntersectionObserver — no elementsFromPoint / getComputedStyle walks. */
export function useHeaderThemeObserver(setHeaderTheme, headerBarHeight) {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-header]");
    if (!sections.length) return;

    const visible = new Map();

    const commit = () => {
      let bestEl = null;
      let bestRatio = 0;
      visible.forEach((ratio, el) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestEl = el;
        }
      });
      if (bestEl) {
        setHeaderTheme(normalizeTheme(bestEl.dataset.header));
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0) {
            visible.set(entry.target, entry.intersectionRatio);
          } else {
            visible.delete(entry.target);
          }
        });
        commit();
      },
      {
        root: null,
        rootMargin: `-${headerBarHeight + 6}px 0px -50% 0px`,
        threshold: [0, 0.12, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [headerBarHeight, setHeaderTheme]);
}
