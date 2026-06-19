"use client";

import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

export default function HeroSection() {
  return (
    <WordPressServiceHeroLayout>
      <div className="wp-service-hero-copy" style={{ maxWidth: "900px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "19.5ch" }}
          >
            Our team is your team
          </h1>

          <p className="wp-service-hero-lead" style={{ maxWidth: "56ch" }}
          >
            Dedicated team, dedicated project manager, ongoing high-touch
            services. This is WordPress Retained Services at it&apos;s best
            from the world&apos;s leading WordPress agency.
          </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
