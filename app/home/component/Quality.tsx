import Image from "next/image";
import qualityImage from "../asset/QualityImage.webp";
import Link from "next/link";

export default function Quality() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: IMAGE */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md aspect-3/4 overflow-hidden rounded-xl shadow-lg">
            <Image
              src={qualityImage}
              alt="Produksi di workshop Point Garment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>

          {/* BADGE */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white border-4 border-orange-400 rounded-lg px-4 py-3 flex items-center gap-4 shadow-md">
            <div className="text-3xl sm:text-4xl font-extrabold text-orange-400">
              25+
            </div>
            <div className="text-xs sm:text-sm text-zinc-800 leading-tight">
              Projek yang <br className="hidden sm:block" />
              terselesaikan
            </div>
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="text-center md:text-left md:pl-6">
          <span className="text-orange-400 text-sm font-medium">
            Berkualitas
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900">
            Bukti Kepercayaan dan Kualitas Point Garment
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed text-justify">
            Setiap proyek yang berhasil kami selesaikan—mulai dari ribuan
            seragam perusahaan hingga koleksi fashion eksklusif—adalah cerminan
            dari komitmen kami pada integritas, kualitas, dan ketepatan waktu.
          </p>

          <div className="mt-6 flex justify-center md:justify-start">
            <Link
              href="/produk"
              className="inline-flex items-center justify-center bg-orange-400 text-white px-5 py-2.5 rounded-md shadow hover:bg-orange-500 transition"
            >
              Produk Kami
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
