"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SECTION_BG = "#ffffff";
const GREEN = "#162D24";
const BODY = "rgba(22, 45, 36, 0.82)";
const LIME_BOX = "#DFFB85";
const ICON_INK = "#162D24";

const FONT_H2 = "clamp(2rem, 3.8vw, 3.1rem)";
const FONT_BODY = "clamp(1.05rem, 1.25vw, 1.2rem)";
const FONT_FEATURE_H3 = "clamp(1.28rem, 1.55vw, 1.48rem)";

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
              Stop Worrying About ADA Lawsuits
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
              WordPress ADA compliance lawsuits are more common than many website owners realize.
            </p>
          </header>

          <div
            className="ada-seo2-data-split"
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
                  margin: "0 0 clamp(16px, 2vw, 22px)",
                  color: BODY,
                  fontSize: FONT_BODY,
                  lineHeight: 1.78,
                }}
              >
                Some websites are actively targeted for failing to meet accessibility standards, and as your traffic
                grows, so does your exposure to potential legal risk.
              </p>
              <p
                style={{
                  margin: 0,
                  color: BODY,
                  fontSize: FONT_BODY,
                  lineHeight: 1.78,
                }}
              >
                First-time violations can result in significant penalties, and repeated issues can lead to even
                higher costs. This is why maintaining WordPress ADA compliance is not optional for growing businesses.
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
                  margin: 0,
                  fontWeight: 500,
                  fontSize: FONT_BODY,
                  color: BODY,
                  lineHeight: 1.78,
                  letterSpacing: "-0.01em",
                }}
              >
                Beyond legal protection, strong accessibility standards also improve usability for all visitors,
                creating a better overall user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

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
              Why is it important to implement WordPress ADA compliance?
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
              At its core, ADA-aligned accessibility is about reducing legal risk while making your WordPress site
              clearer, easier to navigate, and more inclusive for every visitor.
            </p>
          </header>

          <div
            className="ada-seo2-why-features"
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
                Companies with websites that don&apos;t meet accessibility expectations can face complaints,
                demand letters, and litigation. Costs can escalate quickly—especially if issues recur—so proactive ADA
                work on WordPress is far less expensive than reactive fixes.
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
                Strong accessibility practices improve navigation, readability, and compatibility with assistive
                technologies—benefits that extend to every user and often support better SEO and conversion outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .ada-seo2-data-split {
            grid-template-columns: 1fr !important;
          }
          .ada-seo2-why-features {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
