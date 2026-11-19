"use client";

import { useEffect, useRef, useState } from "react";
import { revealElements } from "../../../lib/useRevealOnView";

/**
 * Tabbed industries block for deep service sub-pages.
 */
export default function SubServiceIndustriesTabs({
  label = "Industries",
  heading,
  intro = "",
  items = [],
}) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const introRef = useRef(null);
  const panelRef = useRef(null);

  const active =
    items.find((item) => item.id === activeId) ?? items[0] ?? null;

  useEffect(() => {
    if (items.length && !items.some((item) => item.id === activeId)) {
      setActiveId(items[0].id);
    }
  }, [items, activeId]);

  useEffect(() => {
    return revealElements(
      [labelRef.current, headingRef.current, introRef.current, panelRef.current],
      { y: 24, stagger: 0.1, duration: 0.85, safetyMs: 120 }
    );
  }, [items, heading, label, intro]);

  if (!items.length) return null;

  return (
    <section
      className="w-full bg-[#162D24] py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:px-20"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      aria-labelledby="subservice-industries-heading"
    >
      <div className="max-w-[1180px] mx-auto flex flex-col gap-10 md:gap-14">
        <div className="flex flex-col gap-4 md:gap-6 max-w-[720px]">
          <p
            ref={labelRef}
            className="text-[13px] sm:text-[14px] font-medium tracking-wide"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            {label}
          </p>
          <h2
            id="subservice-industries-heading"
            ref={headingRef}
            className="text-white font-bold leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 54px)" }}
          >
            {heading}
          </h2>
          {intro ? (
            <p
              ref={introRef}
              className="text-[13px] sm:text-[18px] font-normal leading-relaxed"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              {intro}
            </p>
          ) : null}
        </div>

        <div
          ref={panelRef}
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,340px)_1fr] gap-8 lg:gap-14"
        >
          <div
            className="flex flex-col gap-2"
            role="tablist"
            aria-orientation="vertical"
          >
            {items.map((item) => {
              const isActive = item.id === active?.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  id={`industry-tab-${item.id}`}
                  aria-controls={`industry-panel-${item.id}`}
                  onClick={() => setActiveId(item.id)}
                  className="text-left rounded-xl px-5 py-4 transition-colors"
                  style={{
                    background: isActive
                      ? "rgba(255,255,255,0.12)"
                      : "rgba(255,255,255,0.04)",
                    border: isActive
                      ? "1px solid rgba(255,255,255,0.28)"
                      : "1px solid rgba(255,255,255,0.08)",
                    color: isActive
                      ? "rgba(255,255,255,0.98)"
                      : "rgba(255,255,255,0.72)",
                    fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)",
                    fontWeight: isActive ? 600 : 500,
                    cursor: "pointer",
                  }}
                >
                  {item.title}
                </button>
              );
            })}
          </div>

          {active ? (
            <div
              role="tabpanel"
              id={`industry-panel-${active.id}`}
              aria-labelledby={`industry-tab-${active.id}`}
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <h3
                className="text-white font-semibold mb-6"
                style={{ fontSize: "clamp(1.35rem, 2vw, 1.75rem)" }}
              >
                {active.title}
              </h3>
              <ul className="flex flex-col gap-4 list-none m-0 p-0">
                {active.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-[13px] sm:text-[17px] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.78)" }}
                  >
                    <span
                      aria-hidden
                      style={{
                        color: "#c8f04a",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      —
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}