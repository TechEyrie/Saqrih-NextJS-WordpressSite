import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
import GlobalLoadingWrapper from "../../components/icomat1/GlobalLoadingWrapper";
import DeferredStylesheet from "../../components/DeferredStylesheet";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const SITE_TITLE = "Saqrih - Qatar - Doha Based WordPress Development Agency";

export const metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s | Saqrih",
  },
  description:
    "Saqrih is a premier WordPress agency delivering design, development, hosting, maintenance, and ongoing support.",
  applicationName: "Saqrih",
  openGraph: {
    title: SITE_TITLE,
    description:
      "Saqrih is a premier WordPress agency delivering design, development, hosting, maintenance, and ongoing support.",
    siteName: "Saqrih",
    type: "website",
    images: [
      {
        url: "/logo/Saqrih_real_logo.png",
        width: 1200,
        height: 630,
        alt: "Saqrih",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Saqrih is a premier WordPress agency delivering design, development, hosting, maintenance, and ongoing support.",
    images: ["/logo/Saqrih_real_logo.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  generator: "WordPress 6.7.2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="https://api.w.org/" href="/wp-json/" />
        <link rel="alternate" type="application/rss+xml" title="Saqrih" href="/feed/" />
        <style dangerouslySetInnerHTML={{ __html: `
          body{margin:0;background:#e8e8e8}
          .icomat-hero-with-quote{background:#162d24;min-height:100vh}
          .skip-to-main{position:absolute;left:-9999px;z-index:100000}
        `}} />
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
  )
}
