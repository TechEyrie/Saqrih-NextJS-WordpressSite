import {
  US_STATES,
  stateSlug,
} from "../../../../components/icomat1-market/marketStates";
import { buildPageMetadata } from "../../../../lib/siteMetadata";

function stateTitle(slug) {
  const name =
    US_STATES.find((n) => stateSlug(n) === slug) ??
    slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return `WordPress Services in ${name}`;
}

export async function generateMetadata({ params }) {
  const { state: slug } = await params;
  return buildPageMetadata({
    title: stateTitle(slug),
    description: `WordPress design, development, and support for businesses in ${stateTitle(slug).replace("WordPress Services in ", "")}.`,
  });
}

export default function MarketStateLayout({ children }) {
  return children;
}
