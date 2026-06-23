import { getIndustryMetadata } from "../../../../lib/industries/industryContent";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const metadata = getIndustryMetadata(slug);
  if (!metadata) return {};
  return metadata;
}

export default function IndustryLayout({ children }) {
  return children;
}
