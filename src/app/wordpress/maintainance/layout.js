import { buildPageMetadata } from "../../../../lib/siteMetadata";

/** Legacy typo slug — redirected; keep noindex if ever discovered. */
export const metadata = buildPageMetadata({
  title: "WordPress Website Maintenance",
  description: "WordPress maintenance plans from Saqrih.",
  path: "/wordpress/maintenance",
  robots: { index: false, follow: false },
});

export default function Layout({ children }) {
  return children;
}
