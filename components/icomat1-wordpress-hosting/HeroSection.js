"use client";

import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

export default function HeroSection() {
  return (
    <WordPressServiceHeroLayout>
      <div className="wp-service-hero-copy" style={{ maxWidth: "900px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "16ch" }}>
          Elite managed WordPress hosting
        </h1>
        <p className="wp-service-hero-lead" style={{ maxWidth: "56ch" }}>
          Experience ultra-fast, impenetrable, and fully managed WordPress hosting environments.
          Our rock-solid infrastructure ensures your platform maintains peak performance and remains online, every second of the day.
        </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
