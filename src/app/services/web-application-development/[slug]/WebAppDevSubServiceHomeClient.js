"use client";

import RetainedStyleServiceSubPage from "../../../../../components/services/RetainedStyleServiceSubPage";
import {
  WAD_TECH_CATEGORIES,
  WAD_TECH_STATS,
  WAD_TECH_CAPABILITIES,
  WAD_TECH_MARQUEE,
} from "../../../../../lib/services/webApplicationDevelopmentHome";
import { getWebAppDevSiblingCards } from "../../../../../lib/services/webApplicationDevelopmentSubPages";

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

export default function WebAppDevSubServiceHomeClient({ page }) {
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
      techCategories={WAD_TECH_CATEGORIES}
      techStats={WAD_TECH_STATS}
      techCapabilities={WAD_TECH_CAPABILITIES}
      techMarquee={WAD_TECH_MARQUEE}
      techCopy={page.techCopy}
      unlockingHeading={
        <>
          More Web Application Development Services
          <br />
          from Saqrih in Qatar
        </>
      }
      unlockingCards={getWebAppDevSiblingCards(page.slug)}
      endToEndPageKey="wp-development"
      customersPageKey="homepage"
    />
  );
}
