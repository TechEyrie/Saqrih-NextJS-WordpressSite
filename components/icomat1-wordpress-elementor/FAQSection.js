"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQS = [
  {
    id: 1,
    question: "All of the Elementor benefits, none of the logistics",
    answer:
      "Get the flexibility and power of Elementor without dealing with the technical complexity behind setup, optimization, and maintenance.",
  },
  {
    id: 2,
    question: "Tried-and-true success with the WordPress Elementor page builder",
    answer:
      "Our team has extensive experience building and supporting Elementor-powered WordPress websites across a wide range of industries.",
  },
  {
    id: 3,
    question: "The best page builder keeps getting better",
    answer:
      "Elementor continues to evolve with regular updates focused on performance, security, design flexibility, and user experience improvements.",
  },
  {
    id: 4,
    question: "WordPress hosting for Elementor websites",
    answer:
      "We provide optimized hosting environments designed to keep Elementor websites fast, stable, and reliable.",
  },
];

const INTRO_PARAS = [
  "If you prefer a more hands-off approach, Eyrion can manage all the updates, adjustments, and improvements your Elementor website needs. Our experience with both Elementor and WordPress allows us to make changes quickly and efficiently with minimal disruption.",
  "Whether you want full control or complete technical management, we tailor our support to your workflow. From small edits to large-scale improvements, we help keep your Elementor website optimized, modern, and easy to maintain.",
];

// ── Single FAQ accordion item ─────────────────────────────────
function FAQItem({ faq, index, isOpen, onToggle }) {
  const answerRef   = useRef(null);
  const arrowRef    = useRef(null);
  const itemRef     = useRef(null);
  const isOpenRef   = useRef(false);

  // Entrance animation
  useEffect(() => {
    gsap.fromTo(
      itemRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: index * 0.055,
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 92%",
          once: true,
        },
      }
    );
  }, []);

  // Open / close accordion
  useEffect(() => {
    const el    = answerRef.current;
    const arrow = arrowRef.current;
    if (!el) return;

    if (isOpen && !isOpenRef.current) {
      // Open
      gsap.set(el, { height: "auto", opacity: 1 });
      const h = el.offsetHeight;
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        { height: h, opacity: 1, duration: 0.45, ease: "power3.out" }
      );
      gsap.to(arrow, { rotation: 180, duration: 0.38, ease: "power2.inOut" });
      isOpenRef.current = true;
    } else if (!isOpen && isOpenRef.current) {
      // Close
      gsap.to(el,    { height: 0, opacity: 0, duration: 0.38, ease: "power3.inOut" });
      gsap.to(arrow, { rotation: 0,   duration: 0.38, ease: "power2.inOut" });
      isOpenRef.current = false;
    }
  }, [isOpen]);

  return (
    <div
      ref={itemRef}
      style={{ opacity: 0 }}
    >
      {/* ── Question row ── */}
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          padding: "clamp(22px, 2.8vw, 32px) 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontWeight: 500,
            fontSize: "clamp(1.15rem, 1.4vw, 1.3rem)",
            color: "rgba(255,255,255,0.95)",
            lineHeight: 1.4,
            flex: 1,
          }}
        >
          {faq.question}
        </span>

        {/* Lime-green circle arrow button */}
        <div
          style={{
            flexShrink: 0,
            width:  "clamp(36px, 3vw, 46px)",
            height: "clamp(36px, 3vw, 46px)",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.14)",
            border: "1px solid rgba(255,255,255,0.28)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            ref={arrowRef}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{ display: "block" }}
          >
            <path
              d="M8 3v10M3 8l5 5 5-5"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      {/* ── Answer panel ── */}
      <div
        ref={answerRef}
        style={{
          height: 0,
          overflow: "hidden",
          opacity: 0,
        }}
      >
        <div
          style={{
            paddingBottom: "clamp(20px, 2.5vw, 30px)",
            maxWidth: "820px",
          }}
        >
          {(Array.isArray(faq.answer) ? faq.answer : [faq.answer]).map(
            (paragraph, idx) => (
              <p
                key={idx}
                style={{
                  fontWeight: 400,
                  fontSize: "clamp(1.08rem, 1.2vw, 1.18rem)",
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: 1.78,
                  margin: idx === 0 ? 0 : "clamp(12px, 1.2vw, 16px) 0 0",
                }}
              >
                {paragraph}
              </p>
            )
          )}
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(255,255,255,0.14)",
        }}
      />
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────
export default function FAQSection() {
  const [openId, setOpenId] = useState(null);
  const headingRef  = useRef(null);
  const subtitleRef = useRef(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  // Header entrance
  useEffect(() => {
    gsap.fromTo(
      [headingRef.current, subtitleRef.current],
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: headingRef.current,
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
        backgroundColor: "#162D24",
        boxSizing: "border-box",
        padding: "clamp(72px, 9vw, 120px) clamp(80px, 12vw, 200px)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* ── Header ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(48px, 6vw, 80px)",
            maxWidth: "920px",
          }}
        >
          <h2
            ref={headingRef}
            style={{
              fontWeight: 600,
              fontSize: "clamp(2.3rem, 3.9vw, 3.9rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#ffffff",
              margin: "0 0 clamp(16px, 2vw, 22px)",
              opacity: 0,
            }}
          >
            We&apos;re the WordPress Elementor Experts
          </h2>
          <div ref={subtitleRef} style={{ opacity: 0 }}>
            {INTRO_PARAS.map((para, idx) => (
              <p
                key={idx}
                style={{
                  fontWeight: 400,
                  fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)",
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: 1.72,
                  margin: idx === 0 ? 0 : "clamp(14px, 1.8vw, 20px) 0 0",
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* ── FAQ list ── */}
        <div style={{ width: "100%" }}>
          {/* Top divider */}
          <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.14)" }} />

          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              index={i}
              isOpen={openId === faq.id}
              onToggle={() => toggle(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}