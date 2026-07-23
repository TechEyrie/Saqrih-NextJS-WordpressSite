"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SVC, sectionPad, eyebrowStyle, h2Style } from "./serviceTokens";

gsap.registerPlugin(ScrollTrigger);

/** 0° = right, counterclockwise. Left 01–03, right 04–06. */
const STEPS = [
  {
    num: "01",
    title: "Consultation & Requirement Analysis",
    description:
      "Detailed discussions to understand your objectives, audience, and scope — so we align before any design begins.",
    tone: "forest",
    angle: 130,
    side: "left",
  },
  {
    num: "02",
    title: "Strategic Planning & Proposal",
    description:
      "A clear plan covering timelines, deliverables, and investment — transparent before we start building.",
    tone: "lime",
    angle: 180,
    side: "left",
  },
  {
    num: "03",
    title: "Design & Development",
    description:
      "Creative and technical teams bring your vision to life with regular check-ins at every milestone.",
    tone: "forest",
    angle: 230,
    side: "left",
  },
  {
    num: "04",
    title: "Quality Assurance & Testing",
    description:
      "Cross-device, cross-browser testing for functionality, security, speed, and UX before launch.",
    tone: "lime",
    angle: 310,
    side: "right",
  },
  {
    num: "05",
    title: "Launch & Support",
    description:
      "Domain, hosting, and analytics handled end-to-end — with post-launch support for a smooth go-live.",
    tone: "forest",
    angle: 0,
    side: "right",
  },
  {
    num: "06",
    title: "Ongoing Optimization",
    description:
      "Continuous monitoring and improvements so performance and conversions keep climbing.",
    tone: "lime",
    angle: 50,
    side: "right",
  },
];

const DIAL_SIZE = 560;
const NODE_SIZE = 52;
const RING_R = 42; // % of dial — nodes sit on this ring

function polar(percentR, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: 50 + percentR * Math.cos(rad),
    y: 50 - percentR * Math.sin(rad),
  };
}

function nodeStyle(tone) {
  if (tone === "lime") {
    return {
      background: SVC.lime,
      color: SVC.forest,
      boxShadow: "0 10px 28px rgba(200,240,74,0.45)",
      border: `2px solid ${SVC.lime}`,
    };
  }
  return {
    background: SVC.forest,
    color: SVC.white,
    boxShadow: "0 10px 28px rgba(22,45,36,0.35)",
    border: `2px solid ${SVC.lime}`,
  };
}

function StepCard({ step, align }) {
  const leftAlign = align === "left";
  return (
    <div
      data-process-step
      style={{
        textAlign: leftAlign ? "left" : "right",
        maxWidth: 280,
        width: "100%",
        background: SVC.white,
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 6,
          fontFamily: SVC.ui,
          fontWeight: 700,
          fontSize: "0.65rem",
          letterSpacing: "0.14em",
          color: SVC.forest,
          flexDirection: leftAlign ? "row" : "row-reverse",
        }}
      >
        <span
          aria-hidden
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            flexShrink: 0,
            background: step.tone === "lime" ? SVC.lime : SVC.forest,
          }}
        />
        STEP {step.num}
      </div>
      <h3
        style={{
          fontFamily: SVC.heading,
          fontWeight: 600,
          fontSize: "0.98rem",
          lineHeight: 1.25,
          letterSpacing: "-0.02em",
          color: SVC.forest,
          margin: "0 0 6px",
        }}
      >
        {step.title}
      </h3>
      <p
        style={{
          fontFamily: SVC.body,
          fontSize: "0.8rem",
          lineHeight: 1.55,
          color: SVC.mutedOnLight,
          margin: 0,
        }}
      >
        {step.description}
      </p>
    </div>
  );
}

