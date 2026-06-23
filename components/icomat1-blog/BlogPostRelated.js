"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  BTN_LIME,
  FONT_HEADING,
  GREEN,
  GREEN_ACCENT,
  LIME_HOVER,
  SECTION_BG_ALT,
  TEXT,
} from "./blogTheme";

/**
 * @param {{ articles: { slug: string; title: string; image: string }[] }} props
 */
export default function BlogPostRelated({ articles }) {
  if (!articles?.length) return null;

  return (
    <section
      className="blog-related-section"
      style={{
        width: "100%",
        backgroundColor: SECTION_BG_ALT,
        padding: "clamp(64px, 8vw, 100px) clamp(24px, 5vw, 80px)",
        boxSizing: "border-box",
        borderTop: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ maxWidth: "min(1280px, 100%)", margin: "0 auto" }}>
        <h2
          style={{
            margin: "0 0 clamp(36px, 4.5vw, 52px)",
            textAlign: "center",
            color: TEXT,
            fontFamily: FONT_HEADING,
            fontSize: "clamp(1.55rem, 2.4vw, 2rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          Related articles
        </h2>

        <div
          className="blog-related-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
            gap: "clamp(24px, 3vw, 36px)",
            maxWidth: 720,
          }}
        >
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="blog-related-card"
              style={{ textDecoration: "none", color: TEXT }}
            >
              <div
                style={{
                  borderRadius: "clamp(14px, 1.6vw, 18px)",
                  overflow: "hidden",
                  aspectRatio: "16 / 10",
                  backgroundColor: "#e8e6e2",
                }}
              >
                <img
                  src={article.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <p
                style={{
                  margin: "clamp(14px, 1.6vw, 18px) 0 0",
                  fontFamily: FONT_HEADING,
                  fontSize: "clamp(1rem, 1.12vw, 1.1rem)",
                  fontWeight: 600,
                  lineHeight: 1.35,
                }}
              >
                {article.title}
              </p>
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "clamp(40px, 5vw, 56px)" }}>
          <Link
            href="/blog"
            className="blog-related-all-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0,
              padding: "6px 6px 6px 28px",
              borderRadius: "999px",
              backgroundColor: GREEN,
              color: "#ffffff",
              fontFamily: FONT_HEADING,
              fontSize: "0.95rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "filter 0.2s ease",
            }}
          >
            View all blog posts
            <span
              style={{
                marginLeft: 16,
                width: 36,
                height: 36,
                borderRadius: "50%",
                backgroundColor: BTN_LIME,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: GREEN_ACCENT,
              }}
            >
              <ArrowRight size={18} strokeWidth={2.25} aria-hidden />
            </span>
          </Link>
        </div>
      </div>

      <style>{`
        .blog-related-card {
          display: block;
          padding: clamp(12px, 1.4vw, 16px);
          margin: clamp(-12px, -1.4vw, -16px);
          border-radius: clamp(14px, 1.6vw, 18px);
          background-color: transparent;
          transition:
            background-color 0.38s ease,
            padding 0.38s cubic-bezier(0.33, 1, 0.28, 1);
        }

        .blog-related-card:hover {
          background-color: ${LIME_HOVER};
          padding: clamp(20px, 2.4vw, 28px);
        }

        .blog-related-all-btn:hover {
          filter: brightness(1.08);
        }
      `}</style>
    </section>
  );
}
