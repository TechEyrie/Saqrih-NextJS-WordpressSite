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
  WEB_APP_DEV_PARENT,
  getWebAppDevSubPage,
  getAllWebAppDevSubPageSlugs,
} from "../../../../../lib/services/webApplicationDevelopmentSubPages";
import WebAppDevSubServiceHomeClient from "./WebAppDevSubServiceHomeClient";

export function generateStaticParams() {
  return getAllWebAppDevSubPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getWebAppDevSubPage(slug);
  if (!page) return {};
  return buildPageMetadata({
    title: `${page.title} | ${WEB_APP_DEV_PARENT.title}`,
    description: page.description,
    path: `${WEB_APP_DEV_PARENT.path}/${page.slug}`,
  });
}

export default async function WebAppDevSubServicePage({ params }) {
  const { slug } = await params;
  const page = getWebAppDevSubPage(slug);
  if (!page) notFound();

  const path = `${WEB_APP_DEV_PARENT.path}/${page.slug}`;

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
            { name: WEB_APP_DEV_PARENT.title, url: WEB_APP_DEV_PARENT.path },
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
      <WebAppDevSubServiceHomeClient page={page} />
    </>
  );
}
