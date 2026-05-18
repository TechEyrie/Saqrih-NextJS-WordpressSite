import Link from "next/link";
import { notFound } from "next/navigation";
import { cityLineSlug } from "../../../../../components/icomat1-market/citySlug";
import { getLocalCityLines } from "../../../../../components/icomat1-market/marketsData";

const cities = getLocalCityLines();

const GREEN = "#162D24";
const BODY = "rgba(22, 45, 36, 0.82)";

const SLUG_SET = new Set(cities.map((line) => cityLineSlug(line)));

function titleForSlug(slug) {
  return cities.find((line) => cityLineSlug(line) === slug) ?? slug.replace(/-/g, " ");
}

export default async function MarketLocalCityPage({ params }) {
  const { slug } = await params;
  if (!SLUG_SET.has(slug)) notFound();

  const title = titleForSlug(slug);

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
        Local city page content can be expanded here. Return to the markets directory to browse other
        locations.
      </p>
    </div>
  );
}
