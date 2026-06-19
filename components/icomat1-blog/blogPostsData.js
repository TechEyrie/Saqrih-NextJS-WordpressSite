/** Shared blog post data — extend as real posts are added */

import { getPagePic } from "../../lib/pageImages";

const BLOG_LISTING_PIC = getPagePic("blog", "listing", 1);

export const BLOG_SIDEBAR_CARDS = [
  {
    id: "featured-work",
    icon: "design",
    title: "See our featured website design work",
    description:
      "Check out some of the beautiful websites we've built for over 2,000 clients.",
    buttonLabel: "View projects",
    href: "/icomat-work",
  },
  {
    id: "support-maintenance",
    icon: "shield",
    title: "We offer WordPress support & maintenance",
    description:
      "Shake the stress of ongoing maintenance with plans supported by our team of WordPress experts.",
    buttonLabel: "Learn more",
    href: "/wordpress/maintainance",
  },
];

const MLS_POST_BLOCKS = [
  {
    type: "paragraphs",
    items: [
      "If you run a real estate website on WordPress, you've probably heard about MLS integration—but what does it actually mean, and how do you connect live property listings to your site without breaking compliance rules or slowing everything down?",
      "MLS (Multiple Listing Service) integration allows your WordPress site to display up-to-date property listings pulled directly from your local MLS feed. Instead of manually adding each listing, your site can automatically sync photos, prices, addresses, and availability—keeping buyers informed and your team focused on closing deals rather than data entry.",
    ],
  },
  {
    type: "heading",
    text: "What MLS integration actually means",
  },
  {
    type: "paragraphs",
    items: [
      "At its core, MLS integration connects your WordPress website to the Multiple Listing Service—the database real estate professionals use to share property data. When integrated correctly, your site can display active listings, price changes, open houses, and sold data without manual updates.",
      "Most integrations work through IDX (Internet Data Exchange), a set of rules and technologies that let you show MLS listings on your own domain while staying compliant with your board's display requirements. IDX feeds can be delivered via plugins, iframe wrappers, or direct API connections depending on your provider.",
      "Behind the scenes, many MLS boards still use RETS (Real Estate Transaction Standard) or newer RESO Web API standards to move data between systems. Your WordPress plugin or custom integration handles that complexity so visitors simply see fast, searchable listings that match your brand.",
    ],
  },
  {
    type: "featureList",
    items: [
      {
        title: "Real, live data",
        text: "Display live MLS listings, new listings, and sold data so buyers always see current inventory—not stale pages that hurt trust and conversions.",
      },
      {
        title: "More qualified traffic",
        text: "Listing pages and search results pages create deep, indexable pages that rank for neighborhood and property-type searches, bringing in buyers already looking to move.",
      },
      {
        title: "Lead capture at the moment of interest",
        text: "Pair MLS data with lead capture tools—saved searches, registration gates, and property inquiry forms—so you collect contact details when motivation is highest.",
      },
      {
        title: "Mobile responsive layouts",
        text: "Modern MLS integration ships with mobile responsive design out of the box, which matters because most home shoppers browse listings on phones first.",
      },
      {
        title: "Full control of your brand",
        text: "Visitors stay on your real estate site instead of leaking to Zillow or other portals, keeping your brand, analytics, and lead nurture sequences under your control.",
      },
    ],
  },
  {
    type: "heading",
    text: "Choosing the right MLS integration approach",
  },
  {
    type: "paragraphs",
    items: [
      "Not every MLS integration path fits every brokerage. Some teams want a polished plug-and-play IDX search experience; others need listings imported as native WordPress posts for maximum SEO control. The table below compares common options.",
    ],
  },
  {
    type: "table",
    headers: ["MLS Solution", "Best For", "Notes"],
    rows: [
      [
        "IDX Broker (IMPress plugin)",
        "Most real estate agents and small teams",
        "Largest IDX provider, free IDX WordPress plugin, full search and lead capture, and monthly fees scale with features.",
      ],
      [
        "Showcase IDX",
        "Agents who want a design-driven IDX search experience",
        "Polished property search UI, mobile-friendly out of the box, slightly higher pricing.",
      ],
      [
        "Realtyna Organic MLS",
        "Real estate professionals focused on SEO",
        "Imports listings as native WordPress posts via MLS feeds—strong for indexable listing URLs and custom templates.",
      ],
      [
        "iHomeFinder",
        "Brokerages needing multiple MLS feeds",
        "Strong feature set, advanced search, and support for teams managing several board connections.",
      ],
      [
        "dsIDXpress",
        "Smaller agents looking for a free version",
        "Lighter feature set with a free tier; good starting point before upgrading.",
      ],
      [
        "Custom RESO Web API build",
        "Brokerages with developer support",
        "Full control over property data, search UX, and CRM integrations—higher upfront build cost.",
      ],
    ],
  },
  {
    type: "paragraphs",
    items: [
      "The choice between IDX-based setups and import-based setups often comes down to SEO and maintenance. IDX keeps data on the provider's infrastructure and wraps it in your design; import-based tools create WordPress posts you can theme, interlink, and optimize like any other page. Talk with your developer about which model your MLS allows and which aligns with your growth plans.",
    ],
  },
  {
    type: "ctaLine",
    prefix: "Ready to launch?",
    link: {
      label: "Talk to our development team",
      href: "#contact",
      suffix: "and we'll scope your MLS integration for WordPress from MLS approval to launch",
    },
  },
  {
    type: "heading",
    text: "How MLS integration for WordPress actually works",
  },
  {
    type: "paragraphs",
    items: [
      "Once you've picked a provider, the implementation follows a predictable sequence. Most launches take a few weeks depending on MLS approval timelines, design customization, and how many listing templates you need.",
    ],
  },
  {
    type: "numberedSteps",
    items: [
      {
        title: "Pick your IDX or MLS provider",
        text: "Choose between IDX Broker, Showcase IDX, Realtyna, iHomeFinder, or a custom RESO Web API build based on your MLS coverage, budget, and SEO goals.",
      },
      {
        title: "Open your provider account",
        text: "Set up your IDX broker account (or equivalent), confirm your MLS membership is in good standing, and request approval for the feed you plan to display.",
      },
      {
        title: "Complete MLS compliance paperwork",
        text: "Submit any required agreements to your local board, verify display rules, and obtain API keys or RETS credentials from your provider.",
      },
      {
        title: "Install the IDX plugin or MLS import plugin",
        text: "From the WordPress dashboard, install the IDX WordPress plugin (IMPress for IDX Broker, Showcase IDX, Realtyna's plugin, or whichever fits your provider) and activate it.",
      },
      {
        title: "Connect your MLS feed",
        text: "Enter API keys or RETS credentials, map your MLS boards, and run an initial sync to confirm listings import or display correctly.",
      },
      {
        title: "Configure listing pages and search",
        text: "Set up property search forms, map search, filters, and single listing templates so visitors can browse by city, price, beds, and property type.",
      },
      {
        title: "Style your IDX/MLS pages",
        text: "Match the provider's pages to your site's design through a wrapper page (IDX Broker), template overrides (Realtyna), or design controls inside the plugin (Showcase IDX).",
      },
      {
        title: "Wire up lead capture tools",
        text: "Add capture forms across the site, integrate with your CRM, and turn on saved search and lead login features where supported.",
      },
      {
        title: "Optimize for SEO",
        text: "Configure SEO friendly URLs, structured data, and indexable pages so listings, listing categories, and city pages rank in search engines.",
      },
      {
        title: "Launch, then monitor",
        text: "Submit a sitemap to Google, watch how search engines crawl your new listing pages, and run end-to-end tests on lead capture, mobile responsiveness, and search performance.",
      },
    ],
  },
  {
    type: "paragraphs",
    items: [
      "For setups using an MLS import approach (like Realtyna Organic MLS), the workflow is slightly different. Instead of routing visitors through an external IDX system, the MLS import plugin pulls listing data into WordPress as custom post types. That gives you full control over templates, internal linking, and on-page SEO—at the cost of more setup and ongoing sync monitoring.",
      "Whichever path you choose, plan for regular updates: MLS rules change, plugins release security patches, and search algorithms reward fast, mobile-friendly listing experiences. A well-maintained integration pays dividends in leads long after launch day.",
    ],
  },
];

