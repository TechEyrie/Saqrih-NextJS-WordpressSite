import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from "../../../../lib/jsonLd";
import { WEB_APP_DEV_HOME, WEB_APP_DEV_HOME_FAQS } from "../../../../lib/services/webApplicationDevelopmentHome";
import WebApplicationDevelopmentHomeClient from "./WebApplicationDevelopmentHomeClient";

export const metadata = buildPageMetadata({
  title: WEB_APP_DEV_HOME.title,
  description: WEB_APP_DEV_HOME.description,
  path: WEB_APP_DEV_HOME.path,
});

export default function WebApplicationDevelopmentHomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: WEB_APP_DEV_HOME.title,
            description: WEB_APP_DEV_HOME.description,
            url: WEB_APP_DEV_HOME.path,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Services", url: "/#solutions" },
            { name: WEB_APP_DEV_HOME.title, url: WEB_APP_DEV_HOME.path },
          ]),
          serviceJsonLd({
            name: WEB_APP_DEV_HOME.title,
            description: WEB_APP_DEV_HOME.description,
            url: WEB_APP_DEV_HOME.path,
            serviceType: "Web application development",
          }),
          faqPageJsonLd(WEB_APP_DEV_HOME_FAQS),
        ].filter(Boolean)}
      />
      <WebApplicationDevelopmentHomeClient />
    </>
  );
}
