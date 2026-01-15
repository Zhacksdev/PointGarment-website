"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ratingLogo from "../asset/RatingLogo.webp";

const reviews = [
  {
    name: "Dwinda Meifrianti",
    company: "Pelanggan Point Garment",
    text: "Rekomendasi banget bagi yang cari jasa konveksi Sidoarjo. Cocok untuk semua yang mau bikin baju kamu tambah keren dan bagus, hasil sablon berkualitas, pelayanan ramah, dan dijamin tidak akan nyesel order di Point Garment.",
  },
  {
    name: "Rendra Putra",
    company: "Customer Point Garment",
    text: "Konveksi murah Sidoarjo yang mantap ini. Workshop besar, penjahit dan tukang sablon lengkap. Harga joooossss, bener-bener tangan pertama. Kalau cari vendor seragam Sidoarjo ya Point Garment ini pilihannya. Suiiiippp.",
  },
  {
    name: "Irnela Purnama Arsih",
    company: "Klien Point Garment",
    text: "Pelayanan profesional sebagai konveksi kaos Sidoarjo terpercaya. Komunikasi jelas dan hasil akhir sesuai ekspektasi. Kami puas bekerja sama dengan Point Garment. Sidoarjo jadi lebih berwarna dengan seragam baru kami!",
  },
];

export default function Rating() {
  return (
    <section className="py-16 md:py-20 bg-white" aria-labelledby="rating-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        
        {/* LEFT TEXT */}
        <div className="text-center md:text-left">
          <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">
            Testimoni Pelanggan
          </span>
          <h2 id="rating-title" className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 leading-tight">
            Ulasan Jasa Konveksi Sidoarjo Terpercaya
          </h2>
          <p className="mt-4 text-zinc-600 text-sm sm:text-base">
            Kepuasan pelanggan adalah bukti kualitas Point Garment sebagai vendor seragam dan kaos di Sidoarjo.
          </p>
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
              1024: { slidesPerView: 2.5 }, // Sedikit disesuaikan agar slide berikutnya terlihat sedikit
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="border border-zinc-100 rounded-xl p-6 bg-white h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
                  
                  {/* LOGO / RATING STARS ICON */}
                  <div className="mb-4">
                    <Image
                      src={ratingLogo}
                      alt={`Review dari ${review.name} untuk Point Garment Sidoarjo`}
                      className="h-6 w-auto object-contain"
                    />
                  </div>

                  {/* TEXT */}
                  <p className="text-sm text-zinc-600 leading-relaxed mb-6 grow text-justify italic">
                    {review.text}
                  </p>

                  {/* AUTHOR */}
                  <div className="border-t border-zinc-100 pt-4">
                    <p className="font-bold text-sm text-zinc-900">{review.name}</p>
                    <p className="text-xs text-orange-500 font-medium">
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