'use client';

import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default function Map() {
  // Ganti link di bawah dengan link embed dari Google Maps Bisnis kamu
  // Cara ambil: Buka Google Maps > Cari Point Garment > Bagikan > Sematkan Peta (Embed) > Copy src nya saja
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126627.11652396387!2d112.63242964335939!3d-7.342938899999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e70014a0f4a3%3A0x6a053c52e4f0123!2sSidoarjo!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid";

  return (
    <section className="py-10 bg-white" aria-labelledby="map-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Konten SEO Lokal */}
        <div className="mb-6 text-center md:text-left">
          <h2 id="map-heading" className="text-xl font-bold text-zinc-900 uppercase tracking-tight">
            Alamat Workshop Point Garment Sidoarjo
          </h2>
          <p className="text-sm text-zinc-600 mt-1">
            Pusat jasa konveksi murah Sidoarjo. Kunjungi workshop kami untuk cek bahan kaos dan seragam.
          </p>
        </div>

        <div className="relative w-full h-75 sm:h-100 md:h-150 rounded-xl overflow-hidden shadow-lg border border-zinc-100 bg-zinc-100">
          
          {/* Iframe Standar yang dioptimasi tanpa API Key */}
          <iframe
            src={googleMapsUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Point Garment Konveksi Murah Sidoarjo"
            className="absolute inset-0"
          />

          {/* Overlay Button */}
          <Link
            href="https://maps.google.com" // Ganti dengan link share Google Maps bisnismu
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-5 py-2.5 rounded-lg shadow-md flex items-center gap-2 text-sm font-bold text-zinc-900 hover:bg-orange-400 hover:text-white transition-all z-10"
          >
            <MapPin className="w-4 h-4 text-red-600" />
            Buka di Google Maps
          </Link>
        </div>
      </div>
    </section>
  );
}