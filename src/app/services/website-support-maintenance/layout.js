import JsonLd from "../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  faqPageJsonLd,
} from "../../../../lib/jsonLd";
import { buildPageMetadata } from "../../../../lib/siteMetadata";
import {
  WEBSITE_SUPPORT_MAINTENANCE,
  WEBSITE_SUPPORT_MAINTENANCE_FAQS,
} from "../../../../lib/services/websiteSupportMaintenance";

export const metadata = buildPageMetadata({
  title: WEBSITE_SUPPORT_MAINTENANCE.title,
  description: WEBSITE_SUPPORT_MAINTENANCE.description,
  path: WEBSITE_SUPPORT_MAINTENANCE.path,
});

export default function WebsiteSupportMaintenanceLayout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Services", url: "/#solutions" },
            {
              name: WEBSITE_SUPPORT_MAINTENANCE.title,
              url: WEBSITE_SUPPORT_MAINTENANCE.path,
            },
          ]),
          serviceJsonLd({
            name: WEBSITE_SUPPORT_MAINTENANCE.title,
            description: WEBSITE_SUPPORT_MAINTENANCE.description,
            url: WEBSITE_SUPPORT_MAINTENANCE.path,
            serviceType: WEBSITE_SUPPORT_MAINTENANCE.serviceType,
          }),
          faqPageJsonLd(WEBSITE_SUPPORT_MAINTENANCE_FAQS),
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
