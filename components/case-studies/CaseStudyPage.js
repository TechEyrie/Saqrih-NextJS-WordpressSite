"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { resetCaseStudyScroll, notifyScrollReady } from "../../lib/useCaseStudyGsap";
import CTASection from "../icomat1/CTASection";
import EndToEndSection from "../icomat1/EndToEndSection";
import FooterSection from "../icomat1/FooterSection";
import Header from "../icomat1/Header";
import CustomersSection from "../icomat1/CustomerSection";
import CaseStudyHeroSection from "./HeroSection";
import CaseStudyStorySection from "./CaseStudyStorySection";
import CaseStudyShowcaseSection from "./CaseStudyShowcaseSection";
// import CaseStudyDeviceGallerySection from "./CaseStudyDeviceGallerySection";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudyPage({ caseStudy, pageKey }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    resetCaseStudyScroll();

    let lenis = null;
    let onTick = null;
    let mounted = true;
    const timeouts = [];

    const refresh = () => {
      if (mounted) ScrollTrigger.refresh();
    };

    const initLenis = () => {
      if (!mounted) return;

      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 1.5,
        infinite: false,
      });

      onTick = (time) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(onTick);
      gsap.ticker.lagSmoothing(0);
      lenis.on("scroll", () => ScrollTrigger.update());
      refresh();
      notifyScrollReady();
    };

    // Defer until the previous route finishes async ScrollTrigger cleanup.
    timeouts.push(window.setTimeout(initLenis, 80));
    [200, 400, 1200, 2000].forEach((ms) => {
      timeouts.push(
        window.setTimeout(() => {
          refresh();
          if (ms >= 1200) notifyScrollReady();
        }, ms),
      );
    });

    const observer = new MutationObserver(() => {
      if (!document.body.dataset.routeLoading) {
        refresh();
        notifyScrollReady();
      }
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-route-loading"],
    });

    return () => {
      mounted = false;
      timeouts.forEach((id) => window.clearTimeout(id));
      observer.disconnect();
      if (onTick) gsap.ticker.remove(onTick);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis?.destroy();
    };
  }, []);

  return (
    <div className="icomat1-laygrotesk">
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
      <Header />
      <CaseStudyHeroSection caseStudy={caseStudy} />
      <CaseStudyStorySection caseStudy={caseStudy} />
      <CaseStudyShowcaseSection caseStudy={caseStudy} />
      {/* <CaseStudyDeviceGallerySection caseStudy={caseStudy} /> */}
      <CustomersSection pageKey={pageKey} showVideoSection={false} />
      <EndToEndSection pageKey={pageKey} />
      <CTASection />
      <FooterSection />
    </div>
  );
}
