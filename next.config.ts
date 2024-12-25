import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  pageExtensions: ['ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;
