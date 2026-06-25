import { ScrollTrigger } from "gsap/ScrollTrigger";

let scheduled = false;
let idleId = 0;

/** Batch ScrollTrigger.refresh to idle time to avoid forced reflow during first paint. */
export function deferScrollTriggerRefresh() {
  if (typeof window === "undefined" || scheduled) return;
  scheduled = true;

  const run = () => {
    scheduled = false;
    idleId = 0;
    ScrollTrigger.refresh();
  };

  if ("requestIdleCallback" in window) {
    idleId = window.requestIdleCallback(run, { timeout: 1500 });
  } else {
    requestAnimationFrame(() => requestAnimationFrame(run));
  }
}

export function cancelDeferredScrollTriggerRefresh() {
  if (idleId && "cancelIdleCallback" in window) {
    window.cancelIdleCallback(idleId);
    idleId = 0;
  }
  scheduled = false;
}

/** Debounced refresh for resize/image-load handlers. */
export function debounceScrollTriggerRefresh(delayMs = 200) {
  if (typeof window === "undefined") return () => {};
  let timer = 0;
  return () => {
    clearTimeout(timer);
    timer = window.setTimeout(() => deferScrollTriggerRefresh(), delayMs);
  };
}
