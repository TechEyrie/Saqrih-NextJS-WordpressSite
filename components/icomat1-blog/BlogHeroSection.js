"use client";

import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

export default function BlogHeroSection() {
  return (
    <WordPressServiceHeroLayout>
      <div className="wp-service-hero-copy" style={{ maxWidth: "900px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "20ch" }}>
          Saqrih Blog & Insights
        </h1>

        <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}>
          Articles on websites, web apps, SaaS, e-commerce, mobile, CMS, WordPress, and digital
          product strategy—practical insights to help your business grow online.
        </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
