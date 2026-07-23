import { getMarketLocationMetadata, getMarketLocationContent } from "../../../../lib/locations/marketLocationContent";
import JsonLd from "../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
} from "../../../../lib/jsonLd";
import { buildPageMetadata } from "../../../../lib/siteMetadata";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const metadata = getMarketLocationMetadata(slug);
  if (!metadata) return {};
  return buildPageMetadata({
    title: metadata.title,
    description: metadata.description,
    path: `/locations/${slug}`,
  });
}

export default async function MarketLocationLayout({ children, params }) {
  const { slug } = await params;
  const content = getMarketLocationContent(slug);
  if (!content) return children;

  const faqs = (content.faq?.items || [])
    .filter((item) => item.question && item.answer)
    .map((item) => ({ question: item.question, answer: item.answer }));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Markets", url: "/markets" },
            { name: content.name, url: `/locations/${slug}` },
          ]),
          serviceJsonLd({
            name: `WordPress Web Design in ${content.placeLabel}`,
            description: content.metadata.description,
            url: `/locations/${slug}`,
            serviceType: "WordPress web design",
          }),
          faqPageJsonLd(faqs),
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
