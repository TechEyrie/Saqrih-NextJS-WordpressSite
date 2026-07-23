import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, serviceJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "WordPress SEO Services",
  description: "Search engine optimization for WordPress sites—technical SEO, content, and measurable growth.",
  path: "/wordpress/search-engine-optimization",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"WordPress","url":"/wordpress"},{"name":"WordPress SEO Services","url":"/wordpress/search-engine-optimization"}]),
          serviceJsonLd({
            name: "WordPress SEO Services",
            description: "Search engine optimization for WordPress sites—technical SEO, content, and measurable growth.",
            url: "/wordpress/search-engine-optimization",
            serviceType: "WordPress services",
          }),
          faqPageJsonLd([{"question":"What are the benefits of professional WordPress SEO packages?","answer":"Professional SEO packages usually combine technical fixes, content improvements, and tracking setup so your rankings and conversions improve in a more consistent, measurable way."},{"question":"How long does it take to get a response when submitting new tickets?","answer":"A strong agency provides clear strategy, transparent reporting, realistic timelines, and execution across technical SEO, on-page optimization, and content growth."},{"question":"Why should I choose a WordPress SEO firm over a general digital marketing agency?","answer":"A WordPress-focused SEO firm understands theme/plugin behavior, Core Web Vitals bottlenecks, and CMS-specific technical issues that general agencies may overlook."},{"question":"How does WordPress SEO consulting improve my website’s performance?","answer":"Consulting identifies quick wins and structural problems, then applies prioritized fixes that can improve crawlability, loading speed, content relevance, and user engagement."},{"question":"What’s included in WordPress SEO support?","answer":"Support often includes audits, on-page updates, metadata improvements, internal linking, keyword tracking, performance tuning, and ongoing recommendations based on results."},{"question":"How do I get started with a reliable SEO company?","answer":"Start with a discovery call, share goals and baseline data, review an initial audit, and align on a roadmap with milestones, KPIs, and communication cadence."},{"question":"Are there affordable WordPress SEO monthly packages available?","answer":"Yes, many firms offer tiered monthly options so you can start with core optimization and scale into broader SEO campaigns as your budget and goals grow."},{"question":"What is on-page SEO?","answer":"On-page SEO is the optimization of pages on your site, including headings, meta tags, internal links, keyword usage, URL structure, and content quality."},{"question":"What is local SEO?","answer":"Local SEO focuses on helping your business appear in location-based searches through map listings, local citations, reviews, and geo-targeted content."},{"question":"Why is my website not ranking well?","answer":"Common issues include weak content relevance, technical crawl/indexing errors, poor site speed, low authority backlinks, and inconsistent optimization."},{"question":"What can I do to increase my online visibility?","answer":"Improve technical health, publish useful keyword-aligned content consistently, strengthen internal linking, and build authority with trusted backlinks."},{"question":"Why am I not showing up on Google at all?","answer":"Your site may be blocked from indexing, recently launched, affected by technical errors, or lacking enough relevance and authority for target queries."},{"question":"I really want to rank better, what can you guys do for me?","answer":"We can audit your site, prioritize fixes, optimize key pages, implement content and technical improvements, and monitor results with ongoing reporting."},{"question":"How long after verifying my Google listing do I start ranking well?","answer":"Verification helps quickly for local presence, but meaningful ranking gains usually take weeks to months depending on competition and optimization quality."},{"question":"What helps me more: on-page SEO or local SEO?","answer":"It depends on your business model; service-area and storefront businesses benefit heavily from local SEO, while broader markets need strong on-page SEO too."},{"question":"What is Google Analytics?","answer":"Google Analytics is a reporting platform that tracks visitor behavior, traffic sources, conversions, and engagement so you can make data-driven decisions."},{"question":"How do I navigate Google Analytics?","answer":"Begin with reports for acquisition, engagement, and conversions, then use filters, date ranges, and segment comparisons to uncover actionable insights."}]),
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
