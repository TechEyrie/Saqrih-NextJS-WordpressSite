"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { saqrihPic } from "../../lib/siteImages";
import { SVC, sectionPad, h2Style, bodyStyle } from "./serviceTokens";

gsap.registerPlugin(ScrollTrigger);

const SPEED_LINE_WIDTHS = [
  "42%", "58%", "48%", "68%", "38%", "72%",
  "52%", "64%", "44%", "70%", "50%", "60%",
];

function lerpForestLime(t) {
  const a = { r: 22, g: 45, b: 36 };
  const b = { r: 200, g: 240, b: 74 };
  const r = Math.round(a.r + (b.r - a.r) * t);
  const g = Math.round(a.g + (b.g - a.g) * t);
  const bl = Math.round(a.b + (b.b - a.b) * t);
  return `rgb(${r}, ${g}, ${bl})`;
}

/**
 * Two-column intro — homepage forest/lime + Inter headings / Montserrat body.
 */
export default function ServiceIntroSection({
  imageSrc = saqrihPic(33),
  imageAlt = "Saqrih website development team at work",
  badgeValue = "15+",
  badgeLabel = "Years in Qatar",
  heading = "Website Development Company in Qatar—Transform Your Digital Presence",
  paragraphs = [
    "Welcome to Saqrih, a Qatar-based website development company delivering high-performance digital experiences since 2011. As a trusted web agency in Doha, we build compelling online presence that drives growth and establishes your brand’s authority.",
    "Our website development services combine modern engineering with strategic design so your site looks exceptional, loads fast, and performs across devices and search engines.",
  ],
}) {
  const sectionRef = useRef(null);
  const mediaRef = useRef(null);
  const imageWrapRef = useRef(null);
  const imageInnerRef = useRef(null);
  const linesRef = useRef(null);
  const badgeRef = useRef(null);
  const badgeNumRef = useRef(null);
  const copyRef = useRef(null);
  const parasRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      // Media block
      tl.fromTo(
        mediaRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
        0
      );

      // Image reveal — scale down into place
      if (imageInnerRef.current) {
        tl.fromTo(
          imageInnerRef.current,
          { scale: 1.14 },
          { scale: 1, duration: 1.35, ease: "power3.out" },
          0.05
        );
      }
      if (imageWrapRef.current) {
        tl.fromTo(
          imageWrapRef.current,
          { clipPath: "inset(12% 12% 12% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power3.out" },
          0
        );
      }

      // Speed lines draw in
      const lines = linesRef.current?.querySelectorAll("[data-speed-line]");
      if (lines?.length) {
        tl.fromTo(
          lines,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.55,
            stagger: 0.045,
            ease: "power2.out",
            transformOrigin: "left center",
          },
          0.25
        );
      }

      // Badge pop + count
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, scale: 0.5, rotation: -12 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.75,
            ease: "back.out(2.2)",
          },
          0.45
        );

        // Idle float
        gsap.to(badgeRef.current, {
          y: -8,
          duration: 2.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 1.4,
        });
      }

      const numeric = parseInt(String(badgeValue).replace(/\D/g, ""), 10);
      if (badgeNumRef.current && !Number.isNaN(numeric)) {
        const obj = { n: 0 };
        tl.to(
          obj,
          {
            n: numeric,
            duration: 1.4,
            ease: "power2.out",
            onUpdate: () => {
              badgeNumRef.current.textContent = `${Math.round(obj.n)}+`;
            },
          },
          0.55
        );
      }

      // Copy
      tl.fromTo(
        copyRef.current,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
        0.2
      );

      const paras = parasRef.current?.querySelectorAll("[data-intro-p]");
      if (paras?.length) {
        tl.fromTo(
          paras,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: "power3.out",
          },
          0.4
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [badgeValue]);

  const onImageEnter = () => {
    if (!imageInnerRef.current) return;
    gsap.to(imageInnerRef.current, {
      scale: 1.04,
      duration: 0.7,
      ease: "power2.out",
    });
    if (badgeRef.current) {
      gsap.to(badgeRef.current, {
        scale: 1.08,
        duration: 0.4,
        ease: "back.out(2)",
        overwrite: "auto",
      });
    }
  };

  const onImageLeave = () => {
    if (!imageInnerRef.current) return;
    gsap.to(imageInnerRef.current, {
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });
    if (badgeRef.current) {
      gsap.to(badgeRef.current, {
        scale: 1,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{ backgroundColor: SVC.white, ...sectionPad }}
    >
      <div
        className="mx-auto grid grid-cols-1 lg:grid-cols-2 items-center"
        style={{ maxWidth: "1180px", gap: "clamp(40px, 5vw, 72px)" }}
      >
        <div
          ref={mediaRef}
          className="relative w-full max-w-[540px] mx-auto lg:mx-0"
          style={{ opacity: 0 }}
          onMouseEnter={onImageEnter}
          onMouseLeave={onImageLeave}
        >
          <div className="relative" style={{ paddingLeft: "clamp(28px, 5vw, 52px)" }}>
            <div
              ref={linesRef}
              className="absolute left-0 top-[8%] bottom-[14%] flex flex-col justify-between pointer-events-none"
              style={{ width: "clamp(68px, 13vw, 110px)", zIndex: 2 }}
              aria-hidden
            >
              {SPEED_LINE_WIDTHS.map((width, i) => {
                const t = i / (SPEED_LINE_WIDTHS.length - 1);
                return (
                  <span
                    key={i}
                    data-speed-line
                    style={{
                      display: "block",
                      width,
                      height: "clamp(6px, 0.8vw, 10px)",
                      borderRadius: 999,
                      background: lerpForestLime(t),
                      opacity: 0,
                      transform: "scaleX(0)",
                      transformOrigin: "left center",
                      boxShadow:
                        t > 0.55
                          ? "0 0 10px rgba(200,240,74,0.35)"
                          : "none",
                    }}
                  />
                );
              })}
            </div>

            <div
              ref={imageWrapRef}
              className="relative overflow-hidden"
              style={{
                borderRadius: "0 28px 28px 0",
                boxShadow: "0 24px 56px rgba(22, 45, 36, 0.16)",
                aspectRatio: "4 / 5",
                maxHeight: 540,
                background: SVC.forestMid,
              }}
            >
              <div
                ref={imageInnerRef}
                className="absolute inset-0 will-change-transform"
                style={{ transformOrigin: "center center" }}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="object-cover"
                />
              </div>
              {/* Soft vignette */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, transparent 55%, rgba(22,45,36,0.18))",
                }}
              />
            </div>

            <div
              ref={badgeRef}
              className="absolute z-10 flex flex-col items-center justify-center text-center will-change-transform"
              style={{
                right: "clamp(-6px, -0.5vw, 10px)",
                bottom: "clamp(20px, 3vw, 36px)",
                width: "clamp(96px, 12vw, 118px)",
                height: "clamp(96px, 12vw, 118px)",
                borderRadius: 20,
                background: SVC.lime,
                color: SVC.forest,
                boxShadow:
                  "0 14px 36px rgba(200, 240, 74, 0.4), 0 0 0 6px rgba(200,240,74,0.15)",
                opacity: 0,
              }}
            >
              <span
                ref={badgeNumRef}
                style={{
                  fontFamily: SVC.heading,
                  fontWeight: 800,
                  fontSize: "clamp(1.85rem, 2.6vw, 2.35rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                {badgeValue}
              </span>
              <span
                style={{
                  fontFamily: SVC.ui,
                  fontWeight: 600,
                  fontSize: "0.7rem",
                  lineHeight: 1.2,
                  marginTop: 6,
                  maxWidth: "9ch",
                }}
              >
                {badgeLabel}
              </span>
            </div>
          </div>
        </div>

        <div
          ref={copyRef}
          className="w-full max-w-[540px] mx-auto lg:mx-0 lg:justify-self-end"
          style={{ opacity: 0 }}
        >
          <div className="flex items-center gap-3" style={{ marginBottom: 16 }}>
            <span
              aria-hidden
              style={{
                width: 32,
                height: 3,
                borderRadius: 999,
                background: SVC.lime,
                boxShadow: "0 0 12px rgba(200,240,74,0.45)",
              }}
            />
            <span
              style={{
                fontFamily: SVC.ui,
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: SVC.forest,
              }}
            >
              About this practice
            </span>
          </div>

          <h2 style={{ ...h2Style(false), marginBottom: "clamp(18px, 2.4vw, 26px)" }}>
            {heading}
          </h2>
          <div
            ref={parasRef}
            style={{ display: "flex", flexDirection: "column", gap: "1.05rem" }}
          >
            {paragraphs.map((text) => (
              <p
                key={text.slice(0, 40)}
                data-intro-p
                style={{ ...bodyStyle(false), opacity: 0 }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
