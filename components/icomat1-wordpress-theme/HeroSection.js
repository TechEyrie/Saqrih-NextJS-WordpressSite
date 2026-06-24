"use client";

import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

export default function HeroSection() {
  return (
    <WordPressServiceHeroLayout>
      <div className="wp-service-hero-copy" style={{ maxWidth: "960px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "min(28ch, 100%)" }}
          >
            Specializing in Your Favorite WordPress Theme &amp; Builder
          </h1>

          <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}
          >
            Saqrih works with leading WordPress themes and page builders to deliver custom
            website design and development services tailored to your needs.
          </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
