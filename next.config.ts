import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        pathname: "/**", 
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/**", 
      },
    ],
  },
}

export default nextConfig;