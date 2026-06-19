"use client";

import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

export default function HeroSection() {
  return (
    <WordPressServiceHeroLayout>
      <div className="wp-service-hero-copy" style={{ maxWidth: "900px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "13ch" }}
          >
            Beautiful WordPress website design
          </h1>

          <p className="wp-service-hero-lead" style={{ maxWidth: "56ch" }}
          >
            Collaborate with our elite, battle-tested WordPress architects and creative designers.
          </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
