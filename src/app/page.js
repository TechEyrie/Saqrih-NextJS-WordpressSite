import { buildPageMetadata } from "../../lib/siteMetadata";
import JsonLd from "../../components/seo/JsonLd";
import { breadcrumbJsonLd, webPageJsonLd } from "../../lib/jsonLd";
import IcomatPage from "./icomat1/page";

const HOME_TITLE = "Saqrih - Qatar WordPress Development Agency";
const HOME_DESCRIPTION =
  "Saqrih is a premier WordPress agency delivering design, development, hosting, maintenance, and ongoing support.";

export const metadata = buildPageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: HOME_TITLE,
            description: HOME_DESCRIPTION,
            url: "/",
          }),
          breadcrumbJsonLd([{ name: "Home", url: "/" }]),
        ]}
      />
      <IcomatPage />
    </>
  );
}
