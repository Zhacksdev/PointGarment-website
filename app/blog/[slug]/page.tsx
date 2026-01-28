// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import parse, { domToReact, Element } from "html-react-parser";

/* =========================
   Types
========================= */
type WPMedia = {
  id: number;
  alt_text?: string;
  source_url?: string;
  media_details?: {
    sizes?: {
      large?: { source_url?: string };
      full?: { source_url?: string };
      medium?: { source_url?: string };
      thumbnail?: { source_url?: string };
    };
  };
};

type WPPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt?: { rendered: string };
  featured_media?: number; // ✅ penting
  _embedded?: {
    "wp:featuredmedia"?: WPMedia[];
  };
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

/* =========================
   Utils
========================= */
function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function formatDateID(dateString: string) {
  const d = new Date(dateString);
  return {
    iso: d.toISOString(),
    human: d.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  };
}

function pickImageFromMedia(media?: WPMedia | null) {
  if (!media) return { url: null as string | null, alt: "" };

  const url =
    media.media_details?.sizes?.large?.source_url ||
    media.media_details?.sizes?.full?.source_url ||
    media.media_details?.sizes?.medium?.source_url ||
    media.media_details?.sizes?.thumbnail?.source_url ||
    media.source_url ||
    null;

  return { url, alt: media.alt_text || "" };
}

/* =========================
   Fetch WP
========================= */
async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const base = process.env.WP_API_BASE;
  if (!base) throw new Error("WP_API_BASE missing");

  // ✅ tambah featured_media biar bisa fallback fetch media
  const url = `${base}/posts?slug=${encodeURIComponent(
    slug
  )}&_embed&_fields=id,slug,date,title,content,excerpt,featured_media,_embedded`;

  const res = await fetch(url, { next: { revalidate: 300 } });
  if (!res.ok) return null;

  const data = await res.json();
  return Array.isArray(data) && data.length > 0 ? data[0] : null;
}

async function getMediaById(id: number): Promise<WPMedia | null> {
  const base = process.env.WP_API_BASE;
  if (!base) return null;

  const res = await fetch(
    `${base}/media/${id}?_fields=id,alt_text,source_url,media_details`,
    { next: { revalidate: 300 } }
  );
  if (!res.ok) return null;
  return res.json();
}

/* =========================
   Link Mapper (CMS -> Next)
========================= */
function mapWpLinkToNext(href: string) {
  const cleanHref = (href || "").trim();

  if (!cleanHref || cleanHref === "#") return { href: "#", internal: false };
  if (
    cleanHref.startsWith("#") ||
    cleanHref.startsWith("mailto:") ||
    cleanHref.startsWith("tel:")
  ) {
    return { href: cleanHref, internal: false };
  }

  // ✅ robust: parse URL kalau absolute
  try {
    if (cleanHref.startsWith("http://") || cleanHref.startsWith("https://")) {
      const u = new URL(cleanHref);

      // kalau host CMS -> ambil slug terakhir dan arahkan ke Next
      if (u.hostname === "cms.pointgarment.com") {
        const seg = u.pathname.split("/").filter(Boolean);
        const slug = seg[seg.length - 1] || "";
        return slug ? { href: `/blog/${slug}`, internal: true } : { href: "/blog", internal: true };
      }

      // domain lain = external
      return { href: cleanHref, internal: false };
    }
  } catch {
    // kalau parsing gagal, lanjut logic bawah
  }

  // relative path WP (/2026/01/28/hello-world/) -> ambil slug terakhir
  if (cleanHref.startsWith("/")) {
    // jangan ubah asset
    if (cleanHref.startsWith("/wp-content/")) return { href: cleanHref, internal: false };

    const seg = cleanHref.split("/").filter(Boolean);
    const slug = seg[seg.length - 1] || "";
    return slug ? { href: `/blog/${slug}`, internal: true } : { href: "/blog", internal: true };
  }

  return { href: cleanHref, internal: false };
}

