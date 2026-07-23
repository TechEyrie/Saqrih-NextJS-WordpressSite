import { buildPageMetadata } from "../../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "Markets We Serve",
  description: "Saqrih serves clients in Qatar, the GCC, the United States, and worldwide.",
  path: "/markets",
});

export default function Layout({ children }) {
  return children;
}
