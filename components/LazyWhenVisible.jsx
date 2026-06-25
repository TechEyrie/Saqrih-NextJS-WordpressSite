"use client";

import { useEffect, useRef, useState } from "react";

/** Mount children only when near the viewport — keeps GSAP/SplitText off the first paint. */
export default function LazyWhenVisible({
  children,
  minHeight = "50vh",
  rootMargin = "320px 0px",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    const show = () => setVisible(true);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          io.disconnect();
        }
      },
      { rootMargin, threshold: 0 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, visible]);

  return (
    <div ref={ref} style={visible ? undefined : { minHeight }}>
      {visible ? children : null}
    </div>
  );
}
