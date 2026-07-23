"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Briefcase,
  Building2,
  Palette,
  Rocket,
  Images,
  BookOpen,
  Languages,
  Layers,
  Smartphone,
  FolderInput,
  RefreshCw,
  Gauge,
  Accessibility,
  ShieldCheck,
  Wrench,
  LifeBuoy,
  ShieldAlert,
  Package,
  DatabaseBackup,
  Activity,
  FilePenLine,
  Search,
  Server,
  MessagesSquare,
  Cloud,
  Boxes,
  LayoutDashboard,
  CreditCard,
  KeyRound,
  Plug,
  Scaling,
  Webhook,
  FileCode2,
  ShoppingBag,
  Link2,
  BookOpenCheck,
  Workflow,
  Globe2,
  LayoutTemplate,
  Puzzle,
  Store,
  Calendar,
  HeartPulse,
  Wallet,
  Apple,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { SVC, sectionPad, eyebrowStyle } from "./serviceTokens";

gsap.registerPlugin(ScrollTrigger);

const CARD_TONES = ["white", "dark", "lime"];
const CTA_LABELS = ["Details", "Explore", "Get Started"];
const GAP = 20;
/** Vertical room so lift/shadow never clips */
const VIEW_PAD_Y = 36;

const ICONS = {
  "business-website-development": Briefcase,
  "corporate-website-development": Building2,
  "custom-website-development": Palette,
  "landing-page-development": Rocket,
  "portfolio-website-development": Images,
  "brochure-website-development": BookOpen,
  "multilingual-website-development": Languages,
  "headless-website-development": Layers,
  "pwa-development": Smartphone,
  "website-migration": FolderInput,
  "website-redesign": RefreshCw,
  "website-performance-optimization": Gauge,
  "accessibility-optimization": Accessibility,
  "website-security-hardening": ShieldCheck,
  "website-maintenance": Wrench,
  "website-maintenance-services": Wrench,
  "website-support-troubleshooting": LifeBuoy,
  "security-updates-vulnerability-management": ShieldAlert,
  "software-theme-plugin-updates": Package,
  "backup-disaster-recovery": DatabaseBackup,
  "website-monitoring-uptime-management": Activity,
  "content-website-updates": FilePenLine,
  "technical-seo-maintenance": Search,
  "server-hosting-management": Server,
  "website-migration-services": FolderInput,
  "ongoing-support-technical-consultation": MessagesSquare,
  "custom-saas-development": Cloud,
  "saas-mvp-development": Rocket,
  "multi-tenant-saas-development": Boxes,
  "saas-product-development": Layers,
  "saas-platform-modernization": RefreshCw,
  "saas-ui-ux-development": Palette,
  "subscription-billing-integration": CreditCard,
  "user-authentication-access-management": KeyRound,
  "saas-dashboard-development": LayoutDashboard,
  "api-development-third-party-integrations": Plug,
  "saas-migration-scaling": Scaling,
  "saas-maintenance-support": LifeBuoy,
  "custom-api-development": Server,
  "rest-api-development": FileCode2,
  "graphql-api-development": Layers,
  "third-party-api-integration": Link2,
  "payment-gateway-integration": CreditCard,
  "crm-erp-integration": Building2,
  "ecommerce-api-integration": ShoppingBag,
  "authentication-sso": KeyRound,
  "webhook-event-automation": Webhook,
  "api-modernization-legacy-integration": RefreshCw,
  "api-testing-documentation-optimization": BookOpenCheck,
  "api-maintenance-support": Wrench,
  "custom-cms-development": LayoutTemplate,
  "headless-cms-development": Layers,
  "cms-implementation-setup": Package,
  "cms-migration-services": FolderInput,
  "enterprise-cms-development": Building2,
  "cms-theme-template-development": Palette,
  "cms-plugin-module-development": Puzzle,
  "headless-api-frontend-integration": Plug,
  "content-workflow-publishing-automation": Workflow,
  "multilingual-cms-development": Globe2,
  "cms-performance-security-optimization": Gauge,
  "cms-maintenance-support": Wrench,
  "custom-mobile-app-development": Smartphone,
  "cross-platform-app-development": Layers,
  "android-app-development": Smartphone,
  "ios-app-development": Apple,
  "enterprise-mobile-app-development": Building2,
  "ecommerce-mobile-app-development": ShoppingBag,
  "saas-mobile-app-development": Cloud,
  "marketplace-app-development": Store,
  "booking-appointment-app-development": Calendar,
  "healthcare-mobile-app-development": HeartPulse,
  "fintech-mobile-app-development": Wallet,
  "api-third-party-integrations": Plug,
  "app-modernization-migration": RefreshCw,
  "app-maintenance-support": LifeBuoy,
};

