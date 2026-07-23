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
  MOBILE_DEV_PARENT,
  getMobileDevSubPage,
  getAllMobileDevSubPageSlugs,
} from "../../../../../lib/services/mobileAppDevelopmentSubPages";
import MobileDevSubServiceHomeClient from "./MobileDevSubServiceHomeClient";

export function generateStaticParams() {
  return getAllMobileDevSubPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getMobileDevSubPage(slug);
  if (!page) return {};
  return buildPageMetadata({
    title: `${page.title} | ${MOBILE_DEV_PARENT.title}`,
    description: page.description,
    path: `${MOBILE_DEV_PARENT.path}/${page.slug}`,
  });
}

export default async function MobileDevSubServicePage({ params }) {
  const { slug } = await params;
  const page = getMobileDevSubPage(slug);
  if (!page) notFound();

  const path = `${MOBILE_DEV_PARENT.path}/${page.slug}`;

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
            { name: MOBILE_DEV_PARENT.title, url: MOBILE_DEV_PARENT.path },
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
      <MobileDevSubServiceHomeClient page={page} />
    </>
  );
}
