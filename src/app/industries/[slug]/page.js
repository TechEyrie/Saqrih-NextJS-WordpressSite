import { notFound } from "next/navigation";
import IndustryPage from "../../../../components/industries/IndustryPage";
import {
  INDUSTRY_SLUGS,
  industryExists,
} from "../../../../lib/industries/industryContent";

export function generateStaticParams() {
  return INDUSTRY_SLUGS.map((slug) => ({ slug }));
}

export default async function IndustryRoutePage({ params }) {
  const { slug } = await params;
  if (!industryExists(slug)) notFound();
  return <IndustryPage industrySlug={slug} />;
}
