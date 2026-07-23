import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from "../../../../lib/jsonLd";
import { MOBILE_DEV_HOME } from "../../../../lib/services/mobileAppDevelopmentHome";
import MobileAppDevelopmentHomeClient from "./MobileAppDevelopmentHomeClient";

export const metadata = buildPageMetadata({
  title: MOBILE_DEV_HOME.title,
  description: MOBILE_DEV_HOME.description,
  path: MOBILE_DEV_HOME.path,
});

export default function MobileAppDevelopmentHomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: MOBILE_DEV_HOME.title,
            description: MOBILE_DEV_HOME.description,
            url: MOBILE_DEV_HOME.path,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Services", url: "/#solutions" },
            { name: MOBILE_DEV_HOME.title, url: MOBILE_DEV_HOME.path },
          ]),
          serviceJsonLd({
            name: MOBILE_DEV_HOME.title,
            description: MOBILE_DEV_HOME.description,
            url: MOBILE_DEV_HOME.path,
            serviceType: "Mobile app development",
          }),
        ].filter(Boolean)}
      />
      <MobileAppDevelopmentHomeClient />
    </>
  );
}
