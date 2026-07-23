import { notFound } from "next/navigation";
import { buildPageMetadata } from "../../../../../lib/siteMetadata";
import JsonLd from "../../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from "../../../../../lib/jsonLd";
import {
  WSM_DEV_PARENT,
  getWsmDevSubPage,
  getAllWsmDevSubPageSlugs,
} from "../../../../../lib/services/websiteSupportMaintenanceSubPages";
import WsmDevSubServiceHomeClient from "./WsmDevSubServiceHomeClient";

export function generateStaticParams() {
  return getAllWsmDevSubPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getWsmDevSubPage(slug);
  if (!page) return {};
  return buildPageMetadata({
    title: `${page.title} | ${WSM_DEV_PARENT.title}`,
    description: page.description,
    path: `${WSM_DEV_PARENT.path}/${page.slug}`,
  });
}

export default async function WsmDevSubServicePage({ params }) {
  const { slug } = await params;
  const page = getWsmDevSubPage(slug);
  if (!page) notFound();

  const path = `${WSM_DEV_PARENT.path}/${page.slug}`;

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: page.title,
            description: page.description,
            url: path,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Services", url: "/#solutions" },
            { name: WSM_DEV_PARENT.title, url: WSM_DEV_PARENT.path },
            { name: page.title, url: path },
          ]),
          serviceJsonLd({
            name: page.title,
            description: page.description,
            url: path,
            serviceType: page.serviceType,
          }),
          faqPageJsonLd(page.faqs),
        ].filter(Boolean)}
      />
      <WsmDevSubServiceHomeClient page={page} />
    </>
  );
}
