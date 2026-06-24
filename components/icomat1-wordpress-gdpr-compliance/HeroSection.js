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
            Professional WordPress GDPR Compliance Services
          </h1>

          <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}
          >
            Understand GDPR requirements for your WordPress website with guidance from
            Saqrih&apos;s compliance experts. We help businesses improve data privacy,
            strengthen compliance, and better protect user information across WordPress
            websites.
          </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
