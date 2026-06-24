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
            WordPress Compliance Done Right
          </h1>

          <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}
          >
            Build compliant WordPress websites with confidence. Saqrih helps businesses meet
            ADA, GDPR, and PCI compliance standards with expert guidance, secure development
            practices, and experienced WordPress specialists you can trust.
          </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
