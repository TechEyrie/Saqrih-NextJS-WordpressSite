"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GREEN = "#162D24";
const LIME = "#DFFB85";
const BODY = "rgba(22, 45, 36, 0.82)";
const ICON_STROKE = GREEN;

function IconDesign() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke={ICON_STROKE} strokeWidth="1.65" />
      <path d="M3 9h18M9 21V9" stroke={ICON_STROKE} strokeWidth="1.65" strokeLinecap="round" />
    </svg>
  );
}

function IconDevelopment() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <polyline
        points="16 18 22 12 16 6"
        stroke={ICON_STROKE}
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="8 6 2 12 8 18"
        stroke={ICON_STROKE}
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSupport() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        stroke={ICON_STROKE}
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMaintenance() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="3" stroke={ICON_STROKE} strokeWidth="1.65" />
      <path
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        stroke={ICON_STROKE}
        strokeWidth="1.65"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ITEMS = [
  {
    id: "design",
    title: "White label WordPress design",
    body: "World-class WordPress website design solutions delivered under your brand, helping you offer high-quality design services without expanding your in-house team.",
    Icon: IconDesign,
  },
  {
    id: "development",
    title: "White label WordPress development",
    body: "Experienced WordPress developers working behind the scenes to build, enhance, and maintain websites on behalf of your agency or business.",
    Icon: IconDevelopment,
  },
  {
    id: "support",
    title: "White label WordPress support",
    body: "A reliable support team handling ongoing updates, troubleshooting, and client requests so your WordPress sites continue to perform smoothly.",
    Icon: IconSupport,
  },
  {
    id: "maintenance",
    title: "White label WordPress maintenance",
    body: "Automated and managed maintenance services that keep your websites secure, updated, and optimized while you focus on growth.",
    Icon: IconMaintenance,
  },
];

function SEOCard({ item, index }) {
  const cardRef = useRef(null);
  const Icon = item.Icon;

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        delay: (index % 2) * 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      style={{
        opacity: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "clamp(16px, 2vw, 24px)",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "clamp(60px, 5.8vw, 82px)",
          height: "clamp(60px, 5.8vw, 82px)",
          borderRadius: "16px",
          backgroundColor: LIME,
          border: "1px solid rgba(22, 45, 36, 0.06)",
          flexShrink: 0,
        }}
      >
        <Icon />
      </div>

      <div style={{ flex: "1 1 0", minWidth: 0 }}>
        <h3
          style={{
            fontWeight: 700,
            fontSize: "clamp(1.45rem, 2vw, 1.95rem)",
            color: GREEN,
            lineHeight: 1.22,
            letterSpacing: "-0.01em",
            margin: "0 0 clamp(10px, 1.2vw, 16px) 0",
          }}
        >
          {item.title}
        </h3>

        <p
          style={{
            fontWeight: 400,
            fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)",
            color: BODY,
            lineHeight: 1.72,
            margin: 0,
          }}
        >
          {item.body}
        </p>
      </div>
    </div>
  );
}

export default function SEOResultsSection() {
  const headingRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        boxSizing: "border-box",
        padding: "clamp(64px, 8vw, 112px) clamp(24px, 6vw, 100px)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "980px",
          margin: "0 auto clamp(56px, 7vw, 96px)",
        }}
      >
        <h2
          ref={headingRef}
          style={{
            opacity: 0,
            fontWeight: 700,
            fontSize: "clamp(2rem, 3.8vw, 3.1rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: GREEN,
            margin: 0,
          }}
        >
          White label WordPress services you can rely on
        </h2>
      </div>

      <div
        className="white-label-seo-grid"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "clamp(28px, 3.5vw, 48px) clamp(32px, 4vw, 48px)",
        }}
      >
        {ITEMS.map((item, i) => (
          <SEOCard key={item.id} item={item} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .white-label-seo-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
