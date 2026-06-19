"use client";

import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

export default function HeroSection() {
  return (
    <WordPressServiceHeroLayout>
      <div className="wp-service-hero-copy" style={{ maxWidth: "960px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "min(48ch, 100%)" }}
          >
            Professional WordPress Migration Services
          </h1>

          <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}
          >
            Moving your website doesn&apos;t have to be complicated. Whether you&apos;re
            upgrading hosting or outgrowing your current setup, Eyrion provides smooth and
            secure WordPress migration services.
          </p>

          <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}
          >
            Our WordPress experts handle the entire process from start to finish, ensuring
            your website is safely transferred with minimal downtime. We also make
            improvements along the way if needed, so your new setup performs even better
            than before.
          </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
