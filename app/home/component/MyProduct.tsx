"use client";

import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import jaketImg from "../asset/jacket-poingarment.webp";
import kaosImg from "../asset/tshirt-poingarment.webp";
import poloImg from "../asset/polo-poingarment.webp";

const WA_PHONE = "6285648102433";

type Product = {
  name: string;
  image: StaticImageData;
  category?: string;
};

const products: Product[] = [
   { name: "Kaos", image: kaosImg, category: "Kaos" },
  { name: "Jaket", image: jaketImg, category: "Jaket" },
  { name: "Polo Shirt", image: poloImg, category: "Polo" },
];

function buildWaLink(message: string) {
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
}

export default function MyProduct() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* TITLE */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-sm sm:text-base font-medium text-orange-400 mb-1">
            Produk
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Produk Unggulan Kami
          </h2>
        </div>

        {/* SLIDER */}
        <Swiper
          spaceBetween={16}
          slidesPerView={1.1}
          breakpoints={{
            480: { slidesPerView: 1.3 },
            640: { slidesPerView: 1.6 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
          }}
        >
          {products.map((item) => {
            const msg = `Halo Point Garment, saya ingin pesan ${item.name}${
              item.category ? ` (kategori ${item.category})` : ""
            }. Bisa minta katalog & harga?`;
            const waLink = buildWaLink(msg);

            return (
              <SwiperSlide key={item.name}>
                <div className="bg-white rounded-2xl p-4 sm:p-6 text-center h-full shadow hover:shadow-lg transition">
                  {/* IMAGE */}
                  <div className="relative w-full aspect-3/4 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={item.image}
                      alt={`Produk ${item.name} Point Garment`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 300px"
                    />
                  </div>

                  {/* NAME */}
                  <h3 className="font-semibold text-lg sm:text-xl md:text-2xl">
                    {item.name}
                  </h3>

                  {/* CTA -> WhatsApp */}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 sm:mt-6 inline-flex w-full items-center justify-center bg-black text-white px-4 py-2 rounded-md hover:bg-zinc-800 transition text-sm sm:text-base"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
