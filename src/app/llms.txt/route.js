import { LLMS_TXT } from "../../../content/saqrih-llms.txt";

export const dynamic = "force-static";

/** Canonical machine-readable llms.txt (text/plain). */
export async function GET() {
  return new Response(LLMS_TXT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
