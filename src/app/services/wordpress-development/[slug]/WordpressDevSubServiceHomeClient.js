'use client'

import RetainedStyleServiceSubPage from '../../../../../components/services/RetainedStyleServiceSubPage'
import {
  WP_HOME_TECH_CATEGORIES,
  WP_HOME_TECH_STATS,
  WP_HOME_TECH_CAPABILITIES,
  WP_HOME_TECH_MARQUEE,
} from '../../../../../lib/services/wordpressDevelopmentTech'
import { getWordpressDevSiblingCards } from '../../../../../lib/services/wordpressDevelopmentSubPages'

function splitHeroTitle(title) {
  if (!title) return null
  if (title.includes('\n')) {
    const [a, b] = title.split('\n')
    return (
      <>
        {a}
        <br />
        {b}
      </>
    )
  }
  const words = title.split(' ')
  if (words.length <= 2) return title
  const mid = Math.ceil(words.length / 2)
  return (
    <>
      {words.slice(0, mid).join('\u00A0')}
      <br />
      {words.slice(mid).join('\u00A0')}
    </>
  )
}

export default function WordpressDevSubServiceHomeClient({
  page,
  techCategories = WP_HOME_TECH_CATEGORIES,
  techStats = WP_HOME_TECH_STATS,
  techCapabilities = WP_HOME_TECH_CAPABILITIES,
  techMarquee = WP_HOME_TECH_MARQUEE,
}) {
  return (
    <RetainedStyleServiceSubPage
      key={page.slug}
      heroTitle={splitHeroTitle(page.heroTitle)}
      heroLead={page.heroLead}
      heroTitleMaxCh={page.heroTitleMaxCh || '18ch'}
      advantage={page.advantage}
      process={page.process}
      faqs={page.faqs}
      faqHeading={page.faqHeading}
      faqSubtitle={page.faqSubtitle}
      techCategories={techCategories}
      techStats={techStats}
      techCapabilities={techCapabilities}
      techMarquee={techMarquee}
      techCopy={page.techCopy}
      unlockingHeading={
        <>
          More WordPress Development Services
          <br />
          from Saqrih in Qatar
        </>
      }
      unlockingCards={getWordpressDevSiblingCards(page.slug)}
      endToEndPageKey="wp-development"
      customersPageKey="homepage"
    />
  )
}
