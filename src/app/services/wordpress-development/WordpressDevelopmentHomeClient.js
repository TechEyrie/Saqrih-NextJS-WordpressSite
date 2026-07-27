'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import HeroSection from '../../../../components/icomat1/HeroSection'
import Header from '../../../../components/icomat1/Header'
import LazyWhenVisible from '../../../../components/LazyWhenVisible'
import {
  WORDPRESS_DEV_HOME_HERO,
  WORDPRESS_DEV_HOME_RTS,
  WORDPRESS_DEV_HOME_RTS_CARDS,
  WORDPRESS_DEV_HOME_RTS_INTRO,
  WORDPRESS_DEV_HOME_OPERATE,
  WORDPRESS_DEV_HOME_ADVANTAGE,
  WORDPRESS_DEV_HOME_UNLOCKING,
} from '../../../../lib/services/wordpressDevelopmentHome'
import {
  WP_HOME_TECH_CATEGORIES,
  WP_HOME_TECH_STATS,
  WP_HOME_TECH_CAPABILITIES,
  WP_HOME_TECH_MARQUEE,
  WP_HOME_TECH_COPY,
} from '../../../../lib/services/wordpressDevelopmentTech'

const RTSSection = dynamic(() => import('../../../../components/icomat1/RTSSection'), { ssr: false })
const RTSCombinedSection = dynamic(() => import('../../../../components/icomat1/RTSCombinedSection'), { ssr: false })
const HowWeOperateSection = dynamic(() => import('../../../../components/icomat1/HowWeOperateSection'), { ssr: false })
const ServiceTechStackSection = dynamic(() => import('../../../../components/services/ServiceTechStackSection'), { ssr: false })
const OurAdvantageSection = dynamic(() => import('../../../../components/icomat1/OurAdvantageSection'), { ssr: false })
const EndToEndSection = dynamic(() => import('../../../../components/icomat1/EndToEndSection'), { ssr: false })
const CustomersSection = dynamic(() => import('../../../../components/icomat1/CustomerSection'), { ssr: false })
const UnlockingSection = dynamic(() => import('../../../../components/icomat1/UnlockingSection'), { ssr: false })
const FooterSection = dynamic(() => import('../../../../components/icomat1/FooterSection'), { ssr: false })

export default function WordpressDevelopmentHomeClient() {
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
          titleLine1={WORDPRESS_DEV_HOME_HERO.titleLine1}
          titleLine2={WORDPRESS_DEV_HOME_HERO.titleLine2}
          showTrademark={WORDPRESS_DEV_HOME_HERO.showTrademark}
          description={WORDPRESS_DEV_HOME_HERO.description}
        />
        <LazyWhenVisible minHeight="55vh">
          <RTSSection text={WORDPRESS_DEV_HOME_RTS} />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight="100vh">
          <RTSCombinedSection
            pageKey="homepage"
            cards={WORDPRESS_DEV_HOME_RTS_CARDS}
            servicesIntro={WORDPRESS_DEV_HOME_RTS_INTRO}
          />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight="70vh">
          <HowWeOperateSection text={WORDPRESS_DEV_HOME_OPERATE} />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight="90vh">
          <ServiceTechStackSection
            categories={WP_HOME_TECH_CATEGORIES}
            stats={WP_HOME_TECH_STATS}
            capabilities={WP_HOME_TECH_CAPABILITIES}
            marquee={WP_HOME_TECH_MARQUEE}
            eyebrow={WP_HOME_TECH_COPY.eyebrow}
            headingLine1={WP_HOME_TECH_COPY.headingLine1}
            headingLine2={WP_HOME_TECH_COPY.headingLine2}
            body={WP_HOME_TECH_COPY.body}
          />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight="60vh">
          <OurAdvantageSection
            label={WORDPRESS_DEV_HOME_ADVANTAGE.label}
            headingLines={WORDPRESS_DEV_HOME_ADVANTAGE.headingLines}
            paragraphs={WORDPRESS_DEV_HOME_ADVANTAGE.paragraphs}
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
                {WORDPRESS_DEV_HOME_UNLOCKING.headingLine1}
                <br />
                {WORDPRESS_DEV_HOME_UNLOCKING.headingLine2}
              </>
            }
            cards={WORDPRESS_DEV_HOME_UNLOCKING.cards}
          />
        </LazyWhenVisible>
        <LazyWhenVisible minHeight="50vh" rootMargin="120px 0px">
          <FooterSection />
        </LazyWhenVisible>
      </main>
    </div>
  )
}
