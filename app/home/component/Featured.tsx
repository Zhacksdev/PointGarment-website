import { Award, Star, ShieldCheck } from "lucide-react";

export default function Featured() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-3 items-start">

          {/* Left card */}
          <article className="border-2 border-orange-500 rounded-lg p-6 bg-white flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                <Award className="text-orange-600" size={20} aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">Berkualitas</h3>
            </div>
            <p className="text-sm text-zinc-600">
              Kualitas premium adalah investasi bagi reputasi merek Anda. Kami
              memastikan setiap jahitan mencerminkan standar tertinggi.
            </p>
          </article>

          {/* Center (featured) card */}
          <article className="border-2 border-orange-500 rounded-lg p-6 bg-orange-400 text-white flex flex-col gap-4 shadow-sm transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Star className="text-white" size={20} aria-hidden />
              </div>
              <h3 className="text-lg font-semibold">Cepat Tepat</h3>
            </div>
            <p className="text-sm text-white/90">
              Kami tidak hanya menjanjikan kecepatan, tetapi juga ketepatan
              dalam setiap detail dan pengiriman.
            </p>
          </article>

          {/* Right card */}
          <article className="border-2 border-orange-500 rounded-lg p-6 bg-white flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                <ShieldCheck className="text-orange-600" size={20} aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">Terpercaya</h3>
            </div>
            <p className="text-sm text-zinc-600">
              Mitra jangka panjang Anda, bukan sekadar vendor. Kami membangun
              kepercayaan melalui transparansi dan tanggung jawab.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
}
