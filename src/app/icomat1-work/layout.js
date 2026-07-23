import { buildPageMetadata } from "../../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "Our Work",
  description: "Saqrih portfolio.",
  path: "/work",
  robots: { index: false, follow: false },
});

export default function Layout({ children }) {
  return children;
}
