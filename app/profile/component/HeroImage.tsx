import heroImage from "../asset/HeroImage.webp";

export default function HeroImage() {
  return (
    <section
      className="bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${heroImage.src})`,
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0" aria-hidden />

      <div className="max-w-7xl mx-auto px-6 relative z-10 h-[50vh] min-h-100 flex items-center justify-center">
        <div className="text-center text-white mx-4 py-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px bg-white w-20" aria-hidden />
            <span className="font-semibold tracking-wide">WELCOME</span>
            <span className="h-px bg-white w-20" aria-hidden />
          </div>

          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Profile
          </h1>
        </div>
      </div>
    </section>
  );
}
