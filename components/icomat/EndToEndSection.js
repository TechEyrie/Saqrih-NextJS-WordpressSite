"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getPageSectionPics } from "../../lib/pageImages";

gsap.registerPlugin(SplitText, ScrollTrigger);

const CARD_META = [
  {
    num: "01",
    label: "Design & Analysis",
    sub: "(Structural & Production Optimisation)",
    color: "#1a1a2e",
  },
  {
    num: "02",
    label: "Material Slitting & Storage",
    sub: null,
    color: "#16213e",
  },
  {
    num: "03",
    label: "Tooling Production",
    sub: "(Metallic, Composite)",
    color: "#0f3460",
  },
  {
    num: "04",
    label: "Most Advanced Tape Laying Capability",
    sub: null,
    color: "#1a1a2e",
  },
  {
    num: "05",
    label: "Consolidation & Forming",
    sub: null,
    color: "#16213e",
  },
  {
    num: "06",
    label: "Inspection & Quality",
    sub: null,
    color: "#0f3460",
  },
  {
    num: "07",
    label: "Painting & Finishing",
    sub: null,
    color: "#1a1a2e",
  },
];

function buildCards(pageKey) {
  const pics = getPageSectionPics(pageKey, "endToEnd");
  return CARD_META.map((card, i) => ({
    ...card,
    img: pics[i] ?? pics[0],
  }));
}

const CARD_W = 620;
const CARD_GAP = 24;

export default function EndToEndSection({ pageKey = "icomat" }) {
  const cards = useMemo(() => buildCards(pageKey), [pageKey]);
  const wrapperRef = useRef(null);
  const headingRef = useRef(null);
  const trackRef   = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Heading: char-by-char color reveal on scroll ───────────────
      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: "chars,words" });

        gsap.set(split.chars, { color: "#333333" });

        gsap.to(split.chars, {
          color: "#ffffff",
          ease: "none",
          stagger: {
            each: 0.03,
            from: "start",
          },
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        });
      }

      // ── Horizontal scroll ──────────────────────────────────────────
      const trackWidth   = cards.length * (CARD_W + CARD_GAP) - CARD_GAP;
      const viewportW    = window.innerWidth;
      const paddingX     = 80;
      const maxTranslate = -(trackWidth - viewportW + paddingX * 2);

      gsap.set(trackRef.current, { x: 0 });

      gsap.to(trackRef.current, {
        x: maxTranslate,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: () => `+=${Math.abs(maxTranslate)}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="w-full bg-[#0a0a0a] overflow-hidden pb-24"
      style={{ minHeight: "100vh" }}
    >
      {/* ── Heading ───────────────────────────────────────────────── */}
      <div className="flex items-center justify-center pt-28 pb-14 px-6">
        <h2
          ref={headingRef}
          className="font-semibold text-center leading-tight tracking-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
        >
          End-to-end production
        </h2>
      </div>

      {/* ── Track ─────────────────────────────────────────────────── */}
      <div className="relative w-full overflow-visible px-20">
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ gap: `${CARD_GAP}px` }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col"
              style={{ width: `${CARD_W}px` }}
            >
              {/* Number + dotted rule */}
              <div className="flex items-center gap-4 mb-5">
                <span
                  className="font-mono font-bold tracking-[0.18em] flex-shrink-0"
                  style={{
                    fontSize: "clamp(1rem, 1.4vw, 1.4rem)",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {card.num}
                </span>
                <div
                  className="flex-1 h-px"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to right, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 4px, transparent 4px, transparent 10px)",
                  }}
                />
              </div>

              {/* Image */}
              <div
                className="relative w-full overflow-hidden rounded-xl bg-[#1a1a1a]"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={card.img}
                  alt={card.label}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${card.color} 0%, #0a0a0a 100%)`,
                  }}
                />
              </div>

              {/* Label */}
              <div className="mt-4 flex flex-col gap-1">
                <p
                  className="text-[12px] tracking-[0.14em] uppercase leading-snug"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {card.sub ? card.sub : card.label}
                </p>
                {card.sub && (
                  <p
                    className="text-[11px] tracking-[0.1em] uppercase"
                    style={{ color: "rgba(255,255,255,0.25)" }}
                  >
                    {card.label}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}