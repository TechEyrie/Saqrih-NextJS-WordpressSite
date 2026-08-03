import JsonLd from "../../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
} from "../../../../../lib/jsonLd";
import { buildPageMetadata } from "../../../../../lib/siteMetadata";
import {
  getWebsiteDevSubService,
  WEBSITE_DEVELOPMENT,
} from "../../../../../lib/services/websiteDevelopment";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const sub = getWebsiteDevSubService(slug);
  if (!sub) return { title: "Service", robots: { index: false } };
  return buildPageMetadata({
    title: sub.title,
    description: sub.description,
    path: `${WEBSITE_DEVELOPMENT.path}/${sub.slug}`,
  });
}

export default async function WebsiteDevSubServiceLayout({ children, params }) {
  const { slug } = await params;
  const sub = getWebsiteDevSubService(slug);
  if (!sub) return children;

  const path = `${WEBSITE_DEVELOPMENT.path}/${sub.slug}`;

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
            { name: sub.title, url: path },
          ]),
          serviceJsonLd({
            name: sub.title,
            description: sub.description,
            url: path,
            serviceType: WEBSITE_DEVELOPMENT.serviceType,
          }),
        ]}
      />
      {children}
    </>
  );
}
