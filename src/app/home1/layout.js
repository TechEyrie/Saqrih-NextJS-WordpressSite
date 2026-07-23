import { buildPageMetadata } from "../../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "Saqrih",
  description: "Saqrih WordPress agency.",
  path: "/",
  robots: { index: false, follow: false },
});

export default function Layout({ children }) {
  return children;
}
