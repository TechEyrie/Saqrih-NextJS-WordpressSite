/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const emptyPolyfill = path.join(__dirname, "lib/empty-polyfill.js");

const nextConfig = {
  experimental: {
    optimizePackageImports: ["gsap", "lenis"],
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "next/dist/build/polyfills/polyfill-module": emptyPolyfill,
      "../build/polyfills/polyfill-module": emptyPolyfill,
    };
    return config;
  },
  turbopack: {
    resolveAlias: {
      "next/dist/build/polyfills/polyfill-module": "./lib/empty-polyfill.js",
      "../build/polyfills/polyfill-module": "./lib/empty-polyfill.js",
    },
  },
  async redirects() {
    return [
      {
        source: "/portfolio/syntaxstudios",
        destination: "/case-studies/syntaxstudios",
        permanent: true,
      },
      {
        source: "/why-eyrion",
        destination: "/why-saqrih",
        permanent: true,
      },
      // Typo + odd service slugs → canonical
      {
        source: "/wordpress/maintainance",
        destination: "/wordpress/maintenance",
        permanent: true,
      },
      {
        source: "/wordpress/premium-support1",
        destination: "/wordpress/premium-support",
        permanent: true,
      },
      {
        source: "/icomat1/wordpress/maintainance",
        destination: "/wordpress/maintenance",
        permanent: true,
      },
      {
        source: "/icomat1/wordpress/premium-support1",
        destination: "/wordpress/premium-support",
        permanent: true,
      },
      // Duplicate location / industry mirrors → canonical hubs
      {
        source: "/wordpress/locations/:slug",
        destination: "/locations/:slug",
        permanent: true,
      },
      {
        source: "/wordpress/industries/:slug",
        destination: "/industries/:slug",
        permanent: true,
      },
      {
        source: "/wordpress/industries",
        destination: "/industries",
        permanent: true,
      },
      // Legacy /dev shells → public URLs
      {
        source: "/icomat1/wordpress/:path*",
        destination: "/wordpress/:path*",
        permanent: true,
      },
      {
        source: "/icomat1-about-us",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/icomat1-work",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/icomat-work",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/icomat1",
        destination: "/",
        permanent: true,
      },
      {
        source: "/icomat",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home1",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value: '</wp-json/>; rel="https://api.w.org/"',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/favicon.ico",
        destination: "/favicon.png",
      },
      {
        source: "/wp-json/",
        destination: "/wp-json",
      },
      {
        source: "/wp-json/wp/v2/",
        destination: "/wp-json/wp/v2",
      },
      {
        source: "/feed/",
        destination: "/feed",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
 
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "app.thetecheyrie.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "app.thetecheyrie.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "wearebrain.com",
        port: "",
        pathname: "/**",
      },
      {
        
        protocol: "https",
        hostname: "stream.mux.com",
        port: "",
        pathname: "/**",
      },
       {
        
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        port: "",
        pathname: "/**",
      },

    ],
  },
};

export default nextConfig;
