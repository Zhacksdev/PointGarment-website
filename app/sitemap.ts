import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://namabrand.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tentang-kami`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/layanan`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/produk`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: new Date(),
    },
  ];
}
