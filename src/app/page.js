import { buildPageMetadata } from "../../lib/siteMetadata";
import JsonLd from "../../components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, webPageJsonLd } from "../../lib/jsonLd";
import { HOMEPAGE_FAQS } from "../../lib/homepageFaqs";
import IcomatPage from "./icomat1/page";

const HOME_TITLE = "Saqrih - Web and Software Development Company in Doha, Qatar";
const HOME_DESCRIPTION =
  "Saqrih is a Qatar-based digital agency delivering website development, web apps, SaaS, e-commerce, mobile apps, WordPress, CMS, APIs, and ongoing support.";

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
          faqPageJsonLd(HOMEPAGE_FAQS),
        ]}
      />
      <IcomatPage />
      <p
        style={{
          margin: 0,
          padding: "10px 16px 18px",
          textAlign: "center",
          background: "#162D24",
          fontSize: "12px",
          lineHeight: 1.4,
        }}
      >
        <a
          href="https://startupfa.me"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}
        >
          Startup Fame
        </a>
      </p>
    </>
  );
}
