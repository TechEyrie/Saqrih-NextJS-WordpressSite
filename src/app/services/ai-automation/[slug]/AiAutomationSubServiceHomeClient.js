"use client";

import RetainedStyleServiceSubPage from "../../../../../components/services/RetainedStyleServiceSubPage";
import {
  AI_TECH_CATEGORIES,
  AI_TECH_STATS,
  AI_TECH_CAPABILITIES,
  AI_TECH_MARQUEE,
} from "../../../../../lib/services/aiAutomationHome";
import { getAiAutomationSiblingCards } from "../../../../../lib/services/aiAutomationSubPages";

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

export default function AiAutomationSubServiceHomeClient({ page }) {
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
      techCategories={AI_TECH_CATEGORIES}
      techStats={AI_TECH_STATS}
      techCapabilities={AI_TECH_CAPABILITIES}
      techMarquee={AI_TECH_MARQUEE}
      techCopy={page.techCopy}
      unlockingHeading={
        <>
          More AI Automation Services
          <br />
          from Saqrih in Qatar
        </>
      }
      unlockingCards={getAiAutomationSiblingCards(page.slug)}
      endToEndPageKey="wp-development"
      customersPageKey="homepage"
    />
  );
}