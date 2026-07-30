import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from "../../../../lib/jsonLd";
import { WEBSITE_DEV_HOME } from "../../../../lib/services/websiteDevelopmentHome";
import WebsiteDevelopmentHomeClient from "./WebsiteDevelopmentHomeClient";

export const metadata = buildPageMetadata({
  title: WEBSITE_DEV_HOME.title,
  description: WEBSITE_DEV_HOME.description,
  path: WEBSITE_DEV_HOME.path,
});

export default function WebsiteDevelopmentHomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: WEBSITE_DEV_HOME.title,
            description: WEBSITE_DEV_HOME.description,
            url: WEBSITE_DEV_HOME.path,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Services", url: "/#solutions" },
            { name: WEBSITE_DEV_HOME.title, url: WEBSITE_DEV_HOME.path },
          ]),
          serviceJsonLd({
            name: WEBSITE_DEV_HOME.title,
            description: WEBSITE_DEV_HOME.description,
            url: WEBSITE_DEV_HOME.path,
            serviceType: "Website design",
          }),
        ].filter(Boolean)}
      />
      <WebsiteDevelopmentHomeClient />
    </>
  );
}
