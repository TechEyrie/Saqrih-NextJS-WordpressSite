"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import {
  HOME2_HERO_SLIDES,
  HOME2_HERO_SLIDE_MS,
} from "../../lib/home2HeroSlides";

function SwooshGraphic() {
  return (
    <svg
      className="mockup-hero-swoosh"
      viewBox="0 0 800 700"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMaxYMid slice"
    >
      {/* Bottom-right ribbon */}
      <path
        d="M260 640C360 480 500 400 640 350C720 320 770 240 800 140V700H200C210 670 230 655 260 640Z"
        fill="url(#swooshFill)"
        opacity="0.95"
      />
      <path
        d="M180 660C320 490 470 400 620 340C720 290 770 200 800 110"
        stroke="url(#swooshStroke1)"
        strokeWidth="78"
        strokeLinecap="round"
        opacity="0.92"
      />
      <path
        d="M120 680C280 500 450 400 610 330C710 270 760 180 795 100"
        stroke="url(#swooshStroke2)"
        strokeWidth="40"
        strokeLinecap="round"
        opacity="0.88"
      />
      {/* Top-right accent curl */}
      <path
        d="M520 20C600 40 680 90 760 170C780 195 795 230 800 270"
        stroke="url(#swooshStroke3)"
        strokeWidth="56"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M560 8C640 35 710 90 775 165"
        stroke="url(#swooshStroke2)"
        strokeWidth="24"
        strokeLinecap="round"
        opacity="0.75"
      />
      <defs>
        <linearGradient
          id="swooshFill"
          x1="200"
          y1="700"
          x2="800"
          y2="120"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ff6b2c" />
          <stop offset="0.28" stopColor="#ffb020" />
          <stop offset="0.55" stopColor="#c8f04a" />
          <stop offset="0.78" stopColor="#3db8e8" />
          <stop offset="1" stopColor="#4f6fff" />
        </linearGradient>
        <linearGradient
          id="swooshStroke1"
          x1="180"
          y1="660"
          x2="800"
          y2="110"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ff4d1a" />
          <stop offset="0.25" stopColor="#ff9a1f" />
          <stop offset="0.5" stopColor="#d4f04a" />
          <stop offset="0.75" stopColor="#2eb6e0" />
          <stop offset="1" stopColor="#5a6cf5" />
        </linearGradient>
        <linearGradient
          id="swooshStroke2"
          x1="120"
          y1="680"
          x2="795"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ff7a2e" />
          <stop offset="0.4" stopColor="#ffe566" />
          <stop offset="0.7" stopColor="#7ad7ff" />
          <stop offset="1" stopColor="#6b7cff" />
        </linearGradient>
        <linearGradient
          id="swooshStroke3"
          x1="520"
          y1="20"
          x2="800"
          y2="270"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#c8f04a" />
          <stop offset="0.45" stopColor="#56c4f0" />
          <stop offset="1" stopColor="#6b7cff" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function DeviceScreen({ slides, activeIndex, kind }) {
  return (
    <div className={`mockup-hero-screen mockup-hero-screen--${kind}`}>
      {slides.map((slide, i) => {
        const src = kind === "desktop" ? slide.desktop : slide.mobile;
        const isActive = i === activeIndex;
        return (
          <div
            key={`${kind}-${slide.id}`}
            className="mockup-hero-slide"
            data-slide-index={i}
            data-kind={kind}
            aria-hidden={!isActive}
          >
            <Image
              src={src}
              alt={isActive ? `${slide.label} ${kind} preview` : ""}
              fill
              sizes={
                kind === "desktop" ? "(max-width: 900px) 94vw, 62vw" : "240px"
              }
              priority={i === 0}
              className={
                kind === "desktop"
                  ? "mockup-hero-slide-img mockup-hero-slide-img--desktop"
                  : "mockup-hero-slide-img mockup-hero-slide-img--mobile"
              }
            />
          </div>
        );
      })}
    </div>
  );
}

export default function MockupHeroSection({ onQuoteClick }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const rootRef = useRef(null);
  const timerRef = useRef(null);
  const activeIndexRef = useRef(0);
  const animatingRef = useRef(false);
  const firstPaintRef = useRef(true);

  const slides = HOME2_HERO_SLIDES;

  const animateTo = useCallback((nextIndex) => {
    const root = rootRef.current;
    if (!root) return;

    const from = activeIndexRef.current;
    if (from === nextIndex) return;
    if (animatingRef.current) return;

    animatingRef.current = true;
    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const desktops = root.querySelectorAll(
      '.mockup-hero-slide[data-kind="desktop"]'
    );
    const mobiles = root.querySelectorAll(
      '.mockup-hero-slide[data-kind="mobile"]'
    );

    const fadePair = (nodes) => {
      const outgoing = nodes[from];
      const incoming = nodes[nextIndex];
      if (!outgoing || !incoming) return null;

      if (prefersReducedMotion) {
        gsap.set(nodes, { opacity: 0, scale: 1, y: 0 });
        gsap.set(incoming, { opacity: 1 });
        return null;
      }

      gsap.killTweensOf(nodes);
      gsap.set(incoming, { opacity: 0, scale: 1.035, y: 12, zIndex: 3 });
      gsap.set(outgoing, { zIndex: 2 });

      return gsap
        .timeline({ defaults: { ease: "power2.inOut" } })
        .to(outgoing, { opacity: 0, scale: 0.985, y: -8, duration: 0.7 }, 0)
        .to(incoming, { opacity: 1, scale: 1, y: 0, duration: 0.8 }, 0.05);
    };

    const tlA = fadePair(desktops);
    const tlB = fadePair(mobiles);

    const done = () => {
      animatingRef.current = false;
    };

    if (!tlA && !tlB) {
      done();
      return;
    }

    const master = gsap.timeline({ onComplete: done });
    if (tlA) master.add(tlA, 0);
    if (tlB) master.add(tlB, 0);
  }, []);

  const goTo = useCallback(
    (next) => {
      const target = ((next % slides.length) + slides.length) % slides.length;
      animateTo(target);
    },
    [animateTo, slides.length]
  );

  // Initial opacity
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    root.querySelectorAll(".mockup-hero-slide").forEach((el) => {
      const i = Number(el.getAttribute("data-slide-index"));
      gsap.set(el, { opacity: i === 0 ? 1 : 0, scale: 1, y: 0 });
    });
  }, []);

  // Entrance
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !firstPaintRef.current) return;
    firstPaintRef.current = false;

    const ctx = gsap.context(() => {
      gsap.from(".mockup-hero-copy > *", {
        opacity: 0,
        y: 22,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.08,
      });
      gsap.from(".mockup-hero-stage", {
        opacity: 0,
        x: 36,
        duration: 1,
        ease: "power3.out",
        delay: 0.18,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  // Autoplay
  useEffect(() => {
    if (paused) {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    timerRef.current = window.setTimeout(() => {
      goTo(activeIndexRef.current + 1);
    }, HOME2_HERO_SLIDE_MS);

    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [activeIndex, paused, goTo]);

  return (
    <section
      ref={rootRef}
      data-header="light"
      className="mockup-hero"
      aria-label="Featured work hero"
    >
      <div className="mockup-hero-inner">
        <div className="mockup-hero-copy">
          <h1 className="mockup-hero-title">
            Impressive Digital Products,
            <br />
            <span className="mockup-hero-accent">Built to Scale.</span>
          </h1>
          <p className="mockup-hero-sub">
            Strategy, design &amp; engineering for ambitious businesses
          </p>
          <div className="mockup-hero-actions">
            <button
              type="button"
              className="mockup-hero-link"
              onClick={onQuoteClick}
            >
              Get a Quote
            </button>
            <Link href="/work" className="mockup-hero-link">
              View our work
            </Link>
          </div>
        </div>

        <div className="mockup-hero-visual">
          <SwooshGraphic />

          <div className="mockup-hero-stage">
            <div className="mockup-hero-cluster">
              <div className="mockup-hero-desktop">
                <div className="mockup-hero-desktop-bezel">
                  <DeviceScreen
                    slides={slides}
                    activeIndex={activeIndex}
                    kind="desktop"
                  />
                </div>

                {/* Phone overlaps desktop left edge, vertically centered */}
                <div className="mockup-hero-phone">
                  <div className="mockup-hero-phone-bezel">
                    <DeviceScreen
                      slides={slides}
                      activeIndex={activeIndex}
                      kind="mobile"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="mockup-hero-pause"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              aria-pressed={paused}
            >
              {paused ? (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M3 2.2l9 4.8-9 4.8V2.2z" fill="currentColor" />
                </svg>
              ) : (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="2.5"
                    width="2.8"
                    height="9"
                    rx="0.6"
                    fill="currentColor"
                  />
                  <rect
                    x="8.2"
                    y="2.5"
                    width="2.8"
                    height="9"
                    rx="0.6"
                    fill="currentColor"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mockup-hero {
          position: relative;
          width: 100%;
          height: 100vh;
          height: 100dvh;
          max-height: 100dvh;
          background: #f5f5f5;
          overflow: hidden;
          display: flex;
          align-items: stretch;
        }

        .mockup-hero-inner {
          width: 100%;
          max-width: none;
          margin: 0;
          display: grid;
          /* Breathing room | compact text docked to visuals | big visuals */
          grid-template-columns: minmax(4vw, 0.45fr) minmax(260px, 28rem) minmax(0, 1.85fr);
          gap: clamp(0.5rem, 1.25vw, 1.25rem);
          align-items: center;
          height: 100%;
          min-height: 0;
          padding: clamp(5rem, 9vh, 6.5rem) 0 clamp(1rem, 2.5vh, 1.75rem) 0;
          box-sizing: border-box;
        }

        .mockup-hero-copy {
          position: relative;
          z-index: 2;
          grid-column: 2;
          max-width: 28rem;
          width: 100%;
          justify-self: end;
          padding-left: 0;
          padding-right: clamp(0.25rem, 1vw, 0.75rem);
          box-sizing: border-box;
        }

        .mockup-hero-visual {
          position: relative;
          grid-column: 3;
          align-self: stretch;
          height: 100%;
          min-height: 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          overflow: hidden;
          padding-right: 0;
          padding-left: clamp(1.75rem, 4vw, 3rem);
          box-sizing: border-box;
        }

        .mockup-hero-title {
          margin: 0;
          font-size: clamp(2.45rem, 4.6vw, 3.85rem);
          line-height: 1.02;
          letter-spacing: -0.035em;
          font-weight: 700;
          color: #162d24;
          font-family: var(--font-inter), Inter, Arial, sans-serif;
        }

        .mockup-hero-accent {
          color: #6b9a18;
        }

        .mockup-hero-sub {
          margin: 1rem 0 0;
          font-size: clamp(1.05rem, 1.4vw, 1.2rem);
          line-height: 1.45;
          font-style: italic;
          font-weight: 600;
          color: #162d24;
          max-width: 36rem;
          font-family: var(--font-inter), Inter, Arial, sans-serif;
        }

        .mockup-hero-actions {
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.55rem;
        }

        .mockup-hero-link {
          appearance: none;
          border: none;
          background: none;
          padding: 0;
          cursor: pointer;
          color: #5f8f1a;
          font-size: 1.05rem;
          font-weight: 600;
          text-decoration: underline;
          text-decoration-color: #c8f04a;
          text-underline-offset: 0.3em;
          text-decoration-thickness: 2px;
          font-family: var(--font-inter), Inter, Arial, sans-serif;
          transition: color 0.2s ease;
          line-height: 1.35;
        }

        .mockup-hero-link:hover {
          color: #162d24;
        }

        :global(.mockup-hero-swoosh) {
          position: absolute;
          right: -8%;
          top: -4%;
          width: 115%;
          height: 112%;
          pointer-events: none;
          z-index: 0;
        }

        .mockup-hero-stage {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 0;
          box-sizing: border-box;
          container-type: size;
        }

        .mockup-hero-cluster {
          position: relative;
          width: 100%;
          max-width: none;
          height: min(100%, 84cqh);
          max-height: 100%;
          aspect-ratio: auto;
          margin-left: 0;
          margin-right: 0;
        }

        .mockup-hero-desktop {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 92%;
          aspect-ratio: 753 / 450;
          height: auto;
          max-height: 88%;
          z-index: 1;
          filter: drop-shadow(0 20px 36px rgba(20, 24, 40, 0.18));
        }

        .mockup-hero-desktop-bezel {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 18px;
          overflow: hidden;
          background: #ffffff;
          border: 6px solid #ffffff;
          box-shadow: 0 14px 36px rgba(15, 20, 30, 0.14);
        }

        /* Vertically centered; hangs over desktop left — padding keeps it visible */
        .mockup-hero-phone {
          position: absolute;
          left: -11%;
          top: 50%;
          transform: translateY(-50%);
          width: 26%;
          max-width: 172px;
          z-index: 3;
          filter: drop-shadow(0 14px 26px rgba(15, 20, 30, 0.2));
        }

        .mockup-hero-phone-bezel {
          position: relative;
          width: 100%;
          border-radius: 22px;
          overflow: hidden;
          background: #ffffff;
          border: 6px solid #ffffff;
          aspect-ratio: 9 / 18.8;
        }

        :global(.mockup-hero-screen) {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: #ffffff;
        }

        :global(.mockup-hero-slide) {
          position: absolute;
          inset: 0;
          opacity: 0;
        }

        :global(.mockup-hero-slide-img--desktop) {
          object-fit: cover;
          object-position: center top;
        }

        :global(.mockup-hero-slide-img--mobile) {
          object-fit: cover;
          object-position: top center;
        }

        .mockup-hero-pause {
          position: absolute;
          left: 6%;
          bottom: 8%;
          width: 28px;
          height: 28px;
          border-radius: 999px;
          border: 1px solid rgba(22, 45, 36, 0.12);
          background: rgba(255, 255, 255, 0.85);
          color: rgba(22, 45, 36, 0.65);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 5;
          transition: opacity 0.2s ease, background 0.2s ease;
          opacity: 0.7;
        }

        .mockup-hero-pause:hover {
          background: #ffffff;
          opacity: 1;
        }

        @media (max-width: 980px) {
          .mockup-hero {
            height: auto;
            max-height: none;
            min-height: 100vh;
            min-height: 100dvh;
          }

          .mockup-hero-inner {
            grid-template-columns: 1fr;
            height: auto;
            max-width: none;
            padding: 5.25rem clamp(1.25rem, 4vw, 2rem) 2.25rem;
            gap: 1.5rem;
          }

          .mockup-hero-copy {
            grid-column: 1;
            justify-self: start;
            max-width: 40rem;
            padding-left: 0;
            padding-right: 0;
          }

          .mockup-hero-visual {
            grid-column: 1;
            height: auto;
            min-height: 340px;
            max-height: 56vh;
            justify-content: center;
            padding-left: 0.5rem;
          }

          .mockup-hero-cluster {
            width: min(100%, 640px);
            height: auto;
            max-height: 100%;
            aspect-ratio: 1.6 / 1;
            margin: 0 auto;
          }

          .mockup-hero-desktop {
            width: 84%;
          }

          .mockup-hero-phone {
            left: -8%;
            width: 28%;
            max-width: 140px;
          }

          .mockup-hero-phone {
            width: 30%;
            max-width: 140px;
            left: -8%;
          }

          .mockup-hero-pause {
            left: 0.75rem;
            bottom: 0.5rem;
          }

          :global(.mockup-hero-swoosh) {
            right: -16%;
            width: 128%;
          }
        }

        @media (max-width: 640px) {
          .mockup-hero-visual,
          .mockup-hero-stage {
            max-height: 46vh;
            min-height: 280px;
          }

          .mockup-hero-phone {
            width: 32%;
            max-width: 118px;
          }

          .mockup-hero-title {
            font-size: clamp(2rem, 8vw, 2.5rem);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mockup-hero-link {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
