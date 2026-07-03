/**
 * Force every route change (link, button, browser back/forward) to start at the top.
 */

let manualRestorationEnabled = false;
let navigationListenersInstalled = false;

const RESET_DELAYS_MS = [0, 16, 50, 100, 200, 350, 600, 1000, 1600];

export function enableManualScrollRestoration() {
  if (typeof window === "undefined" || manualRestorationEnabled) return;
  manualRestorationEnabled = true;
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
}

export function resetScrollPosition() {
  if (typeof window === "undefined") return;

  const html = document.documentElement;
  const body = document.body;
  const previousHtmlBehavior = html.style.scrollBehavior;
  const previousBodyBehavior = body.style.scrollBehavior;

  html.style.scrollBehavior = "auto";
  body.style.scrollBehavior = "auto";

  try {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  } catch {
    window.scrollTo(0, 0);
  }

  html.scrollLeft = 0;
  html.scrollTop = 0;
  body.scrollLeft = 0;
  body.scrollTop = 0;

  const scrollingElement = document.scrollingElement;
  if (scrollingElement) {
    scrollingElement.scrollLeft = 0;
    scrollingElement.scrollTop = 0;
  }

  html.style.scrollBehavior = previousHtmlBehavior;
  body.style.scrollBehavior = previousBodyBehavior;
}

export function scheduleScrollReset() {
  resetScrollPosition();

  if (typeof window.requestAnimationFrame === "function") {
    window.requestAnimationFrame(() => {
      resetScrollPosition();
      window.requestAnimationFrame(resetScrollPosition);
    });
  }

  for (const delay of RESET_DELAYS_MS) {
    window.setTimeout(resetScrollPosition, delay);
  }
}

function isBackForwardNavigation() {
  const navEntry = performance.getEntriesByType("navigation")[0];
  return navEntry?.type === "back_forward";
}

/** Call once at app startup (client). Handles popstate before Next.js restores scroll. */
export function installScrollToTopOnNavigation() {
  if (typeof window === "undefined" || navigationListenersInstalled) return;
  navigationListenersInstalled = true;

  enableManualScrollRestoration();

  window.addEventListener(
    "popstate",
    () => {
      scheduleScrollReset();
    },
    true,
  );

  window.addEventListener("pageshow", (event) => {
    if (event.persisted || isBackForwardNavigation()) {
      scheduleScrollReset();
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      enableManualScrollRestoration();
      if (isBackForwardNavigation()) {
        scheduleScrollReset();
      }
    }
  });
}
