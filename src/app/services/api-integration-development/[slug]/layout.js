import JsonLd from "../../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
} from "../../../../../lib/jsonLd";
import { buildPageMetadata } from "../../../../../lib/siteMetadata";
import {
  getApiIntegrationSubService,
  API_INTEGRATION_DEVELOPMENT,
} from "../../../../../lib/services/apiIntegrationDevelopment";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const sub = getApiIntegrationSubService(slug);
  if (!sub) return { title: "Service", robots: { index: false } };
  return buildPageMetadata({
    title: sub.title,
    description: sub.description,
    path: `${API_INTEGRATION_DEVELOPMENT.path}/${sub.slug}`,
  });
}

export default async function ApiIntegrationSubLayout({ children, params }) {
  const { slug } = await params;
  const sub = getApiIntegrationSubService(slug);
  if (!sub) return children;

  const path = `${API_INTEGRATION_DEVELOPMENT.path}/${sub.slug}`;

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
            { name: sub.title, url: path },
          ]),
          serviceJsonLd({
            name: sub.title,
            description: sub.description,
            url: path,
            serviceType: API_INTEGRATION_DEVELOPMENT.serviceType,
          }),
        ]}
      />
      {children}
    </>
  );
}
