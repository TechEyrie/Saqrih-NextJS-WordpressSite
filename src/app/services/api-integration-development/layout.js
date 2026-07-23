import JsonLd from "../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  faqPageJsonLd,
} from "../../../../lib/jsonLd";
import { buildPageMetadata } from "../../../../lib/siteMetadata";
import {
  API_INTEGRATION_DEVELOPMENT,
  API_INTEGRATION_FAQS,
} from "../../../../lib/services/apiIntegrationDevelopment";

export const metadata = buildPageMetadata({
  title: API_INTEGRATION_DEVELOPMENT.title,
  description: API_INTEGRATION_DEVELOPMENT.description,
  path: API_INTEGRATION_DEVELOPMENT.path,
});

export default function ApiIntegrationDevelopmentLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Services", url: "/#solutions" },
            {
              name: API_INTEGRATION_DEVELOPMENT.title,
              url: API_INTEGRATION_DEVELOPMENT.path,
            },
          ]),
          serviceJsonLd({
            name: API_INTEGRATION_DEVELOPMENT.title,
            description: API_INTEGRATION_DEVELOPMENT.description,
            url: API_INTEGRATION_DEVELOPMENT.path,
            serviceType: API_INTEGRATION_DEVELOPMENT.serviceType,
          }),
          faqPageJsonLd(API_INTEGRATION_FAQS),
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
