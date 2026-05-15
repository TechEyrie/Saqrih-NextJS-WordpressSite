"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GREEN = "#162D24";
const LIME = "#DFFB85";
const BODY = "rgba(22, 45, 36, 0.82)";
const ICON_STROKE = GREEN;
const ICON_PX = 42;

function IconSpeed() {
  return (
    <svg width={ICON_PX} height={ICON_PX} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
        stroke={ICON_STROKE}
        strokeWidth="1.85"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconTesting() {
  return (
    <svg width={ICON_PX} height={ICON_PX} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke={ICON_STROKE} strokeWidth="1.85" />
      <path d="M8 12l2.5 2.5L16 9" stroke={ICON_STROKE} strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconReporting() {
  return (
    <svg width={ICON_PX} height={ICON_PX} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 19h16M4 15l4-4 4 3 4-6 4 5" stroke={ICON_STROKE} strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 21V5" stroke={ICON_STROKE} strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconSuggestions() {
  return (
    <svg width={ICON_PX} height={ICON_PX} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 18h6M10 22h4M12 3a6 6 0 016 6c0 2-1 3-2 4v1H8v-1c-1-1-2-2-2-4a6 6 0 016-6z"
        stroke={ICON_STROKE}
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ITEMS = [
  {
    id: "speed",
    title: "Speed improvements",
    body: "From initial WordPress speed testing to implementing targeted performance fixes, we work to reduce load times and improve overall website responsiveness.",
    Icon: IconSpeed,
  },
  {
    id: "testing",
    title: "Testing and development work",
    body: "After applying optimizations, we thoroughly test every change, including CDN implementation and overall website performance, to ensure reliable results.",
    Icon: IconTesting,
  },
  {
    id: "reporting",
    title: "WordPress optimization reporting",
    body: "Throughout the optimization process, we track performance improvements and document the results so you can clearly understand the impact of each change.",
    Icon: IconReporting,
  },
  {
    id: "suggestions",
    title: "Customized suggestions",
    body: "We follow WordPress performance best practices and provide tailored optimization recommendations designed specifically for your website setup and goals.",
    Icon: IconSuggestions,
  },
];

const CLOSING =
  "Let's break down our WordPress speed optimization services so you can better understand the value and impact of each improvement. We use proven methods and data-driven strategies to help maximize your website's speed and performance.";

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
          width: "clamp(76px, 7vw, 100px)",
          height: "clamp(76px, 7vw, 100px)",
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
          Eyrion WordPress Site Speed Optimization Features
        </h2>
        <p
          style={{
            margin: "18px auto 0",
            maxWidth: "920px",
            color: BODY,
            fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)",
            lineHeight: 1.75,
          }}
        >
          We combine advanced optimization techniques with years of WordPress experience to deliver faster, smoother, and
          more reliable website performance for your users.
        </p>
      </div>

      <div
        className="speed-seo-grid"
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

      <p
        style={{
          margin: "clamp(40px, 5vw, 56px) auto 0",
          maxWidth: "min(72ch, 100%)",
          textAlign: "center",
          color: BODY,
          fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)",
          lineHeight: 1.78,
        }}
      >
        {CLOSING}
      </p>

      <style>{`
        @media (max-width: 900px) {
          .speed-seo-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