function toneStyles(tone) {
  if (tone === "lime") {
    return {
      bg: SVC.lime,
      title: SVC.forest,
      body: "rgba(22,45,36,0.72)",
      icon: SVC.forest,
      iconBg: "rgba(22,45,36,0.12)",
      cta: SVC.forest,
      glow: "rgba(200,240,74,0.55)",
    };
  }
  if (tone === "dark") {
    return {
      bg: SVC.forestMid,
      title: SVC.white,
      body: "rgba(255,255,255,0.68)",
      icon: SVC.lime,
      iconBg: "rgba(200,240,74,0.14)",
      cta: SVC.lime,
      glow: "rgba(200,240,74,0.28)",
    };
  }
  return {
    bg: SVC.white,
    title: SVC.forest,
    body: "rgba(22,45,36,0.62)",
    icon: SVC.forest,
    iconBg: "rgba(22,45,36,0.08)",
    cta: SVC.forest,
    glow: "rgba(255,255,255,0.35)",
  };
}

function ServiceCard({ item, href, tone, ctaLabel }) {
  const t = toneStyles(tone);
  const Icon = ICONS[item.slug] || Rocket;
  const cardRef = useRef(null);
  const iconRef = useRef(null);
  const ctaRef = useRef(null);
  const shineRef = useRef(null);

  const onEnter = () => {
    const card = cardRef.current;
    if (!card) return;
    gsap.killTweensOf([card, iconRef.current, ctaRef.current, shineRef.current]);
    gsap.to(card, {
      y: -14,
      duration: 0.45,
      ease: "power3.out",
      boxShadow: `0 28px 60px rgba(0,0,0,0.28), 0 0 0 1px ${t.glow}`,
    });
    gsap.to(iconRef.current, {
      scale: 1.12,
      rotate: -8,
      duration: 0.5,
      ease: "back.out(2.2)",
    });
    gsap.to(ctaRef.current, {
      x: 6,
      duration: 0.4,
      ease: "power3.out",
    });
    gsap.fromTo(
      shineRef.current,
      { x: "-120%", opacity: 0 },
      { x: "120%", opacity: 0.55, duration: 0.7, ease: "power2.out" }
    );
  };

  const onLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    gsap.killTweensOf([card, iconRef.current, ctaRef.current]);
    gsap.to(card, {
      y: 0,
      duration: 0.5,
      ease: "power3.out",
      boxShadow: "0 18px 40px rgba(0,0,0,0.14)",
    });
    gsap.to(iconRef.current, {
      scale: 1,
      rotate: 0,
      duration: 0.45,
      ease: "power3.out",
    });
    gsap.to(ctaRef.current, {
      x: 0,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  return (
    <Link
      href={href}
      data-sub-service-card
      className="group block no-underline h-full"
      style={{ outline: "none" }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
    >
      <div
        ref={cardRef}
        style={{
          position: "relative",
          height: "100%",
          minHeight: 380,
          borderRadius: 36,
          padding: "clamp(28px, 3vw, 36px)",
          background: t.bg,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 18px 40px rgba(0,0,0,0.14)",
          willChange: "transform",
        }}
      >
        {/* Shine sweep */}
        <span
          ref={shineRef}
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)",
            pointerEvents: "none",
            opacity: 0,
            zIndex: 1,
          }}
        />

        <div
          ref={iconRef}
          style={{
            width: 56,
            height: 56,
            borderRadius: 16,
            background: t.iconBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 28,
            position: "relative",
            zIndex: 2,
            willChange: "transform",
          }}
        >
          <Icon size={26} strokeWidth={1.75} color={t.icon} aria-hidden />
        </div>

        <h3
          style={{
            margin: "0 0 14px",
            color: t.title,
            fontFamily: SVC.heading,
            fontWeight: 600,
            fontSize: "clamp(1.15rem, 1.6vw, 1.35rem)",
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
            position: "relative",
            zIndex: 2,
          }}
        >
          {item.title}
        </h3>

        <p
          style={{
            margin: 0,
            color: t.body,
            fontFamily: SVC.body,
            fontSize: "0.92rem",
            lineHeight: 1.65,
            flex: 1,
            position: "relative",
            zIndex: 2,
          }}
        >
          {item.shortDesc}
        </p>

        <span
          ref={ctaRef}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginTop: 28,
            color: t.cta,
            fontFamily: SVC.ui,
            fontWeight: 700,
            fontSize: "0.78rem",
            letterSpacing: "0.04em",
            position: "relative",
            zIndex: 2,
            willChange: "transform",
          }}
        >
          {ctaLabel}
          <ArrowRight size={16} strokeWidth={2.2} aria-hidden />
        </span>
      </div>
    </Link>
  );
}

