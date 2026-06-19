"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { getPageSectionPics } from "../../lib/pageImages";

const BLOG_LISTING_PICS = getPageSectionPics("blog", "listing");

/** Primary brand green */
const GREEN = "#162D24";
const FONT_HEADING = "var(--font-inter), Inter, Arial, sans-serif";
const FONT_BODY = "var(--font-montserrat), Montserrat, Arial, sans-serif";

const POSTS_PER_PAGE = 3;
const TOTAL_PAGES = 30;

const SEED_POSTS = [
  {
    slug: "mls-integration-for-wordpress",
    date: "June 10, 2026",
    title: "MLS Integration for WordPress: How to Connect Real Estate Listings to Your Site",
    excerpt:
      "Learn how MLS integration works on WordPress, what compliance to watch for, and how to connect live property listings without slowing your site down.",
    image: BLOG_LISTING_PICS[0],
  },
  {
    slug: "design-systems-for-wordpress",
    date: "March 15, 2026",
    title: "Building a simple design system inside WordPress",
    excerpt:
      "A practical look at typography scales, spacing tokens, and reusable blocks so your marketing team can publish confidently without breaking the layout.",
    image: BLOG_LISTING_PICS[1],
  },
  {
    slug: "seo-and-core-web-vitals",
    date: "March 12, 2026",
    title: "SEO and Core Web Vitals: what actually moves the needle",
    excerpt:
      "We separate myth from measurement—LCP, INP, and CLS—and show how technical choices in WordPress hosting and front-end code affect rankings.",
    image: BLOG_LISTING_PICS[2],
  },
];

function buildAllPosts() {
  const total = TOTAL_PAGES * POSTS_PER_PAGE;
  const out = [];
  for (let i = 0; i < total; i++) {
    const t = SEED_POSTS[i % SEED_POSTS.length];
    const n = i + 1;
    out.push({
      slug: `${t.slug}-${i}`,
      date: t.date,
      title: i < SEED_POSTS.length ? t.title : `${t.title} (${n})`,
      excerpt: t.excerpt,
      image: BLOG_LISTING_PICS[i % BLOG_LISTING_PICS.length],
    });
  }
  return out;
}

const ALL_POSTS = buildAllPosts();

function paginationRow(current, total) {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => ({ type: "page", value: i + 1 }));
  }
  return [
    { type: "page", value: 1 },
    { type: "page", value: 2 },
    { type: "page", value: 3 },
    { type: "ellipsis" },
    { type: "page", value: total },
  ];
}

/** Image width — center sits on card edge so ~half is outside, ~half inside. */
const IMG_W = "clamp(320px, 44vw, 640px)";
const IMG_H = "clamp(300px, 42vw, 480px)";
const TEXT_INSET = `calc(${IMG_W} / 2 + clamp(28px, 3.6vw, 56px))`;
/** Shift whole green card on the white canvas opposite the bleeding image. */
const CARD_SHIFT_X = "clamp(20px, 3.2vw, 48px)";

function BlogCard({ post, index }) {
  const imageLeft = index % 2 === 1;
  const href = `/blog/${post.slug}`;

  const imageBlock = (
    <a
      href={href}
      className="blog-listing-image-floating"
      style={{
        position: "absolute",
        top: "50%",
        width: IMG_W,
        height: IMG_H,
        borderRadius: "clamp(18px, 2.4vw, 26px)",
        overflow: "hidden",
        boxShadow: "0 26px 56px rgba(0,0,0,0.3)",
        zIndex: 2,
        ...(imageLeft
          ? {
              left: 0,
              transform: "translate(-50%, -50%)",
            }
          : {
              right: 0,
              transform: "translate(50%, -50%)",
            }),
      }}
    >
      <img
        src={post.image}
        alt=""
        loading="lazy"
        decoding="async"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </a>
  );

  return (
    <article
      className="blog-listing-card"
      style={{
        backgroundColor: GREEN,
        borderRadius: "clamp(28px, 3.5vw, 44px)",
        overflow: "visible",
        position: "relative",
        minHeight: "clamp(420px, 50vw, 580px)",
        padding: "clamp(36px, 5vw, 68px) clamp(28px, 5.5vw, 76px)",
        boxSizing: "border-box",
        transform: imageLeft ? `translateX(${CARD_SHIFT_X})` : `translateX(calc(-1 * ${CARD_SHIFT_X}))`,
      }}
    >
      {imageBlock}

      <div
        className="blog-listing-text"
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "min(100%, clamp(320px, 42vw, 480px))",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "min(68ch, 100%)",
          marginLeft: imageLeft ? TEXT_INSET : 0,
          marginRight: imageLeft ? 0 : TEXT_INSET,
          paddingLeft: imageLeft ? 0 : "clamp(8px, 1.4vw, 20px)",
          paddingRight: imageLeft ? "clamp(8px, 1.4vw, 20px)" : 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "rgba(255,255,255,0.72)",
            fontFamily: FONT_BODY,
            fontSize: "0.92rem",
            fontWeight: 500,
            marginBottom: "clamp(14px, 1.6vw, 20px)",
          }}
        >
          <Clock size={18} strokeWidth={1.75} aria-hidden />
          <time dateTime={post.date}>{post.date}</time>
        </div>

        <h2
          style={{
            margin: 0,
            color: "#ffffff",
            fontFamily: FONT_HEADING,
            fontSize: "clamp(1.55rem, 2.85vw, 2.5rem)",
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
          }}
        >
          <a href={href} style={{ color: "inherit", textDecoration: "none" }}>
            {post.title}
          </a>
        </h2>

        <p
          style={{
            margin: "clamp(18px, 2.2vw, 28px) 0 0",
            color: "rgba(255,255,255,0.82)",
            fontFamily: FONT_BODY,
            fontSize: "clamp(1.02rem, 1.2vw, 1.12rem)",
            lineHeight: 1.68,
            maxWidth: "58ch",
          }}
        >
          {post.excerpt}
        </p>

        <div style={{ marginTop: "clamp(28px, 3.4vw, 40px)" }}>
          <a
            href={href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 32px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.85)",
              color: "#ffffff",
              fontFamily: FONT_HEADING,
              fontSize: "0.92rem",
              fontWeight: 600,
              letterSpacing: "0.02em",
              textDecoration: "none",
              transition: "background-color 0.2s ease, border-color 0.2s ease",
            }}
          >
            Read more
          </a>
        </div>
      </div>
    </article>
  );
}

