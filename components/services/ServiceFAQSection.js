"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WEBSITE_DEVELOPMENT_FAQS } from "../../lib/services/websiteDevelopment";
import { SVC, sectionPad, eyebrowStyle, h2Style, bodyStyle } from "./serviceTokens";

gsap.registerPlugin(ScrollTrigger);

function FAQItem({ faq, index, isOpen, onToggle }) {
  const answerRef = useRef(null);
  const arrowRef = useRef(null);
  const itemRef = useRef(null);
  const isOpenRef = useRef(false);

  useEffect(() => {
    gsap.fromTo(
      itemRef.current,
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        delay: index * 0.035,
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 94%",
          once: true,
        },
      }
    );
  }, [index]);

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
        { height: h, opacity: 1, duration: 0.4, ease: "power3.out" }
      );
      gsap.to(arrow, { rotation: 180, duration: 0.35, ease: "power2.inOut" });
      isOpenRef.current = true;
    } else if (!isOpen && isOpenRef.current) {
      gsap.to(el, { height: 0, opacity: 0, duration: 0.35, ease: "power3.inOut" });
      gsap.to(arrow, { rotation: 0, duration: 0.35, ease: "power2.inOut" });
      isOpenRef.current = false;
    }
  }, [isOpen]);

  return (
    <div ref={itemRef} style={{ opacity: 0 }}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          padding: "clamp(18px, 2.2vw, 22px) 0",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 20,
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: SVC.heading,
            fontWeight: 600,
            fontSize: "clamp(0.98rem, 1.2vw, 1.08rem)",
            color: SVC.forest,
            lineHeight: 1.35,
            flex: 1,
          }}
        >
          {faq.question}
        </span>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            flexShrink: 0,
            backgroundColor: isOpen ? SVC.lime : SVC.card,
            border: `1px solid ${SVC.borderLight}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.25s ease",
          }}
        >
          <svg
            ref={arrowRef}
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden
          >
            <path
              d="M4 6l4 4 4-4"
              stroke={SVC.forest}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      <div ref={answerRef} style={{ height: 0, overflow: "hidden", opacity: 0 }}>
        <p
          style={{
            fontFamily: SVC.body,
            fontWeight: 400,
            fontSize: "0.95rem",
            color: SVC.mutedOnLight,
            lineHeight: 1.7,
            margin: 0,
            paddingBottom: "clamp(16px, 2vw, 22px)",
            paddingRight: 48,
          }}
        >
          {faq.answer}
        </p>
      </div>

      <div
        style={{
          width: "100%",
          height: 1,
          backgroundColor: SVC.borderLight,
        }}
      />
    </div>
  );
}

export default function ServiceFAQSection({
  faqs = WEBSITE_DEVELOPMENT_FAQS,
  intro = "We believe in transparent communication. Here are the detailed answers to the most common questions about our web design services in Qatar.",
}) {
  const FAQS = faqs.map((faq, index) => ({
    id: index + 1,
    ...faq,
  }));
  const [openId, setOpenId] = useState(1);
  const sectionRef = useRef(null);
  const leftRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, y: 22 },
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
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{ backgroundColor: SVC.lightAlt, ...sectionPad }}
    >
      <div
        className="mx-auto grid grid-cols-1 lg:grid-cols-[minmax(260px,380px)_1fr]"
        style={{ maxWidth: "1180px", gap: "clamp(36px, 5vw, 64px)" }}
      >
        <div ref={leftRef} className="lg:sticky lg:top-28 lg:self-start">
          <p style={eyebrowStyle(false)}>Transparency</p>
          <h2 style={{ ...h2Style(false), marginBottom: 16 }}>
            Frequently Asked Questions{" "}
            <span style={{ color: "rgba(22,45,36,0.4)", fontWeight: 500 }}>(FAQ)</span>
          </h2>
          <p style={{ ...bodyStyle(false), marginBottom: 28 }}>{intro}</p>

          <div
            style={{
              borderRadius: 18,
              padding: "clamp(22px, 2.5vw, 28px)",
              background: SVC.forest,
              color: SVC.white,
            }}
          >
            <h3
              style={{
                fontFamily: SVC.heading,
                fontWeight: 600,
                fontSize: "1.15rem",
                margin: "0 0 10px",
              }}
            >
              Need a Custom Quote?
            </h3>
            <p
              style={{
                fontFamily: SVC.body,
                fontSize: "0.9rem",
                lineHeight: 1.55,
                color: SVC.mutedOnDark,
                margin: "0 0 20px",
              }}
            >
              Contact us for a personalized consultation and proposal.
            </p>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("open-quote-drawer"))}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: SVC.lime,
                color: SVC.forest,
                border: "none",
                borderRadius: 10,
                padding: "12px 20px",
                fontFamily: SVC.ui,
                fontWeight: 700,
                fontSize: "0.88rem",
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(200,240,74,0.25)",
              }}
            >
              Get in touch
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>

        <div>
          {FAQS.map((faq, index) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              index={index}
              isOpen={openId === faq.id}
              onToggle={() =>
                setOpenId((prev) => (prev === faq.id ? null : faq.id))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
