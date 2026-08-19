"use client";

import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

const HERO_STATS = [
  { value: "24h", label: "Typical response time" },
  { value: "Doha", label: "Based in Qatar" },
  { value: "GCC+", label: "Clients across the region" },
];

const CONTACT_HERO_IMAGE = "/pics/saqrih-35.png";

export default function ContactHeroSection() {
  return (
    <WordPressServiceHeroLayout backgroundImage={CONTACT_HERO_IMAGE}>
      <div className="wp-service-hero-copy" style={{ maxWidth: "920px" }}>
        <p
          style={{
            margin: "0 0 14px",
            color: "#c8f04a",
            fontFamily: "Inter, Arial, sans-serif",
            fontWeight: 700,
            fontSize: "0.72rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          Contact Saqrih
        </p>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "11ch" }}>
          Get in touch
        </h1>
        <p className="wp-service-hero-lead" style={{ maxWidth: "52ch" }}>
          Whether you&apos;re planning a new digital product, need ongoing support,
          or want to explore a partnership, our team in Doha is ready to help.
        </p>
      </div>
      <WordPressServiceHeroStats stats={HERO_STATS} />
    </WordPressServiceHeroLayout>
  );
}
