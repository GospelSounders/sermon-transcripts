import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/sermon-transcripts',
  assetPrefix: '/sermon-transcripts/',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
