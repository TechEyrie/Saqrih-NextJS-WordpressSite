import JsonLd from "../../../components/seo/JsonLd";
import {
  blogCollectionJsonLd,
  breadcrumbJsonLd,
} from "../../../lib/jsonLd";
import { fetchAllWpBlogPosts } from "../../../lib/wordpressBlog";
import BlogListingClient from "./BlogListingClient";

export const revalidate = 60;

const BLOG_TITLE = "Blog";
const BLOG_DESCRIPTION =
  "Insights from Saqrih on websites, apps, SaaS, e-commerce, CMS, WordPress, and digital product strategy.";

export default async function BlogPage() {
  let posts = [];
  try {
    posts = await fetchAllWpBlogPosts({ revalidate: 60 });
  } catch (err) {
    console.error("Failed to load WordPress blog posts:", err);
  }

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
          ]),
          blogCollectionJsonLd({
            name: BLOG_TITLE,
            description: BLOG_DESCRIPTION,
            url: "/blog",
            items: posts.map((post) => ({
              name: post.title,
              url: `/blog/${post.slug}`,
            })),
          }),
        ]}
      />
      <BlogListingClient
        posts={posts}
        totalPages={Math.max(1, Math.ceil(posts.length / 3))}
        basePath="/blog"
      />
    </>
  );
}
