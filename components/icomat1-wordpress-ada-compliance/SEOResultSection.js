"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Match `MigrationRevampCtaSection` (gdpr-compliance): white section, green + lime tiles */
const GREEN = "#162D24";
const LIME = "#DFFB85";
const BODY = "rgba(22, 45, 36, 0.82)";
const ICON_STROKE = GREEN;

function IconConsent() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 4h12v16H8V4zM4 8h3v12H4V8z"
        stroke={ICON_STROKE}
        strokeWidth="1.65"
        strokeLinejoin="round"
      />
      <path d="M11 12l2 2 4-4" stroke={ICON_STROKE} strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconBreach() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3a5 5 0 00-5 5v3.5L5 18h14l-2-6.5V8a5 5 0 00-5-5z"
        stroke={ICON_STROKE}
        strokeWidth="1.65"
        strokeLinejoin="round"
      />
      <path d="M10 18a2 2 0 004 0" stroke={ICON_STROKE} strokeWidth="1.65" strokeLinecap="round" />
      <path d="M12 7v2M12 11h.01" stroke={ICON_STROKE} strokeWidth="1.65" strokeLinecap="round" />
    </svg>
  );
}

function IconAccess() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 4h10l2 2v14a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1z"
        stroke={ICON_STROKE}
        strokeWidth="1.65"
        strokeLinejoin="round"
      />
      <path d="M8 9h8M8 13h8M8 17h5" stroke={ICON_STROKE} strokeWidth="1.65" strokeLinecap="round" />
    </svg>
  );
}

function IconForgotten() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 4h6l1 2h4v2H4V6h4l1-2zM6 8h12v14H6V8z"
        stroke={ICON_STROKE}
        strokeWidth="1.65"
        strokeLinejoin="round"
      />
      <path d="M10 12h8M10 16h6" stroke={ICON_STROKE} strokeWidth="1.65" strokeLinecap="round" />
    </svg>
  );
}

function IconPortability() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 12H3M5 9l-3 3 3 3M16 12h5M19 9l3 3-3 3"
        stroke={ICON_STROKE}
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="9" y="8" width="6" height="8" rx="1" stroke={ICON_STROKE} strokeWidth="1.65" />
    </svg>
  );
}

function IconPrivacyDesign() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l8 4v5c0 4-3 8-8 9-5-1-8-5-8-9V7l8-4z"
        stroke={ICON_STROKE}
        strokeWidth="1.65"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" stroke={ICON_STROKE} strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconDpo() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3.5" stroke={ICON_STROKE} strokeWidth="1.65" />
      <path
        d="M5 20v-1a4 4 0 014-4h6a4 4 0 014 4v1"
        stroke={ICON_STROKE}
        strokeWidth="1.65"
        strokeLinecap="round"
      />
      <path
        d="M17 4l2 2M19 6l2 2"
        stroke={ICON_STROKE}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconDpia() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 4h12v16H8V4zM4 6h3v14H4V6z"
        stroke={ICON_STROKE}
        strokeWidth="1.65"
        strokeLinejoin="round"
      />
      <path d="M11 9h6M11 13h6M11 17h4" stroke={ICON_STROKE} strokeWidth="1.65" strokeLinecap="round" />
    </svg>
  );
}

const ITEMS = [
  {
    id: "consent",
    title: "Obtaining clear user consent",
    body: "Consent requests should be simple, transparent, and easy to understand. Users must be able to give consent freely and withdraw it at any time without difficulty.",
    Icon: IconConsent,
  },
  {
    id: "breach",
    title: "Timely breach notifications",
    body: "If a data breach occurs, GDPR requires businesses to notify affected users and relevant authorities within 72 hours. Proper incident response procedures are essential for compliance.",
    Icon: IconBreach,
  },
  {
    id: "access",
    title: "Right to access personal data",
    body: "Users have the right to request a complete electronic copy of the personal data collected about them, including how that information is being used.",
    Icon: IconAccess,
  },
  {
    id: "forgotten",
    title: "Right to be forgotten",
    body: "Individuals can request the deletion of their personal data once it is no longer required for its original purpose. Websites must have processes in place to handle these requests properly.",
    Icon: IconForgotten,
  },
  {
    id: "portability",
    title: "Data portability",
    body: "Users must be able to access and transfer their personal data for use outside your platform or organization when requested.",
    Icon: IconPortability,
  },
  {
    id: "privacy-design",
    title: "Privacy by design",
    body: "GDPR encourages businesses to build privacy and security into their systems from the beginning rather than treating compliance as an afterthought.",
    Icon: IconPrivacyDesign,
  },
  {
    id: "dpo",
    title: "Data protection officers (DPOs)",
    body: "Depending on the scale of data collection and processing, some businesses may need to appoint a dedicated Data Protection Officer to oversee GDPR compliance.",
    Icon: IconDpo,
  },
  {
    id: "dpia",
    title: "Data protection impact assessments",
    body: "Organizations should regularly review and audit their data handling practices to identify risks and ensure ongoing GDPR compliance and data security standards are maintained.",
    Icon: IconDpia,
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
          Best Standards for WordPress GDPR Compliance
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
          These principles outline how WordPress sites should treat personal data under GDPR—from
          consent and breach response to user rights, privacy by design, and ongoing oversight.
          Applying them helps your site meet regulatory expectations and protect visitors.
        </p>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "clamp(28px, 3.5vw, 48px) clamp(32px, 4vw, 48px)",
        }}
        className="gdpr-seo-grid"
      >
        {ITEMS.map((item, i) => (
          <SEOCard key={item.id} item={item} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .gdpr-seo-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
