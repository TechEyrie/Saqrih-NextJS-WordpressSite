"use client";

import RetainedStyleServiceSubPage from "../../../../../components/services/RetainedStyleServiceSubPage";
import {
  API_HOME_TECH_CATEGORIES,
  API_HOME_TECH_STATS,
  API_HOME_TECH_CAPABILITIES,
  API_HOME_TECH_MARQUEE,
} from "../../../../../lib/services/apiIntegrationDevelopmentHome";
import { getApiDevSiblingCards } from "../../../../../lib/services/apiIntegrationDevelopmentSubPages";

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

export default function ApiDevSubServiceHomeClient({ page }) {
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
      techCategories={API_HOME_TECH_CATEGORIES}
      techStats={API_HOME_TECH_STATS}
      techCapabilities={API_HOME_TECH_CAPABILITIES}
      techMarquee={API_HOME_TECH_MARQUEE}
      techCopy={page.techCopy}
      unlockingHeading={
        <>
          More API & Integration Development Services
          <br />
          from Saqrih in Qatar
        </>
      }
      unlockingCards={getApiDevSiblingCards(page.slug)}
      endToEndPageKey="wp-development"
      customersPageKey="homepage"
    />
  );
}
