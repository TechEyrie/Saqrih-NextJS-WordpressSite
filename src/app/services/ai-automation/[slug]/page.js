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
  AI_AUTOMATION_PARENT,
  getAiAutomationSubPage,
  getAllAiAutomationSubPageSlugs,
} from "../../../../../lib/services/aiAutomationSubPages";
import AiAutomationSubServiceHomeClient from "./AiAutomationSubServiceHomeClient";

export function generateStaticParams() {
  return getAllAiAutomationSubPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getAiAutomationSubPage(slug);
  if (!page) return {};
  return buildPageMetadata({
    title: `${page.title} | ${AI_AUTOMATION_PARENT.title}`,
    description: page.description,
    path: `${AI_AUTOMATION_PARENT.path}/${page.slug}`,
  });
}

export default async function AiAutomationSubServicePage({ params }) {
  const { slug } = await params;
  const page = getAiAutomationSubPage(slug);
  if (!page) notFound();

  const path = `${AI_AUTOMATION_PARENT.path}/${page.slug}`;

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
            { name: AI_AUTOMATION_PARENT.title, url: AI_AUTOMATION_PARENT.path },
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
      <AiAutomationSubServiceHomeClient page={page} />
    </>
  );
}