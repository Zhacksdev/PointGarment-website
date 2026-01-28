import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",

        disallow: [
          "/api/",            // Next API routes
          "/_next/",          // internal Next.js
          "/admin/",          // kalau ada panel internal
          "/private/",        // folder privat
        ],
      },
    ],

    sitemap: "https://pointgarment.com/sitemap.xml",
  };
}
