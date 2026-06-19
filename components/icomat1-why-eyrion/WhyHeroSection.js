"use client";

import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

export default function WhyHeroSection() {
  return (
    <WordPressServiceHeroLayout>
      <div className="wp-service-hero-copy" style={{ maxWidth: "900px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "12ch" }}>
          Why Eyrion
        </h1>

        <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}>
          We&apos;ve spent years refining our WordPress website design and development process to
          deliver high-quality digital experiences that consistently exceed client expectations.
        </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
