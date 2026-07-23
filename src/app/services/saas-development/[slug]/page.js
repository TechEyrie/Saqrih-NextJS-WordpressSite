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
  SAAS_DEV_PARENT,
  getSaasDevSubPage,
  getAllSaasDevSubPageSlugs,
} from "../../../../../lib/services/saasDevelopmentSubPages";
import SaasDevSubServiceHomeClient from "./SaasDevSubServiceHomeClient";

export function generateStaticParams() {
  return getAllSaasDevSubPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getSaasDevSubPage(slug);
  if (!page) return {};
  return buildPageMetadata({
    title: `${page.title} | ${SAAS_DEV_PARENT.title}`,
    description: page.description,
    path: `${SAAS_DEV_PARENT.path}/${page.slug}`,
  });
}

export default async function SaasDevSubServicePage({ params }) {
  const { slug } = await params;
  const page = getSaasDevSubPage(slug);
  if (!page) notFound();

  const path = `${SAAS_DEV_PARENT.path}/${page.slug}`;

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
            { name: SAAS_DEV_PARENT.title, url: SAAS_DEV_PARENT.path },
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
      <SaasDevSubServiceHomeClient page={page} />
    </>
  );
}
