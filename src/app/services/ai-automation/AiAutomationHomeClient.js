'use client'

import {
  useEffect,
  useState } from 'react'
import dynamic from 'next/dynamic'

import HeroSection from '../../../../components/icomat1/HeroSection'
import Header from '../../../../components/icomat1/Header'
import LazyWhenVisible from '../../../../components/LazyWhenVisible'
import {
  AI_AUTOMATION_HOME_HERO,
  AI_AUTOMATION_HOME_RTS,
  AI_AUTOMATION_HOME_RTS_CARDS,
  AI_AUTOMATION_HOME_RTS_INTRO,
  AI_AUTOMATION_HOME_OPERATE,
  AI_AUTOMATION_HOME_ADVANTAGE,
  AI_AUTOMATION_HOME_UNLOCKING,
  AI_TECH_CATEGORIES,
  AI_TECH_STATS,
  AI_TECH_CAPABILITIES,
  AI_TECH_MARQUEE,
  AI_TECH_COPY,
  AI_AUTOMATION_HOME_FAQS,
  AI_AUTOMATION_HOME_FAQ_INTRO,
  AI_AUTOMATION_HOME_FAQ_HEADING,
} from '../../../../lib/services/aiAutomationHome'

const RTSSection = dynamic(() => import('../../../../components/icomat1/RTSSection'), { ssr: false })
const RTSCombinedSection = dynamic(() => import('../../../../components/icomat1/RTSCombinedSection'), { ssr: false })
const HowWeOperateSection = dynamic(() => import('../../../../components/icomat1/HowWeOperateSection'), { ssr: false })
const ServiceTechStackSection = dynamic(() => import('../../../../components/services/ServiceTechStackSection'), { ssr: false })
const OurAdvantageSection = dynamic(() => import('../../../../components/icomat1/OurAdvantageSection'), { ssr: false })
const EndToEndSection = dynamic(() => import('../../../../components/icomat1/EndToEndSection'), { ssr: false })
const CustomersSection = dynamic(() => import('../../../../components/icomat1/CustomerSection'), { ssr: false })
const UnlockingSection = dynamic(() => import('../../../../components/icomat1/UnlockingSection'), { ssr: false })
const ServiceFAQSection = dynamic(() => import('../../../../components/services/ServiceFAQSection'), { ssr: false })
const FooterSection = dynamic(() => import('../../../../components/icomat1/FooterSection'), { ssr: false })

