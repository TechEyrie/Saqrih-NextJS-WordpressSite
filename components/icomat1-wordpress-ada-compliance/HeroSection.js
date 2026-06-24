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
            WordPress ADA Compliance Services
          </h1>

          <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}
          >
            Understanding WordPress accessibility and ADA/WCAG 2.1 compliance requirements.
          </p>

          <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}
          >
            Saqrih runs accessibility audits and implements trusted solutions to help improve WordPress
            ADA compliance.
          </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
