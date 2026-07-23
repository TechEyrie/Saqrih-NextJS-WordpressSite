import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from "../../../../lib/jsonLd";
import { ECOM_DEV_HOME } from "../../../../lib/services/ecommerceDevelopmentHome";
import EcommerceDevelopmentHomeClient from "./EcommerceDevelopmentHomeClient";

export const metadata = buildPageMetadata({
  title: ECOM_DEV_HOME.title,
  description: ECOM_DEV_HOME.description,
  path: ECOM_DEV_HOME.path,
});

export default function EcommerceDevelopmentHomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: ECOM_DEV_HOME.title,
            description: ECOM_DEV_HOME.description,
            url: ECOM_DEV_HOME.path,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Services", url: "/#solutions" },
            { name: ECOM_DEV_HOME.title, url: ECOM_DEV_HOME.path },
          ]),
          serviceJsonLd({
            name: ECOM_DEV_HOME.title,
            description: ECOM_DEV_HOME.description,
            url: ECOM_DEV_HOME.path,
            serviceType: "E-commerce development",
          }),
        ].filter(Boolean)}
      />
      <EcommerceDevelopmentHomeClient />
    </>
  );
}
