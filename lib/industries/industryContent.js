import {
  INDUSTRY_BY_SLUG,
  INDUSTRY_ENTRIES,
  INDUSTRY_SLUGS,
  getIndustryHref,
} from "./industryRegistry";

function seoKeywords(name) {
  return [
    `${name} website design Qatar`,
    `${name} WordPress development`,
    "WordPress agency Qatar",
    `${name} web design`,
    "WordPress hosting Qatar",
    `${name} website developer`,
    "WordPress SEO Qatar",
    `${name} website Qatar`,
  ];
}

function audienceRole(slug, name) {
  const roles = {
    "agriculture-and-farming": "agripreneurs",
    attorney: "legal practices",
    "law-firm": "law firms",
    "catholic-parish": "parish communities",
    charity: "charitable organizations",
    church: "church communities",
    college: "colleges",
    university: "universities",
    school: "schools",
    restaurant: "restaurant operators",
    hotel: "hoteliers",
    cafe: "café owners",
    hospitality: "hospitality operators",
    tourism: "tourism operators",
    travel: "travel businesses",
    startup: "founders",
    saas: "SaaS founders",
    tech: "technology companies",
    "real-estate": "real estate professionals",
    "non-profit": "non-profit teams",
    "small-business": "small business owners",
    corporate: "corporate teams",
    b2b: "B2B companies",
    medical: "medical practices",
    dental: "dental practices",
    orthodontist: "orthodontic practices",
    healthcare: "healthcare providers",
    "health-and-wellness": "wellness brands",
    "gym-and-fitness": "fitness businesses",
    "wedding-venue": "venue operators",
    city: "municipal teams",
  };
  return roles[slug] ?? `${name.toLowerCase()} businesses`;
}

function buildProcessItems(name) {
  return [
    {
      number: "1",
      title: "Kickoff & creative brief",
      body: `We dive deep into your ${name} organization—brand, mission, audience, and goals. With our expert design team, you’ll define the website design services needed to build a project overview and creative blueprint that guides your site’s design and development from day one.`,
    },
    {
      number: "2",
      title: "Website mock-ups & design",
      body: `Our senior website designers bring concepts to life through a collaborative mock-up process. Interactive feedback and revision rounds strengthen your ${name} website and keep your dedicated design team aligned throughout development. We ensure UI and UX reflect your vision and meet modern standards.`,
    },
    {
      number: "3",
      title: "Website development",
      body: `Our ${name} web designers and developers transform approved designs into WordPress—using an industry-leading drag-and-drop approach for easy updates and ongoing maintenance. Every build is optimized for performance, accessibility, and flawless display across all screen sizes and devices.`,
    },
    {
      number: "4",
      title: "Revisions & launch",
      body: `Revision rounds give our designers and your team time to refine the staging site before launch. As your ${name} website design partner in Qatar, we polish every detail until the build is production-ready—then launch with confidence.`,
    },
    {
      number: "5",
      title: "Hosting, security, & support",
      body: `We provide managed WordPress hosting on world-class infrastructure. CDN delivery, automated backups, SSL, and proactive security scanning keep your ${name} website fast, secure, and always available for visitors in Qatar and across the GCC.`,
    },
    {
      number: "6",
      title: "Get more leads and brand awareness",
      body: `A properly structured ${name} website—with optimized page speed, search engine optimization, and compelling visuals—helps your target audience discover your brand, trust your expertise, and enjoy a seamless user experience that converts visitors into qualified leads.`,
    },
  ];
}

function buildFaqItems(slug, name) {
  const role = audienceRole(slug, name);
  const lower = name.toLowerCase();

  return [
    {
      id: 1,
      question: `${name} website developer`,
      answer: `Eyrion’s WordPress developers specialize in ${lower} websites built for performance, clarity, and conversion. Based in Qatar and serving clients across the GCC, we translate your brand story into a fast, secure WordPress site—with custom design, structured content, and tools that make ongoing updates straightforward.`,
    },
    {
      id: 2,
      question: `WordPress web design is good news for ${role} in Qatar`,
      answer: `WordPress gives ${lower} organizations a flexible platform to showcase services, share expertise, and capture leads without unnecessary technical complexity. Eyrion helps ${role} in Qatar launch scalable sites with mobile-ready layouts, SEO foundations, and integrations that support sustainable growth.`,
    },
    {
      id: 3,
      question: `The process of web development for your ${lower} website`,
      answer: `Our process starts with discovery and creative planning, moves through design mock-ups and collaborative revisions, then into WordPress development, QA, and launch. Throughout, your dedicated project manager keeps timelines clear and feedback loops tight—so your ${lower} website ships on strategy, on brand, and ready to perform.`,
    },
    {
      id: 4,
      question: `Reliable web design services for ${lower} businesses`,
      answer: `Eyrion provides end-to-end WordPress services for ${lower} companies in Qatar—including design, development, managed hosting, security, maintenance, and SEO support. We build sites that earn trust, load quickly, and make it easy for your audience to engage—whether they are local customers in Doha or partners researching you internationally.`,
    },
  ];
}

