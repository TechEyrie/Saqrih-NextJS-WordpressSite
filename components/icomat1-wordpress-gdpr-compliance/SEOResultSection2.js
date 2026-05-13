"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SECTION_BG = "#ffffff";
const GREEN = "#162D24";
const BODY = "rgba(22, 45, 36, 0.82)";
const CHECK_GREEN = "#155E46";
const LIME_BOX = "#DFFB85";
const ICON_INK = "#162D24";

/** Align with migration `SEOResultSection2` H2 + `SEOResultSection` body scale */
const FONT_H2 = "clamp(2rem, 3.8vw, 3.1rem)";
const FONT_BODY = "clamp(1.05rem, 1.25vw, 1.2rem)";
const FONT_CARD_TITLE = "clamp(1.18rem, 1.42vw, 1.35rem)";
const FONT_FEATURE_H3 = "clamp(1.28rem, 1.55vw, 1.48rem)";

const INCLUDES = [
  "Names and addresses",
  "Personal identification documents",
  "Web data, such as IP addresses and cookies",
  "Data concerning health, race, and sexual orientation",
  "Information about political leanings",
];

function CheckListItem({ text }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "clamp(12px, 1.5vw, 16px)",
      }}
    >
      <span
        aria-hidden
        style={{
          flexShrink: 0,
          width: "clamp(26px, 2.6vw, 30px)",
          height: "clamp(26px, 2.6vw, 30px)",
          borderRadius: "50%",
          border: `2px solid ${CHECK_GREEN}`,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2px",
          backgroundColor: "rgba(21, 94, 70, 0.08)",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path
            d="M2.5 6l2.5 2.5L9.5 3.5"
            stroke={CHECK_GREEN}
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span
        style={{
          color: BODY,
          fontSize: FONT_BODY,
          lineHeight: 1.72,
          fontWeight: 400,
        }}
      >
        {text}
      </span>
    </div>
  );
}

