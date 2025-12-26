import Image from "next/image";
import { Award, Star, BadgeCheck } from "lucide-react";
import ProfileImage from "../asset/ProfileImage.webp";

export default function ProfileMe() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE CARD */}
          <div className="relative">
            <div className=" rounded-2xl p-4 md:p-6">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={ProfileImage}
                  alt="Proses produksi Point Garment"
                  className="w-full h-80 md:h-130 object-cover"
                  priority={false}
                />
              </div>
            </div>

            {/* BADGE */}
            <div className="absolute -bottom-8 left-8 bg-white rounded-xl shadow-lg px-6 py-4 flex items-center gap-3">
              <span className="text-orange-400 font-bold text-4xl leading-none">
                25+
              </span>
              <span className="text-gray-700 text-sm leading-tight">
                Proyek yang
                <br />
                terselesaikan
              </span>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* ICONS */}
            <div className="flex items-center gap-8 mb-10">
              <IconOutline icon={<Award size={40} />} />
              <IconFilled icon={<Star size={40} />} />
              <IconOutline icon={<BadgeCheck size={40} />} />
            </div>

            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Bukti Kepercayaan dan
              <br />
              Kualitas Point Garment
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
              Setiap proyek yang berhasil kami selesaikan—mulai dari ribuan
              seragam perusahaan hingga koleksi fashion eksklusif—adalah
              cerminan dari komitmen kami pada integritas, kualitas, dan
              ketepatan waktu.
            </p>

            <div className="mt-6">
              <a
                href="#produk"
                className="inline-flex items-center justify-center rounded-md bg-orange-400 px-6 py-3 text-white font-semibold hover:bg-orange-600 transition"
              >
                Produk Kami
              </a>
            </div>
          </div>
        </div>

        {/* spacer mobile biar badge gak ketiban */}
        <div className="h-10 md:hidden" />
      </div>
    </section>
  );
}

/* ICON COMPONENTS */
function IconOutline({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="h-24 w-24 rounded-md border border-orange-400 text-orange-400 flex items-center justify-center">
      {icon}
    </div>
  );
}

function IconFilled({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="h-24 w-24 rounded-md bg-orange-400 text-white flex items-center justify-center">
      {icon}
    </div>
  );
}
