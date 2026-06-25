/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const emptyPolyfill = path.join(__dirname, "lib/empty-polyfill.js");

const nextConfig = {
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
