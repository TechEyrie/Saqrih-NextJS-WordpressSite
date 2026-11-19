"use client";

import { useEffect, useRef } from "react";
import { revealElements } from "../../../lib/useRevealOnView";
import TechBrandIcon, { techIconColor } from "../TechBrandIcon";

/**
 * Integration list for service sub-pages (dark #162D24 band).
 */
export default function SubServiceIntegrationsSection({
  label = "Integrations",
  heading,
  intro = "",
  items = [],
}) {
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const introRef = useRef(null);
  const rowRefs = useRef([]);

  useEffect(() => {
    const rows = rowRefs.current.filter(Boolean);
    return revealElements(
      [labelRef.current, headingRef.current, introRef.current, ...rows],
      { y: 22, stagger: 0.06, duration: 0.75, safetyMs: 120 }
    );
  }, [items, heading, label, intro]);

  if (!items.length) return null;

  return (
    <section
      className="w-full bg-[#162D24] py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:px-20"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      aria-labelledby="subservice-integrations-heading"
    >
      <div className="max-w-[1180px] mx-auto mb-12 md:mb-16 flex flex-col gap-4 md:gap-6">
        <p
          ref={labelRef}
          className="text-[13px] sm:text-[14px] font-medium tracking-wide"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          {label}
        </p>
        <h2
          id="subservice-integrations-heading"
          ref={headingRef}
          className="text-white font-bold leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 54px)", maxWidth: "24ch" }}
        >
          {heading}
        </h2>
        {intro ? (
          <p
            ref={introRef}
            className="text-[13px] sm:text-[18px] font-normal leading-relaxed max-w-[680px]"
            style={{ color: "rgba(255,255,255,0.92)" }}
          >
            {intro}
          </p>
        ) : null}
      </div>

      <div className="max-w-[1180px] mx-auto flex flex-col divide-y divide-white/10">
        {items.map((item, i) => {
          const tint = techIconColor(item.name);
          return (
            <div
              key={`${item.name}-${i}`}
              ref={(el) => {
                rowRefs.current[i] = el;
              }}
              className="grid grid-cols-1 md:grid-cols-[minmax(0,280px)_1fr] gap-4 md:gap-10 py-8 md:py-10 items-start"
            >
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center rounded-xl"
                  style={{
                    width: 44,
                    height: 44,
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <TechBrandIcon name={item.name} color={tint || "#c8f04a"} />
                </span>
                <p
                  className="text-[14px] sm:text-[18px] font-semibold"
                  style={{ color: "rgba(255,255,255,0.95)" }}
                >
                  {item.name}
                </p>
              </div>
              <p
                className="text-[12px] sm:text-[17px] font-normal leading-relaxed md:pt-2"
                style={{ color: "rgba(255,255,255,0.58)" }}
              >
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}