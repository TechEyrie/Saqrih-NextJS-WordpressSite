"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Montserrat } from "next/font/google";

import Header from "../icomat1/Header";
import FooterSection from "../icomat1/FooterSection";
import EndToEndSection from "../icomat1/EndToEndSection";
import CTASection from "../icomat1/CTASection";
import ServiceHeroSection from "./ServiceHeroSection";
import SubServicesSection from "./SubServicesSection";

gsap.registerPlugin(ScrollTrigger);

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

/**
 * Shared client shell for main + sub service pages (same scroll/hero stack).
 */
export default function ServicePageShell({
  heroTitle,
  heroLead,
  heroTitleMaxCh,
  afterHero = null,
  showSubServices = false,
  subServicesHeading,
  subServicesIntro,
  parentPath,
  subServices = [],
  showEndToEnd = true,
  endToEndPageKey = "wp-development",
}) {
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 1.5,
      infinite: false,
    });

    const onTick = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);
    lenis.on("scroll", () => ScrollTrigger.update());
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(onTick);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <div
      data-theme="dark"
      className={`icomat1-laygrotesk ${montserrat.variable}`}
      style={{ backgroundColor: "#162D24", minHeight: "100vh" }}
    >
      <style jsx global>{`
        html,
        body {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        html::-webkit-scrollbar,
        body::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <Header quoteOpen={quoteOpen} setQuoteOpen={setQuoteOpen} />
      <main id="main-content" className="homepage-font-scope icomat-wp-service-page">
        <ServiceHeroSection
          title={heroTitle}
          lead={heroLead}
          titleMaxCh={heroTitleMaxCh}
        />
        {afterHero}
        {showSubServices ? (
          <SubServicesSection
            heading={subServicesHeading}
            intro={subServicesIntro}
            parentPath={parentPath}
            items={subServices}
          />
        ) : null}
        {showEndToEnd ? <EndToEndSection pageKey={endToEndPageKey} /> : null}
        <CTASection onQuoteOpen={() => setQuoteOpen(true)} />
        <FooterSection />
      </main>
    </div>
  );
}
