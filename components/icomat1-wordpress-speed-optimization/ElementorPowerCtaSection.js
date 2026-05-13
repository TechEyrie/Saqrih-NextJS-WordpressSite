"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Match other light WordPress service sections */
const GREEN = "#162D24";
const BODY = "rgba(22, 45, 36, 0.82)";

const FONT_H2 = "clamp(2rem, 3.8vw, 3.1rem)";
const FONT_BODY = "clamp(1.05rem, 1.25vw, 1.2rem)";

const BODY_PARAS = [
  "With WordPress speed optimization, a faster website becomes a powerful advantage that improves user experience, increases engagement, and supports stronger search engine rankings.",
  "Better performance helps your visitors navigate your site more smoothly while also improving visibility in search results. At Eyrion, we provide tailored WordPress optimization strategies designed to enhance your site's speed and overall efficiency.",
  "Throughout our process, we take a complete approach to performance improvement—from detailed initial testing to fully customized optimization recommendations. Our goal is to ensure your WordPress website achieves consistently fast, reliable, and scalable performance.",
];

export default function ElementorPowerCtaSection({ onQuoteClick }) {
  const blockRef = useRef(null);

  useEffect(() => {
    const el = blockRef.current;
    if (!el) return;
    const tween = gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        boxSizing: "border-box",
        padding: "clamp(72px, 9vw, 120px) clamp(24px, 6vw, 88px)",
      }}
    >
      <div
        ref={blockRef}
        style={{
          maxWidth: "min(920px, 100%)",
          margin: "0 auto",
          textAlign: "center",
          opacity: 0,
        }}
      >
        <h2
          style={{
            margin: 0,
            fontWeight: 700,
            fontSize: FONT_H2,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: GREEN,
          }}
        >
          A faster site is just minutes away
        </h2>

        {BODY_PARAS.map((text, idx) => (
          <p
            key={idx}
            style={{
              margin: idx === 0 ? "clamp(22px, 2.8vw, 32px) auto 0" : "clamp(14px, 1.8vw, 20px) auto 0",
              maxWidth: "72ch",
              fontWeight: 400,
              fontSize: FONT_BODY,
              lineHeight: 1.78,
              color: BODY,
            }}
          >
            {text}
          </p>
        ))}

        <div
          style={{
            marginTop: "clamp(32px, 4vw, 48px)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            type="button"
            onClick={() => onQuoteClick?.()}
            style={{
              cursor: "pointer",
              border: "none",
              borderRadius: "999px",
              padding: "14px 28px",
              fontWeight: 600,
              fontSize: FONT_BODY,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              backgroundColor: GREEN,
              boxShadow: "0 10px 28px rgba(22, 45, 36, 0.22)",
            }}
          >
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
