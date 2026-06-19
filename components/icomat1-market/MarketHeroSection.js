"use client";

import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

export default function MarketHeroSection() {
  return (
    <WordPressServiceHeroLayout>
      <div className="wp-service-hero-copy" style={{ maxWidth: "900px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "18ch" }}>
          Based in Qatar, serving the Gulf and beyond
        </h1>

        <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}>
          Eyrion is headquartered in Qatar. We partner with businesses in Doha, Lusail, and across
          the country — and support clients in Dubai, Abu Dhabi, Oman, Bahrain, Saudi Arabia, Turkey,
          Pakistan, Spain, the United States, and beyond.
        </p>

        <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}>
          Explore the markets and local areas below to see where we deliver WordPress design,
          development, hosting, and ongoing support.
        </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
