import JsonLd from "../../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
} from "../../../../../lib/jsonLd";
import { buildPageMetadata } from "../../../../../lib/siteMetadata";
import {
  getSaasDevelopmentSubService,
  SAAS_DEVELOPMENT,
} from "../../../../../lib/services/saasDevelopment";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const sub = getSaasDevelopmentSubService(slug);
  if (!sub) return { title: "Service", robots: { index: false } };
  return buildPageMetadata({
    title: sub.title,
    description: sub.description,
    path: `${SAAS_DEVELOPMENT.path}/${sub.slug}`,
  });
}

export default async function SaasDevelopmentSubLayout({ children, params }) {
  const { slug } = await params;
  const sub = getSaasDevelopmentSubService(slug);
  if (!sub) return children;

  const path = `${SAAS_DEVELOPMENT.path}/${sub.slug}`;

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
            { name: sub.title, url: path },
          ]),
          serviceJsonLd({
            name: sub.title,
            description: sub.description,
            url: path,
            serviceType: SAAS_DEVELOPMENT.serviceType,
          }),
        ]}
      />
      {children}
    </>
  );
}
