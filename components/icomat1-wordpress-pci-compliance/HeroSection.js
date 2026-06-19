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
            Expert WordPress PCI Compliance Services
          </h1>

          <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}
          >
            Work with experienced professionals to understand and implement PCI DSS compliance for your WordPress
            website, including the key requirements, security standards, and best practices.
          </p>

          <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}
          >
            If you&apos;re managing online payments or handling customer card data, Eyrion helps simplify the PCI
            compliance process for WordPress websites by improving security, reducing risk, and supporting safer online
            transactions.
          </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
