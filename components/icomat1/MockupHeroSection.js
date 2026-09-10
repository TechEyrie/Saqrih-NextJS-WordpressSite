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
      viewBox="0 0 720 620"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        d="M220 560C300 420 420 360 540 320C620 290 680 220 720 120V620H160C170 590 190 575 220 560Z"
        fill="url(#swooshFill)"
        opacity="0.95"
      />
      <path
        d="M140 580C260 430 390 360 520 310C620 270 680 190 720 90"
        stroke="url(#swooshStroke1)"
        strokeWidth="72"
        strokeLinecap="round"
        opacity="0.92"
      />
      <path
        d="M90 600C230 440 370 360 510 300C610 250 670 170 710 80"
        stroke="url(#swooshStroke2)"
        strokeWidth="38"
        strokeLinecap="round"
        opacity="0.88"
      />
      <path
        d="M60 610C210 450 360 365 500 295C600 240 655 160 700 75"
        stroke="url(#swooshStroke3)"
        strokeWidth="18"
        strokeLinecap="round"
        opacity="0.8"
      />
      <defs>
        <linearGradient
          id="swooshFill"
          x1="160"
          y1="620"
          x2="720"
          y2="100"
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
          x1="140"
          y1="580"
          x2="720"
          y2="90"
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
          x1="90"
          y1="600"
          x2="710"
          y2="80"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ff7a2e" />
          <stop offset="0.4" stopColor="#ffe566" />
          <stop offset="0.7" stopColor="#7ad7ff" />
          <stop offset="1" stopColor="#6b7cff" />
        </linearGradient>
        <linearGradient
          id="swooshStroke3"
          x1="60"
          y1="610"
          x2="700"
          y2="75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ffd36b" />
          <stop offset="0.45" stopColor="#c8f04a" />
          <stop offset="1" stopColor="#56c4f0" />
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
  const active = slides[activeIndex];

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
          <p className="mockup-hero-eyebrow">Saqrih · Doha, Qatar</p>
          <h1 className="mockup-hero-title">
            Impressive Digital Products,{" "}
            <span className="mockup-hero-accent">Built to Scale.</span>
          </h1>
          <p className="mockup-hero-sub">
            From high-performance websites and e-commerce to custom web apps,
            SaaS, and mobile — strategy, design, and engineering for ambitious
            businesses.
          </p>
          <div className="mockup-hero-actions">
            <button
              type="button"
              className="mockup-hero-cta"
              onClick={onQuoteClick}
            >
              Get a Quote
            </button>
            <Link href="/work" className="mockup-hero-link">
              View our work
            </Link>
            <Link
              href={active.href}
              className="mockup-hero-link mockup-hero-link--muted"
            >
              {active.label} case study
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
              </div>

              <div className="mockup-hero-phone">
                <div className="mockup-hero-phone-bezel">
                  <div className="mockup-hero-phone-notch" aria-hidden="true" />
                  <DeviceScreen
                    slides={slides}
                    activeIndex={activeIndex}
                    kind="mobile"
                  />
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
          background:
            radial-gradient(
              ellipse 80% 60% at 85% 35%,
              rgba(200, 240, 74, 0.12) 0%,
              transparent 55%
            ),
            linear-gradient(165deg, #ffffff 0%, #f4f7f2 48%, #eef3ea 100%);
          overflow: hidden;
          display: flex;
          align-items: stretch;
        }

        .mockup-hero-inner {
          width: 100%;
          max-width: none;
          margin: 0;
          display: grid;
          grid-template-columns: minmax(260px, 36vw) minmax(0, 1fr);
          gap: 0;
          align-items: center;
          height: 100%;
          min-height: 0;
          padding: clamp(4.75rem, 8vh, 6rem) 0 clamp(0.75rem, 2vh, 1.25rem);
          box-sizing: border-box;
        }

        .mockup-hero-copy {
          position: relative;
          z-index: 2;
          max-width: 34rem;
          padding-left: clamp(1.25rem, 4vw, 3.5rem);
          padding-right: clamp(1rem, 2vw, 1.75rem);
        }

        .mockup-hero-eyebrow {
          margin: 0 0 0.85rem;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(22, 45, 36, 0.55);
          font-family: var(--font-inter), Inter, Arial, sans-serif;
        }

        .mockup-hero-title {
          margin: 0;
          font-size: clamp(2.15rem, 4.2vw, 3.55rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
          font-weight: 700;
          color: #162d24;
          font-family: var(--font-inter), Inter, Arial, sans-serif;
        }

        .mockup-hero-accent {
          background: linear-gradient(
            120deg,
            #5f8a12 0%,
            #8fb82a 45%,
            #c8f04a 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        @supports not (-webkit-background-clip: text) {
          .mockup-hero-accent {
            color: #6b9218;
          }
        }

        .mockup-hero-sub {
          margin: 1.15rem 0 0;
          font-size: clamp(0.95rem, 1.35vw, 1.1rem);
          line-height: 1.55;
          color: rgba(22, 45, 36, 0.72);
          max-width: 32rem;
          font-family: var(--font-inter), Inter, Arial, sans-serif;
        }

        .mockup-hero-actions {
          margin-top: 1.75rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.85rem 1.25rem;
        }

        .mockup-hero-cta {
          appearance: none;
          border: none;
          cursor: pointer;
          padding: 0.9rem 1.65rem;
          border-radius: 12px;
          background: #162d24;
          color: #ffffff;
          font-size: 0.84rem;
          font-weight: 650;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-family: var(--font-inter), Inter, Arial, sans-serif;
          box-shadow: 0 10px 28px rgba(22, 45, 36, 0.22);
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .mockup-hero-cta:hover {
          background: #1b3a2e;
          transform: translateY(-1px);
        }

        .mockup-hero-link {
          color: #162d24;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: underline;
          text-decoration-color: #c8f04a;
          text-underline-offset: 0.28em;
          text-decoration-thickness: 2px;
          font-family: var(--font-inter), Inter, Arial, sans-serif;
          transition: color 0.2s ease;
        }

        .mockup-hero-link:hover {
          color: #0f1f18;
        }

        .mockup-hero-link--muted {
          color: rgba(22, 45, 36, 0.55);
          text-decoration-color: rgba(200, 240, 74, 0.55);
          font-weight: 500;
          font-size: 0.88rem;
        }

        .mockup-hero-visual {
          position: relative;
          align-self: stretch;
          height: 100%;
          min-height: 0;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          overflow: hidden;
        }

        :global(.mockup-hero-swoosh) {
          position: absolute;
          right: -6%;
          bottom: -8%;
          width: 118%;
          height: 108%;
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
          padding: 0 0 0 clamp(1.5rem, 3vw, 2.5rem);
          box-sizing: border-box;
          container-type: size;
        }

        /* Desktop + phone as one composition, like the reference */
        .mockup-hero-cluster {
          position: relative;
          /* Room for phone overhang on the left of a ~16:9.5 laptop shot */
          width: min(92%, calc(100cqh * 1.58));
          max-width: 100%;
          height: min(100%, 78cqh);
          max-height: 100%;
          aspect-ratio: 1.72 / 1;
          margin-left: auto;
          margin-right: clamp(0.5rem, 1.5vw, 1.25rem);
        }

        .mockup-hero-desktop {
          position: absolute;
          right: 0;
          top: 6%;
          width: 86%;
          /* Match laptop.png ~753x450 so landscape shows in full */
          aspect-ratio: 753 / 450;
          height: auto;
          max-height: 86%;
          z-index: 1;
          filter: drop-shadow(0 22px 40px rgba(20, 24, 40, 0.22));
        }

        .mockup-hero-desktop-bezel {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          overflow: hidden;
          background: #ffffff;
          border: 5px solid #ffffff;
          box-shadow: 0 18px 40px rgba(15, 20, 30, 0.16);
        }

        .mockup-hero-phone {
          position: absolute;
          left: 0;
          bottom: 2%;
          width: 26%;
          max-width: 180px;
          z-index: 3;
          filter: drop-shadow(0 16px 28px rgba(15, 20, 30, 0.22));
        }

        .mockup-hero-phone-bezel {
          position: relative;
          width: 100%;
          border-radius: 18px;
          overflow: hidden;
          background: #ffffff;
          border: 5px solid #ffffff;
          box-shadow: none;
          aspect-ratio: 9 / 18.8;
        }

        .mockup-hero-phone-notch {
          position: absolute;
          top: 7px;
          left: 50%;
          transform: translateX(-50%);
          width: 36%;
          height: 8px;
          border-radius: 999px;
          background: #111;
          z-index: 4;
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

        :global(.mockup-hero-slide-img) {
          object-position: top center;
        }

        /* Fill the frame fully — no letterbox / tinted gaps */
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
          left: clamp(1.5rem, 3vw, 2.5rem);
          bottom: 0.85rem;
          width: 30px;
          height: 30px;
          border-radius: 999px;
          border: 1px solid rgba(22, 45, 36, 0.14);
          background: rgba(255, 255, 255, 0.72);
          color: rgba(22, 45, 36, 0.7);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(8px);
          z-index: 5;
          transition: background 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;
          opacity: 0.75;
        }

        .mockup-hero-pause:hover {
          background: #ffffff;
          border-color: rgba(22, 45, 36, 0.3);
          opacity: 1;
        }

        @media (max-width: 980px) {
          .mockup-hero {
            height: auto;
            max-height: none;
            min-height: 100vh;
            min-height: 100dvh;
            overflow: hidden;
          }

          .mockup-hero-inner {
            grid-template-columns: 1fr;
            height: auto;
            padding: 5.25rem clamp(1.25rem, 4vw, 2rem) 2.25rem;
            gap: 1.5rem;
          }

          .mockup-hero-copy {
            max-width: 40rem;
            padding-left: 0;
            padding-right: 0;
          }

          .mockup-hero-visual {
            height: auto;
            min-height: 340px;
            max-height: 56vh;
            justify-content: center;
          }

          .mockup-hero-stage {
            padding: 0 0.5rem 2.25rem;
            justify-content: center;
            height: 100%;
            max-height: 56vh;
            container-type: size;
          }

          .mockup-hero-cluster {
            width: min(100%, 640px);
            height: auto;
            max-height: 100%;
            aspect-ratio: 1.65 / 1;
            margin: 0 auto;
          }

          .mockup-hero-phone {
            width: 28%;
            max-width: 150px;
          }

          .mockup-hero-pause {
            left: 0.75rem;
            bottom: 0.5rem;
          }

          :global(.mockup-hero-swoosh) {
            right: -14%;
            bottom: -10%;
            width: 125%;
            opacity: 0.95;
          }
        }

        @media (max-width: 640px) {
          .mockup-hero-actions {
            flex-direction: column;
            align-items: flex-start;
          }

          .mockup-hero-visual,
          .mockup-hero-stage {
            max-height: 46vh;
            min-height: 280px;
          }

          .mockup-hero-phone {
            width: 30%;
            max-width: 120px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mockup-hero-cta {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
