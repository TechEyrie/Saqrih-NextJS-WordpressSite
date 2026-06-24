"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroQuoteButton } from "../../icomat1/HeroSection";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  {
    number: "1",
    title: "Kickoff & creative brief",
    body: "We start with a deep dive into your Al Rayyan business—brand, mission, audience, and goals. Together with our WordPress design studio, you’ll define the web design and development services needed for a clear strategic plan. We build a project overview and creative blueprint that guides every stage of your site’s design and build.",
  },
  {
    number: "2",
    title: "Website mock-ups & design",
    body: "Our senior website designers turn concepts into polished mock-ups you can review and refine. Interactive feedback and revision rounds strengthen your Qatar WordPress site and keep your dedicated design team aligned through development. We ensure UI and UX match your vision and meet modern design standards.",
  },
  {
    number: "3",
    title: "Al Rayyan WordPress development",
    body: "Our WordPress designers and developers transform approved designs into a flexible, drag-and-drop WordPress build that’s easy to update and manage long after launch. Every layout is engineered for performance, accessibility, and flawless display across devices and screen sizes.",
  },
  {
    number: "4",
    title: "Revisions & launch",
    body: "Revision rounds give our designers and your team time to perfect the staging link before go-live. As your WordPress website design partner, we refine until the build is production-ready—then launch with confidence and a site you’re proud to share across Al Rayyan and Qatar.",
  },
  {
    number: "5",
    title: "Hosting, security, & support",
    body: "After launch, we provide managed WordPress hosting on world-class infrastructure. CDN delivery, automated backups, SSL, and proactive security scanning keep your site fast, protected, and always available for visitors in Al Rayyan, across Qatar, and throughout the GCC.",
  },
  {
    number: "6",
    title: "Get more leads and brand awareness",
    body: "A well-structured WordPress website—paired with SEO services, optimized page speed, and professional design—helps your target audience in Al Rayyan, across Qatar, and beyond discover your brand, trust your expertise, and enjoy a seamless user experience that converts visitors into qualified leads.",
  },
];

function SEOCard({ item, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        delay: (index % 3) * 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      style={{
        opacity: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "clamp(16px, 2vw, 24px)",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "clamp(60px, 5.8vw, 82px)",
          height: "clamp(60px, 5.8vw, 82px)",
          borderRadius: "14px",
          backgroundColor: "rgba(255,255,255,0.14)",
          border: "1px solid rgba(255,255,255,0.26)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: "clamp(1.65rem, 2.3vw, 2.2rem)",
            color: "rgba(255,255,255,0.96)",
            lineHeight: 1,
          }}
        >
          {item.number}
        </span>
      </div>

      <div style={{ flex: "1 1 0", minWidth: 0 }}>
        <h3
          style={{
            fontWeight: 700,
            fontSize: "clamp(1.45rem, 2vw, 1.95rem)",
            color: "rgba(255,255,255,0.95)",
            lineHeight: 1.22,
            letterSpacing: "-0.01em",
            margin: "0 0 clamp(10px, 1.2vw, 16px) 0",
          }}
        >
          {item.title}
        </h3>

        <p
          style={{
            fontWeight: 400,
            fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)",
            color: "rgba(255,255,255,0.74)",
            lineHeight: 1.72,
            margin: 0,
          }}
        >
          {item.body}
        </p>
      </div>
    </div>
  );
}

export default function SEOResultsSection({ onQuoteClick }) {
  const headingRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#162D24",
        boxSizing: "border-box",
        padding: "clamp(64px, 8vw, 112px) clamp(24px, 6vw, 100px)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "980px",
          margin: "0 auto clamp(56px, 7vw, 96px)",
        }}
      >
        <h2
          ref={headingRef}
          style={{
            opacity: 0,
            fontWeight: 700,
            fontSize: "54px",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: "rgba(255,255,255,0.96)",
            margin: 0,
          }}
        >
          Dedicated project manager & website designer for every Al Rayyan project
        </h2>
        <p
          style={{
            margin: "18px auto 0",
            maxWidth: "920px",
            color: "rgba(255,255,255,0.76)",
            fontSize: "clamp(1.02rem, 1.2vw, 1.2rem)",
            lineHeight: 1.75,
          }}
        >
          From first conversation to launch and beyond, Saqrih pairs each WordPress web
          design project in Al Rayyan with an experienced project manager and senior
          website designer—so your site stays on strategy, on schedule, and built to
          perform.
        </p>
        <p
          style={{
            margin: "14px auto 0",
            maxWidth: "920px",
            color: "rgba(255,255,255,0.76)",
            fontSize: "clamp(1.02rem, 1.2vw, 1.2rem)",
            lineHeight: 1.75,
          }}
        >
          Here&apos;s how our WordPress website design and development process works for
          businesses across Al Rayyan and Qatar:
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "clamp(28px, 3.5vw, 36px)",
          }}
        >
          <HeroQuoteButton
            onClick={() => onQuoteClick?.()}
            className="inline-flex items-center justify-center text-[14px] sm:text-[15px] tracking-[0.09em] font-semibold uppercase"
          />
        </div>
      </div>

      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "clamp(40px, 5vw, 72px) clamp(40px, 6vw, 96px)",
        }}
        className="seo-grid"
      >
        {ITEMS.map((item, i) => (
          <SEOCard key={item.number} item={item} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .seo-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
