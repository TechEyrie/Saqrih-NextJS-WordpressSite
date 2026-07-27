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
  WORDPRESS_DEV_PARENT,
  getWordpressDevSubPage,
  getAllWordpressDevSubPageSlugs,
} from "../../../../../lib/services/wordpressDevelopmentSubPages";
import {
  WP_HOME_TECH_CATEGORIES,
  WP_HOME_TECH_STATS,
  WP_HOME_TECH_CAPABILITIES,
  WP_HOME_TECH_MARQUEE,
} from "../../../../../lib/services/wordpressDevelopmentTech";
import WordpressDevSubServiceHomeClient from "./WordpressDevSubServiceHomeClient";

export function generateStaticParams() {
  return getAllWordpressDevSubPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getWordpressDevSubPage(slug);
  if (!page) return {};
  return buildPageMetadata({
    title: `${page.title} | ${WORDPRESS_DEV_PARENT.title}`,
    description: page.description,
    path: `${WORDPRESS_DEV_PARENT.path}/${page.slug}`,
  });
}

export default async function WordpressDevSubServicePage({ params }) {
  const { slug } = await params;
  const page = getWordpressDevSubPage(slug);
  if (!page) notFound();

  const path = `${WORDPRESS_DEV_PARENT.path}/${page.slug}`;

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
            { name: WORDPRESS_DEV_PARENT.title, url: WORDPRESS_DEV_PARENT.path },
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
      <WordpressDevSubServiceHomeClient
        page={page}
        techCategories={WP_HOME_TECH_CATEGORIES}
        techStats={WP_HOME_TECH_STATS}
        techCapabilities={WP_HOME_TECH_CAPABILITIES}
        techMarquee={WP_HOME_TECH_MARQUEE}
      />
    </>
  );
}
