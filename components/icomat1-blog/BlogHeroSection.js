"use client";

import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

export default function BlogHeroSection() {
  return (
    <WordPressServiceHeroLayout>
      <div className="wp-service-hero-copy" style={{ maxWidth: "900px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "20ch" }}>
          Eyrion Web Design Articles & Blog
        </h1>

        <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}>
          Explore our collection of articles covering WordPress website design, development best
          practices, performance optimization, SEO strategies, and insights to help your business grow
          online.
        </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
