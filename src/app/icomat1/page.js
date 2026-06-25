'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import HeroSection from '../../../components/icomat1/HeroSection'
import Header from '../../../components/icomat1/Header'
import { deferScrollTriggerRefresh } from '../../../lib/deferScrollTriggerRefresh'

const RTSSection = dynamic(() => import('../../../components/icomat1/RTSSection'))
const RTSCombinedSection = dynamic(() => import('../../../components/icomat1/RTSCombinedSection'))
const HowWeOperateSection = dynamic(() => import('../../../components/icomat1/HowWeOperateSection'))
const OurAdvantageSection = dynamic(() => import('../../../components/icomat1/OurAdvantageSection'))
const EndToEndSection = dynamic(() => import('../../../components/icomat1/EndToEndSection'))
const CustomersSection = dynamic(() => import('../../../components/icomat1/CustomerSection'))
const UnlockingSection = dynamic(() => import('../../../components/icomat1/UnlockingSection'))
const FooterSection = dynamic(() => import('../../../components/icomat1/FooterSection'))

gsap.registerPlugin(ScrollTrigger)

export default function IcomatPage() {
  const [theme] = useState('dark')
  const [quoteOpen, setQuoteOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    let lenis = null
    let tickerFn = null
    let cancelled = false

    const init = () => {
      if (cancelled) return

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
      lenis.on('scroll', () => ScrollTrigger.update())
      deferScrollTriggerRefresh()
    }

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(init, { timeout: 1500 })
      return () => {
        cancelled = true
        window.cancelIdleCallback(id)
        if (tickerFn) gsap.ticker.remove(tickerFn)
        ScrollTrigger.getAll().forEach((t) => t.kill())
        lenis?.destroy()
      }
    }

    const id = window.setTimeout(init, 80)
    return () => {
      cancelled = true
      window.clearTimeout(id)
      if (tickerFn) gsap.ticker.remove(tickerFn)
      ScrollTrigger.getAll().forEach((t) => t.kill())
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
        <HeroSection onQuoteClick={() => setQuoteOpen(true)} />
        <RTSSection />
        <RTSCombinedSection pageKey="homepage" />
        <HowWeOperateSection />
        <OurAdvantageSection />
        <EndToEndSection pageKey="homepage" />
        <CustomersSection pageKey="homepage" />
        <UnlockingSection />
        <FooterSection />
      </main>
    </div>
  )
}
