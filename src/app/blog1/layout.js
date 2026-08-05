import { buildPageMetadata } from "../../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "Web Design Blog (Archive)",
  description:
    "Archived WordPress design, development, SEO, and performance articles from Saqrih.",
  path: "/blog1",
});

export default function Layout({ children }) {
  return children;
}
