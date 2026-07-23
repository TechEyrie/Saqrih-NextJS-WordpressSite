"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SVC, sectionPad, eyebrowStyle, h2Style, bodyStyle } from "./serviceTokens";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "In-depth research into your business, competitors, and audience—so every design and engineering decision has a clear purpose.",
    icon: "discover",
  },
  {
    num: "02",
    title: "Design & Prototyping",
    desc: "Wireframes and visual systems that respect your brand while applying modern UX patterns your users already understand.",
    icon: "design",
  },
  {
    num: "03",
    title: "Development & Testing",
    desc: "Clean, efficient builds with rigorous testing across browsers and devices—so launch day feels calm, not chaotic.",
    icon: "develop",
  },
  {
    num: "04",
    title: "Launch & Optimization",
    desc: "Go-live support plus ongoing monitoring, security, and optimization guided by real user behavior and analytics.",
    icon: "launch",
  },
];

function StepIcon({ type, stroke, size = 44 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  };
  if (type === "discover") {
    return (
      <svg {...common}>
        <circle cx="10.5" cy="10.5" r="5.5" stroke={stroke} strokeWidth="1.7" />
        <path d="M15 15l4.2 4.2" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "design") {
    return (
      <svg {...common}>
        <path
          d="M5 17.5 14.2 8.3a2.2 2.2 0 0 1 3.1 3.1L8.1 20.5H5v-3z"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M12.8 9.7l3.1 3.1" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "develop") {
    return (
      <svg {...common}>
        <rect x="3.5" y="5" width="17" height="12" rx="1.8" stroke={stroke} strokeWidth="1.6" />
        <path
          d="M9.2 9.5 7 11.8l2.2 2.3M14.8 9.5 17 11.8l-2.2 2.3"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path
        d="M5 12l5 5L19 7"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServiceMethodologySection({
  eyebrow = "Our methodology",
  heading = "Industry Leading Professional Website Development Services",
  intro = "A proven process that keeps projects clear, collaborative, and on track from brief to launch.",
  steps = STEPS,
}) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const lineRef = useRef(null);

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
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      const cards = gridRef.current?.querySelectorAll("[data-method-card]");
      if (cards?.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 48, rotateX: 8 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Idle float — continuous micro-motion on icon wells
        cards.forEach((card, i) => {
          const icon = card.querySelector("[data-method-icon]");
          if (!icon) return;
          gsap.to(icon, {
            y: -6,
            duration: 1.8 + i * 0.15,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: i * 0.2,
          });
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleEnter = (e) => {
    const card = e.currentTarget;
    const icon = card.querySelector("[data-method-icon]");
    const badge = card.querySelector("[data-method-badge]");
    const glow = card.querySelector("[data-method-glow]");
    gsap.killTweensOf(card);
    gsap.to(card, {
      y: -14,
      scale: 1.035,
      duration: 0.45,
      ease: "power3.out",
      boxShadow: "0 28px 56px rgba(22,45,36,0.28), 0 0 0 1px rgba(200,240,74,0.55)",
    });
    if (icon) {
      gsap.killTweensOf(icon);
      gsap.to(icon, {
        scale: 1.18,
        y: 0,
        duration: 0.4,
        ease: "back.out(2)",
        boxShadow: "0 0 0 8px rgba(200,240,74,0.18), 0 12px 28px rgba(200,240,74,0.35)",
      });
    }
    if (badge) {
      gsap.to(badge, { scale: 1.1, rotation: -6, duration: 0.4, ease: "back.out(2)" });
    }
    if (glow) {
      gsap.to(glow, { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" });
    }
  };

  const handleLeave = (e) => {
    const card = e.currentTarget;
    const icon = card.querySelector("[data-method-icon]");
    const badge = card.querySelector("[data-method-badge]");
    const glow = card.querySelector("[data-method-glow]");
    gsap.to(card, {
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
      boxShadow: "0 18px 42px rgba(22,45,36,0.16)",
    });
    if (icon) {
      gsap.to(icon, {
        scale: 1,
        boxShadow: "0 0 0 0 rgba(200,240,74,0)",
        duration: 0.35,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(icon, {
            y: -6,
            duration: 1.8,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        },
      });
    }
    if (badge) {
      gsap.to(badge, { scale: 1, rotation: 0, duration: 0.35, ease: "power2.out" });
    }
    if (glow) {
      gsap.to(glow, { opacity: 0, scale: 0.85, duration: 0.3 });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{ backgroundColor: SVC.white, ...sectionPad }}
    >
      <div className="mx-auto" style={{ maxWidth: "1180px" }}>
        <div
          ref={headerRef}
          className="text-center mx-auto"
          style={{ maxWidth: 720, marginBottom: "clamp(40px, 5vw, 56px)" }}
        >
          <p style={eyebrowStyle(false)}>{eyebrow}</p>
          <h2 style={{ ...h2Style(false), marginBottom: 14 }}>{heading}</h2>
          <p style={bodyStyle(false)}>{intro}</p>
        </div>

        <div className="relative" style={{ perspective: 1200 }}>
          {/* Animated connector */}
          <div
            className="hidden lg:block absolute left-[10%] right-[10%] top-[42px] pointer-events-none origin-left"
            aria-hidden
            style={{ zIndex: 0 }}
          >
            <div
              ref={lineRef}
              style={{
                height: 3,
                borderRadius: 999,
                background: `linear-gradient(90deg, ${SVC.forest}, ${SVC.lime}, ${SVC.forest})`,
                transformOrigin: "left center",
                boxShadow: "0 0 16px rgba(200,240,74,0.35)",
              }}
            />
          </div>

          <div
            ref={gridRef}
            className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{ gap: 20, zIndex: 1 }}
          >
            {steps.map((step) => (
              <article
                key={step.num}
                data-method-card
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className="relative flex flex-col items-center text-center will-change-transform"
                style={{
                  background: SVC.forest,
                  borderRadius: 22,
                  padding: "clamp(32px, 3.2vw, 40px) 22px 36px",
                  boxShadow: "0 18px 42px rgba(22,45,36,0.16)",
                  minHeight: "100%",
                  overflow: "hidden",
                  cursor: "default",
                }}
              >
                {/* Hover lime wash */}
                <span
                  data-method-glow
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(200,240,74,0.18), transparent 65%)",
                    opacity: 0,
                    transform: "scale(0.85)",
                    pointerEvents: "none",
                  }}
                />

                <div
                  data-method-badge
                  className="relative z-[1] flex items-center justify-center will-change-transform"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: SVC.lime,
                    color: SVC.forest,
                    fontFamily: SVC.heading,
                    fontWeight: 800,
                    fontSize: "1rem",
                    letterSpacing: "0.04em",
                    marginBottom: 22,
                    boxShadow: "0 10px 24px rgba(200,240,74,0.4)",
                  }}
                >
                  {step.num}
                </div>

                <div
                  data-method-icon
                  className="relative z-[1] will-change-transform"
                  style={{
                    width: 88,
                    height: 88,
                    borderRadius: 22,
                    background: "rgba(200,240,74,0.12)",
                    border: "1.5px solid rgba(200,240,74,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <StepIcon type={step.icon} stroke={SVC.lime} size={44} />
                </div>

                <h3
                  className="relative z-[1]"
                  style={{
                    margin: "0 0 12px",
                    color: SVC.white,
                    fontFamily: SVC.heading,
                    fontWeight: 600,
                    fontSize: "1.15rem",
                    lineHeight: 1.25,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="relative z-[1]"
                  style={{
                    margin: 0,
                    color: "rgba(255,255,255,0.78)",
                    fontFamily: SVC.body,
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                  }}
                >
                  {step.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
