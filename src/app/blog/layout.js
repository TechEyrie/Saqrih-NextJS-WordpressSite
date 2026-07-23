import { buildPageMetadata } from "../../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "Web Design Blog",
  description: "WordPress design, development, SEO, and performance articles from Saqrih.",
  path: "/blog",
});

export default function Layout({ children }) {
  return children;
}
