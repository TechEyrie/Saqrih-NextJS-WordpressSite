"use client";

import RetainedStyleServiceSubPage from "../../../../../components/services/RetainedStyleServiceSubPage";
import {
  SAAS_TECH_CATEGORIES,
  SAAS_TECH_STATS,
  SAAS_TECH_CAPABILITIES,
  SAAS_TECH_MARQUEE,
} from "../../../../../lib/services/saasDevelopmentHome";
import { getSaasDevSiblingCards } from "../../../../../lib/services/saasDevelopmentSubPages";

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

export default function SaasDevSubServiceHomeClient({ page }) {
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
      techCategories={SAAS_TECH_CATEGORIES}
      techStats={SAAS_TECH_STATS}
      techCapabilities={SAAS_TECH_CAPABILITIES}
      techMarquee={SAAS_TECH_MARQUEE}
      techCopy={page.techCopy}
      unlockingHeading={
        <>
          More SaaS Development Services
          <br />
          from Saqrih in Qatar
        </>
      }
      unlockingCards={getSaasDevSiblingCards(page.slug)}
      endToEndPageKey="wp-development"
      customersPageKey="homepage"
    />
  );
}
