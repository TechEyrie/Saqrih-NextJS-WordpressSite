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
            Your WordPress White Label Solution
          </h1>

          <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}
          >
            Our team has extensive experience supporting white label WordPress development,
            working seamlessly as an extension of your agency or internal team. We collaborate
            closely to plan, build, and deliver high-quality WordPress solutions under your brand.
          </p>

          <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}
          >
            We provide end-to-end guidance, consulting, and implementation across all types of
            WordPress website projects, ensuring reliable delivery, consistent quality, and scalable
            support whenever you need it.
          </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
