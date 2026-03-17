import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aiwiki.ai",
      },
    ],
  },
};

export default nextConfig;
