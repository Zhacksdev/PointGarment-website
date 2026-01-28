import type { MetadataRoute } from "next";

type WPPost = {
  slug: string;
  modified: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.SITE_URL || "https://pointgarment.com";
  const wpApi = process.env.WP_API_BASE; // contoh: https://cms.pointgarment.com/wp-json/wp/v2

  // 1) Sitemap statis (punyamu)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/profil`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/produk`,
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
    // ✅ index blog
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  // 2) Ambil post dari WordPress
  // Kalau WP_API_BASE belum diset, tetap return static sitemap
  if (!wpApi) return staticRoutes;

  try {
    const res = await fetch(
      `${wpApi}/posts?per_page=100&_fields=slug,modified`,
      {
        next: { revalidate: 300 }, // cache 5 menit biar hemat
      }
    );

    if (!res.ok) return staticRoutes;

    const posts: WPPost[] = await res.json();

    // 3) Convert jadi URL blog Next
    const blogRoutes: MetadataRoute.Sitemap = posts
      .filter((p) => p?.slug)
      .map((p) => ({
        url: `${baseUrl}/blog/${p.slug}`,
        lastModified: new Date(p.modified),
        changeFrequency: "weekly",
        priority: 0.7,
      }));

    return [...staticRoutes, ...blogRoutes];
  } catch {
    // kalau WP down / error, sitemap tetap ada versi statis
    return staticRoutes;
  }
}