function buildFaqSubtitle(name) {
  const lower = name.toLowerCase();
  return `Finding a trusted web design partner for a ${lower} business in Qatar is not always easy—that is why Eyrion exists. We are a team of experienced WordPress designers focused on websites that attract and retain customers so your organization can grow with confidence. Beyond smooth navigation and clear access to your services, we highlight the achievements and qualities that set your ${lower} brand apart. A well-optimized WordPress ${lower} website makes it easier to reach customers across Qatar and beyond—with strong UX, fast load times, SEO, and quality content that helps prospects find you and take action.`;
}

function buildIndustryContent(slug, name) {
  const lower = name.toLowerCase();

  return {
    slug,
    name,
    href: getIndustryHref(slug),
    metadata: {
      title: `${name} Website Design Qatar | WordPress Experts | Eyrion`,
      description: `Professional ${lower} web design and WordPress development in Qatar. Eyrion builds fast, SEO-ready ${lower} websites with hosting, maintenance, and ongoing support.`,
      keywords: seoKeywords(name),
      openGraph: {
        title: `${name} Website Design Qatar | Eyrion`,
        description: `Custom WordPress websites for ${lower} businesses in Qatar—design, development, hosting, SEO, and support from Eyrion.`,
        type: "website",
      },
    },
    hero: {
      title: `We build beautiful ${name} websites`,
      lead: `Professional ${name} web design, backed by a Qatar-based team of WordPress experts since 2011.`,
    },
    seoResults: {
      heading: `Dedicated project manager & website designer for every ${name} project`,
      intro1: `From kickoff to launch, Eyrion pairs each ${name} WordPress project with an experienced project manager and senior website designer—so your site stays on strategy, on schedule, and built to convert.`,
      intro2: `Here’s how our website design and development process works for ${name} businesses across Qatar and the GCC:`,
      items: buildProcessItems(name),
    },
    faq: {
      heading: `Attract paying customers with a flawless ${lower} website`,
      subtitle: buildFaqSubtitle(name),
      items: buildFaqItems(slug, name),
    },
  };
}

const CONTENT_BY_SLUG = Object.fromEntries(
  INDUSTRY_ENTRIES.map(({ slug, name }) => [slug, buildIndustryContent(slug, name)]),
);

// Flagship industry page — richer copy aligned with provided brief
CONTENT_BY_SLUG["agriculture-and-farming"].faq.items[1].question =
  "WordPress web design is good news for any agripreneur";
CONTENT_BY_SLUG["agriculture-and-farming"].faq.items[1].answer =
  "WordPress gives agriculture and farming businesses a flexible platform to showcase products, share expertise, and capture leads without heavy technical overhead. Eyrion helps agripreneurs in Qatar launch scalable sites with mobile-ready layouts, SEO foundations, and integrations that support growth—from local farm sales to export-oriented brands serving customers across the GCC.";

export { INDUSTRY_SLUGS };

export const INDUSTRY_MARKET_LINKS = INDUSTRY_ENTRIES.map(({ slug, name }) => ({
  name,
  href: getIndustryHref(slug),
}));

export function industryExists(slug) {
  return Boolean(CONTENT_BY_SLUG[slug]);
}

export function getIndustryContent(slug) {
  return CONTENT_BY_SLUG[slug] ?? null;
}

export function getIndustryMetadata(slug) {
  return getIndustryContent(slug)?.metadata ?? null;
}

export function getIndustryName(slug) {
  return INDUSTRY_BY_SLUG[slug]?.name ?? null;
}
