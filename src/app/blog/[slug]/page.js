import { notFound } from "next/navigation";
import {
  fetchAllWpBlogPosts,
  fetchWpBlogPostBySlug,
} from "../../../../lib/wordpressBlog";
import BlogPostClient from "./BlogPostClient";

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const posts = await fetchAllWpBlogPosts({ revalidate: 300 });
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await fetchWpBlogPostBySlug(slug);
  if (!post) notFound();
  return <BlogPostClient post={post} basePath="/blog" />;
}
