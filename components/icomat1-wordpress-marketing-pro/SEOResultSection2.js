"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SECTION_BG = "#ffffff";
const GREEN = "#162D24";
const BODY = "rgba(22, 45, 36, 0.82)";

const FONT_H2 = "clamp(2rem, 3.8vw, 3.1rem)";
const FONT_BODY = "clamp(1.05rem, 1.25vw, 1.2rem)";

const WHY_ITEMS = [
  "Maximize every dollar – Focus your marketing efforts on the highest-ROI opportunities to get the most value from your budget.",
  "Flexible & scalable – Adjust investment levels and execution speed based on your business goals and growth stage.",
  "Multi-channel impact – Improve both organic search visibility and paid campaign performance within one strategy.",
  "Conversion first – Turn more website visitors into qualified leads and customers through focused optimization.",
  "Stay in control – Maintain visibility into budgets, priorities, and overall campaign performance.",
  "Expert guidance – Access experienced marketing professionals without the cost of building a large internal team.",
];

const OUTCOME_ITEMS = [
  "Better visibility in search and paid channels",
  "Higher conversion rates",
  "Optimized marketing spend",
  "Improved website performance",
  "Actionable insights from experts",
];

/** Split on en dash or hyphen between spaces: "Lead – rest" → semibold lead + arrow */
function ArrowListItem({ text, isFirst }) {
  const match = text.match(/^(.+?)\s[–-]\s(.+)$/);
  const rowStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: "clamp(10px, 1.4vw, 14px)",
    marginTop: isFirst ? 0 : "clamp(12px, 1.6vw, 16px)",
  };

  if (match) {
    const [, lead, rest] = match;
    return (
      <div style={rowStyle}>
        <span
          aria-hidden
          style={{
            flexShrink: 0,
            fontWeight: 700,
            fontSize: FONT_BODY,
            lineHeight: 1.65,
            color: GREEN,
            marginTop: "1px",
          }}
        >
          →
        </span>
        <p
          style={{
            margin: 0,
            fontSize: FONT_BODY,
            lineHeight: 1.72,
            color: BODY,
            fontWeight: 400,
          }}
        >
          <span style={{ fontWeight: 600, color: "rgba(22, 45, 36, 0.95)" }}>{lead.trim()}</span>
          <span> – {rest.trim()}</span>
        </p>
      </div>
    );
  }

  return (
    <div style={rowStyle}>
      <span
        aria-hidden
        style={{
          flexShrink: 0,
          fontWeight: 700,
          fontSize: FONT_BODY,
          lineHeight: 1.65,
          color: GREEN,
          marginTop: "1px",
        }}
      >
        →
      </span>
      <p
        style={{
          margin: 0,
          fontSize: FONT_BODY,
          lineHeight: 1.72,
          color: BODY,
          fontWeight: 400,
        }}
      >
        {text}
      </p>
    </div>
  );
}

function useReveal(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const tween = gsap.fromTo(
      el,
      { opacity: 0, y: 24 },
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
  }, [ref]);
}

const cardShell = {
  backgroundColor: "#ffffff",
  borderRadius: "clamp(18px, 2vw, 24px)",
  padding: "clamp(24px, 3.5vw, 36px) clamp(22px, 3vw, 32px)",
  boxShadow: "0 12px 48px rgba(22, 45, 36, 0.1)",
  border: "1px solid rgba(22, 45, 36, 0.1)",
};

export default function SEOResultSection2() {
  const blockRef = useRef(null);
  useReveal(blockRef);

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: SECTION_BG,
        boxSizing: "border-box",
        padding: "clamp(64px, 8vw, 112px) clamp(24px, 6vw, 100px)",
      }}
    >
      <div
        ref={blockRef}
        className="marketing-seo2-block"
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          opacity: 0,
        }}
      >
        <div
          className="marketing-seo2-split"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: "clamp(28px, 4vw, 48px)",
            alignItems: "start",
          }}
        >
          <div style={{ textAlign: "left" }}>
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
              Why it matters
            </h2>
            <div style={{ marginTop: "clamp(22px, 3vw, 32px)" }}>
              {WHY_ITEMS.map((line, i) => (
                <ArrowListItem key={line} text={line} isFirst={i === 0} />
              ))}
            </div>
          </div>

          <div style={cardShell}>
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
              Outcomes & results
            </h2>
            <div style={{ marginTop: "clamp(22px, 3vw, 32px)" }}>
              {OUTCOME_ITEMS.map((line, i) => (
                <ArrowListItem key={line} text={line} isFirst={i === 0} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .marketing-seo2-split {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
