import { buildPageMetadata } from "../../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Insights from Saqrih on websites, apps, SaaS, e-commerce, CMS, WordPress, and digital product strategy.",
  path: "/blog",
});

export default function Layout({ children }) {
  return children;
}
