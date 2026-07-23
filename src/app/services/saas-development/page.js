import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from "../../../../lib/jsonLd";
import { SAAS_DEV_HOME } from "../../../../lib/services/saasDevelopmentHome";
import SaasDevelopmentHomeClient from "./SaasDevelopmentHomeClient";

export const metadata = buildPageMetadata({
  title: SAAS_DEV_HOME.title,
  description: SAAS_DEV_HOME.description,
  path: SAAS_DEV_HOME.path,
});

export default function SaasDevelopmentHomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: SAAS_DEV_HOME.title,
            description: SAAS_DEV_HOME.description,
            url: SAAS_DEV_HOME.path,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Services", url: "/#solutions" },
            { name: SAAS_DEV_HOME.title, url: SAAS_DEV_HOME.path },
          ]),
          serviceJsonLd({
            name: SAAS_DEV_HOME.title,
            description: SAAS_DEV_HOME.description,
            url: SAAS_DEV_HOME.path,
            serviceType: "SaaS development",
          }),
        ].filter(Boolean)}
      />
      <SaasDevelopmentHomeClient />
    </>
  );
}
