"use client";

import { getHeroBackgroundPic } from "../../lib/pageImages";
import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

const HERO_IMAGE = getHeroBackgroundPic("wp-premium-support1");

export default function HeroSection() {
  return (
    <WordPressServiceHeroLayout backgroundImage={HERO_IMAGE}>
      <div className="wp-service-hero-copy" style={{ maxWidth: "900px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "16ch" }}>
          Saqrih+ Premium Support
        </h1>
        <p className="wp-service-hero-lead" style={{ maxWidth: "56ch" }}>
          Get a dedicated point of contact and priority support with Saqrih+
        </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
