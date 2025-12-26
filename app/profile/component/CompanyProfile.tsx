"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { X, Play } from "lucide-react";

const YouTube = dynamic(() => import("react-youtube"), {
  ssr: false,
});

type Props = {
  youtubeUrl: string;
  title?: string;
};

function getYouTubeId(input: string) {
  const raw = input.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(raw)) return raw;

  try {
    const url = new URL(raw);
    if (url.searchParams.get("v")) return url.searchParams.get("v") || "";
    if (url.hostname.includes("youtu.be")) return url.pathname.split("/")[1] || "";

    const parts = url.pathname.split("/").filter(Boolean);
    const shorts = parts.indexOf("shorts");
    const embed = parts.indexOf("embed");

    if (shorts !== -1) return parts[shorts + 1];
    if (embed !== -1) return parts[embed + 1];

    return "";
  } catch {
    return "";
  }
}

export default function CompanyProfile({ youtubeUrl }: Props) {
  const [open, setOpen] = useState(false);

  const videoId = useMemo(() => getYouTubeId(youtubeUrl), [youtubeUrl]);
  const thumb = videoId
    ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    : "";

  return (
    <section className="bg-white">
      {/* lebih rapet di mobile */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-14">
        <button
          onClick={() => setOpen(true)}
          className="mt-3 sm:mt-6 w-full relative group rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="relative aspect-video bg-gray-200">
            {thumb && (
              <Image
                src={thumb}
                alt="Company profile video"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
                className="object-cover group-hover:scale-105 transition"
              />
            )}
          </div>

          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* tombol lebih kecil di mobile */}
            <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-white flex items-center justify-center">
              <Play className="text-orange-500" size={26} />
            </div>
          </div>
        </button>
      </div>

      {open && videoId && (
        <div className="fixed inset-0 z-50 bg-black">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 text-white"
            aria-label="Close video"
          >
            <X size={28} />
          </button>

          <div className="w-full h-full flex items-center justify-center">
            <YouTube
              videoId={videoId}
              opts={{
                width: "100%",
                height: "100%",
                playerVars: { autoplay: 1, controls: 1, rel: 0 },
              }}
              className="w-full h-full"
              iframeClassName="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
