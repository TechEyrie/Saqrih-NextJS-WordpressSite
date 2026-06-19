"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { US_STATES, stateSlug } from "./marketStates";
import { US_CITY_LINES } from "./usMarketCities";
import { BODY, GREEN, MUTED, cellStyle, headingStyle, introStyle, sectionPadding } from "./marketTheme";

export default function MarketsUnitedStatesSection() {
  return (
    <section
      className="markets-us-section"
      style={{
        ...sectionPadding,
        borderTop: "1px solid rgba(22, 45, 36, 0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "min(1400px, 100%)",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2 style={headingStyle}>United States</h2>
        <p style={introStyle}>
          Eyrion also offers WordPress design, development, hosting, and ongoing support to your
          local city across the United States.
        </p>
        <p
          style={{
            ...introStyle,
            marginTop: "clamp(10px, 1.2vw, 14px)",
            fontSize: "clamp(0.98rem, 1.1vw, 1.08rem)",
            color: MUTED,
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
        <h3
          style={{
            margin: "0 0 clamp(20px, 2.5vw, 28px)",
            textAlign: "center",
            fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: GREEN,
          }}
        >
          States we serve
        </h3>
        <div className="markets-us-states-grid">
          {US_STATES.map((name) => (
            <Link
              key={name}
              href={`/markets/${stateSlug(name)}`}
              className="markets-us-state-link"
              style={cellStyle}
            >
              <MapPin size={14} strokeWidth={1.5} color={GREEN} aria-hidden style={{ flexShrink: 0 }} />
              <span>{name}</span>
            </Link>
          ))}
        </div>

        <h3
          style={{
            margin: "clamp(48px, 6vw, 64px) 0 clamp(20px, 2.5vw, 28px)",
            textAlign: "center",
            fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: GREEN,
          }}
        >
          Cities and metro areas
        </h3>
        <div className="markets-us-cities-grid">
          {US_CITY_LINES.map((line) => (
            <div key={line} className="markets-us-city-cell" style={cellStyle}>
              <span>{line}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .markets-us-states-grid {
          display: grid;
          width: 100%;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          column-gap: clamp(20px, 3vw, 40px);
          row-gap: clamp(8px, 1.2vw, 14px);
          align-items: start;
        }
        .markets-us-cities-grid {
          display: grid;
          width: 100%;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          column-gap: clamp(24px, 3.5vw, 48px);
          row-gap: clamp(8px, 1.5vw, 16px);
          align-items: start;
        }
        .markets-us-state-link {
          text-decoration: none;
          color: rgba(22, 45, 36, 0.9);
          transition: color 0.15s ease;
        }
        .markets-us-state-link:hover {
          color: ${GREEN};
        }
        .markets-us-city-cell {
          padding-left: 0 !important;
        }
        @media (max-width: 1100px) {
          .markets-us-states-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          }
          .markets-us-cities-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 780px) {
          .markets-us-states-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          .markets-us-cities-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 400px) {
          .markets-us-states-grid,
          .markets-us-cities-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
