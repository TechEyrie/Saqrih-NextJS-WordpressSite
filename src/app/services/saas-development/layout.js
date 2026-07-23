import JsonLd from "../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  faqPageJsonLd,
} from "../../../../lib/jsonLd";
import { buildPageMetadata } from "../../../../lib/siteMetadata";
import {
  SAAS_DEVELOPMENT,
  SAAS_DEVELOPMENT_FAQS,
} from "../../../../lib/services/saasDevelopment";

export const metadata = buildPageMetadata({
  title: SAAS_DEVELOPMENT.title,
  description: SAAS_DEVELOPMENT.description,
  path: SAAS_DEVELOPMENT.path,
});

export default function SaasDevelopmentLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Services", url: "/#solutions" },
            {
              name: SAAS_DEVELOPMENT.title,
              url: SAAS_DEVELOPMENT.path,
            },
          ]),
          serviceJsonLd({
            name: SAAS_DEVELOPMENT.title,
            description: SAAS_DEVELOPMENT.description,
            url: SAAS_DEVELOPMENT.path,
            serviceType: SAAS_DEVELOPMENT.serviceType,
          }),
          faqPageJsonLd(SAAS_DEVELOPMENT_FAQS),
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
