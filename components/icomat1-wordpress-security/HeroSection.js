"use client";

import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

export default function HeroSection() {
  return (
    <WordPressServiceHeroLayout>
      <div className="wp-service-hero-copy" style={{ maxWidth: "900px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "24ch" }}
          >
            Professional WordPress Security Services
          </h1>

          <p className="wp-service-hero-lead" style={{ maxWidth: "62ch" }}
          >
            Protect your website with expert-led WordPress security solutions trusted
            by businesses worldwide. With 300+ five-star Google reviews, our dedicated
            WordPress security specialists safeguard your site against threats,
            vulnerabilities, and downtime, ensuring strong, reliable, and ongoing
            protection.
          </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
