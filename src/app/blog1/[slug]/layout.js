import {
  getAllBlogPosts,
  getBlogPostBySlug,
} from "../../../../components/icomat1-blog/blogPostsData";
import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqPageJsonLd,
} from "../../../../lib/jsonLd";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Blog Post", robots: { index: false } };
  return buildPageMetadata({
    title: post.title,
    description:
      post.lead ?? post.category ?? "Article from the Saqrih web design blog.",
    path: `/blog1/${slug}`,
    image: post.image || "/og-default.png",
    type: "article",
  });
}

export default async function Blog1PostLayout({ children, params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  const schema = post
    ? [
        breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Blog Archive", url: "/blog1" },
          { name: post.title, url: `/blog1/${post.slug}` },
        ]),
        articleJsonLd({
          title: post.title,
          description: post.lead ?? post.title,
          url: `/blog1/${post.slug}`,
          datePublished: post.dateTime,
          dateModified: post.dateTime,
          authorName: post.author || post.authorBio?.name,
          image: post.image,
        }),
        faqPageJsonLd(post.faq),
      ].filter(Boolean)
    : null;

  return (
    <>
      <JsonLd data={schema} />
      {children}
    </>
  );
}
