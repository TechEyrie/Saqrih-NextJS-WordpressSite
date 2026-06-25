import { ScrollTrigger } from "gsap/ScrollTrigger";

let scheduled = false;
let idleId = 0;
let refreshCount = 0;

/** Batch ScrollTrigger.refresh to idle time to avoid forced reflow during first paint. */
export function deferScrollTriggerRefresh() {
  if (typeof window === "undefined" || scheduled) return;
  scheduled = true;
  refreshCount += 1;

  const run = () => {
    scheduled = false;
    idleId = 0;
    ScrollTrigger.refresh();
  };

  const delay = refreshCount > 1 ? 2500 : 1800;

  if ("requestIdleCallback" in window) {
    idleId = window.requestIdleCallback(run, { timeout: delay });
  } else {
    idleId = window.setTimeout(run, 120);
  }
}

export function cancelDeferredScrollTriggerRefresh() {
  if (idleId) {
    if ("cancelIdleCallback" in window) {
      window.cancelIdleCallback(idleId);
    } else {
      window.clearTimeout(idleId);
    }
    idleId = 0;
  }
  scheduled = false;
}

/** Debounced refresh for resize/image-load handlers. */
export function debounceScrollTriggerRefresh(delayMs = 250) {
  if (typeof window === "undefined") return () => {};
  let timer = 0;
  return () => {
    clearTimeout(timer);
    timer = window.setTimeout(() => deferScrollTriggerRefresh(), delayMs);
  };
}
