import JsonLd from "../../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
} from "../../../../../lib/jsonLd";
import { buildPageMetadata } from "../../../../../lib/siteMetadata";
import {
  getCmsHeadlessSubService,
  CMS_HEADLESS_DEVELOPMENT,
} from "../../../../../lib/services/cmsHeadlessDevelopment";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const sub = getCmsHeadlessSubService(slug);
  if (!sub) return { title: "Service", robots: { index: false } };
  return buildPageMetadata({
    title: sub.title,
    description: sub.description,
    path: `${CMS_HEADLESS_DEVELOPMENT.path}/${sub.slug}`,
  });
}

export default async function CmsHeadlessSubLayout({ children, params }) {
  const { slug } = await params;
  const sub = getCmsHeadlessSubService(slug);
  if (!sub) return children;

  const path = `${CMS_HEADLESS_DEVELOPMENT.path}/${sub.slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Services", url: "/#solutions" },
            {
              name: CMS_HEADLESS_DEVELOPMENT.title,
              url: CMS_HEADLESS_DEVELOPMENT.path,
            },
            { name: sub.title, url: path },
          ]),
          serviceJsonLd({
            name: sub.title,
            description: sub.description,
            url: path,
            serviceType: CMS_HEADLESS_DEVELOPMENT.serviceType,
          }),
        ]}
      />
      {children}
    </>
  );
}
