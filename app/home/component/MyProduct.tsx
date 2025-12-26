"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import jaketImg from "../asset/jacket-poingarment.webp";
import kaosImg from "../asset/tshirt-poingarment.webp";
import poloImg from "../asset/polo-poingarment.webp";

const products = [
  { name: "Jaket", image: jaketImg },
  { name: "Kaos", image: kaosImg },
  { name: "Polo Shirt", image: poloImg },
];

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
          {products.map((item) => (
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

                {/* CTA */}
                <button className="mt-4 sm:mt-6 w-full bg-black text-white px-4 py-2 rounded-md hover:bg-zinc-800 transition text-sm sm:text-base">
                  Pesan Sekarang
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
