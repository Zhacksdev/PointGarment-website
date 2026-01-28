import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // YouTube thumbnail (punyamu sekarang)
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },

      // WordPress CMS (JDH Auto SEO)
      {
        protocol: "https",
        hostname: "cms.pointgarment.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
