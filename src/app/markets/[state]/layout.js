import {
  US_STATES,
  stateSlug,
} from "../../../../components/icomat1-market/marketStates";
import { buildPageMetadata } from "../../../../lib/siteMetadata";

function stateName(slug) {
  return (
    US_STATES.find((n) => stateSlug(n) === slug) ??
    slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

export async function generateMetadata({ params }) {
  const { state: slug } = await params;
  const name = stateName(slug);
  return buildPageMetadata({
    title: `WordPress Services in ${name}`,
    description: `WordPress design, development, and support for businesses in ${name}.`,
    path: `/markets/${slug}`,
  });
}

export default function MarketStateLayout({ children }) {
  return children;
}
