import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      { source: "/portfolio", destination: "/work", permanent: true },
      { source: "/portfolio/:slug", destination: "/work/:slug", permanent: true },
      { source: "/about", destination: "/studio", permanent: true },
      { source: "/services", destination: "/#services", permanent: true }
    ];
  }
};

export default nextConfig;
