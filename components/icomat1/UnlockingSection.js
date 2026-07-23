"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HOMEPAGE_UNLOCKING_IMAGE_CARDS } from "../../lib/homepageImages";
import { revealElements } from "../../lib/useRevealOnView";

gsap.registerPlugin(SplitText, ScrollTrigger);

// ── SVG Icons ───────────────────────────────────────────────────
const IconWaves = () => (
  <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
    <path d="M4 12c3-3 6-3 9 0s6 3 9 0 6-3 9 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 18c3-3 6-3 9 0s6 3 9 0 6-3 9 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 24c3-3 6-3 9 0s6 3 9 0 6-3 9 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconLayers = () => (
  <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
    <path d="M18 5L32 12.5L18 20L4 12.5L18 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M4 19L18 26.5L32 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 25.5L18 33L32 25.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconBolt = () => (
  <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
    <path d="M20 4L8 20h10l-2 12L30 16H20L20 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);
const IconTarget = () => (
  <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="13" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="18" cy="18" r="7" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="18" cy="18" r="2" fill="currentColor"/>
    <path d="M18 5V2M18 34v-3M5 18H2M34 18h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconCog = () => (
  <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M18 4v4M18 28v4M4 18h4M28 18h4M7.5 7.5l2.8 2.8M25.7 25.7l2.8 2.8M7.5 28.5l2.8-2.8M25.7 10.3l2.8-2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// ── Card data ───────────────────────────────────────────────────
const DEFAULT_CARDS = [
  {
    id: "build",
    eyebrow: "Built around outcomes",
    title: "Business-focused solutions",
    desc: "Every project begins with your goals, users and operational requirements.",
    icon: null,
    isHero: true,
  },
  {
    id: "steered",
    title: "Scalable development",
    desc: "We build solutions that can evolve as your users, content and business grow.",
    icon: <IconWaves />,
  },
  {
    id: "lighter",
    title: "Experienced specialists",
    desc: "Work with developers experienced across websites, applications, e-commerce and digital platforms.",
    icon: <IconLayers />,
  },
  {
    id: "speed",
    title: "Transparent delivery",
    desc: "Clear communication, defined milestones and visibility throughout development.",
    icon: <IconBolt />,
  },
  {
    id: "precision",
    title: "Quality assurance",
    desc: "Structured testing across functionality, performance, security and responsiveness.",
    icon: <IconTarget />,
  },
  {
    id: "integrated",
    title: "Long-term support",
    desc: "Ongoing maintenance and technical assistance after your project goes live.",
    icon: <IconCog />,
  },
];

const ICONS_BY_ID = {
  steered: <IconWaves />,
  lighter: <IconLayers />,
  speed: <IconBolt />,
  precision: <IconTarget />,
  integrated: <IconCog />,
  monitor: <IconTarget />,
  content: <IconLayers />,
  seo: <IconBolt />,
  hosting: <IconCog />,
  migrate: <IconWaves />,
  consult: <IconLayers />,
  corporate: <IconLayers />,
  custom: <IconBolt />,
  landing: <IconTarget />,
  portfolio: <IconWaves />,
  brochure: <IconCog />,
  multilingual: <IconLayers />,
  headless: <IconBolt />,
  pwa: <IconTarget />,
  enterprise: <IconLayers />,
  automation: <IconBolt />,
  "customer-portal": <IconCog />,
  "employee-portal": <IconWaves />,
  admin: <IconTarget />,
  crm: <IconLayers />,
  erp: <IconBolt />,
  booking: <IconCog />,
  marketplace: <IconWaves />,
  membership: <IconTarget />,
  lms: <IconLayers />,
  workflow: <IconBolt />,
  inventory: <IconCog />,
  analytics: <IconWaves />,
  legacy: <IconTarget />,
  mvp: <IconBolt />,
  "multi-tenant": <IconLayers />,
  product: <IconTarget />,
  modernize: <IconCog />,
  uiux: <IconWaves />,
  billing: <IconBolt />,
  auth: <IconCog />,
  dashboard: <IconTarget />,
  api: <IconLayers />,
  scale: <IconWaves />,
  support: <IconCog />,
  woo: <IconLayers />,
  shopify: <IconBolt />,
  magento: <IconTarget />,
  opencart: <IconWaves />,
  multivendor: <IconCog />,
  b2b: <IconLayers />,
  subscription: <IconBolt />,
  payments: <IconTarget />,
  shipping: <IconWaves />,
  erp: <IconCog />,
  perf: <IconBolt />,
  cro: <IconTarget />,
  crossplat: <IconLayers />,
  android: <IconBolt />,
  ios: <IconTarget />,
  "enterprise-mobile": <IconCog />,
  "ecom-mobile": <IconWaves />,
  "saas-mobile": <IconLayers />,
  "marketplace-mobile": <IconBolt />,
  "booking-mobile": <IconTarget />,
  "health-mobile": <IconCog />,
  "fintech-mobile": <IconWaves />,
  "api-mobile": <IconLayers />,
  "modernize-mobile": <IconBolt />,
  "support-mobile": <IconTarget />,
  "cms-setup": <IconCog />,
  "cms-migrate": <IconWaves />,
  "enterprise-cms": <IconLayers />,
  "cms-theme": <IconTarget />,
  "cms-plugin": <IconBolt />,
  "cms-api": <IconLayers />,
  "cms-workflow": <IconCog />,
  "cms-i18n": <IconWaves />,
  "cms-perf": <IconBolt />,
  "cms-support": <IconTarget />,
  "rest-api": <IconLayers />,
  "graphql-api": <IconBolt />,
  "third-party": <IconWaves />,
  "payment-api": <IconTarget />,
  "crm-erp": <IconCog />,
  "ecom-api": <IconLayers />,
  "sso-auth": <IconBolt />,
  webhooks: <IconWaves />,
  "legacy-api": <IconTarget />,
  "api-docs": <IconCog />,
  "api-support": <IconLayers />,
  "wsm-troubleshoot": <IconBolt />,
  "wsm-security": <IconTarget />,
  "wsm-updates": <IconCog />,
  "wsm-perf": <IconWaves />,
  "wsm-backup": <IconLayers />,
  "wsm-uptime": <IconBolt />,
  "wsm-content": <IconTarget />,
  "wsm-seo": <IconCog />,
  "wsm-hosting": <IconWaves />,
  "wsm-migrate": <IconLayers />,
  "wsm-consult": <IconBolt />,
  redesign: <IconWaves />,
  a11y: <IconTarget />,
  security: <IconCog />,
};

const DEFAULT_HEADING = (
  <>
    Premier Development Partner, Not Just a Service Provider
    <br />
    in the Middle East
  </>
);

// ── Image link cards data ───────────────────────────────────────
const IMAGE_CARDS = HOMEPAGE_UNLOCKING_IMAGE_CARDS;

// ── Feature card ────────────────────────────────────────────────
function FeatureCard({ card, animRef }) {
  const cardRef = useRef(null);

  const setRef = (el) => {
    cardRef.current = el;
    if (animRef) animRef(el);
  };

  useEffect(() => {
    if (card.isHero) return;
    const el = cardRef.current;
    if (!el) return;

    const iconEl = el.querySelector(".card-icon");
    const titleEl = el.querySelector(".card-title");
    const descEl = el.querySelector(".card-desc");

    const resetColors = () => {
      gsap.set(el, { backgroundColor: "#efefed" });
      gsap.set([iconEl, titleEl].filter(Boolean), {
        color: "rgba(0,0,0,0.75)",
      });
      if (titleEl) gsap.set(titleEl, { color: "rgba(0,0,0,0.82)" });
      if (descEl) gsap.set(descEl, { color: "rgba(0,0,0,0.42)" });
    };

    resetColors();

    const onEnter = () => {
      gsap.to(el, { backgroundColor: "#162D24", duration: 0.45, ease: "power1.inOut" });
      gsap.to([iconEl, titleEl].filter(Boolean), {
        color: "#ffffff", duration: 0.6, ease: "power1.inOut", stagger: 0.06,
      });
      if (descEl) gsap.to(descEl, { color: "rgba(255,255,255,0.58)", duration: 0.6, ease: "power1.inOut" });
    };

    const onLeave = () => {
      gsap.to(el, { backgroundColor: "#efefed", duration: 0.65, ease: "power1.inOut" });
      gsap.to([iconEl].filter(Boolean), {
        color: "rgba(0,0,0,0.75)", duration: 0.6, ease: "power1.inOut",
      });
      if (titleEl) gsap.to(titleEl, { color: "rgba(0,0,0,0.82)", duration: 0.6, ease: "power1.inOut" });
      if (descEl) gsap.to(descEl, { color: "rgba(0,0,0,0.42)", duration: 0.6, ease: "power1.inOut" });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      gsap.killTweensOf([el, iconEl, titleEl, descEl].filter(Boolean));
      resetColors();
    };
  }, [card.isHero, card.id]);

  // ── Hero card ────────────────────────────────────────────────
  if (card.isHero) {
    return (
      <div
        ref={setRef}
        className="unlocking-feature-card"
        style={{
          background: "#162D24",
          borderRadius: "18px",
          padding: "clamp(28px, 3.5vw, 44px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "280px",
        }}
      >
        <div>
          <p style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "clamp(0.95rem, 1.1vw, 1.08rem)",
            fontWeight: 600,
            marginBottom: "8px",
          }}>
            {card.eyebrow}
          </p>
          <p style={{
            color: "rgba(255,255,255,0.88)",
            fontSize: "clamp(0.95rem, 1.1vw, 1.08rem)",
            fontWeight: 500,
            lineHeight: 1.4,
            marginBottom: "10px",
          }}>
            {card.title}
          </p>
          {card.desc && (
            <p style={{
              color: "rgba(255,255,255,0.62)",
              fontSize: "clamp(0.95rem, 1.1vw, 1.08rem)",
              fontWeight: 400,
              lineHeight: 1.6,
              margin: 0,
            }}>
              {card.desc}
            </p>
          )}
        </div>
        <a
          href={card.href || "#"}
          onClick={(e) => {
            if (!card.href) e.preventDefault();
          }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            color: "rgba(255,255,255,0.7)",
            fontSize: "clamp(0.95rem, 1.1vw, 1.08rem)",
            fontWeight: 600,
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
          onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
        >
          Learn more
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    );
  }

  // ── Feature card ─────────────────────────────────────────────
  const CardTag = card.href ? "a" : "div";
  const cardLinkProps = card.href
    ? { href: card.href }
    : {};

  return (
    <CardTag
      ref={setRef}
      className="unlocking-feature-card"
      {...cardLinkProps}
      style={{
        background: "#efefed",
        borderRadius: "18px",
        padding: "clamp(28px, 3.5vw, 44px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "280px",
        cursor: card.href ? "pointer" : "default",
        willChange: "background-color",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div className="card-icon" style={{ color: "rgba(0,0,0,0.55)" }}>
        {card.icon}
      </div>
      <div style={{ marginTop: "28px" }}>
        <p
          className="card-title"
          style={{
            color: "rgba(0,0,0,0.82)",
            fontSize: "clamp(0.95rem, 1.1vw, 1.08rem)",
            fontWeight: 500,
            lineHeight: 1.35,
            marginBottom: "10px",
          }}
        >
          {card.title}
        </p>
        {card.desc && (
          <p
            className="card-desc"
            style={{
              color: "rgba(0,0,0,0.42)",
              fontSize: "clamp(0.95rem, 1.1vw, 1.08rem)",
              fontWeight: 400,
              lineHeight: 1.68,
              margin: 0,
            }}
          >
            {card.desc}
          </p>
        )}
      </div>
    </CardTag>
  );
}

// ── Image link card ─────────────────────────────────────────────
function ImageLinkCard({ card, animRef }) {
  const cardRef = useRef(null);
  const imgRef  = useRef(null);
  const pillRef = useRef(null);
  const textRef = useRef(null);
  const cloneRef = useRef(null);
  const tlRef = useRef(null);

  const setRef = (el) => {
    cardRef.current = el;
    if (animRef) animRef(el);
  };

  useEffect(() => {
    const el   = cardRef.current;
    const img  = imgRef.current;
    const pill = pillRef.current;
    const text = textRef.current;
    const clone = cloneRef.current;
    if (!el || !img || !pill || !text || !clone) return;

    const H = pill.offsetHeight;
    gsap.set(clone, { y: H, opacity: 1 });
    gsap.set(text, { y: 0, opacity: 1 });

    const onEnter = () => {
      gsap.to(img,  { scale: 1.04, duration: 0.7, ease: "power2.out" });
      gsap.to(pill, {
        backgroundColor: "rgba(255,255,255,0.96)",
        borderColor: "rgba(255,255,255,1)",
        duration: 0.35,
        ease: "power2.out",
      });
      tlRef.current?.kill();
      tlRef.current = gsap.timeline({ defaults: { duration: 0.52, ease: "power3.inOut" } });
      tlRef.current.to(text, { y: -H }, 0).to(clone, { y: 0 }, 0);
    };
    const onLeave = () => {
      gsap.to(img,  { scale: 1,    duration: 0.7, ease: "power2.inOut" });
      gsap.to(pill, {
        backgroundColor: "rgba(255,255,255,0.12)",
        borderColor: "rgba(255,255,255,0.34)",
        duration: 0.35,
        ease: "power2.out",
      });
      tlRef.current?.kill();
      tlRef.current = gsap.timeline({ defaults: { duration: 0.48, ease: "power3.inOut" } });
      tlRef.current.to(clone, { y: H }, 0).to(text, { y: 0 }, 0);
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      tlRef.current?.kill();
    };
  }, []);

  return (
    <a
      ref={setRef}
      href={card.href}
      className="unlocking-image-card"
    >
      {/* Background image */}
      <img
        ref={imgRef}
        src={card.src}
        alt={card.alt}
        loading="lazy"
        decoding="async"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          transformOrigin: "center top",
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.22)",
          pointerEvents: "none",
        }}
      />

      {/* Frosted pill label — centered */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          ref={pillRef}
          className="unlocking-image-pill"
          style={{
            position: "relative",
            overflow: "hidden",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.34)",
            borderRadius: "38px",
            padding: "clamp(18px, 4vw, 36px) clamp(22px, 5vw, 46px)",
            fontSize: "clamp(10px, 2.5vw, 12px)",
            fontWeight: 300,
            letterSpacing: "0.09em",
            textTransform: "uppercase",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), 0 8px 24px rgba(0,0,0,0.3)",
            lineHeight: 1.2,
            maxWidth: "min(92%, 100%)",
          }}
        >
          <span
            ref={textRef}
            className="unlocking-pill-label"
            style={{
              display: "block",
              color: "#ffffff",
              whiteSpace: "nowrap",
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            {card.label}
          </span>
          <span
            ref={cloneRef}
            aria-hidden="true"
            className="unlocking-pill-label"
            style={{
              display: "block",
              color: "#101010",
              whiteSpace: "nowrap",
              position: "absolute",
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            {card.label}
          </span>
        </div>
      </div>
    </a>
  );
}

// ── Section ─────────────────────────────────────────────────────
export default function UnlockingSection({
  heading = DEFAULT_HEADING,
  cards = DEFAULT_CARDS,
}) {
  const sectionRef   = useRef(null);
  const headingRef   = useRef(null);
  const gridRef      = useRef(null);
  const imageRowRef  = useRef(null);
  const cardAnimRefs = useRef([]);
  const imgCardRefs  = useRef([]);

  const resolvedCards = cards.map((card) => ({
    ...card,
    icon: card.icon ?? ICONS_BY_ID[card.id] ?? null,
  }));

  const cardsKey = resolvedCards.map((c) => c.id || c.title).join("|");

  useEffect(() => {
    let cleanupCards = () => {};
    const timers = [];
    let headingIo = null;
    let filled = false;

    const ctx = gsap.context(() => {
      // ── Heading: scroll color-fill word by word ──────────────
      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: "words" });
        const FILL = "rgba(0,0,0,0.9)";
        const FAINT = "rgba(0,0,0,0.1)";

        gsap.set(split.words, { color: FAINT });

        const fillHeading = (animate = true) => {
          if (filled) return;
          filled = true;

          // Kill scrub triggers so Lenis/ST refresh cannot snap words back to faint.
          ScrollTrigger.getAll().forEach((st) => {
            if (split.words.includes(st.trigger)) st.kill();
          });
          gsap.killTweensOf(split.words);

          if (animate) {
            gsap.to(split.words, {
              color: FILL,
              duration: 0.55,
              stagger: 0.04,
              ease: "power2.out",
              overwrite: true,
            });
          } else {
            gsap.set(split.words, { color: FILL });
          }
        };

        // Scrub fill when scrolling into view (works on hard loads / long scroll).
        split.words.forEach((word) => {
          gsap.to(word, {
            color: FILL,
            ease: "none",
            scrollTrigger: {
              trigger: word,
              start: "top 88%",
              end: "top 55%",
              scrub: 0.8,
              invalidateOnRefresh: true,
              onEnter: () => {
                filled = true;
              },
              onEnterBack: () => {
                filled = true;
              },
            },
          });
        });

        // Soft-nav / Lenis safety: IO + delayed checks so heading never stays faint.
        headingIo = new IntersectionObserver(
          (entries) => {
            if (entries.some((e) => e.isIntersecting)) {
              fillHeading(true);
              headingIo?.disconnect();
            }
          },
          { root: null, rootMargin: "0px 0px -12% 0px", threshold: 0.15 }
        );
        headingIo.observe(headingRef.current);

        const tryFillIfVisible = () => {
          const rect = headingRef.current?.getBoundingClientRect();
          if (!rect) return;
          if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
            fillHeading(true);
          }
        };

        timers.push(
          window.setTimeout(() => {
            tryFillIfVisible();
            ScrollTrigger.refresh();
            ScrollTrigger.update();
          }, 200)
        );
        timers.push(window.setTimeout(tryFillIfVisible, 600));
        timers.push(window.setTimeout(tryFillIfVisible, 1200));
      }
    }, sectionRef);

    // Wait a frame so card refs are populated after render.
    const raf = requestAnimationFrame(() => {
      cleanupCards = revealElements(cardAnimRefs.current.filter(Boolean), {
        y: 40,
        stagger: 0.1,
        duration: 0.9,
        safetyMs: 250,
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      cleanupCards();
      headingIo?.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
      ctx.revert();
    };
  }, [cardsKey]);

  return (
    <section ref={sectionRef} className="unlocking-section" data-header="light">

      {/* ── Heading ───────────────────────────────────────────── */}
      <div className="unlocking-heading-wrap">
        <h2
          ref={headingRef}
          className="unlocking-heading unlocking-heading--compact"
          style={{
            fontWeight: 600,
            color: "rgba(0,0,0,0.1)",
          }}
        >
          {heading}
        </h2>
      </div>

      {/* ── Feature cards grid ────────────────────────────────── */}
      <div ref={gridRef} className="unlocking-cards-grid">
        {resolvedCards.map((card, i) => (
          <FeatureCard
            key={card.id}
            card={card}
            animRef={(el) => (cardAnimRefs.current[i] = el)}
          />
        ))}
      </div>

      {/* Featured projects + Our team image cards — hidden for now
      <div ref={imageRowRef} className="unlocking-image-row">
        {IMAGE_CARDS.map((card, i) => (
          <ImageLinkCard
            key={card.id}
            card={card}
            animRef={(el) => (imgCardRefs.current[i] = el)}
          />
        ))}
      </div>
      */}

    </section>
  );
}