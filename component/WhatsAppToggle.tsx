"use client";

import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function WhatsAppButton() {
  const pathname = usePathname();

  const handleWhatsAppClick = () => {
    // Pastikan window tersedia agar tidak error saat prerendering
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "whatsapp_click",
        source: "floating_button",
        page: pathname,
      });
    }
  };

  return (
    <a
      href="https://wa.me/6282228211989?text=Halo%2C%20saya%20mau%20tanya%20tentang%20produk%20ACP"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi via WhatsApp"
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl transition"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
}