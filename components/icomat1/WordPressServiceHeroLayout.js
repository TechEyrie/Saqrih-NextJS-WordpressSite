"use client";

import { WORDPRESS_HERO_BACKGROUND_VIDEO } from "../../lib/siteVideos";
import HeroScrollDownIndicator, { defaultHeroScrollDownOnClick } from "./HeroScrollDownIndicator";

export const DEFAULT_WP_HERO_STATS = [
  { value: "300+", label: "5-star Google reviews" },
  { value: "100%", label: "Satisfaction guaranteed" },
  { value: "30+", label: "Expert team members" },
];

export function WordPressServiceHeroStats({ stats = DEFAULT_WP_HERO_STATS }) {
  return (
    <div
      className="wpd-stats-grid"
      style={{
        width: "min(100%, 1080px)",
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "clamp(12px, 1.4vw, 20px)",
      }}
    >
      {stats.map((item) => (
        <div
          key={item.label}
          className="wp-service-hero-stat"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "16px",
            padding: "clamp(16px, 1.7vw, 22px) clamp(18px, 2vw, 26px)",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.34)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.35), 0 8px 24px rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <span
            style={{
              color: "#ffffff",
              fontSize: "clamp(2rem, 3.3vw, 3.3rem)",
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              whiteSpace: "nowrap",
            }}
          >
            {item.value}
          </span>
          <span
            style={{
              color: "rgba(255,255,255,0.95)",
              fontSize: "clamp(1rem, 1.3vw, 1.65rem)",
              lineHeight: 1.1,
              fontWeight: 500,
              maxWidth: "12ch",
            }}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function WordPressServiceHeroLayout({
  children,
  backgroundImage,
  heroVideo = WORDPRESS_HERO_BACKGROUND_VIDEO,
}) {
  return (
    <section className="icomat-wp-service-hero relative w-full h-screen min-h-[600px] overflow-hidden">
      {backgroundImage ? (
        <img
          src={backgroundImage}
          alt=""
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
        />
      ) : (
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
        />
      )}

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-32"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.55))" }}
      />

      <div className="wp-service-hero-content relative z-10 flex h-full flex-col px-6 pb-6 sm:px-10 md:px-16 md:pb-8 lg:px-10">
        <div className="flex-1 min-h-0" aria-hidden="true" />
        <div className="wp-service-hero-body flex flex-col gap-[clamp(16px,2.6vw,26px)]">
          {children}
        </div>
      </div>

      <HeroScrollDownIndicator onClick={defaultHeroScrollDownOnClick} />

      <style>{`
        @media (max-width: 1200px) {
          .wpd-stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 920px) {
          .wpd-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
