"use client";

import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

export default function HeroSection() {
  return (
    <WordPressServiceHeroLayout>
      <div className="wp-service-hero-copy" style={{ maxWidth: "900px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "19.5ch" }}
          >
            Converting your website to WordPress
          </h1>

          <p className="wp-service-hero-lead" style={{ maxWidth: "56ch" }}
          >
            Are you looking to convert a website to WordPress?
            <br />
            <br />
            Although it's possible to do this manually, the process to convert
            to WordPress can be time-consuming, and it's easy to make mistakes.
            This is especially true if you have a heavily-populated site and
            want to transfer all of your content to a new platform.
            <br />
            <br />
            Fortunately, you don't have to do everything yourself. As WordPress
            experts, Eyrion helps site owners make the conversion and move to
            WordPress, so they can start enjoying the benefits of this
            extensive ecosystem.
          </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
