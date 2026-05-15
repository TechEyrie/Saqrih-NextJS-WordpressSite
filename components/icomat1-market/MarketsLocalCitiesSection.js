"use client";

import { MapPin } from "lucide-react";
import US_MARKET_LOCAL_CITIES from "./market-cities.json";
// Phase 2 (city pages): import { cityLineSlug } from "./citySlug";

const GREEN = "#162D24";
const BODY = "rgba(22, 45, 36, 0.82)";
const MUTED = "rgba(22, 45, 36, 0.45)";

export default function MarketsLocalCitiesSection() {
  return (
    <section
      className="markets-local-cities-section"
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        boxSizing: "border-box",
        padding: "clamp(56px, 7vw, 96px) clamp(16px, 4vw, 72px) clamp(64px, 8vw, 112px)",
      }}
    >
      <div
        style={{
          maxWidth: "min(1400px, 100%)",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontWeight: 700,
            fontSize: "clamp(1.85rem, 3.4vw, 2.85rem)",
            lineHeight: 1.12,
            letterSpacing: "-0.025em",
            color: GREEN,
          }}
        >
          Eyrion also offers website design services to your local city.
        </h2>
        <p
          style={{
            margin: "clamp(16px, 2vw, 22px) auto 0",
            maxWidth: "min(68ch, 100%)",
            fontWeight: 400,
            fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)",
            lineHeight: 1.75,
            color: BODY,
          }}
        >
          Most of our offices operate regular business hours, but on an appointment basis.
        </p>
      </div>

      <div
        style={{
          maxWidth: "min(1400px, 100%)",
          margin: "clamp(40px, 5vw, 56px) auto 0",
        }}
      >
        <div className="markets-local-cities-grid">
          {US_MARKET_LOCAL_CITIES.map((label) => {
            // Phase 2: const href = `/markets/local/${cityLineSlug(label)}`;
            // Phase 2: replace <div> below with <a key={label} href={href} className="markets-local-cities-cell" …>
            return (
              <div
                key={label}
                className="markets-local-cities-cell"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "clamp(10px, 1.2vw, 14px)",
                  minHeight: "52px",
                  padding: "clamp(10px, 1.2vw, 14px) 0",
                  color: "rgba(22, 45, 36, 0.9)",
                  fontSize: "clamp(1rem, 1.15vw, 1.18rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.35,
                  borderRadius: "6px",
                }}
              >
                <MapPin
                  size={20}
                  strokeWidth={1.65}
                  color={MUTED}
                  aria-hidden
                  style={{ flexShrink: 0 }}
                />
                <span className="markets-local-cities-label">{label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .markets-local-cities-grid {
          display: grid;
          width: 100%;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          column-gap: clamp(28px, 4.2vw, 64px);
          row-gap: clamp(16px, 2.4vw, 32px);
          align-items: start;
        }
        /* Phase 2 (links): restore hover/focus styles for <a class="markets-local-cities-cell"> */
        @media (max-width: 1100px) {
          .markets-local-cities-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 780px) {
          .markets-local-cities-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 520px) {
          .markets-local-cities-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 340px) {
          .markets-local-cities-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
