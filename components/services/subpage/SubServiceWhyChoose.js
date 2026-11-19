"use client";

import { useEffect, useRef } from "react";
import { revealElements } from "../../../lib/useRevealOnView";

/**
 * Why-choose block matching SubServiceAdvantage layout and tokens.
 */
export default function SubServiceWhyChoose({
  label = "Why choose Saqrih",
  heading,
  intro = "",
  items = [],
  ctaLabel = "Book a Free Consultation",
  onQuoteClick = () =>
    typeof window !== "undefined" &&
    window.dispatchEvent(new Event("open-quote-drawer")),
}) {
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const introRef = useRef(null);
  const featureRefs = useRef([]);

  useEffect(() => {
    const featureEls = featureRefs.current.filter(Boolean);
    return revealElements(
      [labelRef.current, headingRef.current, introRef.current, ...featureEls],
      { y: 28, stagger: 0.1, duration: 0.85, safetyMs: 120 }
    );
  }, [items, label, heading, intro]);

  if (!heading && !items.length) return null;

  return (
    <section className="w-full bg-[#162D24] py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-[45%_10%_45%] items-start max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-4 md:gap-6">
          <p
            ref={labelRef}
            className="text-[13px] sm:text-[14px] font-medium tracking-wide"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            {label}
          </p>

          <h2
            ref={headingRef}
            className="text-white font-bold leading-[1.0] tracking-tight"
            style={{ fontSize: "54px", maxWidth: "26ch" }}
          >
            {heading}
          </h2>

          {intro ? (
            <p
              ref={introRef}
              className="text-[13px] sm:text-[18px] font-normal leading-relaxed max-w-[520px]"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              {intro}
            </p>
          ) : null}

          <button
            type="button"
            onClick={onQuoteClick}
            className="mt-2 inline-flex w-fit items-center justify-center rounded-[38px] px-12 py-6 text-[13px] sm:text-[14px] tracking-[0.09em] font-semibold"
            style={{
              position: "relative",
              overflow: "hidden",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.34)",
              color: "#ffffff",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.35), 0 8px 24px rgba(0,0,0,0.3)",
              cursor: "pointer",
            }}
          >
            {ctaLabel}
          </button>
        </div>

        <div className="hidden md:block" />

        <div className="mt-14 md:mt-0 flex justify-end">
          <div className="w-full max-w-[500px] flex flex-col gap-8">
            <div className="w-full h-px bg-white/10" />
            <div className="flex flex-col gap-8">
              {items.map((f, i) => (
                <div
                  key={`${f.title}-${i}`}
                  ref={(el) => {
                    featureRefs.current[i] = el;
                  }}
                  className="flex flex-col gap-1.5"
                >
                  <p
                    className="text-[13px] sm:text-[18px] font-semibold"
                    style={{ color: "rgba(255,255,255,0.92)" }}
                  >
                    {f.title}
                  </p>
                  <p
                    className="text-[12px] sm:text-[18px] font-normal leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.38)" }}
                  >
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}