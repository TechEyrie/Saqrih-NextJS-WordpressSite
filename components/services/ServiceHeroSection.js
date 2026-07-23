"use client";

import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "../icomat1/WordPressServiceHeroLayout";

/**
 * Same hero shell as existing service pages — swap title/lead via props.
 * Pass title as JSX-friendly lines (use \u00A0 for non-breaking spaces).
 */
export default function ServiceHeroSection({
  title = (
    <>
      Website&nbsp;development
    </>
  ),
  lead =
    "Our in-house team of skilled developers builds fast, conversion-focused websites tailored to your brand and business goals.",
  titleMaxCh = "13ch",
  leadMaxCh = "56ch",
}) {
  return (
    <WordPressServiceHeroLayout>
      <div className="wp-service-hero-copy" style={{ maxWidth: "900px" }}>
        <h1 className="wp-service-hero-title" style={{ maxWidth: titleMaxCh }}>
          {title}
        </h1>
        <p className="wp-service-hero-lead" style={{ maxWidth: leadMaxCh }}>
          {lead}
        </p>
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
