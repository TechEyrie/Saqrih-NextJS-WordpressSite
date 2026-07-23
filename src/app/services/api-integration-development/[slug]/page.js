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
  API_DEV_PARENT,
  getApiDevSubPage,
  getAllApiDevSubPageSlugs,
} from "../../../../../lib/services/apiIntegrationDevelopmentSubPages";
import ApiDevSubServiceHomeClient from "./ApiDevSubServiceHomeClient";

export function generateStaticParams() {
  return getAllApiDevSubPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getApiDevSubPage(slug);
  if (!page) return {};
  return buildPageMetadata({
    title: `${page.title} | ${API_DEV_PARENT.title}`,
    description: page.description,
    path: `${API_DEV_PARENT.path}/${page.slug}`,
  });
}

export default async function ApiDevSubServicePage({ params }) {
  const { slug } = await params;
  const page = getApiDevSubPage(slug);
  if (!page) notFound();

  const path = `${API_DEV_PARENT.path}/${page.slug}`;

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
            { name: API_DEV_PARENT.title, url: API_DEV_PARENT.path },
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
      <ApiDevSubServiceHomeClient page={page} />
    </>
  );
}
