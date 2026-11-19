"use client";

import { useEffect, useRef } from "react";
import { revealElements } from "../../../lib/useRevealOnView";

/**
 * Grid of service offerings for deep service sub-pages (retained #162D24 styling).
 */
export default function SubServiceOfferingsGrid({
  label = "What we deliver",
  heading,
  intro = "",
  items = [],
}) {
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const introRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    return revealElements(
      [labelRef.current, headingRef.current, introRef.current, ...cards],
      { y: 24, stagger: 0.08, duration: 0.8, safetyMs: 120 }
    );
  }, [items, heading, label, intro]);

  if (!items.length) return null;

  return (
    <section
      className="w-full bg-[#162D24] py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:px-20"
      aria-labelledby="subservice-offerings-heading"
    >
      <div className="max-w-[1180px] mx-auto mb-14 md:mb-20 flex flex-col gap-4 md:gap-6">
        <p
          ref={labelRef}
          className="text-[13px] sm:text-[14px] font-medium tracking-wide"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          {label}
        </p>
        <h2
          id="subservice-offerings-heading"
          ref={headingRef}
          className="text-white font-bold leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 54px)", maxWidth: "22ch" }}
        >
          {heading}
        </h2>
        {intro ? (
          <p
            ref={introRef}
            className="text-[13px] sm:text-[18px] font-normal leading-relaxed max-w-[640px]"
            style={{ color: "rgba(255,255,255,0.92)" }}
          >
            {intro}
          </p>
        ) : null}
      </div>

      <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {items.map((item, i) => (
          <div
            key={`${item.title}-${i}`}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="flex flex-col gap-3 rounded-2xl p-6 md:p-8"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <p
              className="text-[13px] sm:text-[18px] font-semibold leading-snug"
              style={{ color: "rgba(255,255,255,0.95)" }}
            >
              {item.title}
            </p>
            <p
              className="text-[12px] sm:text-[16px] font-normal leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}