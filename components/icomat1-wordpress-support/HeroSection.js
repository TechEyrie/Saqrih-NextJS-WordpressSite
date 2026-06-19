"use client";

import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

export default function HeroSection() {
  return (
    <WordPressServiceHeroLayout>
      <div className="wp-service-hero-copy" style={{ maxWidth: "960px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: "min(20ch, 100%)" }}
          >
            WordPress Support Services
          </h1>

          <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}
          >
            Every successful WordPress website requires consistent, reliable
            maintenance to stay secure, fast, and fully functional. Our expert support
            team is built to handle all aspects of ongoing WordPress support, ensuring
            your website runs smoothly without interruptions.
          </p>

          <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}
          >
            As a dedicated WordPress support agency, we provide complete, tailored
            solutions for both WordPress and WooCommerce websites. Whether you need
            performance improvements, technical fixes, or routine maintenance, we take
            care of everything so you can focus on growing your business.
          </p>

          <p className="wp-service-hero-lead" style={{ maxWidth: "68ch" }}
          >
            From speed optimization and regular updates to secure data backups and
            ongoing monitoring, our WordPress support services cover every essential
            part of website care. With a proactive approach, we help prevent issues
            before they impact your site, keeping it stable, secure, and optimized at
            all times.
          </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
