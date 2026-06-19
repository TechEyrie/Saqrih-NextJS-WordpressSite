"use client";

import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

export default function HeroSection() {
  return (
    <WordPressServiceHeroLayout>
      <div className="wp-service-hero-copy" style={{ maxWidth: "900px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "18ch" }}>
          Search engine optimization for WordPress
        </h1>
        <p className="wp-service-hero-lead" style={{ maxWidth: "56ch" }}>
          Let our team of WordPress SEO specialists prepare your website for long-term
          search success. From technical optimization to on-page improvements, we help
          your WordPress site rank better and perform stronger. As an experienced
          SEO-focused WordPress agency, we deliver tailored SEO strategies designed
          around your business goals.
        </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
