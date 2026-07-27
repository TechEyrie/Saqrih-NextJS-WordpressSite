import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import GlobalLoadingWrapper from "../../components/icomat1/GlobalLoadingWrapper";
import DeferredStylesheet from "../../components/DeferredStylesheet";
import JsonLd from "../../components/seo/JsonLd";
import { SITE_ORIGIN } from "../../lib/siteOrigin";
import { organizationJsonLd, websiteJsonLd } from "../../lib/jsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const SITE_TITLE =
  "Saqrih - Web Development Agency in Doha, Qatar";
const SITE_DESCRIPTION =
  "Saqrih is a Qatar-based digital agency delivering website development, web apps, SaaS, e-commerce, mobile apps, WordPress, CMS, APIs, and ongoing support.";

export const metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: SITE_TITLE,
    template: "%s | Saqrih",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Saqrih",
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Saqrih",
    type: "website",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Saqrih",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-default.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="https://api.w.org/" href="/wp-json/" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Saqrih"
          href="/feed/"
        />
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <style
          dangerouslySetInnerHTML={{
            __html: `
          body{margin:0;background:#e8e8e8}
          .icomat-hero-with-quote{background:#162d24;min-height:100vh}
          .skip-to-main{position:absolute;left:-9999px;z-index:100000}
        `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `if("scrollRestoration"in history){history.scrollRestoration="manual";}`,
          }}
        />
        <DeferredStylesheet href="/fonts/deferred-fonts.css" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Script
          src="/wp-includes/js/wp-embed.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/three-bas@2.0.1/dist/bas.min.js"
          strategy="lazyOnload"
        />
        <GlobalLoadingWrapper>{children}</GlobalLoadingWrapper>
      </body>
    </html>
  );
}
