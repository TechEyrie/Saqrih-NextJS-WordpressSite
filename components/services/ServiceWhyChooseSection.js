"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SVC, sectionPad, eyebrowStyle, h2Style, bodyStyle } from "./serviceTokens";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    title: "Proven Expertise",
    desc: "Seasoned consultants, developers, and designers who understand Qatar and GCC business challenges—and deliver with craft.",
    icon: "award",
  },
  {
    title: "Results-Driven Approach",
    desc: "Every site is engineered for measurable outcomes: traffic, conversions, and engagement—not just aesthetics.",
    icon: "chart",
  },
  {
    title: "Client-Centric Solutions",
    desc: "No one-size-fits-all templates. Each build is tailored to your objectives, audience, and industry.",
    icon: "client",
  },
  {
    title: "Technical Excellence",
    desc: "Modern stacks and best practices so your website stays fast, secure, and ready to scale.",
    icon: "code",
  },
];

const STATS = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 2400, suffix: "+", label: "Satisfied Clients" },
];

function FeatureIcon({ type, size = 26 }) {
  const s = SVC.forest;
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  };
  if (type === "award") {
    return (
      <svg {...common}>
        <circle cx="12" cy="8.5" r="4.2" stroke={s} strokeWidth="1.6" />
        <path
          d="M9.2 12.2 8 20l4-2.2L16 20l-1.2-7.8"
          stroke={s}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "chart") {
    return (
      <svg {...common}>
        <path d="M4 18V6M4 18h16" stroke={s} strokeWidth="1.6" strokeLinecap="round" />
        <path
          d="M7.5 14.5 11 11l3 2.5 4.5-5.5"
          stroke={s}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "client") {
    return (
      <svg {...common}>
        <circle cx="9.5" cy="8.5" r="3.2" stroke={s} strokeWidth="1.6" />
        <path
          d="M4 19c1-3 2.8-4.5 5.5-4.5S14 16 15 19"
          stroke={s}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="16.5" cy="9" r="2.6" fill={SVC.forest} opacity="0.25" />
        <path
          d="M15.4 9l.8.8L17.8 8"
          stroke={s}
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path
        d="M9 7.5 5.5 12 9 16.5M15 7.5 18.5 12 15 16.5"
        stroke={s}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StatCard({ value, suffix, label, index }) {
  const valueRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const el = valueRef.current;
    const card = cardRef.current;
    if (!el || !card) return;

    const obj = { n: 0 };
    const ctx = gsap.context(() => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 20, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay: 0.15 + index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.to(obj, {
        n: value,
        duration: 1.6,
        ease: "power2.out",
        delay: 0.25 + index * 0.12,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        onUpdate: () => {
          el.textContent = `${Math.round(obj.n)}${suffix}`;
        },
      });
    });

    return () => ctx.revert();
  }, [value, suffix, index]);

  return (
    <div
      ref={cardRef}
      data-why-stat
      style={{
        background: SVC.forest,
        borderRadius: 16,
        padding: "20px 18px",
        border: "1px solid transparent",
        boxShadow: "0 12px 32px rgba(22,45,36,0.12)",
        transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease",
        cursor: "default",
        opacity: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow =
          "0 18px 40px rgba(22,45,36,0.2), 0 0 0 1px rgba(200,240,74,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(22,45,36,0.12)";
      }}
    >
      <div
        ref={valueRef}
        style={{
          color: SVC.lime,
          fontFamily: SVC.heading,
          fontWeight: 800,
          fontSize: "clamp(1.85rem, 2.6vw, 2.35rem)",
          lineHeight: 1,
          letterSpacing: "-0.03em",
          marginBottom: 8,
        }}
      >
        0{suffix}
      </div>
      <div
        style={{
          color: "rgba(255,255,255,0.72)",
          fontFamily: SVC.ui,
          fontWeight: 500,
          fontSize: "0.82rem",
          lineHeight: 1.3,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function ServiceWhyChooseSection({
  eyebrow = "Our legacy since 2011",
  heading = "Why Choose Our Website Development Company in Doha",
  body = "With over a decade of experience serving businesses across Qatar, Saqrih has established itself as a premier website development partner in Doha—built on quality, reliability, and results.",
  stats = STATS,
  features = FEATURES,
}) {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -28 },
        {
          opacity: 1,
          x: 0,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const cards = cardsRef.current?.querySelectorAll("[data-why-card]");
      if (cards?.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 36, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const onCardEnter = (e) => {
    const card = e.currentTarget;
    const icon = card.querySelector("[data-why-icon]");
    const bar = card.querySelector("[data-why-bar]");
    gsap.to(card, {
      y: -8,
      duration: 0.4,
      ease: "power3.out",
      boxShadow: "0 20px 44px rgba(22,45,36,0.12)",
      borderColor: "rgba(200,240,74,0.7)",
    });
    if (icon) {
      gsap.to(icon, {
        scale: 1.12,
        rotation: -6,
        duration: 0.4,
        ease: "back.out(2)",
      });
    }
    if (bar) gsap.to(bar, { scaleX: 1, duration: 0.35, ease: "power2.out" });
  };

  const onCardLeave = (e) => {
    const card = e.currentTarget;
    const icon = card.querySelector("[data-why-icon]");
    const bar = card.querySelector("[data-why-bar]");
    gsap.to(card, {
      y: 0,
      duration: 0.35,
      ease: "power3.out",
      boxShadow: "0 8px 24px rgba(22,45,36,0.04)",
      borderColor: SVC.borderLight,
    });
    if (icon) {
      gsap.to(icon, { scale: 1, rotation: 0, duration: 0.35, ease: "power2.out" });
    }
    if (bar) gsap.to(bar, { scaleX: 0, duration: 0.3, ease: "power2.in" });
  };

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{ backgroundColor: SVC.white, ...sectionPad }}
    >
      <div
        className="mx-auto grid grid-cols-1 lg:grid-cols-12 items-start"
        style={{ maxWidth: "1180px", gap: "clamp(36px, 4.5vw, 56px)" }}
      >
        <div ref={leftRef} className="lg:col-span-5">
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
          <h2 style={{ ...h2Style(false), marginBottom: 18 }}>{heading}</h2>
          <p
            style={{
              ...bodyStyle(false),
              marginBottom: "clamp(28px, 3.5vw, 40px)",
              maxWidth: "42ch",
            }}
          >
            {body}
          </p>

          <div className="grid grid-cols-2" style={{ gap: 12, maxWidth: 400 }}>
            {stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={i}
              />
            ))}
          </div>
        </div>

        <div
          ref={cardsRef}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2"
          style={{ gap: 14 }}
        >
          {features.map((feature) => (
            <article
              key={feature.title}
              data-why-card
              onMouseEnter={onCardEnter}
              onMouseLeave={onCardLeave}
              className="relative overflow-hidden will-change-transform"
              style={{
                background: SVC.white,
                border: `1px solid ${SVC.borderLight}`,
                borderRadius: 18,
                padding: "clamp(24px, 2.5vw, 28px)",
                boxShadow: "0 8px 24px rgba(22, 45, 36, 0.04)",
                opacity: 0,
              }}
            >
              <span
                data-why-bar
                aria-hidden
                style={{
                  position: "absolute",
                  left: 24,
                  right: 24,
                  top: 0,
                  height: 3,
                  borderRadius: "0 0 4px 4px",
                  background: SVC.lime,
                  transform: "scaleX(0)",
                  transformOrigin: "left center",
                }}
              />

              <div
                data-why-icon
                className="will-change-transform"
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: SVC.lime,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                  boxShadow: "0 8px 20px rgba(200,240,74,0.35)",
                }}
              >
                <FeatureIcon type={feature.icon} size={26} />
              </div>
              <h3
                style={{
                  margin: "0 0 10px",
                  color: SVC.forest,
                  fontFamily: SVC.heading,
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  lineHeight: 1.25,
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: SVC.mutedOnLight,
                  fontFamily: SVC.body,
                  fontSize: "0.9rem",
                  lineHeight: 1.65,
                }}
              >
                {feature.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
