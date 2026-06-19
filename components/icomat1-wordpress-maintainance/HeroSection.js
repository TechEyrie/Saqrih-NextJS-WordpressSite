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
            Professional WordPress website maintenance services &amp; packages
          </h1>

          <p className="wp-service-hero-lead" style={{ maxWidth: "56ch" }}
          >
            Our in-house team of technical specialists offers dedicated, proactive, and expert WordPress maintenance. We provide comprehensive, high-touch solutions engineered for enterprises, agencies, and high-growth businesses that demand absolute platform integrity.
          </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
