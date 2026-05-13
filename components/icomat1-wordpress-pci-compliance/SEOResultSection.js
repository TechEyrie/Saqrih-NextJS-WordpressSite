"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GREEN = "#162D24";
const LIME = "#DFFB85";
const BODY = "rgba(22, 45, 36, 0.82)";
const ICON_STROKE = GREEN;

function IconGateway() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="6" width="18" height="12" rx="2" stroke={ICON_STROKE} strokeWidth="1.65" />
      <path d="M7 10h10M7 14h6" stroke={ICON_STROKE} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconSsl() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 11V8a5 5 0 0110 0v3"
        stroke={ICON_STROKE}
        strokeWidth="1.65"
        strokeLinecap="round"
      />
      <rect x="5" y="11" width="14" height="10" rx="2" stroke={ICON_STROKE} strokeWidth="1.65" />
      <path d="M12 15v2" stroke={ICON_STROKE} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconUpdates() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 12a8 8 0 0114-5M20 12a8 8 0 01-14 5"
        stroke={ICON_STROKE}
        strokeWidth="1.65"
        strokeLinecap="round"
      />
      <path d="M18 7V3h-4M6 17v4h4" stroke={ICON_STROKE} strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconScans() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="6" stroke={ICON_STROKE} strokeWidth="1.65" />
      <path d="M16 16l4 4" stroke={ICON_STROKE} strokeWidth="1.65" strokeLinecap="round" />
      <path d="M8 11h6" stroke={ICON_STROKE} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconAccess() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3.5" stroke={ICON_STROKE} strokeWidth="1.65" />
      <path d="M6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1" stroke={ICON_STROKE} strokeWidth="1.65" strokeLinecap="round" />
      <path d="M16 4l2 2M18 6l2 2" stroke={ICON_STROKE} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconNoStore() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="6" width="16" height="12" rx="2" stroke={ICON_STROKE} strokeWidth="1.65" />
      <path d="M7 10h10M7 14h5" stroke={ICON_STROKE} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M5 5l14 14" stroke={ICON_STROKE} strokeWidth="1.65" strokeLinecap="round" />
    </svg>
  );
}

function IconLogs() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M8 4h12v16H8V4zM5 7h2v12H5V7z" stroke={ICON_STROKE} strokeWidth="1.65" strokeLinejoin="round" />
      <path d="M11 9h6M11 13h6M11 17h4" stroke={ICON_STROKE} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconTeam() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="8" r="2.5" stroke={ICON_STROKE} strokeWidth="1.5" />
      <circle cx="15" cy="8" r="2.5" stroke={ICON_STROKE} strokeWidth="1.5" />
      <path d="M4 19v-1a4 4 0 014-3h2M14 15h2a4 4 0 014 3v1" stroke={ICON_STROKE} strokeWidth="1.65" strokeLinecap="round" />
      <path d="M12 12v7" stroke={ICON_STROKE} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const ITEMS = [
  {
    id: "gateway",
    title: "Implement a secure payment gateway",
    body: "Use trusted PCI-compliant payment gateways such as Stripe or PayPal to securely process transactions and reduce direct exposure to sensitive payment data.",
    Icon: IconGateway,
  },
  {
    id: "ssl",
    title: "Use SSL certificates",
    body: "Protect data transmitted between your website and visitors by securing your WordPress site with a valid SSL certificate.",
    Icon: IconSsl,
  },
  {
    id: "updates",
    title: "Maintain regular software updates",
    body: "Keep WordPress core files, plugins, and themes updated to reduce security vulnerabilities and maintain a safer environment.",
    Icon: IconUpdates,
  },
  {
    id: "scans",
    title: "Conduct routine security scans",
    body: "Perform regular malware scans and security assessments to identify vulnerabilities and resolve potential threats quickly.",
    Icon: IconScans,
  },
  {
    id: "access",
    title: "Implement strong access controls",
    body: "Limit access to sensitive website areas, enforce strong passwords, and use two-factor authentication to strengthen security.",
    Icon: IconAccess,
  },
  {
    id: "no-store",
    title: "Avoid storing cardholder data",
    body: "Reduce compliance risks by allowing secure payment processors to handle and store customer payment information instead of your own servers.",
    Icon: IconNoStore,
  },
  {
    id: "logs",
    title: "Monitor and log all access",
    body: "Track and review access logs regularly to help detect suspicious activity and improve security monitoring.",
    Icon: IconLogs,
  },
  {
    id: "educate",
    title: "Educate your team",
    body: "Train employees on PCI compliance requirements and cybersecurity best practices to help maintain a secure WordPress environment.",
    Icon: IconTeam,
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
          Here Are Some Best Standards for WordPress PCI Compliance
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
          These practices strengthen payment security, reduce PCI scope where possible, and help keep your WordPress
          environment aligned with common PCI DSS expectations.
        </p>
      </div>

      <div
        className="pci-seo-grid"
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
          .pci-seo-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