export default function AiAutomationHomeClient() {
  const [quoteOpen, setQuoteOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    let lenis = null
    let tickerFn = null
    let cancelled = false

    const init = async () => {
      if (cancelled) return

      const [{ default: Lenis }, { gsap }, { ScrollTrigger }, { deferScrollTriggerRefresh }] =
        await Promise.all([
          import('lenis'),
          import('gsap'),
          import('gsap/ScrollTrigger'),
          import('../../../../lib/deferScrollTriggerRefresh'),
        ])

      if (cancelled) return
      gsap.registerPlugin(ScrollTrigger)

      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 1.5,
        infinite: false,
      })

      tickerFn = (time) => {
        lenis.raf(time * 1000)
      }
      gsap.ticker.add(tickerFn)
      gsap.ticker.lagSmoothing(0)
      lenis.on('scroll', ScrollTrigger.update)
      deferScrollTriggerRefresh()
    }

    const onFirstScroll = () => {
      window.removeEventListener('scroll', onFirstScroll, { capture: true })
      window.removeEventListener('wheel', onFirstScroll, { capture: true })
      window.removeEventListener('touchstart', onFirstScroll, { capture: true })
      init()
    }

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(() => init(), { timeout: 3000 })
      window.addEventListener('scroll', onFirstScroll, { passive: true, capture: true })
      window.addEventListener('wheel', onFirstScroll, { passive: true, capture: true })
      window.addEventListener('touchstart', onFirstScroll, { passive: true, capture: true })

      return () => {
        cancelled = true
        window.cancelIdleCallback(idleId)
        window.removeEventListener('scroll', onFirstScroll, { capture: true })
        window.removeEventListener('wheel', onFirstScroll, { capture: true })
        window.removeEventListener('touchstart', onFirstScroll, { capture: true })
        if (tickerFn) {
          import('gsap').then(({ gsap }) => gsap.ticker.remove(tickerFn))
        }
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          ScrollTrigger.getAll().forEach((t) => t.kill())
        })
        lenis?.destroy()
      }
    }

    const timerId = window.setTimeout(init, 200)
    return () => {
      cancelled = true
      window.clearTimeout(timerId)
      if (tickerFn) {
        import('gsap').then(({ gsap }) => gsap.ticker.remove(tickerFn))
      }
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t) => t.kill())
      })
      lenis?.destroy()
    }
  }, [])

  return (
    <div
      data-theme="dark"
      className="icomat1-laygrotesk homepage-root"
      style={{
        backgroundColor: '#162D24',
        minHeight: '100vh',
        width: '100%',
        maxWidth: '100%',
        overflowX: 'clip',
      }}
    >
      <style jsx global>{`
        html, body {
          -ms-overflow-style: none;
          scrollbar-width: none;
          overflow-x: clip;
          max-width: 100%;
          width: 100%;
        }
        html::-webkit-scrollbar,
        body::-webkit-scrollbar {
          display: none;
        }
        .homepage-root,
        .homepage-font-scope {
          overflow-x: clip;
          max-width: 100%;
          width: 100%;
        }
      `}</style>

      <Header quoteOpen={quoteOpen} setQuoteOpen={setQuoteOpen} />
      <main id="main-content" className="homepage-font-scope">
        <HeroSection
          onQuoteClick={() => setQuoteOpen(true)}
          titleLine1={AI_AUTOMATION_HOME_HERO.titleLine1}
          titleLine2={AI_AUTOMATION_HOME_HERO.titleLine2}
          showTrademark={AI_AUTOMATION_HOME_HERO.showTrademark}
          description={AI_AUTOMATION_HOME_HERO.description}
        />
        <LazyWhenVisible minHeight="55vh">
          <RTSSection text={AI_AUTOMATION_HOME_RTS} />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight="100vh">
          <RTSCombinedSection
            pageKey="homepage"
            cards={AI_AUTOMATION_HOME_RTS_CARDS}
            servicesIntro={AI_AUTOMATION_HOME_RTS_INTRO}
          />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight="70vh">
          <HowWeOperateSection text={AI_AUTOMATION_HOME_OPERATE} />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight="90vh">
          <ServiceTechStackSection
            categories={AI_TECH_CATEGORIES}
            stats={AI_TECH_STATS}
            capabilities={AI_TECH_CAPABILITIES}
            marquee={AI_TECH_MARQUEE}
            eyebrow={AI_TECH_COPY.eyebrow}
            headingLine1={AI_TECH_COPY.headingLine1}
            headingLine2={AI_TECH_COPY.headingLine2}
            body={AI_TECH_COPY.body}
          />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight="60vh">
          <OurAdvantageSection
            label={AI_AUTOMATION_HOME_ADVANTAGE.label}
            headingLines={AI_AUTOMATION_HOME_ADVANTAGE.headingLines}
            paragraphs={AI_AUTOMATION_HOME_ADVANTAGE.paragraphs}
          />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight="100vh">
          <EndToEndSection pageKey="homepage" />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight="80vh">
          <CustomersSection pageKey="homepage" />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight="70vh">
          <UnlockingSection
            heading={
              <>
                {AI_AUTOMATION_HOME_UNLOCKING.headingLine1}
                <br />
                {AI_AUTOMATION_HOME_UNLOCKING.headingLine2}
              </>
            }
            cards={AI_AUTOMATION_HOME_UNLOCKING.cards}
          />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight="70vh">
          <ServiceFAQSection
            faqs={AI_AUTOMATION_HOME_FAQS}
            intro={AI_AUTOMATION_HOME_FAQ_INTRO}
            heading={AI_AUTOMATION_HOME_FAQ_HEADING}
          />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight="50vh" rootMargin="120px 0px">
          <FooterSection />
        </LazyWhenVisible>
      </main>
    </div>
  )
}