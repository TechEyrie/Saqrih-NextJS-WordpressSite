import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from "../../../../lib/jsonLd";
import { API_DEV_HOME } from "../../../../lib/services/apiIntegrationDevelopmentHome";
import ApiIntegrationDevelopmentHomeClient from "./ApiIntegrationDevelopmentHomeClient";

export const metadata = buildPageMetadata({
  title: API_DEV_HOME.title,
  description: API_DEV_HOME.description,
  path: API_DEV_HOME.path,
});

export default function ApiIntegrationDevelopmentHomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: API_DEV_HOME.title,
            description: API_DEV_HOME.description,
            url: API_DEV_HOME.path,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Services", url: "/#solutions" },
            { name: API_DEV_HOME.title, url: API_DEV_HOME.path },
          ]),
          serviceJsonLd({
            name: API_DEV_HOME.title,
            description: API_DEV_HOME.description,
            url: API_DEV_HOME.path,
            serviceType: "API and integration development",
          }),
        ].filter(Boolean)}
      />
      <ApiIntegrationDevelopmentHomeClient />
    </>
  );
}
