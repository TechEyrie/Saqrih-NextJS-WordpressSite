import JsonLd from "../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  faqPageJsonLd,
} from "../../../../lib/jsonLd";
import { buildPageMetadata } from "../../../../lib/siteMetadata";
import {
  MOBILE_APP_DEVELOPMENT,
  MOBILE_APP_FAQS,
} from "../../../../lib/services/mobileAppDevelopment";

export const metadata = buildPageMetadata({
  title: MOBILE_APP_DEVELOPMENT.title,
  description: MOBILE_APP_DEVELOPMENT.description,
  path: MOBILE_APP_DEVELOPMENT.path,
});

export default function MobileAppDevelopmentLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Services", url: "/#solutions" },
            {
              name: MOBILE_APP_DEVELOPMENT.title,
              url: MOBILE_APP_DEVELOPMENT.path,
            },
          ]),
          serviceJsonLd({
            name: MOBILE_APP_DEVELOPMENT.title,
            description: MOBILE_APP_DEVELOPMENT.description,
            url: MOBILE_APP_DEVELOPMENT.path,
            serviceType: MOBILE_APP_DEVELOPMENT.serviceType,
          }),
          faqPageJsonLd(MOBILE_APP_FAQS),
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
