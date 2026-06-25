import { cityLineSlug } from "../../../../../components/icomat1-market/citySlug";
import { getLocalCityLines } from "../../../../../components/icomat1-market/marketsData";
import { buildPageMetadata } from "../../../../../lib/siteMetadata";

const cities = getLocalCityLines();

function cityTitle(slug) {
  return (
    cities.find((line) => cityLineSlug(line) === slug) ??
    slug.replace(/-/g, " ")
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const place = cityTitle(slug);
  return buildPageMetadata({
    title: `WordPress Services in ${place}`,
    description: `WordPress web design and development for businesses in ${place} and surrounding areas.`,
  });
}

export default function MarketLocalLayout({ children }) {
  return children;
}
