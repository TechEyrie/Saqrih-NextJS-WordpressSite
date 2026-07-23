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
  WEBSITE_DEV_PARENT,
  getWebsiteDevSubPage,
  getAllWebsiteDevSubPageSlugs,
} from "../../../../../lib/services/websiteDevelopmentSubPages";
import WebsiteDevSubServiceHomeClient from "./WebsiteDevSubServiceHomeClient";

export function generateStaticParams() {
  return getAllWebsiteDevSubPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getWebsiteDevSubPage(slug);
  if (!page) return {};
  return buildPageMetadata({
    title: `${page.title} | ${WEBSITE_DEV_PARENT.title}`,
    description: page.description,
    path: `${WEBSITE_DEV_PARENT.path}/${page.slug}`,
  });
}

export default async function WebsiteDevSubServicePage({ params }) {
  const { slug } = await params;
  const page = getWebsiteDevSubPage(slug);
  if (!page) notFound();

  const path = `${WEBSITE_DEV_PARENT.path}/${page.slug}`;

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
            { name: WEBSITE_DEV_PARENT.title, url: WEBSITE_DEV_PARENT.path },
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
      <WebsiteDevSubServiceHomeClient page={page} />
    </>
  );
}
