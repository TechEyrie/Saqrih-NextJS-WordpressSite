import JsonLd from "../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  faqPageJsonLd,
} from "../../../../lib/jsonLd";
import { buildPageMetadata } from "../../../../lib/siteMetadata";
import {
  WEBSITE_DEVELOPMENT,
  WEBSITE_DEVELOPMENT_FAQS,
} from "../../../../lib/services/websiteDevelopment";

export const metadata = buildPageMetadata({
  title: WEBSITE_DEVELOPMENT.title,
  description: WEBSITE_DEVELOPMENT.description,
  path: WEBSITE_DEVELOPMENT.path,
});

export default function WebsiteDevelopmentLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Services", url: "/#solutions" },
            {
              name: WEBSITE_DEVELOPMENT.title,
              url: WEBSITE_DEVELOPMENT.path,
            },
          ]),
          serviceJsonLd({
            name: WEBSITE_DEVELOPMENT.title,
            description: WEBSITE_DEVELOPMENT.description,
            url: WEBSITE_DEVELOPMENT.path,
            serviceType: WEBSITE_DEVELOPMENT.serviceType,
          }),
          faqPageJsonLd(WEBSITE_DEVELOPMENT_FAQS),
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
