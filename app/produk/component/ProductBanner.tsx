import Image, { StaticImageData } from "next/image";

import bannerCompany from "../asset/Branding.webp";
import bannerSuit from "../asset/Suit.webp";

type BannerItem = {
  image: StaticImageData;
  href?: string;
  alt: string;
};

const banners: BannerItem[] = [
  {
    image: bannerCompany,
    href: "#produk",
    alt: "Company branding banner",
  },
  {
    image: bannerSuit,
    href: "#produk",
    alt: "Professional suit banner",
  },
];

export default function ProductBanner() {
  return (
    <section className="bg-white w-full">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {banners.map((b, idx) => {
            const Card = (
              <div className="relative overflow-hidden h-35 sm:h-42.5 md:h-47.5">
                <Image
                  src={b.image}
                  alt={b.alt}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 768px) 100vw, 50vw,"
                  className="object-cover"
                />
                {/* optional overlay (hapus kalau gak perlu) */}
              </div>
            );

            return b.href ? (
              <a key={idx} href={b.href} className="block">
                {Card}
              </a>
            ) : (
              <div key={idx}>{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
