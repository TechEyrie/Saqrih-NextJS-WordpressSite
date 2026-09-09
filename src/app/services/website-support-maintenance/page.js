import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from "../../../../lib/jsonLd";
import { WSM_DEV_HOME, WSM_DEV_HOME_FAQS } from "../../../../lib/services/websiteSupportMaintenanceHome";
import WebsiteSupportMaintenanceHomeClient from "./WebsiteSupportMaintenanceHomeClient";

export const metadata = buildPageMetadata({
  title: WSM_DEV_HOME.title,
  description: WSM_DEV_HOME.description,
  path: WSM_DEV_HOME.path,
});

export default function WebsiteSupportMaintenanceHomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: WSM_DEV_HOME.title,
            description: WSM_DEV_HOME.description,
            url: WSM_DEV_HOME.path,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Services", url: "/#solutions" },
            { name: WSM_DEV_HOME.title, url: WSM_DEV_HOME.path },
          ]),
          serviceJsonLd({
            name: WSM_DEV_HOME.title,
            description: WSM_DEV_HOME.description,
            url: WSM_DEV_HOME.path,
            serviceType: "Website support and maintenance",
          }),
          faqPageJsonLd(WSM_DEV_HOME_FAQS),
        ].filter(Boolean)}
      />
      <WebsiteSupportMaintenanceHomeClient />
    </>
  );
}
