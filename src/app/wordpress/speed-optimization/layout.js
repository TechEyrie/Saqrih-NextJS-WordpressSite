import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, serviceJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "WordPress Speed Optimization",
  description: "Core Web Vitals improvements, caching, and performance tuning for WordPress.",
  path: "/wordpress/speed-optimization",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"WordPress","url":"/wordpress"},{"name":"WordPress Speed Optimization","url":"/wordpress/speed-optimization"}]),
          serviceJsonLd({
            name: "WordPress Speed Optimization",
            description: "Core Web Vitals improvements, caching, and performance tuning for WordPress.",
            url: "/wordpress/speed-optimization",
            serviceType: "WordPress services",
          }),
          faqPageJsonLd([{"question":"First, we'll run an initial WordPress speed optimization test and review the results","answer":"We analyze your current website speed using industry-standard tools to establish a clear performance baseline."},{"question":"Then we'll make suggested adjustments according to multiple site speed tools","answer":"We review insights from different performance testing tools to identify key areas for improvement."},{"question":"After that, it's time to perform WordPress speed optimization to improve loading times","answer":"We implement focused optimizations to reduce load times, improve responsiveness, and enhance overall site performance."}]),
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
