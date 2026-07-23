"use client";

import RetainedStyleServiceSubPage from "../../../../../components/services/RetainedStyleServiceSubPage";
import {
  WDH_TECH_CATEGORIES,
  WDH_TECH_STATS,
  WDH_TECH_CAPABILITIES,
  WDH_TECH_MARQUEE,
} from "../../../../../lib/services/websiteDevelopmentHome";
import { getWebsiteDevSiblingCards } from "../../../../../lib/services/websiteDevelopmentSubPages";

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

export default function WebsiteDevSubServiceHomeClient({ page }) {
  const advantage = { ...page.advantage };
  if (page.examples?.length) {
    advantage.features = [
      ...advantage.features,
      {
        title: "Common migration paths we handle",
        desc: page.examples.join(", ") + ".",
      },
    ];
  }

  return (
    <RetainedStyleServiceSubPage
      key={page.slug}
      heroTitle={splitHeroTitle(page.heroTitle)}
      heroLead={page.heroLead}
      heroTitleMaxCh={page.heroTitleMaxCh || "18ch"}
      advantage={advantage}
      process={page.process}
      faqs={page.faqs}
      faqHeading={page.faqHeading}
      faqSubtitle={page.faqSubtitle}
      techCategories={WDH_TECH_CATEGORIES}
      techStats={WDH_TECH_STATS}
      techCapabilities={WDH_TECH_CAPABILITIES}
      techMarquee={WDH_TECH_MARQUEE}
      techCopy={page.techCopy}
      unlockingHeading={
        <>
          More Website Development Services
          <br />
          from Saqrih in Qatar
        </>
      }
      unlockingCards={getWebsiteDevSiblingCards(page.slug)}
      endToEndPageKey="wp-development"
      customersPageKey="homepage"
    />
  );
}
