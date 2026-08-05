import { getAllBlogPosts } from "../../../components/icomat1-blog/blogPostsData";
import JsonLd from "../../../components/seo/JsonLd";
import {
  blogCollectionJsonLd,
  breadcrumbJsonLd,
} from "../../../lib/jsonLd";
import BlogListingClient from "./BlogListingClient";

const BLOG_TITLE = "Web Design Blog (Archive)";
const BLOG_DESCRIPTION =
  "Archived WordPress design, development, SEO, and performance articles from Saqrih.";

export default function Blog1Page() {
  const posts = getAllBlogPosts();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Blog Archive", url: "/blog1" },
          ]),
          blogCollectionJsonLd({
            name: BLOG_TITLE,
            description: BLOG_DESCRIPTION,
            url: "/blog1",
            items: posts.map((post) => ({
              name: post.title,
              url: `/blog1/${post.slug}`,
            })),
          }),
        ]}
      />
      <BlogListingClient />
    </>
  );
}
