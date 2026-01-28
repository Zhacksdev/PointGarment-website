import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",       // Jangan indeks route API
          "/admin/",     // Jika ada halaman admin/dashboard
          "/private/",   // Folder privat lainnya
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    // Ganti dengan domain asli Point Garment kamu
    sitemap: "https://pointgarment.com/sitemap.xml",
  };
}