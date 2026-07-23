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
  CMS_HEADLESS_DEVELOPMENT,
  CMS_HEADLESS_SUB_SERVICES,
  CMS_HEADLESS_FAQS,
  CMS_INTRO,
  CMS_WHY_CHOOSE,
  CMS_METHODOLOGY,
  CMS_EDGE,
  CMS_PROCESS,
  CMS_WHY_QATAR,
  CMS_TECH_CATEGORIES,
  CMS_TECH_STATS,
  CMS_TECH_CAPABILITIES,
  CMS_TECH_MARQUEE,
  CMS_TECH_COPY,
} from "../../../../lib/services/cmsHeadlessDevelopment";

export default function CmsHeadlessDevelopmentPage() {
  return (
    <ServicePageShell
      heroTitle={
        <>
          CMS&nbsp;&amp;&nbsp;Headless
          <br />
          Development
        </>
      }
      heroLead={CMS_HEADLESS_DEVELOPMENT.heroLead}
      heroTitleMaxCh="16ch"
      afterHero={
        <>
          <ServiceIntroSection
            imageAlt="Saqrih CMS and headless development team"
            badgeValue={CMS_INTRO.badgeValue}
            badgeLabel={CMS_INTRO.badgeLabel}
            heading={CMS_INTRO.heading}
            paragraphs={CMS_INTRO.paragraphs}
          />
          <ServiceWhyChooseSection
            eyebrow={CMS_WHY_CHOOSE.eyebrow}
            heading={CMS_WHY_CHOOSE.heading}
            body={CMS_WHY_CHOOSE.body}
            features={CMS_WHY_CHOOSE.features}
          />
          <ServiceMethodologySection
            eyebrow={CMS_METHODOLOGY.eyebrow}
            heading={CMS_METHODOLOGY.heading}
            intro={CMS_METHODOLOGY.intro}
            steps={CMS_METHODOLOGY.steps}
          />
          <ServiceEdgeSection
            eyebrow={CMS_EDGE.eyebrow}
            heading={CMS_EDGE.heading}
            headingLine2={CMS_EDGE.headingLine2}
            body={CMS_EDGE.body}
          />
          <ServiceTechStackSection
            categories={CMS_TECH_CATEGORIES}
            stats={CMS_TECH_STATS}
            capabilities={CMS_TECH_CAPABILITIES}
            marquee={CMS_TECH_MARQUEE}
            eyebrow={CMS_TECH_COPY.eyebrow}
            headingLine1={CMS_TECH_COPY.headingLine1}
            headingLine2={CMS_TECH_COPY.headingLine2}
            body={CMS_TECH_COPY.body}
          />
          <EndToEndSection pageKey="wp-development" />
          <CustomersSection pageKey="wp-development" />
          <ServiceIndustriesSection />
          <ServiceProcessSection
            eyebrow={CMS_PROCESS.eyebrow}
            heading={CMS_PROCESS.heading}
            steps={CMS_PROCESS.steps}
          />
          <ServiceWhyQatarSection
            eyebrow={CMS_WHY_QATAR.eyebrow}
            headingLead={CMS_WHY_QATAR.headingLead}
            headingAccent={CMS_WHY_QATAR.headingAccent}
            body={CMS_WHY_QATAR.body}
          />
          <SubServicesSection
            eyebrow="Content systems"
            titleSolid="CMS Services from Your Trusted"
            titleOutline="Qatar Headless & CMS Partner"
            parentPath={CMS_HEADLESS_DEVELOPMENT.path}
            items={CMS_HEADLESS_SUB_SERVICES}
          />
          <ServiceFAQSection
            faqs={CMS_HEADLESS_FAQS}
            intro="Answers about CMS platforms, headless architecture, migrations, timelines, and ongoing content-system support in Qatar."
          />
        </>
      }
      showEndToEnd={false}
      showSubServices={false}
      endToEndPageKey="wp-development"
    />
  );
}
