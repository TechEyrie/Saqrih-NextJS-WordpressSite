"use client";

import { useEffect, useRef } from "react";
import { revealElements } from "../../../lib/useRevealOnView";

/**
 * Retained-services-style advantage section with prop-driven copy.
 */
export default function SubServiceAdvantage({
  label = "Why choose Saqrih",
  heading = "Expert delivery that saves your team time and overhead",
  intro = "",
  rightTitle = "",
  features = [],
  ctaLabel = "Book a Free Consultation",
  onQuoteClick = () =>
    typeof window !== "undefined" &&
    window.dispatchEvent(new Event("open-quote-drawer")),
}) {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const rightColRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    const featureEls = featuresRef.current.filter(Boolean);
    return revealElements(
      [labelRef.current, headingRef.current, rightColRef.current, ...featureEls],
      { y: 28, stagger: 0.1, duration: 0.85, safetyMs: 120 }
    );
  }, [features, label, heading, rightTitle]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#162D24] py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:px-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-[45%_10%_45%] items-start">
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
          <div className="w-full max-w-[500px] flex flex-col gap-10">
            {rightTitle ? (
              <div ref={rightColRef} className="flex flex-col gap-5">
                <p
                  className="text-[13px] sm:text-[18px] font-semibold leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.92)" }}
                >
                  {rightTitle}
                </p>
              </div>
            ) : (
              <div ref={rightColRef} />
            )}

            <div className="w-full h-px bg-white/10" />

            <div className="flex flex-col gap-8">
              {features.map((f, i) => (
                <div
                  key={`${f.title}-${i}`}
                  ref={(el) => {
                    featuresRef.current[i] = el;
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