function IconPenalties() {
  return (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3.5l8.5 14.5H3.5L12 3.5z"
        stroke={ICON_INK}
        strokeWidth="1.85"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 10.5l5 5M14.5 10.5l-5 5"
        stroke={ICON_INK}
        strokeWidth="1.65"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconUserExperience() {
  return (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="14" height="10" rx="1.5" stroke={ICON_INK} strokeWidth="1.75" />
      <path d="M5 17h10" stroke={ICON_INK} strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="17" cy="9" r="3" stroke={ICON_INK} strokeWidth="1.75" />
      <path
        d="M17 6.5v1.5M18.8 8.2l-1.1 1.1M15.3 8.2l1.1 1.1M17 11.5V10"
        stroke={ICON_INK}
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M19 14c1.5 0 2.5 1 2.5 2.5H19"
        stroke={ICON_INK}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
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

export default function SEOResultSection2() {
  const dataTypesRef = useRef(null);
  const whyRef = useRef(null);

  useReveal(dataTypesRef);
  useReveal(whyRef);

  return (
    <>
      {/* ── Block 1: types of data (white + two-column + checklist card) ── */}
      <section
        style={{
          width: "100%",
          backgroundColor: SECTION_BG,
          boxSizing: "border-box",
          padding: "clamp(64px, 8vw, 112px) clamp(24px, 6vw, 100px)",
        }}
      >
        <div
          ref={dataTypesRef}
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            opacity: 0,
          }}
        >
          <header
            style={{
              textAlign: "center",
              marginBottom: "clamp(40px, 5vw, 56px)",
              maxWidth: "900px",
              marginLeft: "auto",
              marginRight: "auto",
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
              What types of data does the GDPR for WordPress cover?
            </h2>
            <p
              style={{
                margin: "clamp(18px, 2.5vw, 24px) auto 0",
                maxWidth: "72ch",
                color: BODY,
                fontSize: FONT_BODY,
                lineHeight: 1.75,
              }}
            >
              The concept of &apos;private data&apos; might seem a little too broad. Generally
              speaking, the GDPR covers all user information that identifies a person in any way.
            </p>
          </header>

          <div
            className="gdpr-data-split"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: "clamp(28px, 4vw, 48px)",
              alignItems: "start",
            }}
          >
            <div style={{ textAlign: "left" }}>
              <p
                style={{
                  margin: 0,
                  color: BODY,
                  fontSize: FONT_BODY,
                  lineHeight: 1.78,
                }}
              >
                In a nutshell, the GDPR states that you need to be careful with any and all user
                information. You are also required to allow users full control over these datasets.
                Luckily, WP GDPR compliance makes things a little easier, since the platform has been
                implementing such features into their codebase. We can then build on that
                foundation to help you get started with these requirements.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "clamp(18px, 2vw, 24px)",
                padding: "clamp(24px, 3.5vw, 36px) clamp(22px, 3vw, 32px)",
                boxShadow: "0 12px 48px rgba(22, 45, 36, 0.1)",
                border: "1px solid rgba(22, 45, 36, 0.1)",
              }}
            >
              <p
                style={{
                  margin: "0 0 clamp(16px, 2vw, 22px)",
                  fontWeight: 700,
                  fontSize: FONT_CARD_TITLE,
                  color: GREEN,
                  letterSpacing: "-0.02em",
                }}
              >
                This includes:
              </p>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "clamp(14px, 1.8vw, 18px)",
                }}
              >
                {INCLUDES.map((line) => (
                  <li key={line}>
                    <CheckListItem text={line} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Block 2: why compliance (white + intro + two lime-tile columns, migration-style) ── */}
      <section
        style={{
          width: "100%",
          backgroundColor: SECTION_BG,
          boxSizing: "border-box",
          padding: "clamp(64px, 8vw, 112px) clamp(24px, 6vw, 100px)",
          borderTop: "1px solid rgba(22, 45, 36, 0.08)",
        }}
      >
        <div
          ref={whyRef}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            opacity: 0,
          }}
        >
          <header
            style={{
              textAlign: "center",
              marginBottom: "clamp(40px, 5vw, 56px)",
              maxWidth: "920px",
              marginLeft: "auto",
              marginRight: "auto",
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
              Why is it important to implement WordPress GDPR compliance?
            </h2>
            <p
              style={{
                margin: "clamp(18px, 2.5vw, 24px) auto 0",
                maxWidth: "72ch",
                color: BODY,
                fontSize: FONT_BODY,
                lineHeight: 1.75,
              }}
            >
              At its core, the GDPR is all about ensuring that websites act responsibly when it
              comes to collecting and processing user data. While users&apos; rights should always
              be a priority, there are other reasons you should strive to ensure WordPress GDPR
              compliance.
            </p>
          </header>

          <div
            className="gdpr-why-features"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "clamp(28px, 4vw, 48px)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "clamp(16px, 2vw, 22px)",
              }}
            >
              <div
                style={{
                  width: "clamp(88px, 8vw, 112px)",
                  height: "clamp(88px, 8vw, 112px)",
                  borderRadius: "18px",
                  backgroundColor: LIME_BOX,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <IconPenalties />
              </div>
              <h3
                style={{
                  margin: 0,
                  fontWeight: 700,
                  fontSize: FONT_FEATURE_H3,
                  color: GREEN,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.25,
                  maxWidth: "32ch",
                }}
              >
                Penalties for non-compliance
              </h3>
              <p
                style={{
                  margin: 0,
                  fontWeight: 400,
                  fontSize: FONT_BODY,
                  color: BODY,
                  lineHeight: 1.72,
                  maxWidth: "52ch",
                }}
              >
                Companies with websites that aren&apos;t GDPR compliant can incur heavy fines. Fines
                can rise up to EUR 20 million, or 4% of your overall earnings for the fiscal year.
                Whether you&apos;re a small or big company, it&apos;s not worth the risk of this
                possibility.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "clamp(16px, 2vw, 22px)",
              }}
            >
              <div
                style={{
                  width: "clamp(88px, 8vw, 112px)",
                  height: "clamp(88px, 8vw, 112px)",
                  borderRadius: "18px",
                  backgroundColor: LIME_BOX,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <IconUserExperience />
              </div>
              <h3
                style={{
                  margin: 0,
                  fontWeight: 700,
                  fontSize: FONT_FEATURE_H3,
                  color: GREEN,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.25,
                  maxWidth: "32ch",
                }}
              >
                Improving the user experience
              </h3>
              <p
                style={{
                  margin: 0,
                  fontWeight: 400,
                  fontSize: FONT_BODY,
                  color: BODY,
                  lineHeight: 1.72,
                  maxWidth: "52ch",
                }}
              >
                By adhering to GDPR guidelines on your WordPress site, you offer users more control
                over their data and help them protect their privacy. This translates to a better
                user experience and increased trust in your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .gdpr-data-split {
            grid-template-columns: 1fr !important;
          }
          .gdpr-why-features {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
