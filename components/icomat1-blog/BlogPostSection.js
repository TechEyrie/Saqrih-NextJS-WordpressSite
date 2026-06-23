"use client";

import Link from "next/link";
import { Clock, User } from "lucide-react";
import { BLOG_SIDEBAR_CARDS } from "./blogPostsData";
import BlogPostContent from "./BlogPostContent";
import BlogPostFaq from "./BlogPostFaq";
import BlogPostFooter from "./BlogPostFooter";
import BlogPostRelated from "./BlogPostRelated";
import {
  BTN_LIME,
  FONT_BODY,
  FONT_HEADING,
  GREEN_ACCENT,
  LIME_HOVER,
  SECTION_BG,
  SIDEBAR_CARD_BG,
  TEXT,
  TEXT_BODY,
} from "./blogTheme";

function DesignWorkIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <rect x="8" y="6" width="22" height="28" rx="3" stroke={GREEN_ACCENT} strokeWidth="2" />
      <path d="M13 14h14M13 19h10M13 24h12" stroke={GREEN_ACCENT} strokeWidth="2" strokeLinecap="round" />
      <path
        d="M28 8l2 2-4 4-2-2 4-4zM30 6l2 2"
        stroke={GREEN_ACCENT}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31 5l1 1M33 7l1 1M29 7l1-1"
        stroke={GREEN_ACCENT}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldSupportIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <path
        d="M20 6L10 10v10c0 6.5 4.3 12.6 10 14 5.7-1.4 10-7.5 10-14V10L20 6z"
        stroke={GREEN_ACCENT}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M20 14v8M16 18h8" stroke={GREEN_ACCENT} strokeWidth="2" strokeLinecap="round" />
      <path
        d="M30 8l1.5 1.5M32 10l1 1"
        stroke={GREEN_ACCENT}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const SIDEBAR_ICONS = {
  design: DesignWorkIcon,
  shield: ShieldSupportIcon,
};

function SidebarCard({ card }) {
  const Icon = SIDEBAR_ICONS[card.icon] || DesignWorkIcon;

  return (
    <article
      className="blog-post-sidebar-card"
      style={{
        backgroundColor: SIDEBAR_CARD_BG,
        borderRadius: "clamp(18px, 2vw, 22px)",
        padding: "clamp(24px, 2.8vw, 32px)",
        display: "flex",
        flexDirection: "column",
        gap: "clamp(14px, 1.6vw, 18px)",
        border: "1px solid rgba(0,0,0,0.04)",
      }}
    >
      <Icon />

      <h2
        style={{
          margin: 0,
          color: TEXT,
          fontFamily: FONT_HEADING,
          fontSize: "clamp(1.15rem, 1.5vw, 1.35rem)",
          fontWeight: 600,
          lineHeight: 1.25,
          letterSpacing: "-0.02em",
        }}
      >
        {card.title}
      </h2>

      <p
        style={{
          margin: 0,
          color: TEXT_BODY,
          fontFamily: FONT_BODY,
          fontSize: "clamp(0.95rem, 1.05vw, 1.02rem)",
          lineHeight: 1.6,
        }}
      >
        {card.description}
      </p>

      <div style={{ marginTop: "clamp(4px, 0.6vw, 8px)" }}>
        <Link
          href={card.href}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px 22px",
            borderRadius: "999px",
            backgroundColor: BTN_LIME,
            color: GREEN_ACCENT,
            fontFamily: FONT_HEADING,
            fontSize: "0.92rem",
            fontWeight: 600,
            textDecoration: "none",
            transition: "filter 0.2s ease, transform 0.2s ease",
          }}
        >
          {card.buttonLabel}
        </Link>
      </div>
    </article>
  );
}

/**
 * @param {{ post: object }} props
 */
export default function BlogPostSection({ post }) {
  return (
    <>
    <section
      style={{
        width: "100%",
        backgroundColor: SECTION_BG,
        boxSizing: "border-box",
        padding:
          "clamp(112px, 11vw, 148px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 120px)",
      }}
    >
      <div
        className="blog-post-layout"
        style={{
          maxWidth: "min(1280px, 100%)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) min(340px, 34%)",
          gap: "clamp(36px, 5vw, 72px)",
          alignItems: "start",
        }}
      >
        <article className="blog-post-main">
          <h1
            style={{
              margin: 0,
              color: TEXT,
              fontFamily: FONT_HEADING,
              fontSize: "clamp(2rem, 3.6vw, 3rem)",
              fontWeight: 600,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
            }}
          >
            {post.title}
          </h1>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "clamp(12px, 1.8vw, 20px)",
              marginTop: "clamp(20px, 2.4vw, 28px)",
              marginBottom: "clamp(28px, 3.2vw, 40px)",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "6px 14px",
                borderRadius: "999px",
                backgroundColor: GREEN_ACCENT,
                color: "#ffffff",
                fontFamily: FONT_HEADING,
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              {post.category}
            </span>

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: TEXT_BODY,
                fontFamily: FONT_BODY,
                fontSize: "0.92rem",
                fontWeight: 500,
              }}
            >
              <Clock size={17} strokeWidth={1.75} aria-hidden />
              <time dateTime={post.dateTime || undefined}>{post.dateLabel}</time>
            </span>

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: TEXT_BODY,
                fontFamily: FONT_BODY,
                fontSize: "0.92rem",
                fontWeight: 500,
              }}
            >
              <User size={17} strokeWidth={1.75} aria-hidden />
              {post.author}
            </span>
          </div>

          <BlogPostContent blocks={post.blocks} />
          <BlogPostFaq items={post.faq} />
          <BlogPostFooter author={post.authorBio} previousPost={post.previousPost} />
        </article>

        <aside
          className="blog-post-sidebar"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(20px, 2.4vw, 28px)",
            position: "sticky",
            top: "clamp(96px, 10vw, 112px)",
            alignSelf: "start",
          }}
        >
          {BLOG_SIDEBAR_CARDS.map((card) => (
            <SidebarCard key={card.id} card={card} />
          ))}
        </aside>
      </div>

      <style>{`
        .blog-post-sidebar-card {
          transition:
            background-color 0.38s ease,
            padding 0.38s cubic-bezier(0.33, 1, 0.28, 1);
        }

        .blog-post-sidebar-card:hover {
          background-color: ${LIME_HOVER} !important;
          padding-top: clamp(30px, 3.2vw, 38px) !important;
          padding-bottom: clamp(30px, 3.2vw, 38px) !important;
        }

        .blog-post-sidebar-card a:hover {
          filter: brightness(0.97);
          transform: translateY(-1px);
        }

        @media (max-width: 960px) {
          .blog-post-layout {
            grid-template-columns: 1fr !important;
          }
          .blog-post-sidebar {
            position: static !important;
            top: auto !important;
          }
        }
      `}</style>
    </section>

    <BlogPostRelated articles={post.relatedArticles} />
    </>
  );
}