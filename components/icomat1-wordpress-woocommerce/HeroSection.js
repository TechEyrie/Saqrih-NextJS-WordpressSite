"use client";

import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

export default function HeroSection() {
  return (
    <WordPressServiceHeroLayout>
      <div className="wp-service-hero-copy" style={{ maxWidth: "960px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "min(52ch, 100%)" }}
          >
            WooCommerce Website Design & WordPress Ecommerce Development Agency
          </h1>

          <p className="wp-service-hero-lead" style={{ maxWidth: "56ch" }}
          >
            Looking for a professional WooCommerce website design and development company?
            Eyrion&apos;s WordPress ecommerce experts build high-performing online stores that
            are fast, secure, and built to convert.
          </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
