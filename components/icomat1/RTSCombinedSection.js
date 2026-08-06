"use client";

import { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pageKeyFromPathname } from "../../lib/pageKeys";
import {
  getRtsCombinedCardVideos,
  getRtsCombinedPanelVideo,
} from "../../lib/pageVideos";
import { debounceScrollTriggerRefresh } from "../../lib/deferScrollTriggerRefresh";

gsap.registerPlugin(ScrollTrigger);

function CardVideo({ src, image, badge, footerContent }) {
  const videoRef = useRef(null);
  const isImage = Boolean(image);
  const handleMouseEnter = () => {
    if (!isImage) videoRef.current?.play();
  };
  const handleMouseLeave = () => {
    if (!isImage && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="flex flex-col overflow-hidden" style={{ borderRadius: "10px" }}>
      <div
        className="relative w-full bg-black overflow-hidden cursor-pointer group"
        style={{ aspectRatio: "16/9" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 opacity-90 group-hover:opacity-100 group-hover:scale-[1.03]"
          />
        ) : (
          <video
            ref={videoRef}
            src={src}
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-90 group-hover:opacity-100"
          />
        )}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-all duration-500 pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-[#2a2a2a]/80 backdrop-blur-sm border border-white/10 rounded-sm px-3 py-1.5 flex items-center gap-2 group-hover:opacity-60 transition-opacity duration-300">
            <span className="text-white text-[10px] font-semibold tracking-[0.12em] uppercase">{badge}</span>
            <span className="w-4 h-4 rounded-sm border border-white/40 flex items-center justify-center text-white text-[9px]">+</span>
          </div>
        </div>
        {!isImage && (
          <div className="absolute bottom-3 right-3 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm px-2 py-1 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="text-white text-[9px] font-medium tracking-wide hidden sm:inline">Hover to play</span>
              <span className="text-white text-[9px] font-medium tracking-wide sm:hidden">View</span>
            </div>
          </div>
        )}
      </div>
      <div className="bg-[#f5f5f5] border border-[#e0e0e0] py-3 px-3 sm:px-4 min-h-[80px] sm:min-h-[92px] flex items-start">
        {footerContent}
      </div>
    </div>
  );
}

const BADGES = [
  { label: "AT SCALE",     top: "28%", left: "20%" },
  { label: "ZERO DEFECTS", top: "62%", left: "30%" },
  { label: "10x FASTER",   top: "55%", left: "72%" },
];

const GRID_DOTS = [
  { top: "18%", left: "25%" }, { top: "18%", left: "50%" }, { top: "18%", left: "75%" },
  { top: "57%", left: "9%"  }, { top: "57%", left: "25%" }, { top: "57%", left: "50%" },
  { top: "57%", left: "75%" }, { top: "57%", left: "91%" },
  { top: "88%", left: "9%"  }, { top: "88%", left: "25%" }, { top: "88%", left: "50%" },
  { top: "88%", left: "75%" }, { top: "88%", left: "91%" },
];

const CARD_META = [
  {
    badge: "Websites",
    href: "/services/website-design",
    image: "/services-pics/web-design-3d-clean.png",
    footer: (
      <p className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-[#111] leading-snug m-0">
        Website Design
        <br />
        <span className="font-normal text-[#666] block min-h-[2.4em]">Custom websites built for performance, clarity, and conversion</span>
      </p>
    ),
  },
  {
    badge: "Web Apps",
    href: "/services/web-application-development",
    image: "/services-pics/web-app-3d-clean.png",
    footer: (
      <p className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-[#111] leading-snug m-0">
        Web Application Development
        <br />
        <span className="font-normal text-[#666] block min-h-[2.4em]">Scalable web apps tailored to your workflows and business logic</span>
      </p>
    ),
  },
  {
    badge: "SaaS",
    href: "/services/saas-development",
    image: "/services-pics/saas-development-3d-clean.png",
    footer: (
      <p className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-[#111] leading-snug m-0">
        SaaS Development
        <br />
        <span className="font-normal text-[#666] block min-h-[2.4em]">Product-ready SaaS platforms with secure, multi-tenant architecture</span>
      </p>
    ),
  },
  {
    badge: "E-commerce",
    href: "/services/ecommerce-development",
    image: "/services-pics/e-commerce-3d-clean.png",
    footer: (
      <p className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-[#111] leading-snug m-0">
        E-commerce Development
        <br />
        <span className="font-normal text-[#666] block min-h-[2.4em]">Online stores engineered for speed, checkout, and growth</span>
      </p>
    ),
  },
  {
    badge: "Mobile",
    href: "/services/mobile-app-development",
    image: "/services-pics/mobile-app-3d-clean.png",
    footer: (
      <p className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-[#111] leading-snug m-0">
        Mobile App Development
        <br />
        <span className="font-normal text-[#666] block min-h-[2.4em]">Native-feeling mobile experiences that extend your digital product</span>
      </p>
    ),
  },
  {
    badge: "CMS",
    href: "/services/cms-headless-development",
    image: "/services-pics/cms-3d-clean.png",
    footer: (
      <p className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-[#111] leading-snug m-0">
        CMS & Headless Development
        <br />
        <span className="font-normal text-[#666] block min-h-[2.4em]">Flexible CMS and headless builds for content teams and modern frontends</span>
      </p>
    ),
  },
  {
    badge: "APIs",
    href: "/services/api-integration-development",
    image: "/services-pics/api-dev-3d-clean.png",
    footer: (
      <p className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-[#111] leading-snug m-0">
        API & Integration Development
        <br />
        <span className="font-normal text-[#666] block min-h-[2.4em]">Reliable APIs and third-party integrations that keep systems in sync</span>
      </p>
    ),
  },
  {
    badge: "Support",
    href: "/services/website-support-maintenance",
    image: "/services-pics/support-and-maintenance-3d-clean.png",
    footer: (
      <p className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-[#111] leading-snug m-0">
        Website Support & Maintenance
        <br />
        <span className="font-normal text-[#666] block min-h-[2.4em]">Ongoing updates, monitoring, and fixes so your site stays healthy</span>
      </p>
    ),
  },
  {
    badge: "WordPress",
    href: "/services/wordpress-development",
    image: "/services-pics/wordpress-3d-clean.png",
    footer: (
      <p className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-[#111] leading-snug m-0">
        WordPress Development
        <br />
        <span className="font-normal text-[#666] block min-h-[2.4em]">Custom WordPress design, development, WooCommerce, hosting, and care</span>
      </p>
    ),
  },
];

function CrosshairDot({ top, left }) {
  return (
    <div className="absolute pointer-events-none" style={{ top, left, transform: "translate(-50%,-50%)" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-px bg-white/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-4 bg-white/20" />
      <div className="w-1 h-1 rounded-full bg-white/30 relative z-10" />
    </div>
  );
}

export default function RTSCombinedSection({
  pageKey: pageKeyProp,
  cards: cardsProp,
  servicesIntro,
}) {
  const pathname = usePathname();
  const pageKey = pageKeyProp ?? pageKeyFromPathname(pathname) ?? "homepage";
  const showVideoPanel = pageKey !== "homepage" && !cardsProp;
  const cardItems = useMemo(() => {
    const videos = getRtsCombinedCardVideos(pageKey);
    const meta = cardsProp?.length
      ? cardsProp.map((card) => ({
          badge: card.badge,
          href: card.href,
          image: card.image,
          footer: (
            <p className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-[#111] leading-snug m-0">
              {card.title}
              <br />
              <span className="font-normal text-[#666] block min-h-[2.4em]">
                {card.desc}
              </span>
            </p>
          ),
        }))
      : CARD_META;

    return meta.map((card, i) => ({
      ...card,
      src: card.image ? undefined : videos[i % videos.length],
      image: card.image,
    }));
  }, [pageKey, cardsProp]);
  const panelVideo = getRtsCombinedPanelVideo(pageKey);

  const wrapperRef = useRef(null);
  const panelARef = useRef(null);
  const headerRef = useRef(null);
  const cardsWrapperRef = useRef(null);
  const panelBRef = useRef(null);
  const badgesRef = useRef(null);
  const gridRef = useRef(null);

  const isMobile = () => window.innerWidth < 768;

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Mobile: completely skip pin/overlap animations ────────
      if (isMobile()) {
        // Simple fade-up for header and cards on mobile
        gsap.fromTo(headerRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: headerRef.current, start: "top 90%", toggleActions: "play none none reverse" },
          }
        );

        const mobileCards = cardsWrapperRef.current?.querySelectorAll(".rts-card-item");
        if (mobileCards?.length) {
          gsap.fromTo(mobileCards,
            { opacity: 0, y: 24 },
            {
              opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.08,
              scrollTrigger: { trigger: cardsWrapperRef.current, start: "top 88%", toggleActions: "play none none reverse" },
            }
          );
        }

        /*
        gsap.fromTo(midColRef.current,
          { opacity: 0, y: 16 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
            scrollTrigger: { trigger: midColRef.current, start: "top 92%", toggleActions: "play none none reverse" },
          }
        );
        */

        // Panel B: simple fade in on mobile (no pin, no slide-up)
        if (showVideoPanel) {
          gsap.set(panelBRef.current, { y: 0 });
          gsap.fromTo([badgesRef.current, gridRef.current],
            { opacity: 0, y: 16 },
            {
              opacity: 1, y: 0, stagger: 0.12, duration: 0.7, ease: "power2.out",
              scrollTrigger: { trigger: panelBRef.current, start: "top 80%", toggleActions: "play none none reverse" },
            }
          );
        }
        return;
      }

      // ── DESKTOP ANIMATIONS (≥768px) ───────────────────────────

      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /*
      gsap.fromTo(midColRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: {
            trigger: midColRef.current,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );
      */

      let cardsTrigger = null;
      const setupCards = () => {
        const cards = cardsWrapperRef.current?.querySelectorAll(".rts-card-item");
        if (!cards || cards.length === 0) return;

        if (isMobile()) {
          cardsTrigger?.kill();
          cardsTrigger = null;
          gsap.set(cards, { clearProps: "all" });
          return;
        }

        cardsTrigger?.kill();
        gsap.set(cards, { opacity: 0.55, scale: 0.96 });
        const cardWidth = cards[0].offsetWidth;
        const overlapStep = cardWidth * 0.9;
        cards.forEach((card, i) => {
          const col = i % 3;
          const startX = -(col * overlapStep);
          gsap.set(card, { x: startX, y: 0, zIndex: 10 + col });
        });

        cardsTrigger = ScrollTrigger.create({
          trigger: cardsWrapperRef.current,
          start: "top 75%",
          end: "top 20%",
          scrub: 1.4,
          onUpdate: (self) => {
            const p = self.progress;
            cards.forEach((card, i) => {
              const col = i % 3;
              const startX = -(col * overlapStep);
              gsap.set(card, {
                x: startX * (1 - p),
                y: 0,
                opacity: 0.55 + 0.45 * p,
                scale: 0.96 + 0.04 * p,
              });
            });
          },
          onLeaveBack: () => {
            cards.forEach((card, i) => {
              const col = i % 3;
              const startX = -(col * overlapStep);
              gsap.to(card, {
                x: startX, y: 0, opacity: 0.55, scale: 0.96,
                duration: 0.45, ease: "power2.inOut", overwrite: true,
              });
            });
          },
          onLeave: () => gsap.set(cards, { x: 0, y: 0, opacity: 1, scale: 1 }),
        });
      };

      setupCards();

      if (showVideoPanel) {
        gsap.set(panelBRef.current, { y: "100vh" });
        gsap.set([badgesRef.current, gridRef.current], { opacity: 0, y: 12 });

        ScrollTrigger.create({
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        });

        const masterTl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: "+=200%",
            scrub: 1.2,
          },
        });

        masterTl.to(panelBRef.current,
          { y: "0vh", ease: "power2.inOut", duration: 2 }, 0
        );
        masterTl.to(panelARef.current,
          { scale: 0.88, borderRadius: "20px", opacity: 0.8, ease: "power2.inOut", duration: 2 }, 0
        );
        masterTl.to([badgesRef.current, gridRef.current],
          { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: "power2.out" }
        );
        masterTl.to({}, { duration: 1 });
      }

      const onResize = debounceScrollTriggerRefresh(200);
      const handleResize = () => {
        setupCards();
        onResize();
      };
      window.addEventListener("resize", handleResize);
      return () => {
        cardsTrigger?.kill();
        window.removeEventListener("resize", handleResize);
      };

    }, wrapperRef);

    return () => ctx.revert();
  }, [showVideoPanel]);

  return (
    /*
      On mobile: wrapperRef renders as a normal flow block (no pin).
      On desktop: GSAP pinSpacing adds the scroll room automatically.
    */
    <div
      ref={wrapperRef}
      data-header="light"
      className="relative w-full"
      style={{
        minHeight: showVideoPanel ? "100vh" : "auto",
        overflowX: "clip",
        maxWidth: "100%",
      }}
    >

      {/* ── PANEL A ──────────────────────────────────────────────── */}
      <div
        ref={panelARef}
        className={`
          w-full bg-[#f5f5f5] pt-6 will-change-transform
          ${showVideoPanel ? "md:absolute md:inset-0" : ""}
        `}
        style={{
          /* On mobile: natural height, no absolute positioning */
          height: "auto",
          overflow: "clip",
          transformOrigin: "center center",
          zIndex: 1,
          paddingBottom: "clamp(48px, 7vw, 96px)",
        }}
      >
        {/* On desktop we need the panel to fill 100vh */}
        <style>{`
          @media (min-width: 768px) {
            .panel-a-inner { height: ${showVideoPanel ? "100vh" : "auto"}; }
          }
        `}</style>
        <div className="panel-a-inner flex flex-col">
          <div
            ref={headerRef}
            className="px-4 sm:px-8 md:px-16 lg:px-20 mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10"
          >
            <div className="flex items-start">
              <p className="text-[15px] sm:text-[17px] md:text-[20px] font-semibold text-[#111] tracking-tight leading-snug">
                Our Services
              </p>
            </div>
            <div className="max-w-lg">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#111] leading-snug">
                {servicesIntro ??
                  "Website development, web applications, SaaS, e-commerce, mobile apps, CMS & headless, API integrations, WordPress development, and ongoing support & maintenance."}
              </p>
            </div>
          </div>

          <div ref={cardsWrapperRef} className="px-4 sm:px-8 md:px-16 lg:px-20 overflow-hidden flex-1">
            {/* Mobile: 1-col scroll; Tablet: 2-col; Desktop: 3-col */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {cardItems.map((card, idx) => (
                <Link
                  key={idx}
                  href={card.href}
                  className="rts-card-item will-change-transform block no-underline text-inherit hover:opacity-95 transition-opacity"
                >
                  <CardVideo
                    src={card.src}
                    image={card.image}
                    badge={card.badge}
                    footerContent={card.footer}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/*
          <div
            ref={midColRef}
            className="mt-2 mx-4 sm:mx-8 md:mx-16 lg:mx-20 border border-[#ddd] py-1.5 px-4 mb-3"
          >
            <p className="text-[10px] sm:text-[11px] font-medium text-[#aaa] tracking-[0.16em] uppercase">
              Saqrih / WordPress Service Platform
            </p>
          </div>
          */}
        </div>
      </div>

      {/* ── PANEL B — full-section video (hidden on homepage) ───── */}
      {showVideoPanel && (
      <div
        ref={panelBRef}
        className="
          w-full bg-[#162D24] overflow-hidden will-change-transform
          md:absolute md:inset-0
        "
        style={{
          height: "auto",
          minHeight: "min(100vw, 100%)",
          zIndex: 2,
        }}
      >
        <style>{`
          @media (min-width: 768px) {
            .panel-b-inner { height: 100vh; }
          }
          .panel-b-inner { min-height: 56vw; position: relative; }
        `}</style>
        <div className="panel-b-inner">
          <video
            className="absolute inset-0 w-full h-full object-contain"
            src={panelVideo}
            autoPlay muted loop playsInline preload="auto"
            style={{ opacity: 0.85 }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.75) 100%)" }}
          />

          <div ref={gridRef} className="absolute inset-0 hidden sm:block">
            {GRID_DOTS.map((d, i) => <CrosshairDot key={i} top={d.top} left={d.left} />)}
            <div className="absolute inset-0 pointer-events-none">
              {["18%", "57%", "88%"].map((top, i) => (
                <div key={i} className="absolute left-0 right-0 border-t border-white/[0.06]" style={{ top }} />
              ))}
              {["9%", "25%", "50%", "75%", "91%"].map((left, i) => (
                <div key={i} className="absolute top-0 bottom-0 border-l border-white/[0.06]" style={{ left }} />
              ))}
            </div>
          </div>

          <div ref={badgesRef} className="absolute inset-0">
            <div className="hidden md:block">
              {BADGES.map((b, i) => (
                <div key={i} className="absolute pointer-events-none" style={{ top: b.top, left: b.left }}>
                  <div className="bg-[#1c1c1c]/90 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 flex items-center gap-2 whitespace-nowrap">
                    <span className="text-white/80 text-[11px] font-semibold tracking-[0.14em] uppercase">{b.label}</span>
                    <span className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center text-white/70 text-[10px] flex-shrink-0">+</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:hidden absolute bottom-5 left-0 right-0 flex flex-wrap justify-center gap-2 px-4">
              {BADGES.map((b, i) => (
                <div key={i} className="bg-[#1c1c1c]/90 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-1.5">
                  <span className="text-white/80 text-[10px] font-semibold tracking-[0.12em] uppercase">{b.label}</span>
                  <span className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center text-white/70 text-[9px] flex-shrink-0">+</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      )}

    </div>
  );
}