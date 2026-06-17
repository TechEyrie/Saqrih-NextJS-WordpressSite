"use client";

import { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getIcomatSolutionCards } from "../../lib/pageImages";
import { getIcomatSolutionCardVideos } from "../../lib/pageVideos";

gsap.registerPlugin(ScrollTrigger);

export default function IcomatSolutionSection({ pageKey = "homepage" }) {
  const cards = useMemo(() => getIcomatSolutionCards(pageKey), [pageKey]);
  const cardVideos = useMemo(
    () => getIcomatSolutionCardVideos(pageKey),
    [pageKey],
  );
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef    = useRef(null);
  const cardRefs   = useRef([]);
  const labelRefs  = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(cardRefs.current.filter(Boolean),
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.9, ease: "power3.out", stagger: 0.14,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(labelRefs.current.filter(Boolean),
        { opacity: 0, y: 10 },
        {
          opacity: 1, y: 0,
          duration: 0.65, ease: "power3.out", stagger: 0.14,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      cardRefs.current.filter(Boolean).forEach((card) => {
        const media = card.querySelector("video, img");
        if (!media) return;

        const onEnter = () => gsap.to(media, { scale: 1.06, duration: 0.6, ease: "power2.out" });
        const onLeave = () => gsap.to(media, { scale: 1,    duration: 0.7, ease: "power2.inOut" });

        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);
        card._cleanup = () => {
          card.removeEventListener("mouseenter", onEnter);
          card.removeEventListener("mouseleave", onLeave);
        };
      });

    }, sectionRef);

    return () => {
      cardRefs.current.filter(Boolean).forEach((c) => c._cleanup?.());
      ctx.revert();
    };
  }, []);

  // Disabled on main homepage — section removed from src/app/icomat1/page.js
  if (pageKey === "homepage") return null;

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#162D24] px-6 sm:px-10 md:px-16 lg:px-20 py-20 md:py-28"
    >
      <div ref={headingRef} className="mb-10 md:mb-12">
        <h2
          className="text-white font-semibold leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
        >
          The Eyrion<br />solution
        </h2>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-3 gap-3"
      >
        {cards.map((card, i) => (
          <Link
            key={card.id}
            href={card.href}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            aria-label={`${card.label} — view service`}
            className="flex flex-col gap-4 text-left no-underline text-inherit cursor-pointer outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/45 rounded-2xl"
          >
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "16px",
                aspectRatio: "4/3",
                background: "#111",
              }}
            >
              {cardVideos?.[i] ? (
                <video
                  src={cardVideos[i]}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transformOrigin: "center center",
                  }}
                />
              ) : (
                <img
                  src={card.src}
                  alt={card.alt ?? ""}
                  loading="lazy"
                  decoding="async"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transformOrigin: "center center",
                  }}
                />
              )}

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  background:
                    "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.32) 100%)",
                }}
              />
            </div>

            <p
              ref={(el) => {
                labelRefs.current[i] = el;
              }}
              className="font-medium"
              style={{
                fontSize: "clamp(0.92rem, 1.1vw, 1.05rem)",
                color: "rgba(255,255,255,0.6)",
                paddingLeft: "2px",
              }}
            >
              {card.label}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
