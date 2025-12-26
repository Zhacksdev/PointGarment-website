"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ratingLogo from "../asset/RatingLogo.webp";

const reviews = [
  {
    name: "Dono",
    company: "PT. Antah Berantah",
    text: "Setiap proyek yang berhasil kami selesaikan—mulai dari ribuan seragam perusahaan hingga koleksi fashion eksklusif.",
  },
  {
    name: "Dono",
    company: "PT. Antah Berantah",
    text: "Point Garment memberikan hasil produksi yang rapi, bahan berkualitas, dan pengiriman tepat waktu. Sangat direkomendasikan.",
  },
  {
    name: "Dono",
    company: "PT. Antah Berantah",
    text: "Pelayanan profesional, komunikasi jelas, dan hasil akhir sesuai ekspektasi. Kami puas bekerja sama dengan Point Garment.",
  },
];

export default function Rating() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        
        {/* LEFT TEXT */}
        <div className="text-center md:text-left">
          <span className="text-orange-400 text-sm font-medium">
            Terpercaya
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold">
            Ulasan Terbaik
          </h2>
        </div>

        {/* RIGHT SLIDER */}
        <div className="md:col-span-2">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.1}
            breakpoints={{
              480: { slidesPerView: 1.2 },
              640: { slidesPerView: 1.6 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="border rounded-xl p-6 bg-white h-full flex flex-col">
                  
                  {/* LOGO */}
                  <div className="mb-4">
                    <Image
                      src={ratingLogo}
                      alt="Logo client Point Garment"
                      className="h-6 w-auto object-contain"
                    />
                  </div>

                  {/* TEXT */}
                  <p className="text-sm text-zinc-600 leading-relaxed mb-6 grow">
                    {review.text}
                  </p>

                  {/* AUTHOR */}
                  <div>
                    <p className="font-semibold text-sm">{review.name}</p>
                    <p className="text-xs text-zinc-500">
                      {review.company}
                    </p>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
