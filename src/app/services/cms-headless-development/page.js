import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from "../../../../lib/jsonLd";
import { CMS_DEV_HOME } from "../../../../lib/services/cmsHeadlessDevelopmentHome";
import CmsHeadlessDevelopmentHomeClient from "./CmsHeadlessDevelopmentHomeClient";

export const metadata = buildPageMetadata({
  title: CMS_DEV_HOME.title,
  description: CMS_DEV_HOME.description,
  path: CMS_DEV_HOME.path,
});

export default function CmsHeadlessDevelopmentHomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: CMS_DEV_HOME.title,
            description: CMS_DEV_HOME.description,
            url: CMS_DEV_HOME.path,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Services", url: "/#solutions" },
            { name: CMS_DEV_HOME.title, url: CMS_DEV_HOME.path },
          ]),
          serviceJsonLd({
            name: CMS_DEV_HOME.title,
            description: CMS_DEV_HOME.description,
            url: CMS_DEV_HOME.path,
            serviceType: "CMS and headless development",
          }),
        ].filter(Boolean)}
      />
      <CmsHeadlessDevelopmentHomeClient />
    </>
  );
}
