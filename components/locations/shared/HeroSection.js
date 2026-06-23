"use client";

import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../../icomat1/WordPressServiceHeroLayout";
import { getMarketLocationContent } from "../../../lib/locations/marketLocationContent";

export default function HeroSection({ locationSlug }) {
  const content = getMarketLocationContent(locationSlug);
  if (!content) return null;

  const { hero } = content;

  return (
    <WordPressServiceHeroLayout>
      <div className="wp-service-hero-copy" style={{ maxWidth: "960px" }}>
        <h1
          className="wp-service-hero-title"
          style={{ maxWidth: "min(52ch, 100%)" }}
        >
          {hero.title}
        </h1>

        <p className="wp-service-hero-lead" style={{ maxWidth: "58ch" }}>
          {hero.lead}
        </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
