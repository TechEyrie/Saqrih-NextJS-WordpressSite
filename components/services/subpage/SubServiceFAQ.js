"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { revealElements } from "../../../lib/useRevealOnView";

function FAQItem({ faq, index, isOpen, onToggle, animRef }) {
  const answerRef = useRef(null);
  const arrowRef = useRef(null);
  const isOpenRef = useRef(false);

  useEffect(() => {
    const el = answerRef.current;
    const arrow = arrowRef.current;
    if (!el) return;

    if (isOpen && !isOpenRef.current) {
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
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.38,
        ease: "power3.inOut",
      });
      gsap.to(arrow, { rotation: 0, duration: 0.38, ease: "power2.inOut" });
      isOpenRef.current = false;
    }
  }, [isOpen]);

  return (
    <div ref={animRef}>
      <button
        type="button"
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
        <div
          style={{
            flexShrink: 0,
            width: "clamp(36px, 3vw, 46px)",
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

      <div
        ref={answerRef}
        style={{ height: 0, overflow: "hidden", opacity: 0 }}
      >
        <p
          style={{
            fontWeight: 400,
            fontSize: "clamp(1.08rem, 1.2vw, 1.18rem)",
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.78,
            margin: 0,
            paddingBottom: "clamp(20px, 2.5vw, 30px)",
            maxWidth: "820px",
          }}
        >
          {faq.answer}
        </p>
      </div>

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

/**
 * Retained-services-style FAQ accordion with prop-driven Q&A.
 */
export default function SubServiceFAQ({
  heading = "Questions? We have answers",
  subtitle = "See frequently asked questions about this service below.",
  faqs = [],
}) {
  const [openId, setOpenId] = useState(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const itemRefs = useRef([]);

  const list = faqs.map((faq, index) => ({
    id: index + 1,
    ...faq,
  }));

  useEffect(() => {
    const els = [
      headingRef.current,
      subtitleRef.current,
      ...itemRefs.current.filter(Boolean),
    ];
    return revealElements(els, {
      y: 22,
      stagger: 0.06,
      duration: 0.7,
      safetyMs: 220,
    });
  }, [faqs]);

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
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(48px, 6vw, 80px)",
            maxWidth: "680px",
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
            }}
          >
            {heading}
          </h2>
          <p
            ref={subtitleRef}
            style={{
              fontWeight: 400,
              fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)",
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.72,
              margin: 0,
            }}
          >
            {subtitle}
          </p>
        </div>

        <div style={{ width: "100%" }}>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.14)",
            }}
          />
          {list.map((faq, i) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              index={i}
              isOpen={openId === faq.id}
              onToggle={() =>
                setOpenId((prev) => (prev === faq.id ? null : faq.id))
              }
              animRef={(el) => {
                itemRefs.current[i] = el;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
