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
  WEBSITE_DEVELOPMENT,
  WEBSITE_DEVELOPMENT_SUB_SERVICES,
} from "../../../../lib/services/websiteDevelopment";

export default function WebsiteDevelopmentPage() {
  return (
    <ServicePageShell
      heroTitle={
        <>
          Website&nbsp;development
        </>
      }
      heroLead={WEBSITE_DEVELOPMENT.heroLead}
      heroTitleMaxCh="14ch"
      afterHero={
        <>
          <ServiceIntroSection />
          <ServiceWhyChooseSection />
          <ServiceMethodologySection />
          <ServiceEdgeSection />
          <ServiceTechStackSection />
          <EndToEndSection pageKey="wp-development" />
          <CustomersSection pageKey="wp-development" />
          <ServiceIndustriesSection />
          <ServiceProcessSection />
          <ServiceWhyQatarSection />
          <SubServicesSection
            eyebrow="The Digital Ecosystem"
            titleSolid="Additional Services from Your Trusted"
            titleOutline="Qatar Web Design Agency"
            parentPath={WEBSITE_DEVELOPMENT.path}
            items={WEBSITE_DEVELOPMENT_SUB_SERVICES}
          />
          <ServiceFAQSection />
        </>
      }
      showEndToEnd={false}
      showSubServices={false}
      endToEndPageKey="wp-development"
    />
  );
}
