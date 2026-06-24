"use client";

import { SERVICES_HERO_BACKGROUND_VIDEO } from "../../lib/siteVideos";
import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

export default function BlogHeroSection() {
  return (
    <WordPressServiceHeroLayout heroVideo={SERVICES_HERO_BACKGROUND_VIDEO}>
      <div className="wp-service-hero-copy" style={{ maxWidth: "900px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "20ch" }}>
          Saqrih Web Design Articles & Blog
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
