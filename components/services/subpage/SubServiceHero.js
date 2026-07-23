"use client";

import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../../icomat1/WordPressServiceHeroLayout";

/**
 * Retained-services-style hero driven by props for service sub-pages.
 */
export default function SubServiceHero({
  title,
  lead,
  titleMaxCh = "18ch",
  leadMaxCh = "56ch",
  stats,
  backgroundImage,
}) {
  return (
    <WordPressServiceHeroLayout backgroundImage={backgroundImage}>
      <div className="wp-service-hero-copy" style={{ maxWidth: "900px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: titleMaxCh }}>
          {title}
        </h1>
        {lead ? (
          <p className="wp-service-hero-lead" style={{ maxWidth: leadMaxCh }}>
            {lead}
          </p>
        ) : null}
      </div>
      <WordPressServiceHeroStats stats={stats} />
    </WordPressServiceHeroLayout>
  );
}
