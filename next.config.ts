import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'makerworld.bblmw.com',
      },
      {
        protocol: 'https',
        hostname: 'public-cdn.bblmw.com',
      },
    ],
  },
};

export default nextConfig;
