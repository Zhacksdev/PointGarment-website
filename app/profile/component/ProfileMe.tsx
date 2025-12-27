import Image from "next/image";
import { Award, Star, BadgeCheck } from "lucide-react";
import ProfileImage from "../asset/ProfileImage.webp";
import type { ReactNode } from "react";

export default function ProfileMe() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* LEFT IMAGE CARD */}
          <div className="relative">
            <div className="rounded-2xl p-3 sm:p-4 md:p-6">
              <div className="relative overflow-hidden rounded-xl">
                <div className="relative w-full h-65 sm:h-80 md:h-130">
                  <Image
                    src={ProfileImage}
                    alt="Proses produksi Point Garment"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </div>
            </div>

            {/* BADGE */}
            <div className="absolute -bottom-6 left-4 sm:left-6 md:left-8 bg-white rounded-xl shadow-lg px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3">
              <span className="text-orange-400 font-bold text-3xl sm:text-4xl leading-none">
                25+
              </span>
              <span className="text-gray-700 text-xs sm:text-sm leading-tight">
                Proyek yang
                <br />
                terselesaikan
              </span>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="pt-6 md:pt-0">
            {/* ICONS */}
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-10">
              <IconOutline icon={<Award className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />} />
              <IconFilled icon={<Star className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />} />
              <IconOutline icon={<BadgeCheck className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />} />
            </div>

            <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Bukti Kepercayaan dan
              <br className="hidden sm:block" />
              Kualitas Point Garment
            </h2>

            <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl text-justify">
              Setiap proyek yang berhasil kami selesaikan—mulai dari ribuan
              seragam perusahaan hingga koleksi fashion eksklusif—adalah
              cerminan dari komitmen kami pada integritas, kualitas, dan
              ketepatan waktu.
            </p>

            <div className="mt-5 sm:mt-6">
              <a
                href="#produk"
                className="inline-flex items-center justify-center rounded-md bg-orange-400 px-5 sm:px-6 py-2.5 sm:py-3 text-white font-semibold hover:bg-orange-600 transition"
              >
                Produk Kami
              </a>
            </div>
          </div>
        </div>

        {/* spacer mobile biar badge gak ketiban */}
        <div className="h-8 sm:h-10 md:hidden" />
      </div>
    </section>
  );
}

/* ICON COMPONENTS */
function IconOutline({ icon }: { icon: ReactNode }) {
  return (
    <div className="h-14 w-14 sm:h-16 sm:w-16 md:h-24 md:w-24 rounded-md border border-orange-400 text-orange-400 flex items-center justify-center">
      {icon}
    </div>
  );
}

function IconFilled({ icon }: { icon: ReactNode }) {
  return (
    <div className="h-14 w-14 sm:h-16 sm:w-16 md:h-24 md:w-24 rounded-md bg-orange-400 text-white flex items-center justify-center">
      {icon}
    </div>
  );
}
