import JsonLd from "../seo/JsonLd";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from "../../lib/jsonLd";

/** Shared shell for Qatar/Qaatar SEO alias pages. */
export default function QatarAliasPage({
  path,
  title,
  description,
  serviceType,
  faqs,
  children,
}) {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ name: title, description, url: path }),
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Services", url: "/#solutions" },
            { name: title, url: path },
          ]),
          serviceJsonLd({
            name: title,
            description,
            url: path,
            serviceType,
          }),
          faqPageJsonLd(faqs),
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
