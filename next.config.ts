import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // dev only: lets a phone on the same Wi-Fi load the dev server (Next 16 blocks other hosts by default)
  allowedDevOrigins: ["192.168.1.25"],
  // hide the Next.js dev tools badge (the round N in the corner) during local runs
  devIndicators: false,
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // YouTube thumbnails for the video testimonials
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" }],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