export default function BlogListingSection() {
  const [page, setPage] = useState(1);
  const totalPages = TOTAL_PAGES;

  const slice = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return ALL_POSTS.slice(start, start + POSTS_PER_PAGE);
  }, [page]);

  const items = useMemo(() => paginationRow(page, totalPages), [page, totalPages]);

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        boxSizing: "border-box",
        padding: "clamp(80px, 10vw, 140px) clamp(28px, 7vw, 120px)",
      }}
    >
      <div
        style={{
          maxWidth: "min(1320px, 100%)",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(72px, 9vw, 120px)",
          paddingLeft: "clamp(8px, 5vw, 100px)",
          paddingRight: "clamp(8px, 5vw, 100px)",
        }}
      >
        {slice.map((post, i) => (
          <BlogCard key={post.slug} post={post} index={(page - 1) * POSTS_PER_PAGE + i} />
        ))}

        <nav
          aria-label="Blog pagination"
          style={{
            marginTop: "clamp(16px, 2.5vw, 28px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(6px, 1.2vw, 12px)",
          }}
        >
          {page > 1 && (
            <button
              type="button"
              aria-label="Previous page"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 42,
                height: 42,
                marginRight: 4,
                border: "none",
                background: "transparent",
                color: GREEN,
                cursor: "pointer",
              }}
            >
              <ChevronLeft size={22} strokeWidth={2} aria-hidden />
            </button>
          )}

          {items.map((item, idx) =>
            item.type === "ellipsis" ? (
              <span
                key={`e-${idx}`}
                aria-hidden
                style={{
                  color: GREEN,
                  fontFamily: FONT_HEADING,
                  fontWeight: 500,
                  padding: "0 6px",
                  letterSpacing: "0.12em",
                }}
              >
                …
              </span>
            ) : (
              <button
                key={item.value}
                type="button"
                onClick={() => setPage(item.value)}
                aria-current={item.value === page ? "page" : undefined}
                style={{
                  minWidth: 42,
                  height: 42,
                  padding: "0 12px",
                  borderRadius: item.value === page ? "999px" : 0,
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: item.value === page ? GREEN : "transparent",
                  color: item.value === page ? "#ffffff" : GREEN,
                  fontFamily: FONT_HEADING,
                  fontSize: "1rem",
                  fontWeight: item.value === page ? 600 : 500,
                  lineHeight: 1,
                  transition: "background-color 0.2s ease, color 0.2s ease",
                }}
              >
                {item.value}
              </button>
            )
          )}

          {page < totalPages && (
            <button
              type="button"
              aria-label="Next page"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 42,
                height: 42,
                marginLeft: 4,
                border: "none",
                background: "transparent",
                color: GREEN,
                cursor: "pointer",
              }}
            >
              <ChevronRight size={22} strokeWidth={2} aria-hidden />
            </button>
          )}
        </nav>
      </div>

      <style>{`
        @media (max-width: 780px) {
          .blog-listing-image-floating {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            right: auto !important;
            transform: none !important;
            width: 100% !important;
            max-width: 100% !important;
            height: clamp(220px, 52vw, 320px) !important;
            margin: 0 auto clamp(20px, 4vw, 28px) !important;
            display: block !important;
          }
          .blog-listing-card {
            min-height: 0 !important;
            padding-top: clamp(20px, 4vw, 32px) !important;
            transform: none !important;
          }
          .blog-listing-text {
            margin-left: 0 !important;
            margin-right: 0 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            min-height: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
