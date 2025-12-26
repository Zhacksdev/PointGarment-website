import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Music, Mail } from "lucide-react";
import footerLogo from "./asset/footer-logo.webp";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* LOGO */}
          <div className="flex flex-col gap-6">
            <Image
              src={footerLogo}
              alt="Point Garment Logo"
              width={160}
              height={48}
            />
          </div>

          {/* MENU */}
          <div className="grid grid-cols-2 gap-10 text-sm">
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Produksi Kaos</li>
                <li>Produksi Jaket</li>
                <li>Seragam Kerja</li>
                <li>Custom Apparel</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-600">
                <li>WhatsApp</li>
                <li>Email</li>
                <li>Instagram</li>
                <li>Marketplace</li>
              </ul>
            </div>
          </div>

          {/* OFFICE & FORM */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="font-semibold mb-2">OFFICE LOCATION</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Jl. Cendekia No.5, Sidowayah, Celep, Kec. Sidoarjo, Kabupaten
                Sidoarjo, Jawa Timur 61271
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Aduan</h4>
              <div className="flex items-center border-b border-gray-700 pb-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-neutral-800 text-sm flex-1 outline-none placeholder:text-gray-400 px-2 py-1 rounded-md text-white"
                />
                <button
                  aria-label="Send"
                  className="text-orange-500 hover:text-orange-400 ml-3"
                >
                  <Mail className="h-5 w-5"></Mail>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 my-12" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Point Garment. All rights reserved.
          </p>

          {/* SOCIAL ICON */}
          <div className="flex gap-6">
            <Link href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-white hover:text-orange-500 transition" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-white hover:text-orange-500 transition" />
            </Link>
            <Link href="#" aria-label="TikTok">
              <Music className="w-5 h-5 text-white hover:text-orange-500 transition" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
