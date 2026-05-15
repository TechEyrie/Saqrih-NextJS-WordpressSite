import Link from "next/link";
import { notFound } from "next/navigation";
import {
  US_STATES,
  stateSlug,
  US_STATE_SLUGS,
} from "../../../../components/icomat1-market/marketStates";

const GREEN = "#162D24";
const BODY = "rgba(22, 45, 36, 0.82)";

export default async function MarketStatePage({ params }) {
  const { state: slug } = await params;
  if (!US_STATE_SLUGS.has(slug)) notFound();

  const title =
    US_STATES.find((n) => stateSlug(n) === slug) ??
    slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

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
        Local market content for this state can be added here. Browse all states from the markets
        directory.
      </p>
    </div>
  );
}
