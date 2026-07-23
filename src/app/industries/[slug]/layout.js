import { getIndustryMetadata, getIndustryContent } from "../../../../lib/industries/industryContent";
import JsonLd from "../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
} from "../../../../lib/jsonLd";
import { buildPageMetadata } from "../../../../lib/siteMetadata";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const metadata = getIndustryMetadata(slug);
  if (!metadata) return {};
  return buildPageMetadata({
    title: metadata.title,
    description: metadata.description,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryLayout({ children, params }) {
  const { slug } = await params;
  const content = getIndustryContent(slug);
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
            { name: "Industries", url: "/industries" },
            { name: content.name, url: `/industries/${slug}` },
          ]),
          serviceJsonLd({
            name: `${content.name} WordPress Website Design`,
            description: content.metadata.description,
            url: `/industries/${slug}`,
            serviceType: `${content.name} web design`,
          }),
          faqPageJsonLd(faqs),
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
