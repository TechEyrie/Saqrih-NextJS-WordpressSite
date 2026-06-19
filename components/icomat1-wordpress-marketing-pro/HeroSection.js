"use client";

import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

export default function HeroSection() {
  return (
    <WordPressServiceHeroLayout>
      <div className="wp-service-hero-copy" style={{ maxWidth: "960px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "min(48ch, 100%)" }}
          >
            Marketing Pro
          </h1>

          <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}
          >
            A scalable marketing solution designed to adapt and grow alongside your business.
          </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
