"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const GREEN = "#162D24";
const LIME = "#DFFB85";
const INK = "rgba(255,255,255,0.96)";
const INK_SOFT = "rgba(255,255,255,0.78)";

/** Synced with `SEOResultSection` + `ProjectsTenYearsSection` (sell-my-design-company) */
const FONT_H2 = "clamp(2rem, 3.8vw, 3.1rem)";
const FONT_BODY = "clamp(1.05rem, 1.25vw, 1.2rem)";
const FONT_TITLE = "clamp(1.28rem, 1.55vw, 1.48rem)";

const ICON = 40;

/** Same glass “Get a Quote” control as `components/icomat1/HeroSection.js` `HeroQuoteButton` */
function GlassQuoteButton({ onClick }) {
  const wrapRef = useRef(null);
  const textRef = useRef(null);
  const cloneRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const text = textRef.current;
    const clone = cloneRef.current;
    if (!wrap || !text || !clone) return;

    const H = wrap.offsetHeight;
    gsap.set(clone, { y: H, opacity: 1 });
    gsap.set(text, { y: 0, opacity: 1 });

    const onEnter = () => {
      tlRef.current?.kill();
      gsap.to(wrap, {
        backgroundColor: "rgba(255,255,255,0.96)",
        borderColor: "rgba(255,255,255,1)",
        duration: 0.35,
        ease: "power2.out",
      });
      tlRef.current = gsap.timeline({
        defaults: { duration: 0.52, ease: "power3.inOut" },
      });
      tlRef.current.to(text, { y: -H }, 0).to(clone, { y: 0 }, 0);
    };

    const onLeave = () => {
      tlRef.current?.kill();
      gsap.to(wrap, {
        backgroundColor: "rgba(255,255,255,0.12)",
        borderColor: "rgba(255,255,255,0.34)",
        duration: 0.35,
        ease: "power2.out",
      });
      tlRef.current = gsap.timeline({
        defaults: { duration: 0.48, ease: "power3.inOut" },
      });
      tlRef.current.to(clone, { y: H }, 0).to(text, { y: 0 }, 0);
    };

    wrap.addEventListener("mouseenter", onEnter);
    wrap.addEventListener("mouseleave", onLeave);

    return () => {
      wrap.removeEventListener("mouseenter", onEnter);
      wrap.removeEventListener("mouseleave", onLeave);
      tlRef.current?.kill();
    };
  }, []);

  return (
    <button
      ref={wrapRef}
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center text-[14px] sm:text-[15px] tracking-[0.09em] font-semibold uppercase"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "15px 60px",
        borderRadius: "12px",
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.34)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), 0 8px 24px rgba(0,0,0,0.3)",
        cursor: onClick ? "pointer" : "default",
      }}
    >
      <span
        ref={textRef}
        style={{ display: "block", lineHeight: 1, color: "#ffffff", whiteSpace: "nowrap" }}
      >
        Get a Quote
      </span>
      <span
        ref={cloneRef}
        aria-hidden="true"
        style={{
          display: "block",
          lineHeight: 1,
          color: "#101010",
          whiteSpace: "nowrap",
          position: "absolute",
        }}
      >
        Get a Quote
      </span>
    </button>
  );
}

