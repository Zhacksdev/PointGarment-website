'use client';

import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default function Map() {
  return (
    <div className="flex justify-center items-center w-full py-10">
      <div className="relative w-full max-w-7xl h-75 sm:h-100 md:h-150 rounded-xl overflow-hidden shadow-lg">
        
        {/* Google Maps Embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.985762460898!2d112.7155768!3d-7.466823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e7d9d71e8d43%3A0xba12f653814c6bd5!2sSablon%20Kaos%20Sidoarjo!5e0!3m2!1sid!2sid!4v1766667489996!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />

        {/* Overlay Button */}
        <Link
          href="https://maps.app.goo.gl/ELNTUvyKoUgon81D7"
          target="_blank"
          className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-md flex items-center gap-2 text-sm font-semibold hover:bg-white transition"
        >
          <MapPin className="w-4 h-4 text-red-600" />
          Buka di Google Maps
        </Link>

      </div>
    </div>
  );
}
