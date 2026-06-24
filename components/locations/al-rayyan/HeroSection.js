"use client";

import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../../icomat1/WordPressServiceHeroLayout";

export default function HeroSection() {
  return (
    <WordPressServiceHeroLayout>
      <div className="wp-service-hero-copy" style={{ maxWidth: "960px" }}>
        <h1
          className="wp-service-hero-title"
          style={{ maxWidth: "min(52ch, 100%)" }}
        >
          WordPress Web Design in Al Rayyan, Qatar
        </h1>

        <p className="wp-service-hero-lead" style={{ maxWidth: "58ch" }}>
          Saqrih partners with Al Rayyan businesses to launch and grow high-performing
          WordPress websites—from custom design and development to managed hosting,
          proactive maintenance, dedicated support, and SEO strategies that drive
          qualified traffic and measurable results.
        </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
