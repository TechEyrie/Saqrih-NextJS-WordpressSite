import { getLocationEntry } from "./locationRegistry";

const QATAR_CONTENT_OVERRIDES = {
  "al-rayyan": {
    heroLead:
      "Saqrih partners with Al Rayyan businesses to launch and grow high-performing WordPress websites—from custom design and development to managed hosting, proactive maintenance, dedicated support, and SEO strategies that drive qualified traffic and measurable results.",
    seoIntro1:
      "From first conversation to launch and beyond, Saqrih pairs each WordPress web design project in Al Rayyan with an experienced project manager and senior website designer—so your site stays on strategy, on schedule, and built to perform.",
    faqSubtitle:
      "WordPress is one of the world\u2019s leading website platforms, powering tens of millions of sites globally. For business owners in Al Rayyan who want to elevate their online presence, working with experienced WordPress professionals makes all the difference—from design and development to hosting, support, and SEO.",
    localContext: {
      qualityAnswer:
        "Your website is often the first impression customers have of your brand, so investing in quality WordPress design and development is essential to turning visitors into leads and loyal clients.",
      agencyAnswer:
        "Whether you are refreshing an existing site or building from scratch, a dedicated agency ensures your WordPress foundation is built to perform, not just look good.",
      developersAnswer:
        "If you want to take your WordPress website to the next level, our team provides the technical expertise and strategic guidance to help you launch a site that makes a lasting impact on every visitor.",
    },
  },
  "al-wakkrah": {
    heroLead:
      "Saqrih helps Al Wakrah companies build fast, secure WordPress websites that reflect their brand and convert visitors—from custom web design and development to managed hosting, maintenance, dedicated support, and SEO built for the Qatar market.",
    seoIntro1:
      "From kickoff to launch, Saqrih assigns every WordPress web design project in Al Wakrah a dedicated project manager and senior website designer—keeping your build on track, on brand, and optimized for results.",
    faqSubtitle:
      "WordPress remains the platform of choice for millions of businesses worldwide. For Al Wakrah owners ready to strengthen their digital presence, partnering with skilled WordPress experts ensures your site is designed, developed, and supported to professional standards.",
    localContext: {
      qualityAnswer:
        "In a growing commercial hub like Al Wakrah, a polished WordPress site helps you stand out, earn trust, and convert more enquiries into customers.",
      agencyAnswer:
        "From new builds to redesigns, we align strategy, design, and development so your WordPress site supports real business outcomes in Al Wakrah and across Qatar.",
      developersAnswer:
        "Our team brings hands-on WordPress experience to every project—helping Al Wakrah businesses launch sites that are fast, secure, and ready to grow.",
    },
  },
  "al-khor": {
    heroLead:
      "Saqrih supports Al Khor businesses with end-to-end WordPress services—professional web design, custom development, managed hosting, ongoing maintenance, reliable support, and SEO strategies that help you reach customers across northern Qatar and the wider GCC.",
    seoIntro1:
      "Every WordPress project in Al Khor is led by an experienced project manager and website designer at Saqrih—giving you clear communication, creative direction, and a build process designed for long-term success.",
    faqSubtitle:
      "With WordPress powering a large share of the web, Al Khor businesses need a site that performs as well as it looks. Saqrih delivers expert WordPress design, development, and ongoing care tailored to your goals.",
    localContext: {
      qualityAnswer:
        "For organisations in Al Khor, a well-built WordPress website strengthens credibility and makes it easier for customers to engage with your services online.",
      agencyAnswer:
        "We combine local market insight with proven WordPress expertise to deliver websites that serve Al Khor audiences and scale with your ambitions.",
      developersAnswer:
        "Saqrih\u2019s developers support Al Khor clients with full-stack WordPress solutions—from initial concept through launch, hosting, and continuous improvement.",
    },
  },
  mesaieed: {
    heroLead:
      "Saqrih works with Mesaieed businesses to create high-performing WordPress websites—combining custom design, robust development, secure hosting, proactive maintenance, responsive support, and SEO that connects you with customers in industrial and commercial sectors across Qatar.",
    seoIntro1:
      "Saqrih brings a dedicated project manager and website designer to every WordPress engagement in Mesaieed—so your project moves forward with clarity, quality craftsmanship, and a focus on measurable business impact.",
    faqSubtitle:
      "WordPress offers the flexibility and scalability Mesaieed businesses need online. Saqrih provides the expert design, development, and support to turn that potential into a website that works hard for your brand.",
    localContext: {
      qualityAnswer:
        "A professional WordPress site gives Mesaieed companies a competitive edge—improving navigation, trust, and the overall experience for every visitor.",
      agencyAnswer:
        "Whether you need a corporate site, service portal, or marketing hub, our Mesaieed-focused WordPress team delivers solutions shaped around your objectives.",
      developersAnswer:
        "Our WordPress specialists help Mesaieed organisations launch reliable, conversion-focused websites backed by hosting, security, and ongoing technical support.",
    },
  },
  "umm-salal": {
    heroLead:
      "Saqrih partners with Umm Salal businesses to design and develop WordPress websites that perform—from bespoke web design and development to managed hosting, maintenance, expert support, and SEO that helps you reach audiences across Qatar.",
    seoIntro1:
      "For Umm Salal clients, Saqrih provides a dedicated project manager and website designer on every WordPress build—ensuring structured delivery, creative excellence, and a site built to support your growth.",
    faqSubtitle:
      "Businesses in Umm Salal increasingly rely on WordPress for a flexible, scalable web presence. Saqrih\u2019s team brings the design, development, and support expertise to make that investment count.",
    localContext: {
      qualityAnswer:
        "Investing in quality WordPress design and development helps Umm Salal businesses make a strong first impression and turn website traffic into meaningful leads.",
      agencyAnswer:
        "We tailor every WordPress project to your brand and audience—delivering a site that represents Umm Salal businesses professionally and supports long-term digital growth.",
      developersAnswer:
        "Saqrih\u2019s WordPress developers serve Umm Salal and the wider Doha region with complete website services—from planning and design through launch and ongoing optimization.",
    },
  },
  "al-shamal": {
    heroLead:
      "Saqrih helps Al Shamal businesses launch and maintain exceptional WordPress websites—offering custom web design, professional development, managed hosting, maintenance, dedicated support, and SEO solutions tailored for northern Qatar and beyond.",
    seoIntro1:
      "Each WordPress web design project in Al Shamal is supported by Saqrih\u2019s experienced project manager and website designer—delivering a smooth process, thoughtful creative work, and a site engineered to perform.",
    faqSubtitle:
      "WordPress is a proven foundation for businesses across Al Shamal and Qatar. Saqrih provides the specialist design, development, and support services you need to build a site that earns trust and drives results.",
    localContext: {
      qualityAnswer:
        "For Al Shamal enterprises and local businesses alike, a capable WordPress website is essential for visibility, credibility, and sustainable online growth.",
      agencyAnswer:
        "Our team understands the needs of businesses serving northern Qatar and builds WordPress solutions that align with your brand, audience, and commercial goals.",
      developersAnswer:
        "Saqrih\u2019s WordPress developers support Al Shamal clients with end-to-end services—helping you launch a secure, fast, and search-friendly website that continues to improve over time.",
    },
  },
};

