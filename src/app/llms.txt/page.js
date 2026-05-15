import LlmsTxtSection from "../../../components/legal/LlmsTxtSection";
import { LLMS_TXT } from "../../../content/eyrion-llms.txt";

export const metadata = {
  title: "llms.txt",
  description:
    "Structured context for AI systems interpreting Eyrion WordPress agency content.",
  robots: { index: true, follow: true },
};

export default function LlmsTxtPage() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", minHeight: "100vh" }}>
      <LlmsTxtSection />
      {/* Plain-text mirror for non-JS crawlers */}
      <noscript>
        <pre style={{ color: "#f5f5f5", padding: 24, whiteSpace: "pre-wrap" }}>
          {LLMS_TXT}
        </pre>
      </noscript>
    </div>
  );
}
