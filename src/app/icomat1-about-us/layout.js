import { buildPageMetadata } from "../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "About Saqrih",
  description: "About Saqrih.",
  path: "/about-us",
  robots: { index: false, follow: false },
});

export default function Layout({ children }) {
  return children;
}