function getMetrics(viewport, perView) {
  const width = viewport.clientWidth;
  const cardW = (width - GAP * (perView - 1)) / perView;
  return { cardW, step: cardW + GAP };
}

/**
 * Horizontal sub-services slider for service hub pages.
 */
export default function SubServicesSection({
  eyebrow = "The Digital Ecosystem",
  titleSolid = "Additional Services from Your Trusted",
  titleOutline = "Qatar Web Design Agency",
  heading,
  intro,
  parentPath,
  items = [],
}) {
  const solid = titleSolid || heading || "Additional Services";
  const outline = titleOutline || intro || "";

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const autoplayRef = useRef(null);
  const indexRef = useRef(0);
  const dragRef = useRef({ active: false, startX: 0, currentX: 0, baseX: 0 });

  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const maxIndex = Math.max(0, items.length - perView);

  const punchVisibleCards = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll("[data-sub-service-card] > div");
    if (!cards.length) return;

    gsap.fromTo(
      cards,
      { y: 28, rotateZ: 1.2, scale: 0.94, opacity: 0.55 },
      {
        y: 0,
        rotateZ: 0,
        scale: 1,
        opacity: 1,
        duration: 0.7,
        stagger: 0.07,
        ease: "back.out(1.85)",
        overwrite: "auto",
      }
    );
  }, []);

  const slideTo = useCallback(
    (next, { animate = true, punch = true } = {}) => {
      const clamped = Math.max(0, Math.min(next, maxIndex));
      indexRef.current = clamped;
      setIndex(clamped);

      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;

      const { step } = getMetrics(viewport, perView);
      const x = -(clamped * step);

      if (animate) {
        gsap.to(track, {
          x,
          duration: 0.95,
          ease: "expo.inOut",
          overwrite: true,
          onStart: () => {
            if (punch) punchVisibleCards();
          },
        });
      } else {
        gsap.set(track, { x });
      }
    },
    [maxIndex, perView, punchVisibleCards]
  );

  const goNext = useCallback(() => {
    slideTo(indexRef.current >= maxIndex ? 0 : indexRef.current + 1);
  }, [maxIndex, slideTo]);

  const goPrev = useCallback(() => {
    slideTo(indexRef.current <= 0 ? maxIndex : indexRef.current - 1);
  }, [maxIndex, slideTo]);

  useEffect(() => {
    const measure = () => {
      const w = window.innerWidth;
      if (w < 640) setPerView(1);
      else if (w < 1024) setPerView(2);
      else setPerView(3);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    slideTo(Math.min(indexRef.current, maxIndex), { animate: false, punch: false });
  }, [perView, items.length, maxIndex, slideTo]);

  useEffect(() => {
    const onResize = () =>
      slideTo(indexRef.current, { animate: false, punch: false });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [slideTo]);

  // Autoplay
  useEffect(() => {
    if (paused || items.length <= perView) return undefined;
    autoplayRef.current = window.setInterval(() => {
      const prev = indexRef.current;
      const next = prev >= maxIndex ? 0 : prev + 1;
      slideTo(next);
    }, 4500);
    return () => clearInterval(autoplayRef.current);
  }, [paused, items.length, perView, maxIndex, slideTo]);

  // Entrance — hard kick
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.85, ease: "power4.out" }
      );

      const cards = trackRef.current?.querySelectorAll("[data-sub-service-card] > div");
      if (cards?.length) {
        tl.fromTo(
          cards,
          { opacity: 0, y: 80, rotateZ: 3, scale: 0.88 },
          {
            opacity: 1,
            y: 0,
            rotateZ: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.35"
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, [items]);

  // Pointer drag
  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return undefined;

    const onDown = (e) => {
      if (e.target.closest("a") && e.pointerType === "mouse") {
        // allow click; still enable drag if moved
      }
      dragRef.current.active = true;
      dragRef.current.startX = e.clientX;
      dragRef.current.currentX = 0;
      dragRef.current.baseX = gsap.getProperty(track, "x") || 0;
      setPaused(true);
      gsap.killTweensOf(track);
      viewport.style.cursor = "grabbing";
    };

    const onMove = (e) => {
      if (!dragRef.current.active) return;
      const dx = e.clientX - dragRef.current.startX;
      dragRef.current.currentX = dx;
      gsap.set(track, {
        x: dragRef.current.baseX + dx * 1.05,
      });
    };

    const onUp = () => {
      if (!dragRef.current.active) return;
      dragRef.current.active = false;
      viewport.style.cursor = "grab";
      const dx = dragRef.current.currentX;
      let next = indexRef.current;
      if (dx < -64) next = Math.min(indexRef.current + 1, maxIndex);
      else if (dx > 64) next = Math.max(indexRef.current - 1, 0);
      dragRef.current.currentX = 0;
      slideTo(next);
      setPaused(false);
    };

    viewport.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      viewport.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [maxIndex, slideTo]);

  if (!items.length) return null;

  const dotCount = maxIndex + 1;

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{
        backgroundColor: SVC.forest,
        ...sectionPad,
        overflow: "hidden",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1180px" }}>
        <div
          ref={headingRef}
          className="text-center mx-auto"
          style={{ maxWidth: 820, marginBottom: "clamp(28px, 4vw, 48px)" }}
        >
          <p style={{ ...eyebrowStyle(true), marginBottom: 16 }}>{eyebrow}</p>
          <h2
            style={{
              margin: 0,
              fontFamily: SVC.heading,
              fontWeight: 600,
              fontSize: "clamp(1.7rem, 3.6vw, 2.75rem)",
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
            }}
          >
            <span style={{ display: "block", color: SVC.white }}>{solid}</span>
            {outline ? (
              <span
                style={{
                  display: "block",
                  color: "transparent",
                  WebkitTextStroke: `1.5px ${SVC.white}`,
                  marginTop: 4,
                }}
              >
                {outline}
              </span>
            ) : null}
          </h2>
        </div>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Clip X only; vertical padding keeps lifts/shadows inside */}
          <div
            ref={viewportRef}
            style={{
              overflow: "hidden",
              cursor: "grab",
              touchAction: "pan-y",
              userSelect: "none",
              paddingTop: VIEW_PAD_Y,
              paddingBottom: VIEW_PAD_Y,
              marginTop: -VIEW_PAD_Y / 2,
              marginBottom: -VIEW_PAD_Y / 2,
            }}
          >
            <div
              ref={trackRef}
              style={{
                display: "flex",
                gap: GAP,
                willChange: "transform",
              }}
            >
              {items.map((item, i) => (
                <div
                  key={item.slug}
                  data-slide-slot
                  style={{
                    flex: `0 0 calc((100% - ${GAP * (perView - 1)}px) / ${perView})`,
                    minWidth: 0,
                    paddingTop: 4,
                    paddingBottom: 4,
                  }}
                >
                  <ServiceCard
                    item={item}
                    href={`${parentPath}/${item.slug}`}
                    tone={CARD_TONES[i % CARD_TONES.length]}
                    ctaLabel={CTA_LABELS[i % CTA_LABELS.length]}
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            className="flex items-center justify-center"
            style={{ gap: 20, marginTop: 28 }}
          >
            <button
              type="button"
              aria-label="Previous services"
              onClick={goPrev}
              className="flex items-center justify-center"
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                border: `1px solid ${SVC.borderDark}`,
                background: "transparent",
                color: SVC.white,
                cursor: "pointer",
                transition: "background 0.25s ease, border-color 0.25s ease, color 0.25s ease, transform 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = SVC.lime;
                e.currentTarget.style.borderColor = SVC.lime;
                e.currentTarget.style.color = SVC.forest;
                e.currentTarget.style.transform = "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = SVC.borderDark;
                e.currentTarget.style.color = SVC.white;
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <ArrowLeft size={18} strokeWidth={2} />
            </button>

            <div
              className="flex items-center"
              style={{ gap: 10 }}
              role="tablist"
              aria-label="Slider pages"
            >
              {Array.from({ length: dotCount }).map((_, i) => {
                const active = i === index;
                return (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => slideTo(i)}
                    style={{
                      width: active ? 32 : 9,
                      height: 9,
                      borderRadius: 999,
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      background: active ? SVC.lime : "rgba(255,255,255,0.28)",
                      transition: "width 0.4s cubic-bezier(0.22,1,0.36,1), background 0.35s ease",
                      boxShadow: active ? "0 0 16px rgba(200,240,74,0.45)" : "none",
                    }}
                  />
                );
              })}
            </div>

            <button
              type="button"
              aria-label="Next services"
              onClick={goNext}
              className="flex items-center justify-center"
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                border: `1px solid ${SVC.borderDark}`,
                background: "transparent",
                color: SVC.white,
                cursor: "pointer",
                transition: "background 0.25s ease, border-color 0.25s ease, color 0.25s ease, transform 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = SVC.lime;
                e.currentTarget.style.borderColor = SVC.lime;
                e.currentTarget.style.color = SVC.forest;
                e.currentTarget.style.transform = "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = SVC.borderDark;
                e.currentTarget.style.color = SVC.white;
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <ArrowRight size={18} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
