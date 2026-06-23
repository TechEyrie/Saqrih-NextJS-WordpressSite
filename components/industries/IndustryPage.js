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
import HeroSection from "./shared/HeroSection";
import SEOResultsSection from "./shared/SEOResultsSection";
import FAQSection from "./shared/FAQSection";
import CustomersSection from "./shared/CustomerSection";
import UnlockingSection from "./shared/UnlockingSection";
import { getIndustryContent } from "../../lib/industries/industryContent";

gsap.registerPlugin(ScrollTrigger);

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function IndustryPage({ industrySlug }) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const content = getIndustryContent(industrySlug);

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

  if (!content) {
    return null;
  }

  return (
    <div
      data-theme="dark"
      className={`icomat1-laygrotesk ${montserrat.variable}`}
      style={{ backgroundColor: "#162D24", minHeight: "100vh" }}
    >
      <style jsx global>{`
        html, body {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        html::-webkit-scrollbar,
        body::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <Header quoteOpen={quoteOpen} setQuoteOpen={setQuoteOpen} />
      <div className="homepage-font-scope icomat-wp-service-page">
        <HeroSection industrySlug={industrySlug} />
        <SEOResultsSection
          industrySlug={industrySlug}
          onQuoteClick={() => setQuoteOpen(true)}
        />
        <FAQSection industrySlug={industrySlug} />
        <CustomersSection />
        <EndToEndSection pageKey="wp-woocommerce" />
        <UnlockingSection />
        <CTASection />
        <FooterSection />
      </div>
    </div>
  );
}
