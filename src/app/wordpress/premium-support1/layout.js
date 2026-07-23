import { buildPageMetadata } from "../../../../lib/siteMetadata";

/** Legacy odd slug — redirected; keep noindex if ever discovered. */
export const metadata = buildPageMetadata({
  title: "Saqrih+ Premium Support",
  description: "Priority WordPress support from Saqrih.",
  path: "/wordpress/premium-support",
  robots: { index: false, follow: false },
});

export default function Layout({ children }) {
  return children;
}
