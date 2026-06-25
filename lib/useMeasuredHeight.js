import { useLayoutEffect, useRef } from "react";

/** Cache element height via ResizeObserver to avoid offsetHeight reads after DOM writes. */
export function useMeasuredHeight(elementRef) {
  const heightRef = useRef(0);

  useLayoutEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const measure = () => {
      heightRef.current = el.offsetHeight;
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [elementRef]);

  return heightRef;
}
