"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Briefcase, TrendingUp, Cpu } from "lucide-react";
import { SVC, sectionPad, eyebrowStyle, h2Style, bodyStyle } from "./serviceTokens";

gsap.registerPlugin(ScrollTrigger);

const FEATURES_MID = [
  {
    id: "solutions",
    title: "Comprehensive Solutions",
    description: "Complete digital services from strategy to execution.",
    Icon: Briefcase,
    accentEdge: "bottom",
  },
  {
    id: "results",
    title: "Proven Results",
    description: "Hundreds of successful projects across diverse industries.",
    Icon: TrendingUp,
    accentEdge: "bottom",
  },
  {
    id: "tech",
    title: "Latest Technology",
    description: "Cutting-edge tools and platforms for competitive advantages.",
    Icon: Cpu,
    accentEdge: null,
  },
];

const FEATURES_BOTTOM = [
  {
    id: "pricing",
    title: "Competitive Pricing",
    description: "Exceptional value without compromising on premium quality.",
  },
  {
    id: "team",
    title: "Expert Team",
    description:
      "Certified professionals with international certifications and experience.",
  },
  {
    id: "support",
    title: "24/7 Support",
    description: "Round-the-clock technical assistance and customer service.",
    live: true,
  },
];

function cardStyle(extra = {}) {
  return {
    background: SVC.white,
    borderRadius: 16,
    border: `1px solid ${SVC.borderLight}`,
    boxShadow: "0 8px 24px rgba(22,45,36,0.04)",
    ...extra,
  };
}

function FeatureCard({ title, description, Icon, accentEdge, live }) {
  const edge =
    accentEdge === "bottom"
      ? { borderBottom: `3px solid ${SVC.lime}` }
      : {};

  return (
    <article
      data-agency-card
      style={{
        ...cardStyle({
          padding: "clamp(22px, 2.4vw, 26px)",
          position: "relative",
          height: "100%",
          ...edge,
        }),
      }}
    >
      {live ? (
        <span
          aria-label="Active support"
          title="Active"
          style={{
            position: "absolute",
            top: 18,
            right: 18,
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: SVC.lime,
            boxShadow: "0 0 0 4px rgba(200,240,74,0.28)",
          }}
        />
      ) : null}

      {Icon ? (
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: SVC.lime,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
          }}
        >
          <Icon size={18} strokeWidth={1.85} color={SVC.forest} aria-hidden />
        </div>
      ) : null}

      <h3
        style={{
          fontFamily: SVC.heading,
          fontWeight: 600,
          fontSize: "1.05rem",
          color: SVC.forest,
          margin: "0 0 8px",
          lineHeight: 1.25,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: SVC.body,
          fontSize: "0.9rem",
          lineHeight: 1.55,
          color: SVC.mutedOnLight,
          margin: 0,
        }}
      >
        {description}
      </p>
    </article>
  );
}

export default function ServiceWhyQatarSection({
  eyebrow = "Qatar's Digital Foundation",
  headingLead = "Why Qatar Businesses",
  headingAccent = "Choose Our Agency",
  body = "We combine nearly two decades of local Doha insight with cutting-edge technology to deliver results that matter.",
}) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
      const cards = gridRef.current?.querySelectorAll("[data-agency-card]");
      if (cards?.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.06,
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

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{ backgroundColor: SVC.white, ...sectionPad }}
    >
      <div className="mx-auto" style={{ maxWidth: "1180px" }}>
        <div
          ref={headerRef}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          style={{ marginBottom: "clamp(36px, 5vw, 48px)" }}
        >
          <div style={{ maxWidth: 640 }}>
            <div className="flex items-center gap-3" style={{ marginBottom: 14 }}>
              <span
                aria-hidden
                style={{
                  width: 28,
                  height: 2,
                  background: SVC.lime,
                  borderRadius: 2,
                }}
              />
              <p style={{ ...eyebrowStyle(false), margin: 0 }}>{eyebrow}</p>
            </div>
            <h2 style={h2Style(false)}>
              {headingLead}{" "}
              <span style={{ color: SVC.forest }}>{headingAccent}</span>
            </h2>
          </div>
          <p style={{ ...bodyStyle(false), maxWidth: 340 }}>{body}</p>
        </div>

        <div ref={gridRef} className="flex flex-col" style={{ gap: 14 }}>
          <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: 14 }}>
            <article
              data-agency-card
              className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-[minmax(120px,160px)_1px_1fr]"
              style={cardStyle({
                padding: "clamp(24px, 3vw, 34px)",
                borderLeft: `4px solid ${SVC.lime}`,
                gap: "clamp(18px, 2.5vw, 28px)",
                alignItems: "center",
              })}
            >
              <div>
                <div
                  style={{
                    fontFamily: SVC.heading,
                    fontWeight: 800,
                    fontSize: "clamp(2.8rem, 5vw, 3.5rem)",
                    lineHeight: 1,
                    color: SVC.forest,
                    letterSpacing: "-0.04em",
                  }}
                >
                  15+
                </div>
                <div
                  style={{
                    fontFamily: SVC.ui,
                    fontWeight: 700,
                    fontSize: "0.72rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: SVC.forest,
                    marginTop: 8,
                  }}
                >
                  Years Experience
                </div>
              </div>

              <div
                aria-hidden
                className="hidden sm:block"
                style={{
                  width: 1,
                  alignSelf: "stretch",
                  background: SVC.borderLight,
                  minHeight: 72,
                }}
              />

              <div>
                <h3
                  style={{
                    fontFamily: SVC.heading,
                    fontWeight: 600,
                    fontSize: "1.12rem",
                    color: SVC.forest,
                    margin: "0 0 10px",
                  }}
                >
                  Nearly two decades of excellence.
                </h3>
                <p
                  style={{
                    fontFamily: SVC.body,
                    fontSize: "0.92rem",
                    lineHeight: 1.6,
                    color: SVC.mutedOnLight,
                    margin: 0,
                  }}
                >
                  For over 15 years, we have been delivering digital excellence
                  specifically tailored to the unique requirements of the Qatar
                  market.
                </p>
              </div>
            </article>

            <FeatureCard
              title="Local Presence"
              description="Based in Doha with deep understanding of the Qatar market."
              Icon={MapPin}
            />
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ gap: 14 }}
          >
            {FEATURES_MID.map((item) => (
              <FeatureCard key={item.id} {...item} />
            ))}
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ gap: 14 }}
          >
            {FEATURES_BOTTOM.map((item) => (
              <FeatureCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
