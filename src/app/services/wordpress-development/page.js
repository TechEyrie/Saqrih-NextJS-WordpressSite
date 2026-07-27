import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from "../../../../lib/jsonLd";
import { WORDPRESS_DEV_HOME } from "../../../../lib/services/wordpressDevelopmentHome";
import WordpressDevelopmentHomeClient from "./WordpressDevelopmentHomeClient";

export const metadata = buildPageMetadata({
  title: WORDPRESS_DEV_HOME.title,
  description: WORDPRESS_DEV_HOME.description,
  path: WORDPRESS_DEV_HOME.path,
});

export default function WordpressDevelopmentHomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: WORDPRESS_DEV_HOME.title,
            description: WORDPRESS_DEV_HOME.description,
            url: WORDPRESS_DEV_HOME.path,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Services", url: "/#solutions" },
            { name: WORDPRESS_DEV_HOME.title, url: WORDPRESS_DEV_HOME.path },
          ]),
          serviceJsonLd({
            name: WORDPRESS_DEV_HOME.title,
            description: WORDPRESS_DEV_HOME.description,
            url: WORDPRESS_DEV_HOME.path,
            serviceType: "WordPress development",
          }),
        ].filter(Boolean)}
      />
      <WordpressDevelopmentHomeClient />
    </>
  );
}
