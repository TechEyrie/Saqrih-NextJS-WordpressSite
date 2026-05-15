"use client";

import { MapPin } from "lucide-react";
import { US_STATES } from "./marketStates";
// Phase 2 (state links): add stateSlug to the import above.

/** Same green + body tones as icomat1 WordPress light sections (e.g. SEOResultSection). */
const GREEN = "#162D24";
const BODY = "rgba(22, 45, 36, 0.82)";
const MUTED = "rgba(22, 45, 36, 0.45)";

export default function MarketsServingSection() {
  return (
    <section
      className="markets-serving-section"
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
          Serving the following markets
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
          Eyrion offers website design services to your US state. Our team is distributed and spread
          throughout the United States, and have completed projects in almost all 50 states.
        </p>
      </div>

      <div
        style={{
          maxWidth: "min(1400px, 100%)",
          margin: "clamp(40px, 5vw, 56px) auto 0",
        }}
      >
        <div className="markets-serving-grid">
          {US_STATES.map((name) => {
            // Phase 2: const href = `/markets/${stateSlug(name)}`;
            // Phase 2: replace <div> below with <a key={name} href={href} className="markets-serving-cell" …>
            return (
              <div
                key={name}
                className="markets-serving-cell"
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
                <span className="markets-serving-label">{name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .markets-serving-grid {
          display: grid;
          width: 100%;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          column-gap: clamp(28px, 4.2vw, 64px);
          row-gap: clamp(16px, 2.4vw, 32px);
          align-items: start;
        }
        /* Phase 2 (links): restore hover/focus styles for <a class="markets-serving-cell"> */
        @media (max-width: 1100px) {
          .markets-serving-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 780px) {
          .markets-serving-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 520px) {
          .markets-serving-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 340px) {
          .markets-serving-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
