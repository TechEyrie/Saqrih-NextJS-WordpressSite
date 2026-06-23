import { notFound } from "next/navigation";
import QatarLocationPage from "../../../../components/locations/QatarLocationPage";
import {
  getAllMarketLocationSlugs,
  locationExists,
} from "../../../../lib/locations/locationRegistry";

export function generateStaticParams() {
  return getAllMarketLocationSlugs().map((slug) => ({ slug }));
}

export default async function MarketLocationRoutePage({ params }) {
  const { slug } = await params;
  if (!locationExists(slug)) notFound();
  return <QatarLocationPage locationSlug={slug} />;
}
