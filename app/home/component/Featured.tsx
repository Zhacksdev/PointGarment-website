import { Award, Star, ShieldCheck } from "lucide-react";

export default function Featured() {
  return (
    <section className="py-16 bg-white" aria-labelledby="featured-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Tambahkan heading tersembunyi atau terlihat untuk konteks SEO */}
        <h2 id="featured-heading" className="sr-only">
          Keunggulan Point Garment - Konveksi Murah Sidoarjo
        </h2>

        <div className="grid gap-6 md:grid-cols-3 items-start">
          {/* Card 1: Fokus pada Kualitas & Jasa Konveksi Sidoarjo */}
          <article className="border-2 border-orange-500 rounded-lg p-6 bg-white flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                <Award className="text-orange-600" size={20} aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">Jasa Konveksi Sidoarjo Terbaik</h3>
            </div>
            <p className="text-sm text-zinc-600">
              Sebagai jasa konveksi Sidoarjo berpengalaman, Point Garment memastikan setiap jahitan mencerminkan standar tertinggi untuk reputasi brand Anda.
            </p>
          </article>

          {/* Card 2: Fokus pada Kecepatan & Konveksi Kaos Sidoarjo */}
          <article className="border-2 border-orange-500 rounded-lg p-6 bg-orange-400 text-white flex flex-col gap-4 shadow-sm transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Star className="text-white" size={20} aria-hidden />
              </div>
              <h3 className="text-lg font-semibold">Konveksi Kaos Sidoarjo Cepat</h3>
            </div>
            <p className="text-sm text-white/90">
              Butuh mendadak? Kami adalah spesialis konveksi kaos Sidoarjo yang menjanjikan kecepatan tanpa mengurangi ketepatan detail produksi dan pengiriman.
            </p>
          </article>

          {/* Card 3: Fokus pada Harga & Vendor Seragam Sidoarjo */}
          <article className="border-2 border-orange-500 rounded-lg p-6 bg-white flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                <ShieldCheck className="text-orange-600" size={20} aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">Vendor Seragam Sidoarjo Murah</h3>
            </div>
            <p className="text-sm text-zinc-600">
              Point Garment adalah vendor seragam Sidoarjo terpercaya. Solusi konveksi murah Sidoarjo untuk mitra jangka panjang dengan transparansi harga grosir.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}