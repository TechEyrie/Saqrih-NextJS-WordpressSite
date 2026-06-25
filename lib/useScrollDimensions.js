import { useLayoutEffect, useRef } from "react";

/** Cache scrollWidth/clientWidth via ResizeObserver to avoid reads during ScrollTrigger refresh. */
export function useScrollDimensions(trackRef, outerRef) {
  const dimsRef = useRef({ trackWidth: 0, outerWidth: 0, maxTranslate: 0 });

  useLayoutEffect(() => {
    const track = trackRef.current;
    const outer = outerRef.current;
    if (!track || !outer) return;

    const measure = () => {
      const trackWidth = track.scrollWidth;
      const outerWidth = outer.clientWidth;
      dimsRef.current = {
        trackWidth,
        outerWidth,
        maxTranslate: Math.max(0, trackWidth - outerWidth),
      };
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    ro.observe(outer);
    return () => ro.disconnect();
  }, [trackRef, outerRef]);

  return dimsRef;
}
