import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
  // Fix cross-origin warning in development
  allowedDevOrigins: [
    'localhost:3000',
    '192.168.1.112:3000',
    '127.0.0.1:3000'
  ],
};

export default nextConfig;
