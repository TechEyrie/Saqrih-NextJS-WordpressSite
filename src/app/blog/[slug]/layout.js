import { fetchWpBlogPostBySlug } from "../../../../lib/wordpressBlog";
import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqPageJsonLd,
} from "../../../../lib/jsonLd";

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await fetchWpBlogPostBySlug(slug);
  if (!post) return { title: "Blog Post", robots: { index: false } };
  return buildPageMetadata({
    title: post.title,
    description:
      post.lead ?? post.category ?? "Article from the Saqrih web design blog.",
    path: `/blog/${slug}`,
    image: post.image || "/og-default.png",
    type: "article",
  });
}

export default async function BlogPostLayout({ children, params }) {
  const { slug } = await params;
  const post = await fetchWpBlogPostBySlug(slug);

  const schema = post
    ? [
        breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]),
        articleJsonLd({
          title: post.title,
          description: post.lead ?? post.title,
          url: `/blog/${post.slug}`,
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
