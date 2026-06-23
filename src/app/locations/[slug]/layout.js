import { getMarketLocationMetadata } from "../../../../lib/locations/marketLocationContent";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const metadata = getMarketLocationMetadata(slug);
  if (!metadata) return {};
  return metadata;
}

export default function MarketLocationLayout({ children }) {
  return children;
}
