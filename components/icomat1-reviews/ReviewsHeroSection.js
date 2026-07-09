"use client";

import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

export default function ReviewsHeroSection() {
  return (
    <WordPressServiceHeroLayout>
      <div className="wp-service-hero-copy" style={{ maxWidth: "900px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "22ch" }}>
          WordPress agency reviews and company profiles
        </h1>

        <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}>
          Browse WordPress agency reviews, ratings, testimonials, and company profiles to compare
          services, pricing, support, and overall project quality before choosing the right WordPress
          partner.
        </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
