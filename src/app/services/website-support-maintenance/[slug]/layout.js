import JsonLd from "../../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
} from "../../../../../lib/jsonLd";
import { buildPageMetadata } from "../../../../../lib/siteMetadata";
import {
  getWebsiteSupportMaintenanceSubService,
  WEBSITE_SUPPORT_MAINTENANCE,
} from "../../../../../lib/services/websiteSupportMaintenance";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const sub = getWebsiteSupportMaintenanceSubService(slug);
  if (!sub) return { title: "Service", robots: { index: false } };
  return buildPageMetadata({
    title: sub.title,
    description: sub.description,
    path: `${WEBSITE_SUPPORT_MAINTENANCE.path}/${sub.slug}`,
  });
}

export default async function WebsiteSupportMaintenanceSubLayout({
  children,
  params,
}) {
  const { slug } = await params;
  const sub = getWebsiteSupportMaintenanceSubService(slug);
  if (!sub) return children;

  const path = `${WEBSITE_SUPPORT_MAINTENANCE.path}/${sub.slug}`;

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
            { name: sub.title, url: path },
          ]),
          serviceJsonLd({
            name: sub.title,
            description: sub.description,
            url: path,
            serviceType: WEBSITE_SUPPORT_MAINTENANCE.serviceType,
          }),
        ]}
      />
      {children}
    </>
  );
}