function IconPersonCheck() {
  return (
    <svg width={ICON} height={ICON} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="8" r="3" stroke={GREEN} strokeWidth="1.6" />
      <path
        d="M4 20v-1a4 4 0 014-4h2a4 4 0 014 4v1"
        stroke={GREEN}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M17 14l2 2 4-4"
        stroke={GREEN}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconChatQuestion() {
  return (
    <svg width={ICON} height={ICON} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 5h10a2 2 0 012 2v6a2 2 0 01-2 2h-4l-3 3v-3H6a2 2 0 01-2-2V7a2 2 0 012-2z"
        stroke={GREEN}
        strokeWidth="1.55"
        strokeLinejoin="round"
      />
      <path
        d="M11 17h6a2 2 0 002-2v-5"
        stroke={GREEN}
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 9.5a2 2 0 114 0c0 1-.5 1.5-1 2-.3.3-.5.6-.5 1"
        stroke={GREEN}
        strokeWidth="1.45"
        strokeLinecap="round"
      />
      <circle cx="11" cy="15" r="0.75" fill={GREEN} />
    </svg>
  );
}

function IconPeopleNetwork() {
  return (
    <svg width={ICON} height={ICON} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="6" r="2.2" stroke={GREEN} strokeWidth="1.5" />
      <circle cx="6" cy="17" r="2.2" stroke={GREEN} strokeWidth="1.5" />
      <circle cx="18" cy="17" r="2.2" stroke={GREEN} strokeWidth="1.5" />
      <path
        d="M12 8.5v3M10.5 14l-3 1.5M13.5 14l3 1.5"
        stroke={GREEN}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M8 15.5l4-2M16 15.5l-4-2"
        stroke={GREEN}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCheckCircle() {
  return (
    <svg width={ICON} height={ICON} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke={GREEN} strokeWidth="1.6" />
      <path d="M8 12l2.5 2.5L16 9" stroke={GREEN} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const FEATURES = [
  {
    id: "support",
    title: "In-house support staff",
    body: "All client support is handled by our internal team of WordPress professionals, ensuring consistent quality and accountability.",
    Icon: IconPersonCheck,
  },
  {
    id: "fast",
    title: "Fast & responsive service",
    body: "We prioritize quick response times and efficient issue resolution to keep your clients’ websites running smoothly.",
    Icon: IconChatQuestion,
  },
  {
    id: "relationships",
    title: "Personal relationships",
    body: "We maintain strong, human-centered communication with every client, preserving trust throughout and after the transition.",
    Icon: IconPeopleNetwork,
  },
  {
    id: "experience",
    title: "Years of proven experience",
    body: "With extensive experience in WordPress and agency acquisitions, we know how to manage transitions while protecting client satisfaction and business continuity.",
    Icon: IconCheckCircle,
  },
];

function FeatureCell({ item }) {
  const Icon = item.Icon;
  return (
    <div
      className="sell-mdc-feature-cell"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "clamp(16px, 2.2vw, 24px)",
        textAlign: "left",
      }}
    >
      <div
        style={{
          flexShrink: 0,
          width: "clamp(72px, 7vw, 92px)",
          height: "clamp(72px, 7vw, 92px)",
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
      <div style={{ minWidth: 0 }}>
        <h3
          style={{
            margin: 0,
            color: INK,
            fontWeight: 700,
            fontSize: FONT_TITLE,
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            margin: "clamp(8px, 1vw, 12px) 0 0",
            color: INK_SOFT,
            fontSize: FONT_BODY,
            lineHeight: 1.78,
          }}
        >
          {item.body}
        </p>
      </div>
    </div>
  );
}

export default function MigrationRevampCtaSection({ onQuoteClick }) {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: GREEN,
        boxSizing: "border-box",
        padding: "clamp(72px, 9vw, 120px) clamp(24px, 5vw, 72px)",
      }}
    >
      <div
        style={{
          maxWidth: "min(1100px, 100%)",
          margin: "0 auto",
        }}
      >
        <header
          style={{
            textAlign: "center",
            marginBottom: "clamp(44px, 5.5vw, 64px)",
            maxWidth: "920px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h2
            style={{
              margin: 0,
              color: INK,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              fontSize: FONT_H2,
            }}
          >
            Your Peace of Mind Is Our Priority
          </h2>
          <p
            style={{
              margin: "clamp(18px, 2.5vw, 26px) auto 0",
              maxWidth: "72ch",
              color: INK_SOFT,
              fontSize: FONT_BODY,
              lineHeight: 1.78,
            }}
          >
            Deciding to sell your web design company is never easy. You&apos;ve put significant time
            and effort into building your business, and your client relationships are a major part of
            that success. When the time comes to transition, Eyrion ensures your clients continue
            receiving the same high level of care and support they&apos;re used to.
          </p>
        </header>

        <div
          className="sell-mdc-feature-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            columnGap: "clamp(40px, 5vw, 72px)",
            rowGap: "clamp(36px, 4.5vw, 52px)",
            alignItems: "start",
          }}
        >
          {FEATURES.map((item) => (
            <FeatureCell key={item.id} item={item} />
          ))}
        </div>

        <div
          style={{
            marginTop: "clamp(44px, 5.5vw, 64px)",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <GlassQuoteButton onClick={onQuoteClick} />
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .sell-mdc-feature-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .sell-mdc-feature-cell {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
