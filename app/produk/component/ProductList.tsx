"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { CATEGORIES, PRODUCTS, type Category } from "../asset/ProductData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ProductList() {
  const [active, setActive] = useState<Category>("Polo");

  const filtered = useMemo(
    () => PRODUCTS.filter((p) => p.category === active),
    [active]
  );

  return (
    <section className="bg-white w-full mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        {/* Tabs */}
        {/* Tabs */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = cat === active;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActive(cat)}
                    className={[
                      // ukuran mobile diperkecil
                      "px-3 py-1.5 text-xs",
                      // desktop normal
                      "sm:px-4 sm:py-2 sm:text-sm",
                      "rounded-full font-semibold transition",
                      isActive
                        ? "bg-orange-500 text-white"
                        : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100",
                    ].join(" ")}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="mt-8 md:mt-10">
          {filtered.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              Produk untuk kategori <b>{active}</b> belum tersedia.
            </div>
          ) : (
            <>
              {/* ✅ MOBILE: SWIPER */}
              <div className="md:hidden">
                <Swiper
                  spaceBetween={14}
                  slidesPerView={1.25}
                  centeredSlides={false}
                >
                  {filtered.map((p) => (
                    <SwiperSlide key={p.id}>
                      <ProductCard
                        id={p.id}
                        name={p.name}
                        variant={p.variant}
                        href={p.href}
                        image={p.image}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* ✅ DESKTOP: GRID */}
              <div className="hidden md:grid grid-cols-4 gap-6">
                {filtered.map((p) => (
                  <ProductCard
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    variant={p.variant}
                    href={p.href}
                    image={p.image}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/** --- Card terpisah biar rapi (tanpa any) --- */
type CardProps = {
  id: string;
  name: string;
  variant: string;
  href?: string;
  image: Parameters<typeof Image>[0]["src"];
};

function ProductCard({ name, variant, href, image }: CardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="relative bg-gray-50">
        <div className="relative w-full aspect-square">
          <Image
            src={image}
            alt={`${name} ${variant}`}
            fill
            sizes="(max-width: 768px) 80vw, 25vw"
            className="object-contain p-4 sm:p-6"
          />
        </div>
      </div>

      <div className="p-3 sm:p-4">
        <div className="flex items-end justify-between gap-2">
          <div className="min-w-0">
            <p className="font-bold text-gray-900 truncate">{name}</p>
            <p className="text-xs text-gray-500">{variant}</p>
          </div>

          <a
            href={href ?? "#"}
            className="shrink-0 inline-flex items-center justify-center rounded-md bg-orange-500 px-3 py-2 text-white text-xs font-semibold hover:bg-orange-600 transition"
          >
            Pesan
          </a>
        </div>
      </div>
    </div>
  );
}
