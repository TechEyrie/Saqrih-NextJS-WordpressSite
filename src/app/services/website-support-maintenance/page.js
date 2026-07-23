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
  WEBSITE_SUPPORT_MAINTENANCE,
  WEBSITE_SUPPORT_MAINTENANCE_SUB_SERVICES,
  WEBSITE_SUPPORT_MAINTENANCE_FAQS,
  WSM_INTRO,
  WSM_WHY_CHOOSE,
  WSM_METHODOLOGY,
  WSM_EDGE,
  WSM_PROCESS,
  WSM_WHY_QATAR,
  WSM_TECH_CATEGORIES,
  WSM_TECH_STATS,
  WSM_TECH_CAPABILITIES,
  WSM_TECH_MARQUEE,
  WSM_TECH_COPY,
} from "../../../../lib/services/websiteSupportMaintenance";

export default function WebsiteSupportMaintenancePage() {
  return (
    <ServicePageShell
      heroTitle={
        <>
          Website Support
          <br />
          &amp;&nbsp;Maintenance
        </>
      }
      heroLead={WEBSITE_SUPPORT_MAINTENANCE.heroLead}
      heroTitleMaxCh="16ch"
      afterHero={
        <>
          <ServiceIntroSection
            imageAlt="Saqrih website support and maintenance team"
            badgeValue={WSM_INTRO.badgeValue}
            badgeLabel={WSM_INTRO.badgeLabel}
            heading={WSM_INTRO.heading}
            paragraphs={WSM_INTRO.paragraphs}
          />
          <ServiceWhyChooseSection
            eyebrow={WSM_WHY_CHOOSE.eyebrow}
            heading={WSM_WHY_CHOOSE.heading}
            body={WSM_WHY_CHOOSE.body}
            features={WSM_WHY_CHOOSE.features}
          />
          <ServiceMethodologySection
            eyebrow={WSM_METHODOLOGY.eyebrow}
            heading={WSM_METHODOLOGY.heading}
            intro={WSM_METHODOLOGY.intro}
            steps={WSM_METHODOLOGY.steps}
          />
          <ServiceEdgeSection
            eyebrow={WSM_EDGE.eyebrow}
            heading={WSM_EDGE.heading}
            headingLine2={WSM_EDGE.headingLine2}
            body={WSM_EDGE.body}
          />
          <ServiceTechStackSection
            categories={WSM_TECH_CATEGORIES}
            stats={WSM_TECH_STATS}
            capabilities={WSM_TECH_CAPABILITIES}
            marquee={WSM_TECH_MARQUEE}
            eyebrow={WSM_TECH_COPY.eyebrow}
            headingLine1={WSM_TECH_COPY.headingLine1}
            headingLine2={WSM_TECH_COPY.headingLine2}
            body={WSM_TECH_COPY.body}
          />
          <EndToEndSection pageKey="wp-development" />
          <CustomersSection pageKey="wp-development" />
          <ServiceIndustriesSection />
          <ServiceProcessSection
            eyebrow={WSM_PROCESS.eyebrow}
            heading={WSM_PROCESS.heading}
            steps={WSM_PROCESS.steps}
          />
          <ServiceWhyQatarSection
            eyebrow={WSM_WHY_QATAR.eyebrow}
            headingLead={WSM_WHY_QATAR.headingLead}
            headingAccent={WSM_WHY_QATAR.headingAccent}
            body={WSM_WHY_QATAR.body}
          />
          <SubServicesSection
            eyebrow="Always-on care"
            titleSolid="Support Services from Your Trusted"
            titleOutline="Qatar Web Maintenance Partner"
            parentPath={WEBSITE_SUPPORT_MAINTENANCE.path}
            items={WEBSITE_SUPPORT_MAINTENANCE_SUB_SERVICES}
          />
          <ServiceFAQSection
            faqs={WEBSITE_SUPPORT_MAINTENANCE_FAQS}
            intro="Clear answers about website maintenance, security updates, backups, and ongoing support for businesses in Qatar."
          />
        </>
      }
      showEndToEnd={false}
      showSubServices={false}
      endToEndPageKey="wp-development"
    />
  );
}
