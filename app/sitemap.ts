import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Ganti dengan domain asli Point Garment kamu
  const baseUrl = "https://pointgarment.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0, // Halaman utama adalah prioritas tertinggi
    },
    {
      url: `${baseUrl}/profil`, // Sesuaikan dengan path halaman profil Point Garment Sidoarjo
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/produk`, // Halaman katalog konveksi kaos & vendor seragam Sidoarjo
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}