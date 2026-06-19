"use client";

import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

export default function SellHeroSection() {
  return (
    <WordPressServiceHeroLayout>
      <div className="wp-service-hero-copy" style={{ maxWidth: "900px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "16ch" }}>
          Sell your digital agency
        </h1>

        <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}>
          Selling your agency is one of the biggest decisions you will make as a founder. It is about
          more than valuation alone—it is about protecting your clients, supporting your team,
          preserving your reputation, and securing the future of the business you worked hard to build.
        </p>

        <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}>
          This resource hub is designed for digital agency owners who want a clearer understanding of the
          acquisition process, what buyers look for, and how to position their agency for a successful
          transition.
        </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