function seoKeywords(name, region) {
  return [
    `WordPress web design ${name}`,
    `WordPress agency ${region.seoCountry}`,
    `website development ${name}`,
    `WordPress hosting ${region.seoCountry}`,
    `WordPress maintenance ${name}`,
    `WordPress SEO ${region.seoCountry}`,
    `WordPress developers ${name}`,
    `WordPress website ${region.seoCountry}`,
  ];
}

function buildProcessItems(name, region) {
  return [
    {
      number: "1",
      title: "Kickoff & creative brief",
      body: `We dive deep into your ${name} organization—brand, mission, audience, and goals. With our expert design team, you\u2019ll define the website design services needed to build a project overview and creative blueprint that guides your site\u2019s design and development.`,
    },
    {
      number: "2",
      title: "Website mock-ups & design",
      body: `Our senior website designers bring concepts to life through a collaborative mock-up process. Interactive feedback and revision rounds strengthen your website and keep your dedicated design team aligned throughout the ${name} website development process.`,
    },
    {
      number: "3",
      title: "Website development",
      body: `Our ${name} web designers and developers transform approved designs into WordPress—using a flexible, drag-and-drop approach for easy updates and ongoing maintenance. Every build is optimized for performance, accessibility, and flawless display across all devices.`,
    },
    {
      number: "4",
      title: "Revisions & launch",
      body: `Revision rounds give our designers and your team time to refine the staging site before launch. As your WordPress website design partner, we polish every detail until your ${name} site is production-ready—then launch with confidence.`,
    },
    {
      number: "5",
      title: "Hosting, security, & support",
      body: `We provide managed WordPress hosting on world-class infrastructure. CDN delivery, automated backups, SSL, and proactive security scanning keep your site fast, protected, and always available for visitors in ${name}, across ${region.areaLabel}.`,
    },
    {
      number: "6",
      title: "Get more leads and brand awareness",
      body: `A properly structured website—with optimized page speed, search engine optimization, and professional design—helps your target audience discover your ${name} brand, trust your expertise, and enjoy a seamless user experience that converts visitors into qualified leads.`,
    },
  ];
}

function defaultLocalContext(name, region) {
  return {
    qualityAnswer: `For businesses in ${name}, a professionally built WordPress site strengthens credibility, improves user experience, and supports sustainable growth across ${region.areaLabel}.`,
    agencyAnswer: `Whether you are launching a new site or redesigning an existing one, Saqrih delivers WordPress solutions tailored to your goals in ${name} and ${region.countryLabel}.`,
    developersAnswer: `Our WordPress team supports clients in ${name} with design, development, hosting, security, maintenance, and SEO—helping you launch a site built to perform.`,
  };
}

