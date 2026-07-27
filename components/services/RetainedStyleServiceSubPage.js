"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Montserrat } from "next/font/google";

import Header from "../icomat1/Header";
import FooterSection from "../icomat1/FooterSection";
import EndToEndSection from "../icomat1/EndToEndSection";
import CTASection from "../icomat1/CTASection";
import CustomersSection from "../icomat1/CustomerSection";
import UnlockingSection from "../icomat1/UnlockingSection";
import SubServiceHero from "./subpage/SubServiceHero";
import SubServiceAdvantage from "./subpage/SubServiceAdvantage";
import SubServiceBenefits from "./subpage/SubServiceBenefits";
import SubServiceFAQ from "./subpage/SubServiceFAQ";

const ServiceTechStackSection = dynamic(
  () => import("./ServiceTechStackSection"),
  { ssr: true }
);

gsap.registerPlugin(ScrollTrigger);

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

/**
 * Retained-services layout for service sub-pages under /services.
 * Order: Hero, Advantage, Technologies, How it works, EndToEnd,
 * Customers, FAQ, Unlocking, CTA, Footer.
 */
export default function RetainedStyleServiceSubPage({
  heroTitle,
  heroLead,
  heroTitleMaxCh = "18ch",
  heroStats,
  advantage,
  process,
  faqs,
  faqHeading,
  faqSubtitle,
  techCategories,
  techStats,
  techCapabilities,
  techMarquee,
  techCopy,
  unlockingHeading,
  unlockingCards,
  endToEndPageKey = "wp-development",
  customersPageKey = "homepage",
}) {
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let lenis = null;
    let tickerFn = null;
    let cancelled = false;
    const timers = [];

    const syncTriggers = () => {
      if (cancelled) return;
      ScrollTrigger.refresh();
      ScrollTrigger.update();
    };

    const init = () => {
      if (cancelled) return;

      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 1.5,
        infinite: false,
      });

      tickerFn = (time) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(tickerFn);
      gsap.ticker.lagSmoothing(0);
      lenis.on("scroll", ScrollTrigger.update);

      // Soft navigations + tall Unlocking grids need staggered refreshes
      // so footer/CTA ScrollTriggers measure the final page height.
      requestAnimationFrame(syncTriggers);
      timers.push(window.setTimeout(syncTriggers, 80));
      timers.push(window.setTimeout(syncTriggers, 320));
      timers.push(window.setTimeout(syncTriggers, 900));
      timers.push(window.setTimeout(syncTriggers, 1800));
    };

    init();

    const onResize = () => {
      if (!cancelled) ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    let ro = null;
    const mainEl = document.getElementById("main-content");
    if (mainEl && typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => {
        if (!cancelled) {
          ScrollTrigger.refresh();
          ScrollTrigger.update();
        }
      });
      ro.observe(mainEl);
    }

    return () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
      window.removeEventListener("resize", onResize);
      ro?.disconnect();
      if (tickerFn) gsap.ticker.remove(tickerFn);
      lenis?.destroy();
      // Do not kill all ScrollTriggers here — section components clean up themselves.
    };
  }, [unlockingCards?.length]);

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
      <main
        id="main-content"
        className="homepage-font-scope icomat-wp-service-page"
      >
        <SubServiceHero
          title={heroTitle}
          lead={heroLead}
          titleMaxCh={heroTitleMaxCh}
          stats={heroStats}
        />
        <SubServiceAdvantage
          {...advantage}
          onQuoteClick={() => setQuoteOpen(true)}
        />
        {techCategories?.length ? (
          <ServiceTechStackSection
            categories={techCategories}
            stats={techStats}
            capabilities={techCapabilities}
            marquee={techMarquee}
            eyebrow={techCopy?.eyebrow}
            headingLine1={techCopy?.headingLine1}
            headingLine2={techCopy?.headingLine2}
            body={techCopy?.body}
          />
        ) : null}
        <SubServiceBenefits
          title={process?.title || "How it works"}
          items={process?.items || []}
        />
        <EndToEndSection pageKey={endToEndPageKey} />
        <CustomersSection pageKey={customersPageKey} />
        <SubServiceFAQ
          heading={faqHeading}
          subtitle={faqSubtitle}
          faqs={faqs || []}
        />
        {unlockingCards?.length ? (
          <UnlockingSection
            heading={unlockingHeading}
            cards={unlockingCards}
          />
        ) : null}
        <CTASection onQuoteOpen={() => setQuoteOpen(true)} />
        <FooterSection />
      </main>
    </div>
  );
}
