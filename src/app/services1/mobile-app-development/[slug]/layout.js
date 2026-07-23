import JsonLd from "../../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
} from "../../../../../lib/jsonLd";
import { buildPageMetadata } from "../../../../../lib/siteMetadata";
import {
  getMobileAppSubService,
  MOBILE_APP_DEVELOPMENT,
} from "../../../../../lib/services/mobileAppDevelopment";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const sub = getMobileAppSubService(slug);
  if (!sub) return { title: "Service", robots: { index: false } };
  return buildPageMetadata({
    title: sub.title,
    description: sub.description,
    path: `${MOBILE_APP_DEVELOPMENT.path}/${sub.slug}`,
  });
}

export default async function MobileAppSubLayout({ children, params }) {
  const { slug } = await params;
  const sub = getMobileAppSubService(slug);
  if (!sub) return children;

  const path = `${MOBILE_APP_DEVELOPMENT.path}/${sub.slug}`;

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
            { name: sub.title, url: path },
          ]),
          serviceJsonLd({
            name: sub.title,
            description: sub.description,
            url: path,
            serviceType: MOBILE_APP_DEVELOPMENT.serviceType,
          }),
        ]}
      />
      {children}
    </>
  );
}
