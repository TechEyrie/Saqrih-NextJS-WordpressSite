/**
 * WordPress blog API client for https://blog.saqrih.com
 */

const WP_BLOG_ORIGIN =
  process.env.NEXT_PUBLIC_WP_BLOG_URL?.replace(/\/$/, "") ||
  "https://blog.saqrih.com";

const WP_API = `${WP_BLOG_ORIGIN}/wp-json/wp/v2`;

const FALLBACK_IMAGE = "/og-default.png";

function stripHtml(html = "") {
  return String(html)
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeEntities(text = "") {
  return String(text)
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) =>
      String.fromCharCode(parseInt(n, 16))
    )
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}

function formatDateLabel(iso) {
  if (!iso) return "";
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function getFeaturedImage(post) {
  const media = post?._embedded?.["wp:featuredmedia"]?.[0];
  return (
    media?.source_url ||
    media?.media_details?.sizes?.large?.source_url ||
    media?.media_details?.sizes?.medium_large?.source_url ||
    FALLBACK_IMAGE
  );
}

function getAuthorName(post) {
  const author = post?._embedded?.author?.[0];
  if (author?.name) return author.name;
  return "Saqrih";
}

function getAuthorBio(post) {
  const author = post?._embedded?.author?.[0];
  if (!author?.name) {
    return {
      name: "Saqrih",
      role: "Editorial team",
      avatar: null,
      bio: "Insights on web design, development, and digital growth from Saqrih.",
    };
  }
  return {
    name: author.name,
    role: author.description ? "Author" : "Contributor",
    avatar: author.avatar_urls?.["96"] || author.avatar_urls?.["48"] || null,
    bio:
      stripHtml(author.description || "") ||
      "Insights on web design, development, and digital growth from Saqrih.",
  };
}

function getCategoryName(post) {
  const terms = post?._embedded?.["wp:term"];
  const cats = Array.isArray(terms) ? terms[0] : null;
  if (Array.isArray(cats) && cats[0]?.name) return cats[0].name;
  return "Blog";
}

function mapListingPost(post) {
  const dateLabel = formatDateLabel(post.date);
  return {
    id: post.id,
    slug: post.slug,
    title: decodeEntities(stripHtml(post.title?.rendered || "")),
    excerpt: stripHtml(post.excerpt?.rendered || ""),
    date: dateLabel,
    dateLabel,
    dateTime: post.date,
    image: getFeaturedImage(post),
    category: getCategoryName(post),
    author: getAuthorName(post),
  };
}

function mapDetailPost(post, { related = [], previousPost = null } = {}) {
  const listing = mapListingPost(post);
  return {
    ...listing,
    lead: listing.excerpt,
    contentHtml: post.content?.rendered || "",
    authorBio: getAuthorBio(post),
    relatedArticles: related.map((r) => ({
      slug: r.slug,
      title: decodeEntities(stripHtml(r.title?.rendered || "")),
      image: getFeaturedImage(r),
    })),
    previousPost: previousPost
      ? {
          slug: previousPost.slug,
          title: decodeEntities(stripHtml(previousPost.title?.rendered || "")),
          href: `/blog/${previousPost.slug}`,
        }
      : null,
    faq: [],
    blocks: [],
  };
}

async function wpFetch(path, { revalidate = 60 } = {}) {
  const url = path.startsWith("http") ? path : `${WP_API}${path}`;
  const res = await fetch(url, {
    next: { revalidate },
    headers: { Accept: "application/json" },
  });
  if (!res.ok) {
    throw new Error(`WordPress API ${res.status} for ${url}`);
  }
  const total = Number(res.headers.get("X-WP-Total") || 0);
  const totalPages = Number(res.headers.get("X-WP-TotalPages") || 0);
  const data = await res.json();
  return { data, total, totalPages };
}

/** Listing posts (paginated). */
export async function fetchWpBlogPosts({
  page = 1,
  perPage = 3,
  revalidate = 60,
} = {}) {
  const { data, total, totalPages } = await wpFetch(
    `/posts?per_page=${perPage}&page=${page}&_embed=1&status=publish`,
    { revalidate }
  );
  const posts = Array.isArray(data) ? data.map(mapListingPost) : [];
  return {
    posts,
    total,
    totalPages: totalPages || Math.max(1, Math.ceil(total / perPage)),
  };
}

/** All posts for sitemap / generateStaticParams. */
export async function fetchAllWpBlogPosts({ revalidate = 300 } = {}) {
  const perPage = 100;
  const first = await fetchWpBlogPosts({ page: 1, perPage, revalidate });
  const all = [...first.posts];
  for (let page = 2; page <= first.totalPages; page++) {
    const next = await fetchWpBlogPosts({ page, perPage, revalidate });
    all.push(...next.posts);
  }
  return all;
}

/** Single post by slug with related + previous. */
export async function fetchWpBlogPostBySlug(slug, { revalidate = 60 } = {}) {
  const { data } = await wpFetch(
    `/posts?slug=${encodeURIComponent(slug)}&_embed=1&status=publish`,
    { revalidate }
  );
  const post = Array.isArray(data) ? data[0] : null;
  if (!post) return null;

  let related = [];
  try {
    const relatedRes = await wpFetch(
      `/posts?per_page=2&exclude=${post.id}&_embed=1&status=publish`,
      { revalidate }
    );
    related = Array.isArray(relatedRes.data) ? relatedRes.data : [];
  } catch {
    related = [];
  }

  let previousPost = null;
  try {
    const prevRes = await wpFetch(
      `/posts?per_page=1&before=${encodeURIComponent(post.date)}&orderby=date&order=desc&status=publish`,
      { revalidate }
    );
    previousPost = Array.isArray(prevRes.data) ? prevRes.data[0] : null;
  } catch {
    previousPost = null;
  }

  return mapDetailPost(post, { related, previousPost });
}

export { WP_BLOG_ORIGIN };
