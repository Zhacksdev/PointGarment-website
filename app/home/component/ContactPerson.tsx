import { Clock, MapPin, Phone } from "lucide-react";

export default function ContactPerson() {
  return (
    <section className="py-12 sm:py-16 md:py-20 text-black bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">

          {/* LEFT TITLE */}
          <div>
            <p className="text-sm sm:text-base font-medium mb-1 text-orange-400">
              Kontak
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Kunjungi Kami
            </h2>
          </div>

          {/* RIGHT INFO */}
          <div className="flex flex-col gap-4 sm:gap-6">

            <div className="flex items-start gap-4">
              <Phone className="text-orange-400 w-6 h-6 sm:w-7 sm:h-7 mt-1" />
              <p className="font-medium text-base sm:text-lg md:text-xl">
                0856-4810-2433
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-orange-400 w-6 h-6 sm:w-7 sm:h-7 mt-1" />
              <p className="font-medium text-base sm:text-lg md:text-xl">
                08.00 – 17.00
              </p>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-orange-400 w-6 h-6 sm:w-7 sm:h-7 mt-1" />
              <p className="font-medium text-base sm:text-lg md:text-xl leading-relaxed max-w-md">
                Jl. Cendekia No.5, Sidowayah, Sidoarjo
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
