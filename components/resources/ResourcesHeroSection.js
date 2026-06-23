"use client";

import { SERVICES_HERO_BACKGROUND_VIDEO } from "../../lib/siteVideos";
import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

export default function ResourcesHeroSection() {
  return (
    <WordPressServiceHeroLayout heroVideo={SERVICES_HERO_BACKGROUND_VIDEO}>
      <div className="wp-service-hero-copy" style={{ maxWidth: "900px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "18ch" }}>
          WordPress support resources
        </h1>

        <p className="wp-service-hero-lead" style={{ maxWidth: "56ch" }}>
          Explore our collection of WordPress support articles covering troubleshooting, best
          practices, how-to guides, documentation, walkthroughs, and practical solutions for common
          WordPress challenges.
        </p>

        <p className="wp-service-hero-lead" style={{ maxWidth: "56ch" }}>
          Our team works with WordPress issues every day, and these real-world experiences help us
          create helpful resources designed to support website owners, teams, and businesses at every
          stage.
        </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
