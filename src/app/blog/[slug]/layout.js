import { getBlogPostBySlug } from "../../../../components/icomat1-blog/blogPostsData";
import { buildPageMetadata } from "../../../../lib/siteMetadata";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Blog Post" };
  return buildPageMetadata({
    title: post.title,
    description: post.lead ?? post.category ?? "Article from the Saqrih web design blog.",
  });
}

export default function BlogPostLayout({ children }) {
  return children;
}
