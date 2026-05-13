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
const FONT_FEATURE_H3 = "clamp(1.28rem, 1.55vw, 1.48rem)";
const LIME_BOX = "#DFFB85";
const ICON_INK = "#162D24";

const ICON_BOX =
  "clamp(100px, 10.5vw, 132px)";
const ICON_SVG = 68;

/** Drag-and-drop / visual editor */
function IconIntuitiveInterface() {
  return (
    <svg width={ICON_SVG} height={ICON_SVG} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="4" width="8" height="7" rx="1.5" stroke={ICON_INK} strokeWidth="1.75" />
      <rect x="13" y="4" width="8" height="4" rx="1.2" stroke={ICON_INK} strokeWidth="1.75" />
      <rect x="13" y="10" width="8" height="10" rx="1.5" stroke={ICON_INK} strokeWidth="1.75" />
      <rect x="3" y="13" width="8" height="7" rx="1.5" stroke={ICON_INK} strokeWidth="1.75" />
      <path
        d="M7 7.5h.01M11 17.5h.01"
        stroke={ICON_INK}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Site-wide templates: header / body / footer */
function IconThemeBuilder() {
  return (
    <svg width={ICON_SVG} height={ICON_SVG} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="4" width="17" height="16" rx="2" stroke={ICON_INK} strokeWidth="1.75" />
      <path d="M3.5 8h17" stroke={ICON_INK} strokeWidth="1.75" />
      <path d="M3.5 17h17" stroke={ICON_INK} strokeWidth="1.75" />
      <path d="M7 6v2M12 6v2M17 6v2" stroke={ICON_INK} strokeWidth="1.4" strokeLinecap="round" />
      <rect x="6" y="11" width="5" height="3" rx="0.6" stroke={ICON_INK} strokeWidth="1.35" />
      <rect x="13" y="11" width="5" height="3" rx="0.6" stroke={ICON_INK} strokeWidth="1.35" />
    </svg>
  );
}

/** Shortcuts / widgets / power features */
function IconAdvancedFeatures() {
  return (
    <svg width={ICON_SVG} height={ICON_SVG} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="6" width="18" height="12" rx="2" stroke={ICON_INK} strokeWidth="1.75" />
      <path d="M6 10h4M6 13h3M6 16h5" stroke={ICON_INK} strokeWidth="1.5" strokeLinecap="round" />
      <rect x="12.5" y="9.5" width="6" height="4" rx="0.8" stroke={ICON_INK} strokeWidth="1.35" />
      <path d="M14.2 11.3l1.3 1.3 2.3-2.3" stroke={ICON_INK} strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const FEATURE_ICONS = [IconIntuitiveInterface, IconThemeBuilder, IconAdvancedFeatures];

const INTRO =
  "Elementor is a comprehensive WordPress website builder that combines powerful features with a user-friendly interface. Despite its extensive functionality, Elementor remains accessible to users of all skill levels, offering an intuitive drag-and-drop editor and a wide array of design options.";

const FEATURES = [
  {
    title: "Elementor's intuitive interface",
    body: "Elementor offers a robust drag-and-drop visual editor, enabling users to design and customize their websites in real-time without any coding knowledge. This intuitive interface allows for seamless placement and arrangement of elements, making it suitable for both minor content adjustments and the creation of entirely new pages.",
  },
  {
    title: "Elementor theme builder",
    body: "For a comprehensive site-wide design approach, Elementor Pro includes a Theme Builder feature. This tool empowers users to craft custom headers, footers, single post templates, archive pages, and more, ensuring a cohesive and personalized design across the entire website.",
  },
  {
    title: "Advanced features",
    body: "To enhance efficiency, Elementor provides advanced features such as global widgets, which can be reused across multiple pages, and keyboard shortcuts to streamline the design process. These tools, combined with extendable styles, allow for consistent and efficient customization, enabling users to apply changes across numerous elements simultaneously.",
  },
];

const CLOSING =
  "We keep these benefits in mind while we build and host your Elementor website. We also avoid any changes that might make editing the page more difficult for you later on.";

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

export default function SEOResultSection2({ onQuoteClick }) {
  const topRef = useRef(null);

  useReveal(topRef);

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
          ref={topRef}
          style={{
            width: "100%",
            maxWidth: "min(1320px, 100%)",
            margin: "0 auto",
            opacity: 0,
          }}
        >
          <div
            style={{
              maxWidth: "min(920px, 100%)",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
          <header
            style={{
              textAlign: "center",
              marginBottom: "clamp(28px, 4vw, 40px)",
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
              Effective Elementor features with a user-friendly interface
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
              {INTRO}
            </p>
          </header>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "clamp(40px, 5vw, 56px)",
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
              Get a quote
            </button>
          </div>
          </div>

          <div
            className="elementor-seo2-features"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "clamp(28px, 4vw, 48px)",
              alignItems: "start",
            }}
          >
            {FEATURES.map((item, index) => {
              const Icon = FEATURE_ICONS[index];
              return (
                <div
                  key={item.title}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "clamp(18px, 2.2vw, 24px)",
                    minWidth: 0,
                  }}
                >
                  <div
                    style={{
                      width: ICON_BOX,
                      height: ICON_BOX,
                      borderRadius: "clamp(18px, 2vw, 22px)",
                      backgroundColor: LIME_BOX,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon />
                  </div>
                <h3
                  style={{
                    margin: 0,
                    fontWeight: 700,
                    fontSize: FONT_FEATURE_H3,
                    color: GREEN,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.25,
                    maxWidth: "28ch",
                  }}
                >
                  {item.title}
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
                  {item.body}
                </p>
              </div>
              );
            })}
          </div>

          <div
            style={{
              marginTop: "clamp(24px, 3.2vw, 40px)",
              maxWidth: "min(72ch, 100%)",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
            }}
          >
            <p
              style={{
                margin: 0,
                fontWeight: 400,
                fontSize: FONT_BODY,
                color: BODY,
                lineHeight: 1.78,
              }}
            >
              {CLOSING}
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .elementor-seo2-features {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
