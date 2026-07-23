"use client";

import { useEffect, useRef } from "react";
import { revealElements } from "../../../lib/useRevealOnView";

function NumberBadge({ number }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "clamp(58px, 5.5vw, 76px)",
        height: "clamp(58px, 5.5vw, 76px)",
        borderRadius: "16px",
        backgroundColor: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.28)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontWeight: 600,
          fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
          color: "#ffffff",
          lineHeight: 1,
        }}
      >
        {number}
      </span>
    </div>
  );
}

function BenefitItem({ item, index, total, animRef }) {
  return (
    <div
      ref={animRef}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "clamp(16px, 2vw, 24px)",
        paddingBottom: "clamp(52px, 7vw, 96px)",
        borderBottom:
          index < total - 1 ? "1px solid rgba(255,255,255,0.14)" : "none",
        marginBottom: index < total - 1 ? "clamp(52px, 7vw, 96px)" : 0,
      }}
    >
      <NumberBadge number={item.number} />
      <h3
        style={{
          fontWeight: 600,
          fontSize: "clamp(1.82rem, 2.6vw, 2.4rem)",
          color: "rgba(255,255,255,0.95)",
          margin: 0,
          lineHeight: 1.18,
          letterSpacing: "-0.01em",
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          fontWeight: 400,
          fontSize: "clamp(1.18rem, 1.35vw, 1.3rem)",
          color: "rgba(255,255,255,0.72)",
          lineHeight: 1.75,
          margin: 0,
          maxWidth: "740px",
        }}
      >
        {item.body}
      </p>
    </div>
  );
}

/**
 * Retained-services-style “How it works” section with prop-driven steps.
 */
export default function SubServiceBenefits({
  title = "How it works",
  items = [],
}) {
  const titleRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const els = [titleRef.current, ...itemRefs.current.filter(Boolean)];
    return revealElements(els, {
      y: 28,
      x: 0,
      stagger: 0.12,
      duration: 0.8,
      safetyMs: 180,
    });
  }, [items]);

  return (
    <section
      className="benefits-section"
      style={{
        width: "100%",
        backgroundColor: "#162D24",
        boxSizing: "border-box",
        padding: "clamp(48px, 10vw, 120px) clamp(16px, 4vw, 24px)",
      }}
    >
      <div
        className="benefits-inner"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "clamp(48px, 7vw, 112px)",
        }}
      >
        <div
          className="benefits-sidebar"
          style={{
            flex: "0 0 clamp(240px, 34%, 420px)",
            alignSelf: "flex-start",
          }}
        >
          <h2
            ref={titleRef}
            className="benefits-title"
            style={{
              fontWeight: 600,
              letterSpacing: "-0.025em",
              color: "#ffffff",
              margin: 0,
            }}
          >
            {title}
          </h2>
        </div>

        <div
          className="benefits-content"
          style={{
            flex: "1 1 0",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {items.map((item, i) => (
            <BenefitItem
              key={item.number || item.title}
              item={item}
              index={i}
              total={items.length}
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
