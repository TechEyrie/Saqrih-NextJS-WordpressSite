import Link from "next/link";
import { notFound } from "next/navigation";
import {
  US_STATES,
  stateSlug,
  US_STATE_SLUGS,
} from "../../../../components/icomat1-market/marketStates";
import { getUSCitiesForState } from "../../../../components/icomat1-market/usMarketCities";

const GREEN = "#162D24";
const BODY = "rgba(22, 45, 36, 0.82)";

export default async function MarketStatePage({ params }) {
  const { state: slug } = await params;
  if (!US_STATE_SLUGS.has(slug)) notFound();

  const title =
    US_STATES.find((n) => stateSlug(n) === slug) ??
    slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const cities = getUSCitiesForState(title);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        padding: "clamp(32px, 6vw, 72px) clamp(20px, 5vw, 48px)",
        boxSizing: "border-box",
      }}
    >
      <Link
        href="/markets"
        style={{
          fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)",
          fontWeight: 600,
          color: "#0f766e",
          textDecoration: "none",
        }}
      >
        ← All markets
      </Link>
      <h1
        style={{
          margin: "clamp(20px, 3vw, 32px) 0 0",
          fontSize: "clamp(1.85rem, 3.2vw, 2.75rem)",
          fontWeight: 700,
          letterSpacing: "-0.025em",
          color: GREEN,
          lineHeight: 1.12,
        }}
      >
        {title}
      </h1>
      <p
        style={{
          margin: "clamp(14px, 2vw, 20px) 0 0",
          maxWidth: "62ch",
          fontSize: "clamp(1.05rem, 1.2vw, 1.15rem)",
          lineHeight: 1.72,
          color: BODY,
        }}
      >
        Saqrih offers WordPress design, development, hosting, and ongoing support across {title}.
        Browse local cities below or return to the full markets directory.
      </p>

      {cities.length > 0 && (
        <div
          style={{
            marginTop: "clamp(28px, 4vw, 40px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(220px, 100%), 1fr))",
            gap: "clamp(10px, 1.5vw, 16px) clamp(20px, 3vw, 32px)",
          }}
        >
          {cities.map((city) => (
            <span
              key={city}
              style={{
                fontSize: "clamp(1rem, 1.1vw, 1.12rem)",
                fontWeight: 500,
                color: "rgba(22, 45, 36, 0.9)",
              }}
            >
              {city}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