function ProcessDial({ steps = STEPS }) {
  const leftSteps = steps.filter((s) => s.side === "left");
  const rightSteps = steps.filter((s) => s.side === "right");

  return (
    <div
      className="relative mx-auto"
      style={{
        display: "grid",
        gridTemplateColumns: `1fr ${DIAL_SIZE}px 1fr`,
        width: "100%",
        maxWidth: 1180,
        height: DIAL_SIZE,
        alignItems: "stretch",
        columnGap: 8,
      }}
    >
      {/* LEFT — same height as dial; top% === node Y% */}
      <div style={{ position: "relative", height: DIAL_SIZE, overflow: "visible" }}>
        {leftSteps.map((step) => {
          const { y } = polar(RING_R, step.angle);
          return (
            <div
              key={step.num}
              style={{
                position: "absolute",
                right: 0,
                top: `${y}%`,
                transform: "translateY(-50%)",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 0,
                paddingRight: 4,
              }}
            >
              <StepCard step={step} align="right" />
              {/* connector toward node */}
              <span
                aria-hidden
                style={{
                  width: 28,
                  height: 1,
                  flexShrink: 0,
                  marginLeft: 10,
                  background: `linear-gradient(90deg, ${
                    step.tone === "lime" ? SVC.lime : "rgba(22,45,36,0.35)"
                  }, transparent)`,
                }}
              />
            </div>
          );
        })}
      </div>

      {/* CENTER DIAL — fixed square */}
      <div
        style={{
          position: "relative",
          width: DIAL_SIZE,
          height: DIAL_SIZE,
          flexShrink: 0,
        }}
      >
        <svg
          width={DIAL_SIZE}
          height={DIAL_SIZE}
          viewBox="0 0 100 100"
          style={{ position: "absolute", inset: 0 }}
          aria-hidden
        >
          <defs>
            <linearGradient id="processRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={SVC.forest} stopOpacity="0.22" />
              <stop offset="50%" stopColor={SVC.lime} stopOpacity="0.6" />
              <stop offset="100%" stopColor={SVC.forest} stopOpacity="0.22" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r={RING_R + 1.8}
            fill="none"
            stroke="rgba(22,45,36,0.06)"
            strokeWidth="3.5"
          />
          <circle
            cx="50"
            cy="50"
            r={RING_R}
            fill="none"
            stroke="url(#processRingGrad)"
            strokeWidth="0.6"
            strokeDasharray="1.5 1.7"
          />
        </svg>

        {/* Forest center + white logo */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            left: "50%",
            top: "50%",
            width: Math.round(DIAL_SIZE * 0.3),
            height: Math.round(DIAL_SIZE * 0.3),
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background: SVC.forest,
            boxShadow:
              "0 0 0 8px rgba(22,45,36,0.07), 0 20px 44px rgba(22,45,36,0.28)",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "1.5px solid rgba(200,240,74,0.4)",
            }}
          />
          <Image
            src="/logo/Saqrih_real_logo.png"
            alt="Saqrih"
            width={110}
            height={110}
            className="object-contain relative"
            style={{
              width: "52%",
              height: "auto",
              filter: "brightness(0) invert(1)",
              zIndex: 1,
            }}
          />
        </div>

        {steps.map((step) => {
          const { x, y } = polar(RING_R, step.angle);
          return (
            <div
              key={`node-${step.num}`}
              data-process-node
              className="absolute flex items-center justify-center"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: NODE_SIZE,
                height: NODE_SIZE,
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                fontFamily: SVC.heading,
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.04em",
                lineHeight: 1,
                zIndex: 3,
                ...nodeStyle(step.tone),
              }}
            >
              {step.num}
            </div>
          );
        })}
      </div>

      {/* RIGHT — same height as dial */}
      <div style={{ position: "relative", height: DIAL_SIZE, overflow: "visible" }}>
        {rightSteps.map((step) => {
          const { y } = polar(RING_R, step.angle);
          return (
            <div
              key={step.num}
              style={{
                position: "absolute",
                left: 0,
                top: `${y}%`,
                transform: "translateY(-50%)",
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: 4,
              }}
            >
              <span
                aria-hidden
                style={{
                  width: 28,
                  height: 1,
                  flexShrink: 0,
                  marginRight: 10,
                  background: `linear-gradient(90deg, transparent, ${
                    step.tone === "lime" ? SVC.lime : "rgba(22,45,36,0.35)"
                  })`,
                }}
              />
              <StepCard step={step} align="left" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ServiceProcessSection({
  eyebrow = "The Journey to Excellence",
  heading = "Our Process—Delivering Excellence as the Best Web Designers in Qatar",
  steps = STEPS,
}) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const diagramRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        diagramRef.current,
        { opacity: 0, scale: 0.97 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: diagramRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const steps = sectionRef.current?.querySelectorAll("[data-process-step]");
      if (steps?.length) {
        gsap.fromTo(
          steps,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.06,
            scrollTrigger: {
              trigger: diagramRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      const nodes = sectionRef.current?.querySelectorAll("[data-process-node]");
      if (nodes?.length) {
        gsap.fromTo(
          nodes,
          { opacity: 0, scale: 0.45 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.6)",
            stagger: 0.07,
            scrollTrigger: {
              trigger: diagramRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-x-hidden"
      style={{ backgroundColor: SVC.white, ...sectionPad }}
    >
      <div className="mx-auto" style={{ maxWidth: "1180px" }}>
        <div
          ref={headerRef}
          className="text-center mx-auto"
          style={{ maxWidth: 820, marginBottom: "clamp(40px, 5vw, 56px)" }}
        >
          <p style={eyebrowStyle(false)}>{eyebrow}</p>
          <h2 style={h2Style(false)}>{heading}</h2>
        </div>

        <div ref={diagramRef} className="hidden lg:block">
          <ProcessDial steps={steps} />
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden flex flex-col">
          <div
            className="mx-auto mb-10 flex items-center justify-center"
            style={{
              width: 112,
              height: 112,
              borderRadius: "50%",
              background: SVC.forest,
              boxShadow:
                "0 0 0 6px rgba(22,45,36,0.08), 0 14px 32px rgba(22,45,36,0.25)",
              position: "relative",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "1.5px solid rgba(200,240,74,0.35)",
              }}
            />
            <Image
              src="/logo/Saqrih_real_logo.png"
              alt="Saqrih"
              width={64}
              height={64}
              className="object-contain relative"
              style={{
                width: "52%",
                height: "auto",
                filter: "brightness(0) invert(1)",
                zIndex: 1,
              }}
            />
          </div>

          <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {steps.map((step, i) => {
              const last = i === steps.length - 1;
              return (
                <li
                  key={step.num}
                  data-process-step
                  className="flex gap-4"
                  style={{ position: "relative", paddingBottom: last ? 0 : 28 }}
                >
                  {!last && (
                    <span
                      aria-hidden
                      style={{
                        position: "absolute",
                        left: NODE_SIZE / 2 - 1,
                        top: NODE_SIZE,
                        bottom: 0,
                        width: 2,
                        background: `linear-gradient(180deg, ${
                          step.tone === "lime" ? SVC.lime : SVC.forest
                        } 0%, rgba(22,45,36,0.12) 100%)`,
                      }}
                    />
                  )}
                  <div
                    data-process-node
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{
                      width: NODE_SIZE,
                      height: NODE_SIZE,
                      borderRadius: "50%",
                      fontFamily: SVC.heading,
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      letterSpacing: "0.04em",
                      lineHeight: 1,
                      position: "relative",
                      zIndex: 1,
                      ...nodeStyle(step.tone),
                    }}
                  >
                    {step.num}
                  </div>
                  <div style={{ paddingTop: 4 }}>
                    <div
                      style={{
                        fontFamily: SVC.ui,
                        fontWeight: 700,
                        fontSize: "0.68rem",
                        letterSpacing: "0.12em",
                        color: SVC.forest,
                        marginBottom: 6,
                      }}
                    >
                      STEP {step.num}
                    </div>
                    <h3
                      style={{
                        fontFamily: SVC.heading,
                        fontWeight: 600,
                        fontSize: "1.02rem",
                        lineHeight: 1.3,
                        color: SVC.forest,
                        margin: "0 0 8px",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: SVC.body,
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                        color: SVC.mutedOnLight,
                        margin: 0,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
