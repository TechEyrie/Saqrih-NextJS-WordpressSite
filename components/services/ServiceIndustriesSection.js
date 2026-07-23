"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Briefcase,
  ShoppingBag,
  Building2,
  HeartPulse,
  GraduationCap,
  HardHat,
  UtensilsCrossed,
  Hotel,
  Car,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import {
  INDUSTRY_ENTRIES,
  getIndustryHref,
} from "../../lib/industries/industryRegistry";
import { SVC, sectionPad, eyebrowStyle, h2Style, bodyStyle } from "./serviceTokens";

gsap.registerPlugin(ScrollTrigger);

const FEATURED = [
  {
    id: "corporate",
    title: "Corporate & Business",
    description:
      "Professional websites for consultancies, trading companies, and service providers.",
    Icon: Briefcase,
    href: getIndustryHref("corporate"),
  },
  {
    id: "retail",
    title: "Retail & E-Commerce",
    description: "Online stores and marketplace platforms built to convert.",
    Icon: ShoppingBag,
    href: getIndustryHref("fashion"),
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description: "Property portals with advanced search and CRM integration.",
    Icon: Building2,
    href: getIndustryHref("real-estate"),
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Medical facilities, clinics, and wellness centers.",
    Icon: HeartPulse,
    href: getIndustryHref("healthcare"),
  },
  {
    id: "education",
    title: "Education",
    description: "Schools, nurseries, training centers, and educational platforms.",
    Icon: GraduationCap,
    href: getIndustryHref("education"),
  },
  {
    id: "construction",
    title: "Construction",
    description: "MEP contractors, developers, and infrastructure firms.",
    Icon: HardHat,
    href: getIndustryHref("construction"),
  },
  {
    id: "food",
    title: "Food & Beverage",
    description: "Manufacturers, distributors and restaurant chains.",
    Icon: UtensilsCrossed,
    href: getIndustryHref("restaurant"),
  },
  {
    id: "hospitality",
    title: "Hospitality",
    description: "Hotels, restaurants, and event management companies.",
    Icon: Hotel,
    href: getIndustryHref("hospitality"),
  },
  {
    id: "automotive",
    title: "Automotive",
    description: "Dealerships and automotive service centers.",
    Icon: Car,
    href: "/industries",
  },
];

const FEATURED_SLUGS = new Set([
  "corporate",
  "construction",
  "healthcare",
  "education",
  "real-estate",
  "hospitality",
  "restaurant",
  "hotel",
  "fashion",
  "consulting",
]);

const MORE_INDUSTRIES = INDUSTRY_ENTRIES.filter(
  (entry) => !FEATURED_SLUGS.has(entry.slug)
);

const PREVIEW_COUNT = 16;

