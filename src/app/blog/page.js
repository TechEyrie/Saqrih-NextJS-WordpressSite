import { getAllBlogPosts } from "../../../components/icomat1-blog/blogPostsData";
import JsonLd from "../../../components/seo/JsonLd";
import {
  blogCollectionJsonLd,
  breadcrumbJsonLd,
} from "../../../lib/jsonLd";
import BlogListingClient from "./BlogListingClient";

const BLOG_TITLE = "Web Design Blog";
const BLOG_DESCRIPTION =
  "WordPress design, development, SEO, and performance articles from Saqrih.";

export default function BlogPage() {
  const posts = getAllBlogPosts();

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
      <BlogListingClient />
    </>
  );
}
