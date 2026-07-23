import JsonLd from "../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  faqPageJsonLd,
} from "../../../../lib/jsonLd";
import { buildPageMetadata } from "../../../../lib/siteMetadata";
import {
  CMS_HEADLESS_DEVELOPMENT,
  CMS_HEADLESS_FAQS,
} from "../../../../lib/services/cmsHeadlessDevelopment";

export const metadata = buildPageMetadata({
  title: CMS_HEADLESS_DEVELOPMENT.title,
  description: CMS_HEADLESS_DEVELOPMENT.description,
  path: CMS_HEADLESS_DEVELOPMENT.path,
});

export default function CmsHeadlessDevelopmentLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Services", url: "/#solutions" },
            {
              name: CMS_HEADLESS_DEVELOPMENT.title,
              url: CMS_HEADLESS_DEVELOPMENT.path,
            },
          ]),
          serviceJsonLd({
            name: CMS_HEADLESS_DEVELOPMENT.title,
            description: CMS_HEADLESS_DEVELOPMENT.description,
            url: CMS_HEADLESS_DEVELOPMENT.path,
            serviceType: CMS_HEADLESS_DEVELOPMENT.serviceType,
          }),
          faqPageJsonLd(CMS_HEADLESS_FAQS),
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