export default function ServiceIndustriesSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const moreRef = useRef(null);
  const [hovered, setHovered] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const visibleMore = expanded
    ? MORE_INDUSTRIES
    : MORE_INDUSTRIES.slice(0, PREVIEW_COUNT);
  const hiddenCount = Math.max(0, MORE_INDUSTRIES.length - PREVIEW_COUNT);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const cards = gridRef.current?.querySelectorAll("[data-industry-card]");
      if (cards?.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 36, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
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

      if (moreRef.current) {
        gsap.fromTo(
          moreRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: moreRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const onCardEnter = (id, el) => {
    setHovered(id);
    gsap.to(el, {
      y: -6,
      duration: 0.35,
      ease: "power3.out",
      boxShadow: "0 22px 44px rgba(0,0,0,0.28)",
    });
    const icon = el.querySelector("[data-ind-icon]");
    if (icon) gsap.to(icon, { scale: 1.1, duration: 0.35, ease: "back.out(2)" });
  };

  const onCardLeave = (el) => {
    setHovered(null);
    gsap.to(el, {
      y: 0,
      duration: 0.35,
      ease: "power3.out",
      boxShadow: "0 0 0 rgba(0,0,0,0)",
    });
    const icon = el.querySelector("[data-ind-icon]");
    if (icon) gsap.to(icon, { scale: 1, duration: 0.3, ease: "power2.out" });
  };

  return (
    <section
      ref={sectionRef}
      className="w-full relative overflow-hidden"
      style={{ backgroundColor: SVC.forest, ...sectionPad }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 65% 45% at 85% 15%, rgba(200,240,74,0.1), transparent 55%), radial-gradient(ellipse 45% 40% at 5% 90%, rgba(27,71,50,0.85), transparent 50%)",
        }}
      />

      <div className="mx-auto relative" style={{ maxWidth: "1180px", zIndex: 1 }}>
        <div
          ref={headerRef}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          style={{ marginBottom: "clamp(40px, 5vw, 56px)", opacity: 0 }}
        >
          <div style={{ maxWidth: 580 }}>
            <p style={eyebrowStyle(true)}>Our Reach</p>
            <h2 style={{ ...h2Style(true), marginBottom: 14 }}>
              Industries We Serve
            </h2>
            <p style={{ ...bodyStyle(true), maxWidth: "40ch" }}>
              From corporate and healthcare to hospitality and tech—deep experience
              across the sectors that move Qatar&apos;s economy.
            </p>
          </div>

          <div
            className="flex gap-3 flex-shrink-0"
            style={{ alignItems: "stretch" }}
          >
            <div
              style={{
                borderRadius: 16,
                padding: "16px 20px",
                background: "rgba(255,255,255,0.05)",
                border: `1px solid ${SVC.borderDark}`,
                minWidth: 110,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: SVC.heading,
                  fontWeight: 800,
                  fontSize: "1.75rem",
                  color: SVC.lime,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {INDUSTRY_ENTRIES.length}+
              </div>
              <div
                style={{
                  marginTop: 6,
                  fontFamily: SVC.ui,
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                Industries
              </div>
            </div>
            <Link
              href="/industries"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "16px 20px",
                borderRadius: 16,
                background: SVC.lime,
                color: SVC.forest,
                fontFamily: SVC.ui,
                fontWeight: 700,
                fontSize: "0.88rem",
                textDecoration: "none",
                boxShadow: "0 10px 28px rgba(200,240,74,0.28)",
              }}
            >
              View all
              <ArrowUpRight size={16} strokeWidth={2.2} />
            </Link>
          </div>
        </div>

        {/* Featured grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 14 }}
        >
          {FEATURED.map(({ id, title, description, Icon, href }, index) => {
            const isHot = hovered === id;
            return (
              <Link
                key={id}
                href={href}
                data-industry-card
                onMouseEnter={(e) => onCardEnter(id, e.currentTarget)}
                onMouseLeave={(e) => onCardLeave(e.currentTarget)}
                className="group relative block no-underline will-change-transform"
                style={{
                  borderRadius: 20,
                  padding: "clamp(24px, 2.5vw, 28px)",
                  background: isHot ? SVC.forestMid : "rgba(255,255,255,0.045)",
                  border: isHot
                    ? `1px solid rgba(200,240,74,0.55)`
                    : `1px solid ${SVC.borderDark}`,
                  opacity: 0,
                  overflow: "hidden",
                }}
              >
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: 18,
                    right: 18,
                    fontFamily: SVC.heading,
                    fontWeight: 800,
                    fontSize: "0.75rem",
                    letterSpacing: "0.08em",
                    color: isHot ? "rgba(200,240,74,0.7)" : "rgba(255,255,255,0.18)",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  data-ind-icon
                  className="will-change-transform"
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: isHot ? SVC.lime : "rgba(200,240,74,0.12)",
                    border: isHot
                      ? "none"
                      : "1px solid rgba(200,240,74,0.22)",
                    marginBottom: 18,
                    transition: "background 0.25s ease",
                  }}
                >
                  <Icon
                    size={24}
                    strokeWidth={1.75}
                    color={isHot ? SVC.forest : SVC.lime}
                    aria-hidden
                  />
                </div>

                <h3
                  style={{
                    fontFamily: SVC.heading,
                    fontWeight: 600,
                    fontSize: "1.12rem",
                    lineHeight: 1.25,
                    color: SVC.white,
                    margin: "0 0 10px",
                    paddingRight: 28,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: SVC.body,
                    fontSize: "0.9rem",
                    lineHeight: 1.55,
                    color: SVC.mutedOnDark,
                    margin: "0 0 18px",
                  }}
                >
                  {description}
                </p>

                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontFamily: SVC.ui,
                    fontWeight: 700,
                    fontSize: "0.72rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: isHot ? SVC.lime : "rgba(255,255,255,0.45)",
                    transition: "color 0.25s ease",
                  }}
                >
                  Explore
                  <ArrowUpRight size={14} strokeWidth={2.2} />
                </span>
              </Link>
            );
          })}
        </div>

        {/* More industries */}
        <div
          ref={moreRef}
          style={{
            marginTop: "clamp(36px, 5vw, 48px)",
            borderRadius: 22,
            padding: "clamp(24px, 3vw, 32px)",
            background: "rgba(255,255,255,0.04)",
            border: `1px solid ${SVC.borderDark}`,
            opacity: 0,
          }}
        >
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            style={{ marginBottom: 20 }}
          >
            <div>
              <h3
                style={{
                  margin: "0 0 6px",
                  fontFamily: SVC.heading,
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  color: SVC.white,
                }}
              >
                Looking for something more specific?
              </h3>
              <p
                style={{
                  margin: 0,
                  fontFamily: SVC.body,
                  fontSize: "0.92rem",
                  color: SVC.mutedOnDark,
                }}
              >
                Browse {MORE_INDUSTRIES.length}+ additional industries we actively serve.
              </p>
            </div>
            <Link
              href="/industries"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                whiteSpace: "nowrap",
                color: SVC.lime,
                fontFamily: SVC.ui,
                fontWeight: 700,
                fontSize: "0.88rem",
                textDecoration: "none",
              }}
            >
              See all industries
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div
            className="flex flex-wrap"
            style={{ gap: 8 }}
          >
            {visibleMore.map((entry) => (
              <Link
                key={entry.slug}
                href={getIndustryHref(entry.slug)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "10px 14px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.05)",
                  border: `1px solid ${SVC.borderDark}`,
                  color: "rgba(255,255,255,0.82)",
                  fontFamily: SVC.ui,
                  fontWeight: 600,
                  fontSize: "0.82rem",
                  textDecoration: "none",
                  transition: "border-color 0.2s ease, background 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(200,240,74,0.45)";
                  e.currentTarget.style.background = "rgba(200,240,74,0.1)";
                  e.currentTarget.style.color = SVC.lime;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = SVC.borderDark;
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.82)";
                }}
              >
                {entry.name}
              </Link>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            style={{ marginTop: 22 }}
          >
            {hiddenCount > 0 ? (
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(255,255,255,0.06)",
                  border: `1px solid ${SVC.borderDark}`,
                  borderRadius: 999,
                  padding: "12px 18px",
                  color: SVC.white,
                  fontFamily: SVC.ui,
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  cursor: "pointer",
                }}
              >
                {expanded ? "Show fewer" : `See ${hiddenCount} more industries`}
                <ChevronDown
                  size={16}
                  style={{
                    transform: expanded ? "rotate(180deg)" : "none",
                    transition: "transform 0.25s ease",
                  }}
                />
              </button>
            ) : (
              <span />
            )}

            <p
              style={{
                margin: 0,
                fontFamily: SVC.body,
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.65)",
              }}
            >
              Don&apos;t see yours?{" "}
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event("open-quote-drawer"))}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  color: SVC.lime,
                  fontWeight: 700,
                  fontFamily: SVC.ui,
                  fontSize: "inherit",
                }}
              >
                Consult with us →
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
