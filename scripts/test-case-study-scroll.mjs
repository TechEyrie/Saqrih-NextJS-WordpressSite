/**
 * Verifies case study client navigation + scroll sections.
 * Run: node scripts/test-case-study-scroll.mjs
 * Optional: CASE_STUDY_SLUG=earthscape HERO_MATCH=Earthscape node scripts/test-case-study-scroll.mjs
 * Requires dev server at http://localhost:3000
 */
import { chromium } from "playwright-core";

const BASE = process.env.BASE_URL || "http://localhost:3000";
const SLUG = process.env.CASE_STUDY_SLUG || "pathfinders";
const HERO_MATCH = process.env.HERO_MATCH || "Pathfinders";

async function runCaseStudyScrollTest(page) {
  console.log(`1. Homepage → ${SLUG} (client navigation)`);
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);

  const link = page.locator(`a[href="/case-studies/${SLUG}"]`).first();
  await link.waitFor({ state: "visible", timeout: 15000 });
  await link.click();
  await page.waitForURL(`**/case-studies/${SLUG}`, { timeout: 15000 });
  await page.waitForTimeout(2600);

  const heroOpacity = await page.locator("h1").first().evaluate((el) => getComputedStyle(el).opacity);
  const heroText = (await page.locator("h1").first().textContent())?.trim();
  console.log(`   Hero: "${heroText}" opacity=${heroOpacity}`);

  if (!heroText?.includes(HERO_MATCH) || parseFloat(heroOpacity) < 0.5) {
    throw new Error("Hero not visible after client navigation");
  }

  console.log("2. Customers section pin + accordion");
  const customersSection = page.locator(".customers-cards-section").first();
  await customersSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);

  const firstCardHeightBefore = await page
    .locator(".customers-card")
    .first()
    .evaluate((el) => el.getBoundingClientRect().height);
  await page.mouse.wheel(0, 2400);
  await page.waitForTimeout(1200);
  const firstCardHeightAfter = await page
    .locator(".customers-card")
    .first()
    .evaluate((el) => el.getBoundingClientRect().height);

  console.log(`   First card height before/after scroll: ${firstCardHeightBefore} → ${firstCardHeightAfter}`);
  if (Math.abs(firstCardHeightBefore - firstCardHeightAfter) < 20 && firstCardHeightBefore > 400) {
    throw new Error("Customers accordion did not respond to scroll (ScrollTrigger pin likely dead)");
  }

  console.log("3. EndToEnd horizontal carousel");
  const endSection = page.locator("text=Case Studies").last();
  await endSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);

  const trackXBefore = await page
    .locator(".case-study-card")
    .first()
    .evaluate((el) => {
      const track = el.closest(".will-change-transform");
      return track ? getComputedStyle(track).transform : "none";
    });
  await page.mouse.wheel(0, 1800);
  await page.waitForTimeout(1200);
  const trackXAfter = await page
    .locator(".case-study-card")
    .first()
    .evaluate((el) => {
      const track = el.closest(".will-change-transform");
      return track ? getComputedStyle(track).transform : "none";
    });

  console.log(`   Carousel transform before/after: ${trackXBefore} → ${trackXAfter}`);
  if (trackXBefore === trackXAfter) {
    throw new Error("EndToEnd carousel did not move on scroll");
  }

  console.log("4. CTA scrub section");
  const ctaSection = page.locator("section").filter({ hasText: "Ready to start your" }).first();
  await ctaSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  for (let i = 0; i < 4; i++) {
    await page.mouse.wheel(0, 900);
    await page.waitForTimeout(350);
  }
  const ctaContentOpacity = await page
    .locator("text=Ready to start your")
    .evaluate((el) => getComputedStyle(el).opacity);
  const ctaGlowMax = await page.evaluate(() => {
    const cta = [...document.querySelectorAll("section")].find((s) =>
      s.innerText.includes("Ready to start your"),
    );
    if (!cta) return 0;
    const glows = [...cta.querySelectorAll("div")].map((el) => parseFloat(getComputedStyle(el).opacity));
    return Math.max(...glows, 0);
  });

  console.log(`   CTA text opacity=${ctaContentOpacity}, max glow opacity=${ctaGlowMax}`);
  if (parseFloat(ctaContentOpacity) < 0.5) {
    throw new Error("CTA content not visible");
  }
  if (ctaGlowMax < 0.2) {
    throw new Error("CTA scroll scrub animation not running");
  }
}

async function main() {
  let browser;
  try {
    browser = await chromium.launch({ channel: "msedge", headless: true });
  } catch {
    browser = await chromium.launch({ channel: "chrome", headless: true });
  }

  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await runCaseStudyScrollTest(page);

  console.log(`\nAll case study scroll checks passed for /case-studies/${SLUG}.`);
  await browser.close();
}

main().catch((err) => {
  console.error("\nTEST FAILED:", err.message);
  process.exit(1);
});
