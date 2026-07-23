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
  CMS_DEV_PARENT,
  getCmsDevSubPage,
  getAllCmsDevSubPageSlugs,
} from "../../../../../lib/services/cmsHeadlessDevelopmentSubPages";
import CmsDevSubServiceHomeClient from "./CmsDevSubServiceHomeClient";

export function generateStaticParams() {
  return getAllCmsDevSubPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getCmsDevSubPage(slug);
  if (!page) return {};
  return buildPageMetadata({
    title: `${page.title} | ${CMS_DEV_PARENT.title}`,
    description: page.description,
    path: `${CMS_DEV_PARENT.path}/${page.slug}`,
  });
}

export default async function CmsDevSubServicePage({ params }) {
  const { slug } = await params;
  const page = getCmsDevSubPage(slug);
  if (!page) notFound();

  const path = `${CMS_DEV_PARENT.path}/${page.slug}`;

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
            { name: CMS_DEV_PARENT.title, url: CMS_DEV_PARENT.path },
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
      <CmsDevSubServiceHomeClient page={page} />
    </>
  );
}
