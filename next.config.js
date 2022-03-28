/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");

const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  // do compression in HTTP proxy
  compress: false,
  // disabling x-powered-by header
  poweredByHeader: false,
  // setting build directory
  distDir: "build",
  // custom webpack config
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Important: return the modified config
  //   return config;
  // },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
  // swcMinify: true,
};

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: "public",
          disable: process.env.NODE_ENV === "development",
        },
      },
    ],
  ],
  nextConfig,
);
