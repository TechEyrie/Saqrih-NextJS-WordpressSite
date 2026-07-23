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
  API_INTEGRATION_DEVELOPMENT,
  API_INTEGRATION_SUB_SERVICES,
  API_INTEGRATION_FAQS,
  API_INTRO,
  API_WHY_CHOOSE,
  API_METHODOLOGY,
  API_EDGE,
  API_PROCESS,
  API_WHY_QATAR,
  API_TECH_CATEGORIES,
  API_TECH_STATS,
  API_TECH_CAPABILITIES,
  API_TECH_MARQUEE,
  API_TECH_COPY,
} from "../../../../lib/services/apiIntegrationDevelopment";

export default function ApiIntegrationDevelopmentPage() {
  return (
    <ServicePageShell
      heroTitle={
        <>
          API&nbsp;&amp;&nbsp;Integration
          <br />
          Development
        </>
      }
      heroLead={API_INTEGRATION_DEVELOPMENT.heroLead}
      heroTitleMaxCh="18ch"
      afterHero={
        <>
          <ServiceIntroSection
            imageAlt="Saqrih API and integration development team"
            badgeValue={API_INTRO.badgeValue}
            badgeLabel={API_INTRO.badgeLabel}
            heading={API_INTRO.heading}
            paragraphs={API_INTRO.paragraphs}
          />
          <ServiceWhyChooseSection
            eyebrow={API_WHY_CHOOSE.eyebrow}
            heading={API_WHY_CHOOSE.heading}
            body={API_WHY_CHOOSE.body}
            features={API_WHY_CHOOSE.features}
          />
          <ServiceMethodologySection
            eyebrow={API_METHODOLOGY.eyebrow}
            heading={API_METHODOLOGY.heading}
            intro={API_METHODOLOGY.intro}
            steps={API_METHODOLOGY.steps}
          />
          <ServiceEdgeSection
            eyebrow={API_EDGE.eyebrow}
            heading={API_EDGE.heading}
            headingLine2={API_EDGE.headingLine2}
            body={API_EDGE.body}
          />
          <ServiceTechStackSection
            categories={API_TECH_CATEGORIES}
            stats={API_TECH_STATS}
            capabilities={API_TECH_CAPABILITIES}
            marquee={API_TECH_MARQUEE}
            eyebrow={API_TECH_COPY.eyebrow}
            headingLine1={API_TECH_COPY.headingLine1}
            headingLine2={API_TECH_COPY.headingLine2}
            body={API_TECH_COPY.body}
          />
          <EndToEndSection pageKey="wp-development" />
          <CustomersSection pageKey="wp-development" />
          <ServiceIndustriesSection />
          <ServiceProcessSection
            eyebrow={API_PROCESS.eyebrow}
            heading={API_PROCESS.heading}
            steps={API_PROCESS.steps}
          />
          <ServiceWhyQatarSection
            eyebrow={API_WHY_QATAR.eyebrow}
            headingLead={API_WHY_QATAR.headingLead}
            headingAccent={API_WHY_QATAR.headingAccent}
            body={API_WHY_QATAR.body}
          />
          <SubServicesSection
            eyebrow="Connected systems"
            titleSolid="Integration Services from Your Trusted"
            titleOutline="Qatar API Engineering Partner"
            parentPath={API_INTEGRATION_DEVELOPMENT.path}
            items={API_INTEGRATION_SUB_SERVICES}
          />
          <ServiceFAQSection
            faqs={API_INTEGRATION_FAQS}
            intro="Answers about REST and GraphQL APIs, CRM connectors, payment gateways, SSO, and ongoing integration support in Qatar."
          />
        </>
      }
      showEndToEnd={false}
      showSubServices={false}
      endToEndPageKey="wp-development"
    />
  );
}
