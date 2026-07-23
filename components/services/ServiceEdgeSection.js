"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SVC, sectionPad, eyebrowStyle, h2Style, bodyStyle } from "./serviceTokens";

gsap.registerPlugin(ScrollTrigger);

function EdgeIcon({ type, stroke }) {
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true };
  if (type === "globe") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" stroke={stroke} strokeWidth="1.6" />
        <path d="M4 12h16M12 4c2.5 2.8 2.5 13.2 0 16M12 4c-2.5 2.8-2.5 13.2 0 16" stroke={stroke} strokeWidth="1.5" />
      </svg>
    );
  }
  if (type === "headset") {
    return (
      <svg {...common} width={26} height={26}>
        <path d="M5 13a7 7 0 0 1 14 0v5a2 2 0 0 1-2 2h-1.5M5 13v5a2 2 0 0 0 2 2h1.5" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
        <path d="M9 20.5c.6 1.2 1.7 2 3 2s2.4-.8 3-2" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "chip") {
    return (
      <svg {...common}>
        <rect x="7" y="7" width="10" height="10" rx="1.5" stroke={stroke} strokeWidth="1.6" />
        <path d="M10 4v3M14 4v3M10 17v3M14 17v3M4 10h3M4 14h3M17 10h3M17 14h3" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="4.5" y="7" width="15" height="11" rx="2" stroke={stroke} strokeWidth="1.6" />
      <path d="M8 7V5.8A1.8 1.8 0 0 1 9.8 4h4.4A1.8 1.8 0 0 1 16 5.8V7" stroke={stroke} strokeWidth="1.6" />
      <path d="M9 12h6M9 15h4" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconChip({ type, accent = false }) {
  return (
    <div
      style={{
        width: accent ? 52 : 42,
        height: accent ? 52 : 42,
        borderRadius: accent ? "50%" : 12,
        background: accent ? "rgba(22, 45, 36, 0.12)" : SVC.lime,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <EdgeIcon type={type} stroke={SVC.forest} />
    </div>
  );
}

function TagPill({ children }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "8px 12px",
        borderRadius: 999,
        background: "rgba(255,255,255,0.08)",
        color: "rgba(255,255,255,0.9)",
        fontFamily: SVC.ui,
        fontWeight: 600,
        fontSize: "0.68rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        border: `1px solid ${SVC.borderDark}`,
      }}
    >
      {children}
    </span>
  );
}

export default function ServiceEdgeSection({
  eyebrow = "Our edge",
  heading = "Best Website Developers in Qatar",
  headingLine2 = "Our Competitive Advantages",
  body = "What makes us a leading website development partner in Qatar? A clear commitment to excellence in every project dimension.",
}) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
      const cards = gridRef.current?.querySelectorAll("[data-edge-card]");
      if (cards?.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const glass = {
    borderRadius: 22,
    padding: "clamp(24px, 2.8vw, 34px)",
    border: `1px solid ${SVC.borderDark}`,
    background: "rgba(255,255,255,0.06)",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{ backgroundColor: SVC.forest, ...sectionPad }}
    >
      <div className="mx-auto" style={{ maxWidth: "1180px" }}>
        <div
          ref={headerRef}
          className="text-center mx-auto"
          style={{ maxWidth: 760, marginBottom: "clamp(36px, 5vw, 52px)" }}
        >
          <p style={eyebrowStyle(true)}>{eyebrow}</p>
          <h2 style={{ ...h2Style(true), marginBottom: 14 }}>
            {heading}
            {headingLine2 ? (
              <>
                <br />
                {headingLine2}
              </>
            ) : null}
          </h2>
          <p style={bodyStyle(true)}>{body}</p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-12"
          style={{ gap: 16 }}
        >
          <article data-edge-card className="md:col-span-7" style={glass}>
            <IconChip type="globe" />
            <h3
              style={{
                margin: "18px 0 12px",
                color: SVC.white,
                fontFamily: SVC.heading,
                fontWeight: 600,
                fontSize: "clamp(1.2rem, 1.6vw, 1.4rem)",
                lineHeight: 1.25,
              }}
            >
              Local Expertise, Global Standards
            </h3>
            <p style={{ ...bodyStyle(true), marginBottom: 22, flex: 1 }}>
              We understand the Qatar market intimately while applying international
              best practices—so your site resonates locally and competes globally.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <TagPill>Doha market expert</TagPill>
              <TagPill>Global standards</TagPill>
            </div>
          </article>

          <article
            data-edge-card
            className="md:col-span-5"
            style={{
              ...glass,
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <div>
              <IconChip type="headset" />
              <h3
                style={{
                  margin: "18px 0 12px",
                  color: SVC.white,
                  fontFamily: SVC.heading,
                  fontWeight: 600,
                  fontSize: "clamp(1.2rem, 1.6vw, 1.4rem)",
                  lineHeight: 1.25,
                  textAlign: "left",
                }}
              >
                Dedicated 24/7 Support
              </h3>
              <p style={{ ...bodyStyle(true), textAlign: "left" }}>
                Our relationship doesn&apos;t end at launch. Technical support,
                updates, and strategic guidance keep your site performing as you grow.
              </p>
            </div>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                alignSelf: "flex-start",
                gap: 8,
                padding: "10px 16px",
                borderRadius: 999,
                background: "rgba(200,240,74,0.12)",
                color: SVC.lime,
                fontFamily: SVC.ui,
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: "1px solid rgba(200,240,74,0.28)",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: SVC.lime,
                  boxShadow: "0 0 0 3px rgba(200,240,74,0.22)",
                }}
              />
              Online now
            </span>
          </article>

          <article data-edge-card className="md:col-span-5" style={glass}>
            <IconChip type="chip" />
            <h3
              style={{
                margin: "18px 0 12px",
                color: SVC.white,
                fontFamily: SVC.heading,
                fontWeight: 600,
                fontSize: "clamp(1.15rem, 1.5vw, 1.3rem)",
              }}
            >
              Cutting-Edge Technology
            </h3>
            <p style={bodyStyle(true)}>
              Modern frameworks, progressive web apps, and analytics—leveraged to give
              you a real competitive edge.
            </p>
          </article>

          <article data-edge-card className="md:col-span-7" style={glass}>
            <IconChip type="briefcase" />
            <h3
              style={{
                margin: "18px 0 12px",
                color: SVC.white,
                fontFamily: SVC.heading,
                fontWeight: 600,
                fontSize: "clamp(1.15rem, 1.5vw, 1.3rem)",
              }}
            >
              Comprehensive Service Portfolio
            </h3>
            <p style={bodyStyle(true)}>
              Beyond design: hosting, domains, email, SEO, integrations, and
              maintenance—everything under one roof.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
