"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { COMPANY_LOGOS } from "../../lib/companyLogos";

gsap.registerPlugin(ScrollTrigger);

const LOGO_FILTERS = {
  colored: "brightness(0) saturate(100%)",
  "light-on-dark": "invert(1)",
  none: "none",
};

function getLogoImageStyle(logo) {
  const scale = logo.scale ?? 1;
  return {
    display: "block",
    width: "auto",
    height: "auto",
    maxWidth: `min(100%, ${Math.round(140 * scale)}px)`,
    maxHeight: `clamp(${Math.round(28 * scale)}px, ${(4 * scale).toFixed(1)}vw, ${Math.round(44 * scale)}px)`,
    minWidth: logo.minWidth ? `${logo.minWidth}px` : undefined,
    objectFit: "contain",
    filter: LOGO_FILTERS[logo.filterMode ?? "colored"],
    opacity: 0.9,
  };
}

function LogoCard({ logo, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        delay: index * 0.08,
        scrollTrigger: { trigger: card, start: "top 90%", once: true },
      },
    );

    const onEnter = () =>
      gsap.to(card, {
        y: -5,
        boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
        duration: 0.3,
        ease: "power2.out",
      });
    const onLeave = () =>
      gsap.to(card, {
        y: 0,
        boxShadow: "0 0px 0px rgba(0,0,0,0)",
        duration: 0.35,
        ease: "power2.inOut",
      });

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      role="img"
      aria-label={logo.label}
      style={{
        flex: "1 1 0",
        minWidth: 0,
        background: "#ebebea",
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(44px, 5vw, 64px) clamp(16px, 2vw, 28px)",
        opacity: 0,
        cursor: "default",
        willChange: "transform",
        border: "1px solid rgba(0,0,0,0.04)",
      }}
    >
      <img
        src={logo.src}
        alt={logo.label}
        loading="lazy"
        decoding="async"
        style={getLogoImageStyle(logo)}
      />
    </div>
  );
}

export default function ReliableSection({
  heading = "Reliable by design.",
  primaryText = "Clients choose Saqrih because we turn complex challenges into dependable, real-world solutions. What once seemed difficult or out of reach is delivered with precision, consistency, and efficiency.",
  secondaryText = "We work with businesses that demand high performance, reliability, and scalability - where results matter and there's no room for compromise.",
  logos = COMPANY_LOGOS,
}) {
  const headingRef = useRef(null);
  const primaryRef = useRef(null);
  const secondaryRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, x: -28 },
      {
        opacity: 1,
        x: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 88%", once: true },
      },
    );
    gsap.fromTo(
      [primaryRef.current, secondaryRef.current],
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.14,
        scrollTrigger: { trigger: primaryRef.current, start: "top 88%", once: true },
      },
    );
  }, []);

  return (
    <>
      <section
        style={{
          width: "100%",
          background: "#f5f4f0",
          padding: "clamp(64px, 8vw, 110px) clamp(32px, 5vw, 80px)",
          boxSizing: "border-box",
          overflowX: "clip",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(48px, 6vw, 80px)",
          }}
        >
          <div
            className="reliable-top"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "clamp(32px, 4vw, 64px)",
            }}
          >
            <h2
              ref={headingRef}
              className="font-semibold leading-[1.05] tracking-tight"
              style={{
                fontSize: "clamp(2rem, 3.4vw, 3.8rem)",
                color: "#0a0a09",
                margin: 0,
                opacity: 0,
                textAlign: "left",
                maxWidth: "40%",
                flexShrink: 0,
              }}
            >
              {heading}
            </h2>

            <div
              className="reliable-text"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(14px, 1.8vw, 22px)",
                maxWidth: "36%",
                flexShrink: 0,
                marginLeft: "auto",
                textAlign: "left",
              }}
            >
              <p
                ref={primaryRef}
                style={{
                  fontSize: "clamp(0.95rem, 1.1vw, 1.08rem)",
                  fontWeight: 400,
                  lineHeight: 1.68,
                  color: "#0a0a09",
                  margin: 0,
                  opacity: 0,
                }}
              >
                {primaryText}
              </p>
              <p
                ref={secondaryRef}
                style={{
                  fontSize: "clamp(0.95rem, 1.1vw, 1.08rem)",
                  fontWeight: 400,
                  lineHeight: 1.68,
                  color: "rgba(10,10,9,0.42)",
                  margin: 0,
                  opacity: 0,
                }}
              >
                {secondaryText}
              </p>
            </div>
          </div>

          <div
            className="reliable-logos"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "clamp(8px, 1vw, 14px)",
              alignItems: "stretch",
              width: "100%",
            }}
          >
            {logos.map((logo, i) => (
              <LogoCard key={logo.id} logo={logo} index={i} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .reliable-top {
            flex-direction: column !important;
          }
          .reliable-top h2,
          .reliable-text {
            max-width: 100% !important;
          }
        }
        @media (max-width: 640px) {
          .reliable-logos {
            flex-wrap: wrap !important;
          }
          .reliable-logos > div {
            flex: 1 1 calc(33% - 10px) !important;
            min-width: 100px !important;
          }
        }
        @media (max-width: 420px) {
          .reliable-logos > div {
            flex: 1 1 calc(50% - 8px) !important;
          }
        }
      `}</style>
    </>
  );
}
