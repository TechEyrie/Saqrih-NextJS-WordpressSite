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
  ECOM_DEV_PARENT,
  getEcomDevSubPage,
  getAllEcomDevSubPageSlugs,
} from "../../../../../lib/services/ecommerceDevelopmentSubPages";
import EcomDevSubServiceHomeClient from "./EcomDevSubServiceHomeClient";

export function generateStaticParams() {
  return getAllEcomDevSubPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getEcomDevSubPage(slug);
  if (!page) return {};
  return buildPageMetadata({
    title: `${page.title} | ${ECOM_DEV_PARENT.title}`,
    description: page.description,
    path: `${ECOM_DEV_PARENT.path}/${page.slug}`,
  });
}

export default async function EcomDevSubServicePage({ params }) {
  const { slug } = await params;
  const page = getEcomDevSubPage(slug);
  if (!page) notFound();

  const path = `${ECOM_DEV_PARENT.path}/${page.slug}`;

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
            { name: ECOM_DEV_PARENT.title, url: ECOM_DEV_PARENT.path },
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
      <EcomDevSubServiceHomeClient page={page} />
    </>
  );
}
