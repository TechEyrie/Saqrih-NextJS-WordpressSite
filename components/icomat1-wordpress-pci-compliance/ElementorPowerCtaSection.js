"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Match other light WordPress service sections */
const GREEN = "#162D24";
const BODY = "rgba(22, 45, 36, 0.82)";

const FONT_H2 = "clamp(2rem, 3.8vw, 3.1rem)";
const FONT_LEAD = "clamp(1.08rem, 1.22vw, 1.22rem)";
const FONT_BODY = "clamp(1.05rem, 1.25vw, 1.2rem)";

const BODY_PARAS = [
  "PCI DSS is a globally recognized security standard created to protect cardholder data during online transactions. For WordPress websites that process payments or operate ecommerce platforms, PCI compliance is essential for securing sensitive customer information and maintaining trust.",
  "Achieving PCI compliance involves implementing strong security measures such as secure networks, encrypted payment data transmission, regular monitoring, and vulnerability testing. While WordPress provides a flexible foundation, full PCI compliance also requires secure payment gateways, proper configurations, and ongoing security best practices.",
  `Failing to meet PCI DSS requirements can result in data breaches, financial penalties, and damage to customer confidence. By improving PCI compliance on your WordPress website, you help protect both your business and your customers' payment information.`,
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
          What Is PCI Compliance for WordPress?
        </h2>

        <p
          style={{
            margin: "clamp(18px, 2.4vw, 26px) auto 0",
            maxWidth: "62ch",
            fontWeight: 600,
            fontSize: FONT_LEAD,
            lineHeight: 1.55,
            letterSpacing: "-0.015em",
            color: GREEN,
          }}
        >
          PCI DSS: Payment Card Industry Data Security Standard
        </p>

        {BODY_PARAS.map((text, idx) => (
          <p
            key={idx}
            style={{
              margin: idx === 0 ? "clamp(20px, 2.6vw, 28px) auto 0" : "clamp(14px, 1.8vw, 20px) auto 0",
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
