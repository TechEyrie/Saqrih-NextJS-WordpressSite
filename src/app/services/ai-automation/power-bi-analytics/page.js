import { buildPageMetadata } from "../../../../../lib/siteMetadata";
import JsonLd from "../../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from "../../../../../lib/jsonLd";
import { AI_AUTOMATION_PARENT } from "../../../../../lib/services/aiAutomationSubPages";
import {
  POWER_BI,
  POWER_BI_PATH,
  POWER_BI_FAQS,
} from "../../../../../lib/services/powerBiAnalyticsPage";
import PowerBiAnalyticsHomeClient from "./PowerBiAnalyticsHomeClient";

export const metadata = buildPageMetadata({
  title: `${POWER_BI.title} | ${AI_AUTOMATION_PARENT.title}`,
  description: POWER_BI.description,
  path: POWER_BI_PATH,
});

export default function PowerBiAnalyticsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: POWER_BI.title,
            description: POWER_BI.description,
            url: POWER_BI_PATH,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Services", url: "/#solutions" },
            { name: AI_AUTOMATION_PARENT.title, url: AI_AUTOMATION_PARENT.path },
            { name: POWER_BI.title, url: POWER_BI_PATH },
          ]),
          serviceJsonLd({
            name: POWER_BI.title,
            description: POWER_BI.description,
            url: POWER_BI_PATH,
            serviceType: POWER_BI.serviceType,
          }),
          faqPageJsonLd(POWER_BI_FAQS),
        ].filter(Boolean)}
      />
      <PowerBiAnalyticsHomeClient />
    </>
  );
}