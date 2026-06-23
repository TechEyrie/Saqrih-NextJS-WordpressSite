"use client";

import { SERVICES_HERO_BACKGROUND_VIDEO } from "../../lib/siteVideos";
import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

export default function MarketHeroSection() {
  return (
    <WordPressServiceHeroLayout heroVideo={SERVICES_HERO_BACKGROUND_VIDEO}>
      <div className="wp-service-hero-copy" style={{ maxWidth: "900px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "14ch" }}>
          Serving your industry
        </h1>

        <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}>
          We partner with businesses across a wide range of industries, delivering tailored WordPress
          website design and development solutions built around industry-specific needs and goals.
        </p>

        <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}>
          Visit one of our industry pages to learn more about our services and experience in
          businesses like yours.
        </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
