import { BadgePercent } from "lucide-react";
import promoImage from "../asset/PromoImage.webp";

export default function PromoBanner() {
  return (
    <section
      className="relative py-12 sm:py-16 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${promoImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay agar teks jelas */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* LEFT */}
          <div className="flex items-center gap-4 sm:gap-6">
            <BadgePercent className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 text-orange-400" />
            <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
              HOT PROMO MEI
            </h2>
          </div>

          {/* RIGHT */}
          <div className="text-sm sm:text-lg md:text-2xl font-medium">
            <p>- Tema Idul Adha</p>
            <p className="mt-2">- Kaos Promosi</p>
          </div>

        </div>
      </div>
    </section>
  );
}
