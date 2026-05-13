"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GREEN = "#162D24";
const LIME = "#DFFB85";
const INK = "rgba(255,255,255,0.96)";
const INK_SOFT = "rgba(255,255,255,0.78)";

/** Synced with `SEOResultSection` + `MigrationRevampCtaSection` (sell-my-design-company) */
const FONT_H2 = "clamp(2rem, 3.8vw, 3.1rem)";
const FONT_BODY = "clamp(1.05rem, 1.25vw, 1.2rem)";
const FONT_TITLE = "clamp(1.28rem, 1.55vw, 1.48rem)";

const ICON = 36;

/** Stacked layers + arrow (any size / scale) */
function IconLayersArrow() {
  return (
    <svg width={ICON} height={ICON} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 4l7 4-7 4-7-4 7-4zM5 12l7 4 7-4M5 16l7 4 7-4"
        stroke={GREEN}
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path
        d="M16 6h4v4M16 10l4-4"
        stroke={GREEN}
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Magnifying glass over bars (volume / analysis) */
function IconSearchChart() {
  return (
    <svg width={ICON} height={ICON} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 17V11h3v6H5zm5 2V8h3v11h-3zm5-4v-4h3v8h-3z" stroke={GREEN} strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="15.5" cy="8.5" r="3.25" stroke={GREEN} strokeWidth="1.45" />
      <path d="M17.8 10.7L20 13" stroke={GREEN} strokeWidth="1.55" strokeLinecap="round" />
    </svg>
  );
}

/** City / industry skyline */
function IconBuildings() {
  return (
    <svg width={ICON} height={ICON} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 20V10h4v10H4z" stroke={GREEN} strokeWidth="1.45" strokeLinejoin="round" />
      <path d="M9 20V6h6v14H9z" stroke={GREEN} strokeWidth="1.45" strokeLinejoin="round" />
      <path d="M16 20v-8h4v8h-4z" stroke={GREEN} strokeWidth="1.45" strokeLinejoin="round" />
      <path d="M6 13h.01M12 10h.01M18 15h.01" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M3 20h18" stroke={GREEN} strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

/** Open box (specialty / delivery) */
function IconOpenBox() {
  return (
    <svg width={ICON} height={ICON} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 9l8 4 8-4M4 9v8l8 4M12 13v8M20 9v8l-8 4"
        stroke={GREEN}
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path d="M4 9l8-3 8 3" stroke={GREEN} strokeWidth="1.45" strokeLinejoin="round" />
      <path d="M12 6v7" stroke={GREEN} strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

const PILLARS = [
  { id: "size", label: "Any size business", Icon: IconLayersArrow },
  { id: "volume", label: "Any volume of clients", Icon: IconSearchChart },
  { id: "market", label: "Any market or industry", Icon: IconBuildings },
  { id: "niche", label: "Any specialty or niche", Icon: IconOpenBox },
];

export default function ProjectsTenYearsSection() {
  const rootRef = useRef(null);
  const headingRef = useRef(null);
  const leadRef = useRef(null);
  const bodyRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const heading = headingRef.current;
    const lead = leadRef.current;
    const body = bodyRef.current;
    const grid = gridRef.current;
    if (!root || !heading || !lead || !body || !grid) return;

    const cells = grid.querySelectorAll("[data-pillar-cell]");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top 86%",
        once: true,
      },
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(heading, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.65 }, 0)
      .fromTo(lead, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55 }, 0.12)
      .fromTo(body, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6 }, 0.22)
      .fromTo(
        cells,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 },
        0.35
      );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      style={{
        width: "100%",
        backgroundColor: GREEN,
        boxSizing: "border-box",
        padding: "clamp(72px, 9vw, 120px) clamp(24px, 5vw, 72px)",
      }}
    >
      <div
        style={{
          maxWidth: "min(1040px, 100%)",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          ref={headingRef}
          style={{
            margin: 0,
            color: INK,
            fontWeight: 700,
            fontSize: FONT_H2,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            opacity: 0,
          }}
        >
          Over 2,400 Projects Within 10 Years
        </h2>

        <p
          ref={leadRef}
          style={{
            margin: "clamp(14px, 2vw, 20px) auto 0",
            maxWidth: "48ch",
            color: INK,
            fontWeight: 600,
            fontSize: FONT_BODY,
            lineHeight: 1.4,
            letterSpacing: "-0.015em",
            opacity: 0,
          }}
        >
          We&apos;ve handled websites and projects of all sizes.
        </p>

        <p
          ref={bodyRef}
          style={{
            margin: "clamp(18px, 2.4vw, 26px) auto 0",
            maxWidth: "62ch",
            marginLeft: "auto",
            marginRight: "auto",
            color: INK_SOFT,
            fontSize: FONT_BODY,
            lineHeight: 1.78,
            opacity: 0,
          }}
        >
          Since our inception over a decade ago, Eyrion has worked on more than 2,000 WordPress
          projects. This experience gives us the ability to step into any web design business and
          confidently manage client demands with consistency and expertise.
        </p>

        <div
          ref={gridRef}
          className="sell-projects-pillars"
          style={{
            marginTop: "clamp(44px, 5.5vw, 64px)",
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            columnGap: "clamp(16px, 3vw, 36px)",
            rowGap: "clamp(24px, 3vw, 32px)",
            alignItems: "start",
            justifyItems: "center",
          }}
        >
          {PILLARS.map((item) => {
            const Icon = item.Icon;
            return (
              <div
                key={item.id}
                data-pillar-cell
                style={{
                  opacity: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "clamp(12px, 1.6vw, 16px)",
                  maxWidth: "min(100%, 240px)",
                }}
              >
                <div
                  style={{
                    width: "clamp(72px, 7vw, 88px)",
                    height: "clamp(72px, 7vw, 88px)",
                    borderRadius: "16px",
                    backgroundColor: LIME,
                    border: "1px solid rgba(22, 45, 36, 0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon />
                </div>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: FONT_TITLE,
                    color: INK,
                    lineHeight: 1.3,
                    textAlign: "center",
                  }}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .sell-projects-pillars {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 480px) {
          .sell-projects-pillars {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
