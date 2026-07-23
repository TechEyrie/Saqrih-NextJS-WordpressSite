import { buildPageMetadata } from "../../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "Industries We Serve",
  description: "WordPress websites tailored to your industry—design, development, and support from Saqrih.",
  path: "/industries",
});

export default function Layout({ children }) {
  return children;
}