/** Template post — matches reference layout; used as default for unknown slugs during build-out */
export const BLOG_POST_TEMPLATE = {
  slug: "mls-integration-for-wordpress",
  title:
    "MLS Integration for WordPress: How to Connect Real Estate Listings to Your Site",
  category: "Integrations",
  dateLabel: "1 week ago",
  dateTime: "2026-06-10",
  author: "Ben Giordano",
  blocks: MLS_POST_BLOCKS,
  faq: [
    {
      question: "Do I need an active MLS membership before integrating listings on WordPress?",
      answer:
        "Yes. Most IDX and MLS import providers require proof of membership with your local board before they activate your feed. Your broker or association can confirm which integrations are approved for your market.",
    },
    {
      question: "What is the difference between IDX and an MLS import plugin?",
      answer:
        "IDX displays listings through your provider's search system wrapped in your site design. MLS import plugins pull listing data into WordPress as native posts or custom post types, giving you more control over URLs, templates, and on-page SEO.",
    },
    {
      question: "How long does a typical MLS integration take to launch?",
      answer:
        "Most agent sites launch in two to six weeks depending on MLS approval times, design customization, and how many listing templates you need. Custom API builds can take longer but offer the most flexibility.",
    },
    {
      question: "Will MLS listing pages help my real estate SEO?",
      answer:
        "They can—especially when listings create indexable city, neighborhood, and property-type pages with unique content, structured data, and fast mobile performance. Import-based setups often provide the strongest SEO control.",
    },
    {
      question: "Can I customize how listings look on my WordPress site?",
      answer:
        "Absolutely. Wrapper pages, template overrides, and theme-level styling let you match listings to your brand. The level of control depends on whether you use IDX, import-based tools, or a custom RESO Web API build.",
    },
  ],
  authorBio: {
    name: "Ben Giordano",
    url: "https://www.linkedin.com/in/bengiordano",
    avatar: BLOG_LISTING_PIC,
    bio: "Ben Giordano is a WordPress developer and agency leader with more than a decade of experience building high-performance real estate websites. He helps brokerages and agents connect MLS data, capture leads, and launch listing experiences that rank and convert.",
  },
  previousPost: {
    title: "IDX Integration for WordPress: How to Connect MLS Listings to Your Site",
    href: "/blog/idx-integration-for-wordpress",
  },
  relatedArticles: [
    {
      slug: "idx-integration-for-wordpress",
      title: "IDX Integration for WordPress: How to Connect MLS Listings to Your Site",
      image: BLOG_LISTING_PIC,
    },
  ],
};

const POSTS_BY_SLUG = {
  [BLOG_POST_TEMPLATE.slug]: BLOG_POST_TEMPLATE,
};

/** @param {string} slug */
export function getBlogPostBySlug(slug) {
  if (POSTS_BY_SLUG[slug]) return POSTS_BY_SLUG[slug];
  return { ...BLOG_POST_TEMPLATE, slug };
}
