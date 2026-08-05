import { notFound } from "next/navigation";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
} from "../../../../components/icomat1-blog/blogPostsData";
import BlogPostClient from "./BlogPostClient";

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export default async function Blog1PostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  // Remap internal blog links to /blog1 for the archived static posts.
  const remapped = {
    ...post,
    previousPost: post.previousPost
      ? {
          ...post.previousPost,
          href: post.previousPost.href?.replace(/^\/blog\//, "/blog1/") ||
            `/blog1/${post.previousPost.slug}`,
        }
      : null,
    relatedArticles: (post.relatedArticles || []).map((a) => ({
      ...a,
      href: `/blog1/${a.slug}`,
    })),
  };

  return <BlogPostClient post={remapped} basePath="/blog1" />;
}
