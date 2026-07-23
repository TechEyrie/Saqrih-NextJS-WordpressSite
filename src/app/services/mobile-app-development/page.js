"use client";

import ServicePageShell from "../../../../components/services/ServicePageShell";
import ServiceIntroSection from "../../../../components/services/ServiceIntroSection";
import ServiceWhyChooseSection from "../../../../components/services/ServiceWhyChooseSection";
import ServiceMethodologySection from "../../../../components/services/ServiceMethodologySection";
import ServiceEdgeSection from "../../../../components/services/ServiceEdgeSection";
import ServiceTechStackSection from "../../../../components/services/ServiceTechStackSection";
import EndToEndSection from "../../../../components/icomat1/EndToEndSection";
import CustomersSection from "../../../../components/icomat1/CustomerSection";
import ServiceIndustriesSection from "../../../../components/services/ServiceIndustriesSection";
import ServiceProcessSection from "../../../../components/services/ServiceProcessSection";
import ServiceWhyQatarSection from "../../../../components/services/ServiceWhyQatarSection";
import SubServicesSection from "../../../../components/services/SubServicesSection";
import ServiceFAQSection from "../../../../components/services/ServiceFAQSection";
import {
  MOBILE_APP_DEVELOPMENT,
  MOBILE_APP_SUB_SERVICES,
  MOBILE_APP_FAQS,
  MOBILE_INTRO,
  MOBILE_WHY_CHOOSE,
  MOBILE_METHODOLOGY,
  MOBILE_EDGE,
  MOBILE_PROCESS,
  MOBILE_WHY_QATAR,
  MOBILE_TECH_CATEGORIES,
  MOBILE_TECH_STATS,
  MOBILE_TECH_CAPABILITIES,
  MOBILE_TECH_MARQUEE,
  MOBILE_TECH_COPY,
} from "../../../../lib/services/mobileAppDevelopment";

export default function MobileAppDevelopmentPage() {
  return (
    <ServicePageShell
      heroTitle={
        <>
          Mobile&nbsp;App
          <br />
          Development
        </>
      }
      heroLead={MOBILE_APP_DEVELOPMENT.heroLead}
      heroTitleMaxCh="12ch"
      afterHero={
        <>
          <ServiceIntroSection
            imageAlt="Saqrih mobile app development team"
            badgeValue={MOBILE_INTRO.badgeValue}
            badgeLabel={MOBILE_INTRO.badgeLabel}
            heading={MOBILE_INTRO.heading}
            paragraphs={MOBILE_INTRO.paragraphs}
          />
          <ServiceWhyChooseSection
            eyebrow={MOBILE_WHY_CHOOSE.eyebrow}
            heading={MOBILE_WHY_CHOOSE.heading}
            body={MOBILE_WHY_CHOOSE.body}
            features={MOBILE_WHY_CHOOSE.features}
          />
          <ServiceMethodologySection
            eyebrow={MOBILE_METHODOLOGY.eyebrow}
            heading={MOBILE_METHODOLOGY.heading}
            intro={MOBILE_METHODOLOGY.intro}
            steps={MOBILE_METHODOLOGY.steps}
          />
          <ServiceEdgeSection
            eyebrow={MOBILE_EDGE.eyebrow}
            heading={MOBILE_EDGE.heading}
            headingLine2={MOBILE_EDGE.headingLine2}
            body={MOBILE_EDGE.body}
          />
          <ServiceTechStackSection
            categories={MOBILE_TECH_CATEGORIES}
            stats={MOBILE_TECH_STATS}
            capabilities={MOBILE_TECH_CAPABILITIES}
            marquee={MOBILE_TECH_MARQUEE}
            eyebrow={MOBILE_TECH_COPY.eyebrow}
            headingLine1={MOBILE_TECH_COPY.headingLine1}
            headingLine2={MOBILE_TECH_COPY.headingLine2}
            body={MOBILE_TECH_COPY.body}
          />
          <EndToEndSection pageKey="wp-development" />
          <CustomersSection pageKey="wp-development" />
          <ServiceIndustriesSection />
          <ServiceProcessSection
            eyebrow={MOBILE_PROCESS.eyebrow}
            heading={MOBILE_PROCESS.heading}
            steps={MOBILE_PROCESS.steps}
          />
          <ServiceWhyQatarSection
            eyebrow={MOBILE_WHY_QATAR.eyebrow}
            headingLead={MOBILE_WHY_QATAR.headingLead}
            headingAccent={MOBILE_WHY_QATAR.headingAccent}
            body={MOBILE_WHY_QATAR.body}
          />
          <SubServicesSection
            eyebrow="Mobile product suite"
            titleSolid="App Services from Your Trusted"
            titleOutline="Qatar Mobile Engineering Partner"
            parentPath={MOBILE_APP_DEVELOPMENT.path}
            items={MOBILE_APP_SUB_SERVICES}
          />
          <ServiceFAQSection
            faqs={MOBILE_APP_FAQS}
            intro="Answers about Flutter, React Native, iOS/Android builds, timelines, store launches, and post-launch mobile support in Qatar."
          />
        </>
      }
      showEndToEnd={false}
      showSubServices={false}
      endToEndPageKey="wp-development"
    />
  );
}
