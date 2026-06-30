import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ROUTE_LOADER_REFRESH_MS = 1600;
export const SCROLL_READY_EVENT = "saqrih:scroll-ready";

/**
 * Run GSAP/ScrollTrigger setup and re-run after client-side navigation.
 * Previous routes (e.g. homepage) may kill all ScrollTriggers asynchronously after mount.
 */
export function useDeferredGsap(setup, deps = [], scopeRef = null, onCleanup = null) {
  useEffect(() => {
    let ctx;

    const run = () => {
      onCleanup?.();
      ctx?.revert();
      const scope = scopeRef?.current;
      ctx = scope ? gsap.context(setup, scope) : gsap.context(setup);
      ScrollTrigger.refresh();
    };

    run();

    const timeouts = [
      window.setTimeout(run, 120),
      window.setTimeout(() => ScrollTrigger.refresh(), 400),
      window.setTimeout(run, ROUTE_LOADER_REFRESH_MS),
    ];

    const onRouteLoaderDone = () => {
      if (!document.body.dataset.routeLoading) {
        run();
      }
    };

    const onScrollReady = () => run();

    const observer = new MutationObserver(onRouteLoaderDone);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-route-loading"],
    });
    window.addEventListener(SCROLL_READY_EVENT, onScrollReady);

    return () => {
      timeouts.forEach((id) => window.clearTimeout(id));
      observer.disconnect();
      window.removeEventListener(SCROLL_READY_EVENT, onScrollReady);
      onCleanup?.();
      ctx?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/** @deprecated Use useDeferredGsap */
export const useCaseStudyGsap = useDeferredGsap;

export function resetCaseStudyScroll() {
  if (typeof window === "undefined") return;
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export function notifyScrollReady() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(SCROLL_READY_EVENT));
}
