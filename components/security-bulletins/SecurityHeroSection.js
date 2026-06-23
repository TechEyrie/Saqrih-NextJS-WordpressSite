"use client";

import { SERVICES_HERO_BACKGROUND_VIDEO } from "../../lib/siteVideos";
import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

export default function SecurityHeroSection() {
  return (
    <WordPressServiceHeroLayout heroVideo={SERVICES_HERO_BACKGROUND_VIDEO}>
      <div className="wp-service-hero-copy" style={{ maxWidth: "900px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "18ch" }}>
          WordPress security bulletins
        </h1>

        <p className="wp-service-hero-lead" style={{ maxWidth: "56ch" }}>
          Stay informed with up-to-date WordPress CVE security bulletins covering known Common
          Vulnerabilities and Exposures that may impact WordPress websites, plugins, themes, and hosting
          environments.
        </p>

        <p className="wp-service-hero-lead" style={{ maxWidth: "56ch" }}>
          Our WordPress security experts help identify potential risks, explain vulnerability impact, and
          provide guidance on remediation so you can better protect your website and maintain a secure
          WordPress environment.
        </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
