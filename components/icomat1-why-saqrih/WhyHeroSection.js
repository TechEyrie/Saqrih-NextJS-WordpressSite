"use client";

import { SERVICES_HERO_BACKGROUND_VIDEO } from "../../lib/siteVideos";
import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

export default function WhyHeroSection() {
  return (
    <WordPressServiceHeroLayout heroVideo={SERVICES_HERO_BACKGROUND_VIDEO}>
      <div className="wp-service-hero-copy" style={{ maxWidth: "900px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "12ch" }}>
          Why Saqrih
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
