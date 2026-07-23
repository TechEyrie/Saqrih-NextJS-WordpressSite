"use client";

import RetainedStyleServiceSubPage from "../../../../../components/services/RetainedStyleServiceSubPage";
import {
  CMS_HOME_TECH_CATEGORIES,
  CMS_HOME_TECH_STATS,
  CMS_HOME_TECH_CAPABILITIES,
  CMS_HOME_TECH_MARQUEE,
} from "../../../../../lib/services/cmsHeadlessDevelopmentHome";
import { getCmsDevSiblingCards } from "../../../../../lib/services/cmsHeadlessDevelopmentSubPages";

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

export default function CmsDevSubServiceHomeClient({ page }) {
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
      techCategories={CMS_HOME_TECH_CATEGORIES}
      techStats={CMS_HOME_TECH_STATS}
      techCapabilities={CMS_HOME_TECH_CAPABILITIES}
      techMarquee={CMS_HOME_TECH_MARQUEE}
      techCopy={page.techCopy}
      unlockingHeading={
        <>
          More CMS & Headless Development Services
          <br />
          from Saqrih in Qatar
        </>
      }
      unlockingCards={getCmsDevSiblingCards(page.slug)}
      endToEndPageKey="wp-development"
      customersPageKey="homepage"
    />
  );
}
