"use client";

import RetainedStyleServiceSubPage from "../../../../../components/services/RetainedStyleServiceSubPage";
import {
  WSM_HOME_TECH_CATEGORIES,
  WSM_HOME_TECH_STATS,
  WSM_HOME_TECH_CAPABILITIES,
  WSM_HOME_TECH_MARQUEE,
} from "../../../../../lib/services/websiteSupportMaintenanceHome";
import { getWsmDevSiblingCards } from "../../../../../lib/services/websiteSupportMaintenanceSubPages";

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

export default function WsmDevSubServiceHomeClient({ page }) {
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
      techCategories={WSM_HOME_TECH_CATEGORIES}
      techStats={WSM_HOME_TECH_STATS}
      techCapabilities={WSM_HOME_TECH_CAPABILITIES}
      techMarquee={WSM_HOME_TECH_MARQUEE}
      techCopy={page.techCopy}
      unlockingHeading={
        <>
          More Website Support & Maintenance Services
          <br />
          from Saqrih in Qatar
        </>
      }
      unlockingCards={getWsmDevSiblingCards(page.slug)}
      endToEndPageKey="wp-development"
      customersPageKey="homepage"
    />
  );
}
