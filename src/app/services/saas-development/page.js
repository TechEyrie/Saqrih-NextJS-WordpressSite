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
  SAAS_DEVELOPMENT,
  SAAS_DEVELOPMENT_SUB_SERVICES,
  SAAS_DEVELOPMENT_FAQS,
  SAAS_INTRO,
  SAAS_WHY_CHOOSE,
  SAAS_METHODOLOGY,
  SAAS_EDGE,
  SAAS_PROCESS,
  SAAS_WHY_QATAR,
  SAAS_TECH_CATEGORIES,
  SAAS_TECH_STATS,
  SAAS_TECH_CAPABILITIES,
  SAAS_TECH_MARQUEE,
  SAAS_TECH_COPY,
} from "../../../../lib/services/saasDevelopment";

export default function SaasDevelopmentPage() {
  return (
    <ServicePageShell
      heroTitle={
        <>
          SaaS
          <br />
          Development
        </>
      }
      heroLead={SAAS_DEVELOPMENT.heroLead}
      heroTitleMaxCh="12ch"
      afterHero={
        <>
          <ServiceIntroSection
            imageAlt="Saqrih SaaS product development team"
            badgeValue={SAAS_INTRO.badgeValue}
            badgeLabel={SAAS_INTRO.badgeLabel}
            heading={SAAS_INTRO.heading}
            paragraphs={SAAS_INTRO.paragraphs}
          />
          <ServiceWhyChooseSection
            eyebrow={SAAS_WHY_CHOOSE.eyebrow}
            heading={SAAS_WHY_CHOOSE.heading}
            body={SAAS_WHY_CHOOSE.body}
            features={SAAS_WHY_CHOOSE.features}
          />
          <ServiceMethodologySection
            eyebrow={SAAS_METHODOLOGY.eyebrow}
            heading={SAAS_METHODOLOGY.heading}
            intro={SAAS_METHODOLOGY.intro}
            steps={SAAS_METHODOLOGY.steps}
          />
          <ServiceEdgeSection
            eyebrow={SAAS_EDGE.eyebrow}
            heading={SAAS_EDGE.heading}
            headingLine2={SAAS_EDGE.headingLine2}
            body={SAAS_EDGE.body}
          />
          <ServiceTechStackSection
            categories={SAAS_TECH_CATEGORIES}
            stats={SAAS_TECH_STATS}
            capabilities={SAAS_TECH_CAPABILITIES}
            marquee={SAAS_TECH_MARQUEE}
            eyebrow={SAAS_TECH_COPY.eyebrow}
            headingLine1={SAAS_TECH_COPY.headingLine1}
            headingLine2={SAAS_TECH_COPY.headingLine2}
            body={SAAS_TECH_COPY.body}
          />
          <EndToEndSection pageKey="wp-development" />
          <CustomersSection pageKey="wp-development" />
          <ServiceIndustriesSection />
          <ServiceProcessSection
            eyebrow={SAAS_PROCESS.eyebrow}
            heading={SAAS_PROCESS.heading}
            steps={SAAS_PROCESS.steps}
          />
          <ServiceWhyQatarSection
            eyebrow={SAAS_WHY_QATAR.eyebrow}
            headingLead={SAAS_WHY_QATAR.headingLead}
            headingAccent={SAAS_WHY_QATAR.headingAccent}
            body={SAAS_WHY_QATAR.body}
          />
          <SubServicesSection
            eyebrow="Product ecosystem"
            titleSolid="SaaS Services from Your Trusted"
            titleOutline="Qatar Product Engineering Partner"
            parentPath={SAAS_DEVELOPMENT.path}
            items={SAAS_DEVELOPMENT_SUB_SERVICES}
          />
          <ServiceFAQSection
            faqs={SAAS_DEVELOPMENT_FAQS}
            intro="Answers about SaaS MVPs, timelines, stacks, multi-tenancy, billing, and how we partner with founders in Qatar."
          />
        </>
      }
      showEndToEnd={false}
      showSubServices={false}
      endToEndPageKey="wp-development"
    />
  );
}
