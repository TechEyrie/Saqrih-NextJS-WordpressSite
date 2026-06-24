"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GREEN = "#162D24";
const LIME = "#DFFB85";
/** Light text on main green (`#162D24`) — synced across these three sections */
const INK = "rgba(255,255,255,0.96)";
const INK_SOFT = "rgba(255,255,255,0.78)";
const ICON_STROKE = GREEN;
/** Synced with `MigrationRevampCtaSection` + `ProjectsTenYearsSection` (sell-my-design-company) */
const FONT_H2 = "clamp(2rem, 3.8vw, 3.1rem)";
const FONT_BODY = "clamp(1.05rem, 1.25vw, 1.2rem)";
const FONT_TITLE = "clamp(1.28rem, 1.55vw, 1.48rem)";
const ICON_SZ = 46;

function IconSmiley() {
  return (
    <svg width={ICON_SZ} height={ICON_SZ} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke={ICON_STROKE} strokeWidth="1.45" />
      <path
        d="M8.5 10.5c.8-.6 1.7-.6 2.5 0M13 10.5c.8-.6 1.7-.6 2.5 0"
        stroke={ICON_STROKE}
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path d="M8 14.5c1.2 2 2.8 3 4 3s2.8-1 4-3" stroke={ICON_STROKE} strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function IconPuzzle() {
  return (
    <svg width={ICON_SZ} height={ICON_SZ} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 5h7v5H8v3H5V5zm7 0h7v7h-3v3h-4v-3H12V5z"
        stroke={ICON_STROKE}
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path
        d="M5 13h7v6H5v-6zm9 3h5v4h-5v-4z"
        stroke={ICON_STROKE}
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconHeadset() {
  return (
    <svg width={ICON_SZ} height={ICON_SZ} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 14v3a2 2 0 002 2h1M19 14v3a2 2 0 01-2 2h-1"
        stroke={ICON_STROKE}
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 14a7 7 0 0114 0"
        stroke={ICON_STROKE}
        strokeWidth="1.55"
        strokeLinecap="round"
      />
      <path
        d="M8 14h2v4H8a1 1 0 01-1-1v-2a1 1 0 011-1zM14 14h2a1 1 0 011 1v2a1 1 0 01-1 1h-2v-4z"
        stroke={ICON_STROKE}
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path
        d="M17 8h2.5a1 1 0 011 1v2a1 1 0 01-1 1H17"
        stroke={ICON_STROKE}
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconUsFlag() {
  return (
    <svg width={ICON_SZ} height={ICON_SZ} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M11 3v18" stroke={ICON_STROKE} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 5h8v10H12V5z" stroke={ICON_STROKE} strokeWidth="1.45" strokeLinejoin="round" />
      <path d="M12 5h4v5h-4V5z" fill={ICON_STROKE} fillOpacity="0.12" />
      <path d="M12 8h8M12 10.5h8M12 13h8" stroke={ICON_STROKE} strokeWidth="1" strokeOpacity="0.45" />
      <path d="M13 6h1M14.2 6h1M13 7.2h1M14.2 7.2h1" stroke={ICON_STROKE} strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}

const ITEMS = [
  {
    id: "hassle",
    title: "Hassle-free sale",
    body: "We make selling your web design business straightforward and efficient. With multiple successful acquisitions completed, our process is refined to reduce stress and keep everything moving smoothly.",
    Icon: IconSmiley,
  },
  {
    id: "transition",
    title: "Seamless transition",
    body: "With deep WordPress expertise and experienced onboarding teams, we ensure a smooth handover of your clients, projects, and systems—minimizing disruption and maintaining service quality throughout.",
    Icon: IconPuzzle,
  },
  {
    id: "support",
    title: "Ongoing personalized support",
    body: "We provide dedicated, tailored support for your clients after acquisition, ensuring they continue to receive responsive communication and reliable WordPress services.",
    Icon: IconHeadset,
  },
  {
    id: "us-team",
    title: "Established US-based team",
    body: "Saqrih is backed by a skilled, US-based team of designers, developers, and support professionals who manage projects with consistency, accountability, and technical expertise.",
    Icon: IconUsFlag,
  },
];

function BenefitCard({ item, index }) {
  const cardRef = useRef(null);
  const Icon = item.Icon;

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        delay: (index % 2) * 0.08 + Math.floor(index / 2) * 0.06,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
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
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "clamp(16px, 2vw, 20px)",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "clamp(88px, 8vw, 112px)",
          height: "clamp(88px, 8vw, 112px)",
          borderRadius: "18px",
          backgroundColor: LIME,
          border: "1px solid rgba(22, 45, 36, 0.06)",
          flexShrink: 0,
        }}
      >
        <Icon />
      </div>
      <h3
        style={{
          fontWeight: 700,
          fontSize: FONT_TITLE,
          color: INK,
          lineHeight: 1.25,
          letterSpacing: "-0.02em",
          margin: 0,
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          fontWeight: 400,
          fontSize: FONT_BODY,
          color: INK_SOFT,
          lineHeight: 1.78,
          margin: 0,
          maxWidth: "48ch",
        }}
      >
        {item.body}
      </p>
    </div>
  );
}

export default function SEOResultsSection() {
  const leftRef = useRef(null);

  useEffect(() => {
    const el = leftRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 20 },
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
  }, []);

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: GREEN,
        boxSizing: "border-box",
        padding: "clamp(64px, 8vw, 112px) clamp(24px, 6vw, 100px)",
      }}
    >
      <div
        className="sell-seo-split"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 0.88fr) minmax(0, 1.32fr)",
          gap: "clamp(40px, 6vw, 88px)",
          alignItems: "start",
        }}
      >
        <div
          ref={leftRef}
          style={{
            opacity: 0,
            textAlign: "left",
            paddingTop: "clamp(4px, 0.6vw, 10px)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontWeight: 700,
              fontSize: FONT_H2,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: INK,
              maxWidth: "min(32ch, 100%)",
            }}
          >
            Why Sell Your Web Design Company to Saqrih?
          </h2>
          <p
            style={{
              margin: "clamp(18px, 2.2vw, 26px) 0 0",
              maxWidth: "52ch",
              color: INK_SOFT,
              fontSize: FONT_BODY,
              lineHeight: 1.78,
            }}
          >
            At Saqrih, we focus on fair, transparent acquisitions and ensure your clients continue
            to receive the same level of professionalism and care they&apos;re used to.
          </p>
        </div>

        <div
          className="sell-seo-benefits-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            columnGap: "clamp(32px, 4.5vw, 56px)",
            rowGap: "clamp(36px, 4vw, 52px)",
          }}
        >
          {ITEMS.map((item, i) => (
            <BenefitCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .sell-seo-split {
            grid-template-columns: 1fr !important;
          }
          .sell-seo-benefits-grid {
            column-gap: clamp(24px, 4vw, 40px) !important;
          }
        }
        @media (max-width: 560px) {
          .sell-seo-benefits-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
