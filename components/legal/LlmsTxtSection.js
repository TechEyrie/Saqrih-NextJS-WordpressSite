"use client";

import { LLMS_TXT } from "../../content/eyrion-llms.txt";

export default function LlmsTxtSection() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        boxSizing: "border-box",
        padding: "clamp(24px, 4vw, 48px) clamp(16px, 3vw, 32px) clamp(48px, 6vw, 80px)",
      }}
    >
      <div
        style={{
          maxWidth: "min(1400px, 100%)",
          margin: "0 auto",
        }}
      >
        <pre
          style={{
            margin: 0,
            padding: 0,
            background: "transparent",
            border: "none",
            fontFamily:
              'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
            fontSize: "clamp(0.8rem, 1vw, 0.95rem)",
            lineHeight: 1.65,
            color: "#f5f5f5",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            overflowWrap: "anywhere",
          }}
        >
          {LLMS_TXT}
        </pre>
      </div>
    </section>
  );
}
