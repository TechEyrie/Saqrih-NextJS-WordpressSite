import { buildPageMetadata } from "../../../lib/siteMetadata";

/** Legacy / QA shells — redirected in next.config; keep noindex if discovered */
export const metadata = buildPageMetadata({
  title: "Saqrih",
  description: "Saqrih WordPress agency.",
  path: "/",
  robots: { index: false, follow: false },
});

export default function Layout({ children }) {
  return children;
}
