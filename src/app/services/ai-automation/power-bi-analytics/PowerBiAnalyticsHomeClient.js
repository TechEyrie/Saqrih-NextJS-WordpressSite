"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Montserrat } from "next/font/google";

import Header from "../../../../../components/icomat1/Header";
import FooterSection from "../../../../../components/icomat1/FooterSection";
import EndToEndSection from "../../../../../components/icomat1/EndToEndSection";
import CTASection from "../../../../../components/icomat1/CTASection";
import CustomersSection from "../../../../../components/icomat1/CustomerSection";
import UnlockingSection from "../../../../../components/icomat1/UnlockingSection";
import SubServiceHero from "../../../../../components/services/subpage/SubServiceHero";
import SubServiceBenefits from "../../../../../components/services/subpage/SubServiceBenefits";
import SubServiceFAQ from "../../../../../components/services/subpage/SubServiceFAQ";
import SubServiceOfferingsGrid from "../../../../../components/services/subpage/SubServiceOfferingsGrid";
import SubServiceIntegrationsSection from "../../../../../components/services/subpage/SubServiceIntegrationsSection";
import SubServiceIndustriesTabs from "../../../../../components/services/subpage/SubServiceIndustriesTabs";
import SubServiceWhyChoose from "../../../../../components/services/subpage/SubServiceWhyChoose";
import {
  POWER_BI_HERO,
  POWER_BI_OFFERINGS_SECTION,
  POWER_BI_TECH_CATEGORIES,
  POWER_BI_TECH_STATS,
  POWER_BI_TECH_CAPABILITIES,
  POWER_BI_TECH_MARQUEE,
  POWER_BI_TECH_COPY,
  POWER_BI_INTEGRATIONS_SECTION,
  POWER_BI_PROCESS,
  POWER_BI_INDUSTRIES_SECTION,
  POWER_BI_WHY_SAQRIH,
  POWER_BI_FAQS,
  POWER_BI_FAQ_HEADING,
  POWER_BI_FAQ_SUBTITLE,
  POWER_BI_UNLOCKING_HEADING_LINES,
} from "../../../../../lib/services/powerBiAnalyticsPage";
import { getAiAutomationSiblingCards } from "../../../../../lib/services/aiAutomationSubPages";

const ServiceTechStackSection = dynamic(
  () => import("../../../../../components/services/ServiceTechStackSection"),
  { ssr: true }
);

gsap.registerPlugin(ScrollTrigger);

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

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

export default function PowerBiAnalyticsHomeClient() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const unlockingCards = getAiAutomationSiblingCards("power-bi-analytics");

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
          title={splitHeroTitle(POWER_BI_HERO.title)}
          lead={POWER_BI_HERO.lead}
          titleMaxCh={POWER_BI_HERO.titleMaxCh}
          stats={POWER_BI_HERO.stats}
          backgroundImage={POWER_BI_HERO.backgroundImage}
        />
        <SubServiceOfferingsGrid {...POWER_BI_OFFERINGS_SECTION} />
        <ServiceTechStackSection
          categories={POWER_BI_TECH_CATEGORIES}
          stats={POWER_BI_TECH_STATS}
          capabilities={POWER_BI_TECH_CAPABILITIES}
          marquee={POWER_BI_TECH_MARQUEE}
          eyebrow={POWER_BI_TECH_COPY.eyebrow}
          headingLine1={POWER_BI_TECH_COPY.headingLine1}
          headingLine2={POWER_BI_TECH_COPY.headingLine2}
          body={POWER_BI_TECH_COPY.body}
        />
        <SubServiceIntegrationsSection {...POWER_BI_INTEGRATIONS_SECTION} />
        <SubServiceBenefits
          title={POWER_BI_PROCESS.title}
          items={POWER_BI_PROCESS.items}
        />
        <SubServiceIndustriesTabs {...POWER_BI_INDUSTRIES_SECTION} />
        <SubServiceWhyChoose
          {...POWER_BI_WHY_SAQRIH}
          onQuoteClick={() => setQuoteOpen(true)}
        />
        <EndToEndSection pageKey="wp-development" />
        <CustomersSection pageKey="homepage" />
        <SubServiceFAQ
          heading={POWER_BI_FAQ_HEADING}
          subtitle={POWER_BI_FAQ_SUBTITLE}
          faqs={POWER_BI_FAQS}
        />
        {unlockingCards?.length ? (
          <UnlockingSection
            heading={
              <>
                {POWER_BI_UNLOCKING_HEADING_LINES[0]}
                <br />
                {POWER_BI_UNLOCKING_HEADING_LINES[1]}
              </>
            }
            cards={unlockingCards}
          />
        ) : null}
        <CTASection onQuoteOpen={() => setQuoteOpen(true)} />
        <FooterSection />
      </main>
    </div>
  );
}