function buildFaqs(name, region, localContext) {
  return [
    {
      id: 1,
      question: `Why is a quality WordPress website important for ${name} businesses?`,
      answer: `WordPress powers an estimated 64 million websites worldwide—and remains one of the most trusted platforms for business owners. For organizations in ${name}, a professionally built WordPress site with seamless navigation improves user experience, builds credibility, and supports long-term growth. ${localContext.qualityAnswer}`,
    },
    {
      id: 2,
      question: `What makes an effective WordPress website in ${region.seoCountry}?`,
      answer: `An effective WordPress website in ${region.seoCountry} combines fast performance, mobile-responsive design, clear navigation, and content structured for both users and search engines. It should reflect your brand, load quickly on every device, and make it easy for visitors in ${name} and across ${region.areaLabel} to find what they need. Strong UX, secure hosting, ongoing maintenance, and SEO-ready architecture work together to help your site rank, convert, and scale.`,
    },
    {
      id: 3,
      question: `Why work with a WordPress company and development agency serving ${name}?`,
      answer: `Partnering with a WordPress agency that understands ${name} means working with experts who align design, development, and strategy with your market and audience. At Saqrih, we deliver customized WordPress web design and development solutions—from creative direction to launch and ongoing support. ${localContext.agencyAnswer}`,
    },
    {
      id: 4,
      question: `Who are the WordPress developers serving ${name} and ${region.seoCountry}?`,
      answer: `Saqrih\u2019s WordPress developers and designers serve businesses in ${name}, ${region.hub}, and across ${region.countryLabel} with end-to-end website services—including custom design, development, managed hosting, maintenance, security, and SEO. ${localContext.developersAnswer}`,
    },
  ];
}

function buildDefaultCopy(entry) {
  const { name, region, placeLabel } = entry;
  return {
    heroLead: `Saqrih helps ${name} businesses build high-performing WordPress websites—from custom web design and development to managed hosting, proactive maintenance, dedicated support, and SEO strategies tailored for ${region.areaLabel}.`,
    seoIntro1: `From kickoff to launch, Saqrih pairs every WordPress web design project in ${name} with an experienced project manager and senior website designer—keeping your build on strategy, on schedule, and optimized for results.`,
    faqSubtitle: `WordPress is one of the world\u2019s leading website platforms. For business owners in ${placeLabel} who want a stronger digital presence, working with experienced WordPress professionals makes all the difference—from design and development to hosting, support, and SEO.`,
    localContext: defaultLocalContext(name, region),
  };
}

function buildLocationContent(entry) {
  const { slug, name, region, placeLabel } = entry;
  const override = QATAR_CONTENT_OVERRIDES[slug] ?? {};
  const defaults = buildDefaultCopy(entry);
  const copy = {
    heroLead: override.heroLead ?? defaults.heroLead,
    seoIntro1: override.seoIntro1 ?? defaults.seoIntro1,
    faqSubtitle: override.faqSubtitle ?? defaults.faqSubtitle,
    localContext: override.localContext ?? defaults.localContext,
  };

  return {
    slug,
    name,
    placeLabel,
    metadata: {
      title: `WordPress Web Design in ${placeLabel} | Saqrih`,
      description: `${region.agencyBase} WordPress agency serving ${name} with custom web design, website development, managed hosting, maintenance, support, and SEO solutions.`,
      keywords: seoKeywords(name, region),
      openGraph: {
        title: `WordPress Web Design in ${placeLabel} | Saqrih`,
        description: `Custom WordPress web design, development, hosting, maintenance, support, and SEO for businesses in ${placeLabel}.`,
        type: "website",
      },
    },
    hero: {
      title: `WordPress Web Design in ${placeLabel}`,
      lead: copy.heroLead,
    },
    seoResults: {
      heading: `Dedicated project manager & website designer for every ${name} project`,
      intro1: copy.seoIntro1,
      intro2: `Here\u2019s how our WordPress website design and development process works for businesses in ${placeLabel}:`,
      items: buildProcessItems(name, region),
    },
    faq: {
      heading: `The importance of WordPress experts in ${name}`,
      subtitle: copy.faqSubtitle,
      items: buildFaqs(name, region, copy.localContext),
    },
  };
}

const CONTENT_BY_SLUG = Object.create(null);

export function getMarketLocationContent(slug) {
  const entry = getLocationEntry(slug);
  if (!entry) return null;
  if (!CONTENT_BY_SLUG[slug]) {
    CONTENT_BY_SLUG[slug] = buildLocationContent(entry);
  }
  return CONTENT_BY_SLUG[slug];
}

export function getMarketLocationMetadata(slug) {
  return getMarketLocationContent(slug)?.metadata ?? null;
}

export const getQatarLocationContent = getMarketLocationContent;
export const getQatarLocationMetadata = getMarketLocationMetadata;
