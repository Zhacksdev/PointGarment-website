"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { X, Play } from "lucide-react";
import { YouTubeEmbed } from "@next/third-parties/google"; // Standar Next.js Third Parties

type Props = {
  youtubeUrl: string;
};

function getYouTubeId(input: string) {
  const raw = input.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(raw)) return raw;
  try {
    const url = new URL(raw);
    if (url.searchParams.get("v")) return url.searchParams.get("v") || "";
    if (url.hostname.includes("youtu.be")) return url.pathname.split("/")[1] || "";
    const parts = url.pathname.split("/").filter(Boolean);
    if (parts.includes("shorts")) return parts[parts.indexOf("shorts") + 1];
    if (parts.includes("embed")) return parts[parts.indexOf("embed") + 1];
    return "";
  } catch { return ""; }
}

export default function CompanyProfile({ youtubeUrl }: Props) {
  const [open, setOpen] = useState(false);
  const videoId = useMemo(() => getYouTubeId(youtubeUrl), [youtubeUrl]);
  const thumb = videoId ? `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg` : "";

  return (
    <section className="bg-white py-12 md:py-20" aria-labelledby="profile-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Konten SEO Khusus Point Garment Sidoarjo */}
        <div className="text-center mb-10">
          <h2 id="profile-title" className="text-3xl md:text-4xl font-extrabold text-zinc-900 leading-tight">
            Workshop Point Garment Sidoarjo
          </h2>
          <p className="mt-4 text-zinc-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Lihat bagaimana kami bekerja. Point Garment Sidoarjo didukung oleh tenaga ahli profesional, 
            peralatan sablon modern, dan area produksi yang luas untuk memastikan pesanan Anda 
            selesai tepat waktu dengan kualitas terbaik.
          </p>
        </div>

        {/* Video Trigger */}
        <button
          onClick={() => setOpen(true)}
          className="relative w-full group rounded-2xl overflow-hidden shadow-2xl transition-all hover:ring-4 hover:ring-orange-100"
          aria-label="Putar video profil Point Garment Sidoarjo"
        >
          <div className="relative aspect-video bg-zinc-200">
            {thumb && (
              <Image
                src={thumb}
                alt="Fasilitas produksi Point Garment Sidoarjo jasa konveksi murah"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            )}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-white text-orange-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition duration-300">
                <Play fill="currentColor" size={32} className="ml-1" />
              </div>
              <span className="text-white font-bold text-sm sm:text-lg tracking-wide uppercase drop-shadow-md">
                Putar Profil Perusahaan
              </span>
            </div>
          </div>
        </button>
      </div>

      {/* Modal Video Menggunakan YouTubeEmbed (Performance Optimized) */}
      {open && videoId && (
        <div className="fixed inset-0 z-[100] bg-zinc-950 flex items-center justify-center p-4 sm:p-10">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-orange-400 transition z-[110]"
            aria-label="Tutup video"
          >
            <X size={40} />
          </button>
          
          <div className="w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-2xl">
            {/* Menggunakan standar Next Third Parties untuk Lazy Loading & Performance */}
            <YouTubeEmbed 
              videoid={videoId} 
              height={600}
              params="autoplay=1&rel=0&modestbranding=1" 
            />
          </div>
        </div>
      )}
    </section>
  );
}