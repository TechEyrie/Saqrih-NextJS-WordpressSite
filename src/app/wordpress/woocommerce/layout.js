import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, serviceJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "WooCommerce Development",
  description: "WooCommerce store design, development, and optimization from Saqrih.",
  path: "/wordpress/woocommerce",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"WordPress","url":"/wordpress"},{"name":"WooCommerce Development","url":"/wordpress/woocommerce"}]),
          serviceJsonLd({
            name: "WooCommerce Development",
            description: "WooCommerce store design, development, and optimization from Saqrih.",
            url: "/wordpress/woocommerce",
            serviceType: "WordPress services",
          }),
          faqPageJsonLd([{"question":"What is WordPress support?","answer":"WordPress support refers to ongoing technical maintenance and assistance for your website. This includes updates, security monitoring, bug fixes, performance optimization, backups, and troubleshooting. At Saqrih, WordPress support is designed to keep your website stable, secure, and running without interruptions."},{"question":"Is WordPress support secure?","answer":"Yes. Professional WordPress support significantly improves security when done properly. With Saqrih, security is built into the process through regular updates, vulnerability monitoring, malware scanning, and secure configuration management. This reduces risks and helps protect your website from common threats like hacking attempts and malware infections."},{"question":"Is WordPress suitable for businesses that need regular help?","answer":"Yes. WordPress is widely used by businesses of all sizes because it is flexible, scalable, and easy to maintain with the right support structure. With ongoing professional support from Saqrih, businesses can rely on consistent updates, performance tuning, and technical assistance whenever needed."},{"question":"Is WordPress easy to use if I am not technical?","answer":"Yes. WordPress is designed to be user-friendly, even for non-technical users. You can easily manage pages, posts, and basic content without coding knowledge. With Saqrih handling the technical side—security, updates, and maintenance—you can focus on your content and business without worrying about the backend complexity."}]),
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
