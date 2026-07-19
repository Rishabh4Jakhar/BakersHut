import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // Drive sync can briefly lock Webpack's cache files and corrupt a dev build.
  // Keep the development cache in memory rather than writing pack files to .next.
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }

    return config;
  },

  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