/* =========================
   HTML Renderer
========================= */
function renderWpHtml(html: string) {
  return parse(html, {
    replace: (node) => {
      if (!(node as any).name) return;

      const el = node as Element;
      const children = domToReact(el.children as any);

      if (el.name === "p") {
        const text = stripHtml(el.children?.map((c: any) => c.data || "").join("") || "");
        if (!text) return null;

        return (
          <p className="my-5 text-justify leading-relaxed text-gray-700">
            {children}
          </p>
        );
      }

      if (el.name === "h2") {
        return (
          <h2 className="mt-10 mb-4 border-b pb-2 text-2xl font-bold text-gray-900">
            {children}
          </h2>
        );
      }

      if (el.name === "a") {
        const rawHref = el.attribs?.href || "#";
        const mapped = mapWpLinkToNext(rawHref);

        // ✅ internal: pakai <a href="/blog/..."> biar pasti masuk Next (tanpa CMS)
        if (mapped.internal) {
          return (
            <a
              href={mapped.href}
              className="text-blue-700 underline underline-offset-4 hover:text-blue-900"
            >
              {children}
            </a>
          );
        }

        // external: tab baru
        return (
          <a
            href={mapped.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline underline-offset-4 hover:text-blue-900"
          >
            {children}
          </a>
        );
      }

      if (el.name === "ul") return <ul className="my-5 list-disc space-y-2 pl-6">{children}</ul>;
      if (el.name === "ol") return <ol className="my-5 list-decimal space-y-2 pl-6">{children}</ol>;
      if (el.name === "li") return <li className="text-gray-700">{children}</li>;

      return;
    },
  });
}

/* =========================
   Metadata (SEO)
========================= */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  const siteUrl = process.env.SITE_URL || "";
  const canonical = `${siteUrl}/blog/${slug}`;

  const description = post?.excerpt?.rendered
    ? stripHtml(post.excerpt.rendered).slice(0, 160)
    : "Artikel terbaru seputar konveksi dan produksi garment.";

  // OG image pakai embedded dulu (kalau ada), kalau tidak ya kosong
  const embeddedMedia = post?._embedded?.["wp:featuredmedia"]?.[0] || null;
  const { url: ogImage } = pickImageFromMedia(embeddedMedia);

  return {
    title: post?.title?.rendered,
    description,
    alternates: { canonical },
    openGraph: {
      title: post?.title?.rendered,
      description,
      url: canonical,
      type: "article",
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
  };
}

/* =========================
   Page
========================= */
export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const { iso, human } = formatDateID(post.date);

  // ✅ 1) ambil dari _embedded (kalau lengkap)
  const embeddedMedia = post._embedded?.["wp:featuredmedia"]?.[0] || null;
  let { url: featuredImage, alt } = pickImageFromMedia(embeddedMedia);

  // ✅ 2) fallback fetch by featured_media (anti gagal)
  if (!featuredImage && post.featured_media) {
    const media = await getMediaById(post.featured_media);
    const picked = pickImageFromMedia(media);
    featuredImage = picked.url;
    alt = picked.alt;
  }

  return (
    <main className="min-h-screen bg-white mt-10">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-6">
          <nav className="mb-4 text-sm text-gray-500">
            <Link href="/">Beranda</Link> / <Link href="/blog">Blog</Link>
          </nav>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {post.title.rendered}
          </h1>

          <time dateTime={iso} className="mt-2 block text-sm text-gray-500">
            {human}
          </time>
        </header>

        {featuredImage && (
          <div className="relative mb-8 aspect-[4/3] w-full overflow-hidden rounded-2xl border">
            <Image
              src={featuredImage}
              alt={alt || post.title.rendered}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <article>{renderWpHtml(post.content.rendered)}</article>

        <footer className="mt-10 border-t pt-6">
          <Link href="/blog" className="text-sm font-medium underline underline-offset-4">
            ← Kembali ke Blog
          </Link>
        </footer>
      </div>
    </main>
  );
}
