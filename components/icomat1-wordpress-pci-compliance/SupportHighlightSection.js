"use client";

import Image from "next/image";
import { getPagePic } from "../../lib/pageImages";

const DEFAULT_IMAGE = getPagePic("wp-pci-compliance", "supportHighlight");

export default function SupportHighlightSection({ imageSrc = DEFAULT_IMAGE }) {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#F4F1EA",
        boxSizing: "border-box",
        padding: "clamp(56px, 7vw, 96px) clamp(24px, 5vw, 72px)",
      }}
    >
      <header
        style={{
          maxWidth: "min(920px, 100%)",
          margin: "0 auto",
          paddingBottom: "clamp(36px, 5vw, 56px)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontWeight: 700,
            fontSize: "clamp(1.75rem, 3.2vw, 2.65rem)",
            lineHeight: 1.12,
            letterSpacing: "-0.03em",
            color: "#155E46",
          }}
        >
          Why Elementor is the Ultimate WordPress Page Builder
        </h2>
      </header>

      <div
        className="support-highlight-inner"
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.05fr)",
          alignItems: "center",
          gap: "clamp(32px, 5vw, 64px)",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            borderRadius: "clamp(16px, 2vw, 24px)",
            overflow: "hidden",
            aspectRatio: "4 / 5",
            maxHeight: "min(520px, 70vh)",
            boxShadow: "0 24px 48px rgba(22, 45, 36, 0.12)",
          }}
        >
          <Image
            src={imageSrc}
            alt="Web developer working on a WordPress site layout"
            fill
            sizes="(max-width: 900px) 100vw, 480px"
            style={{ objectFit: "cover" }}
            priority={false}
          />
        </div>

        <div style={{ minWidth: 0 }}>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(1rem, 1.15vw, 1.125rem)",
              lineHeight: 1.75,
              color: "rgba(22, 35, 30, 0.88)",
              maxWidth: "52ch",
            }}
          >
            WordPress is a highly flexible platform, especially when it comes to themes and page
            builders, but with so many options available, choosing the right one can be challenging.
            You need a tool that combines power, flexibility, and ease of use to build a professional
            website without unnecessary complexity.
          </p>
          <p
            style={{
              margin: "clamp(12px, 1.5vw, 18px) 0 0",
              fontSize: "clamp(1rem, 1.15vw, 1.125rem)",
              lineHeight: 1.75,
              color: "rgba(22, 35, 30, 0.88)",
              maxWidth: "52ch",
            }}
          >
            Elementor stands out as one of the most powerful WordPress page builders thanks to its
            intuitive drag-and-drop editor, responsive design controls, and extensive customization
            options. It allows you to create visually rich, high-performing websites without needing
            advanced coding skills.
          </p>
          <p
            style={{
              margin: "clamp(12px, 1.5vw, 18px) 0 0",
              fontSize: "clamp(1rem, 1.15vw, 1.125rem)",
              lineHeight: 1.75,
              color: "rgba(22, 35, 30, 0.88)",
              maxWidth: "52ch",
            }}
          >
            At Saqrih, we specialize in Elementor-based WordPress development. Our team uses
            Elementor to design, optimize, and enhance websites that are not only visually appealing
            but also fast, scalable, and aligned with your business goals.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .support-highlight-inner {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
