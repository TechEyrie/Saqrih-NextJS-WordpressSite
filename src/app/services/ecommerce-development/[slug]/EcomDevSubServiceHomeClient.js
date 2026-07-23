"use client";

import RetainedStyleServiceSubPage from "../../../../../components/services/RetainedStyleServiceSubPage";
import {
  ECOM_TECH_CATEGORIES,
  ECOM_TECH_STATS,
  ECOM_TECH_CAPABILITIES,
  ECOM_TECH_MARQUEE,
} from "../../../../../lib/services/ecommerceDevelopmentHome";
import { getEcomDevSiblingCards } from "../../../../../lib/services/ecommerceDevelopmentSubPages";

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

export default function EcomDevSubServiceHomeClient({ page }) {
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
      techCategories={ECOM_TECH_CATEGORIES}
      techStats={ECOM_TECH_STATS}
      techCapabilities={ECOM_TECH_CAPABILITIES}
      techMarquee={ECOM_TECH_MARQUEE}
      techCopy={page.techCopy}
      unlockingHeading={
        <>
          More E-commerce Development Services
          <br />
          from Saqrih in Qatar
        </>
      }
      unlockingCards={getEcomDevSiblingCards(page.slug)}
      endToEndPageKey="wp-development"
      customersPageKey="homepage"
    />
  );
}
