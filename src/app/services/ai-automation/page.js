import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from "../../../../lib/jsonLd";
import { AI_AUTOMATION_HOME, AI_AUTOMATION_HOME_FAQS } from "../../../../lib/services/aiAutomationHome";
import AiAutomationHomeClient from "./AiAutomationHomeClient";

export const metadata = buildPageMetadata({
  title: AI_AUTOMATION_HOME.title,
  description: AI_AUTOMATION_HOME.description,
  path: AI_AUTOMATION_HOME.path,
});

export default function AiAutomationHomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: AI_AUTOMATION_HOME.title,
            description: AI_AUTOMATION_HOME.description,
            url: AI_AUTOMATION_HOME.path,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Services", url: "/#solutions" },
            { name: AI_AUTOMATION_HOME.title, url: AI_AUTOMATION_HOME.path },
          ]),
          serviceJsonLd({
            name: AI_AUTOMATION_HOME.title,
            description: AI_AUTOMATION_HOME.description,
            url: AI_AUTOMATION_HOME.path,
            serviceType: "AI automation",
          }),
          faqPageJsonLd(AI_AUTOMATION_HOME_FAQS),
        ].filter(Boolean)}
      />
      <AiAutomationHomeClient />
    </>
  );
}