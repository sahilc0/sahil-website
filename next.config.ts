import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  redirects: async () => [
    { source: "/blog/workspan-2", destination: "/", permanent: true },
  ],
};

export default nextConfig;
