'use client'

import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Montserrat } from 'next/font/google'

import Header from '../../../components/icomat1/Header'
import FooterSection from '../../../components/icomat1/FooterSection'
import HeroSection from '../../../components/icomat1-about-us/HeroSection'
import FactorySection from '../../../components/icomat1-about-us/FactorySection'
import ReliableSection from '../../../components/icomat1-about-us/ReliableSection'
import OurAdvantageSection from '../../../components/icomat1/OurAdvantageSection'
import EndToEndSection from '../../../components/icomat1/EndToEndSection'
import CustomersSection from '../../../components/icomat1/CustomerSection'
import UnlockingSection from '../../../components/icomat1-about-us/UnlockingSection'
import CTASection from '../../../components/icomat1/CTASection'

gsap.registerPlugin(ScrollTrigger)

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

/** Lenis-friendly pin settings — avoids the grab/jerk on about-us */
const SMOOTH_PIN = {
  pinAnticipate: 0,
  pinType: 'transform',
  alignHeadingScrubWithPin: true,
  pinScope: 'track',
  // When horizontal scroll begins (GSAP ScrollTrigger syntax):
  // "top top" = carousel must reach viewport top (latest)
  // "top top+=80" = starts ~80px earlier | "top top+=120" = even earlier
  // "top 90%" = starts when track top crosses 90% down the screen
  pinStart: 'top top+=88',
}

export default function Icomat1AboutUsPage() {
  const [quoteOpen, setQuoteOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 1.5,
      infinite: false,
    })

    const onTick = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)
    lenis.on('scroll', () => ScrollTrigger.update())

    const refresh = () => ScrollTrigger.refresh()
    requestAnimationFrame(refresh)
    window.addEventListener('load', refresh)

    return () => {
      window.removeEventListener('load', refresh)
      gsap.ticker.remove(onTick)
      ScrollTrigger.getAll().forEach((t) => t.kill())
      lenis.destroy()
    }
  }, [])

  return (
    <div
      data-theme="dark"
      className={`icomat1-laygrotesk homepage-root ${montserrat.variable}`}
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
      <div className="homepage-font-scope">
        <HeroSection onQuoteClick={() => setQuoteOpen(true)} />
        <FactorySection />
        <ReliableSection />
        <OurAdvantageSection />
        <EndToEndSection pageKey="aboutUs" {...SMOOTH_PIN} />
        <CustomersSection pageKey="homepage" pinAnticipate={0} pinType="transform" />
        <UnlockingSection />
        <CTASection />
        <FooterSection />
      </div>
    </div>
  )
}
