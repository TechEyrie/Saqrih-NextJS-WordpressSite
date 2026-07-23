import { buildPageMetadata } from "../../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "WordPress Services",
  description: "Full-service WordPress design, development, hosting, maintenance, and SEO from Saqrih.",
  path: "/wordpress",
});

export default function Layout({ children }) {
  return children;
}
