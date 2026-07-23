import { notFound } from "next/navigation";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
} from "../../../../components/icomat1-blog/blogPostsData";
import BlogPostClient from "./BlogPostClient";

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();
  return <BlogPostClient post={post} />;
}
