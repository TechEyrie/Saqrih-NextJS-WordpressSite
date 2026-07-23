"use client";

import RetainedStyleServiceSubPage from "../../../../../components/services/RetainedStyleServiceSubPage";
import {
  MOBILE_HOME_TECH_CATEGORIES,
  MOBILE_HOME_TECH_STATS,
  MOBILE_HOME_TECH_CAPABILITIES,
  MOBILE_HOME_TECH_MARQUEE,
} from "../../../../../lib/services/mobileAppDevelopmentHome";
import { getMobileDevSiblingCards } from "../../../../../lib/services/mobileAppDevelopmentSubPages";

function splitHeroTitle(title) {
  if (!title) return null;
  if (title.includes("\n")) {
    const [a, b] = title.split("\n");
    return (
      <>
        {a}
        <br />
        {b}
      </>
    );
  }
  const words = title.split(" ");
  if (words.length <= 2) return title;
  const mid = Math.ceil(words.length / 2);
  return (
    <>
      {words.slice(0, mid).join("\u00A0")}
      <br />
      {words.slice(mid).join("\u00A0")}
    </>
  );
}

export default function MobileDevSubServiceHomeClient({ page }) {
  return (
    <RetainedStyleServiceSubPage
      key={page.slug}
      heroTitle={splitHeroTitle(page.heroTitle)}
      heroLead={page.heroLead}
      heroTitleMaxCh={page.heroTitleMaxCh || "18ch"}
      advantage={page.advantage}
      process={page.process}
      faqs={page.faqs}
      faqHeading={page.faqHeading}
      faqSubtitle={page.faqSubtitle}
      techCategories={MOBILE_HOME_TECH_CATEGORIES}
      techStats={MOBILE_HOME_TECH_STATS}
      techCapabilities={MOBILE_HOME_TECH_CAPABILITIES}
      techMarquee={MOBILE_HOME_TECH_MARQUEE}
      techCopy={page.techCopy}
      unlockingHeading={
        <>
          More Mobile App Development Services
          <br />
          from Saqrih in Qatar
        </>
      }
      unlockingCards={getMobileDevSiblingCards(page.slug)}
      endToEndPageKey="wp-development"
      customersPageKey="homepage"
    />
  );
}
