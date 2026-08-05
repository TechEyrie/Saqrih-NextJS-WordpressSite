import { fetchAllWpBlogPosts } from "../../../lib/wordpressBlog";
import { SITE_ORIGIN } from "../../../lib/siteOrigin";
import { absoluteUrl } from "../../../lib/jsonLd";

function escapeXml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  let posts = [];
  try {
    posts = await fetchAllWpBlogPosts({ revalidate: 300 });
  } catch (err) {
    console.error("Feed: failed to load WP posts", err);
  }

  const lastBuildDate = new Date().toUTCString();
  const items = posts
    .map((post) => {
      const link = absoluteUrl(`/blog/${post.slug}`);
      const pubDate = post.dateTime
        ? new Date(post.dateTime).toUTCString()
        : lastBuildDate;
      const description = escapeXml(post.excerpt || post.title);
      return `<item><title>${escapeXml(post.title)}</title><link>${link}</link><guid isPermaLink="true">${link}</guid><pubDate>${pubDate}</pubDate><description>${description}</description><category>${escapeXml(post.category || "Blog")}</category></item>`;
    })
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Saqrih Blog</title><link>${SITE_ORIGIN}/blog</link><description>WordPress design, development, SEO, and performance articles from Saqrih.</description><language>en</language><lastBuildDate>${lastBuildDate}</lastBuildDate><atom:link href="${SITE_ORIGIN}/feed/" rel="self" type="application/rss+xml"/><generator>https://wordpress.org/?v=6.7.2</generator>${items}</channel></rss>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=UTF-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
