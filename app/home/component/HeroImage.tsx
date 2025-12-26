import Image from "next/image";
import heroImage from "../asset/HeroImage.webp";

export default function HeroImage() {
  return (
    <section
      className="
        relative
        h-screen         /* mobile-safe viewport */
        min-h-screen
        md:h-screen
        md:min-h-screen
        overflow-hidden
      "
    >
      {/* Background image */}
      <Image
        src={heroImage}
        alt="Point Garment Hero"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-center">
        <div className="text-center text-white py-10">
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="h-px bg-white w-16 sm:w-20" />
            <span className="font-semibold tracking-wide text-sm sm:text-base">
              WELCOME
            </span>
            <span className="h-px bg-white w-16 sm:w-20" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            We Make All Easy
          </h1>
        </div>
      </div>
    </section>
  );
}
