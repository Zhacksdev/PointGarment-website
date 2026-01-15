import type { Metadata } from "next";

// Komponen lainnya tetap sama...
import HeroImage from "./component/HeroImage";
import Quality from "./component/Quality";
import PromoBanner from "./component/PromoBanner";
import MyProduct from "./component/MyProduct";
import Rating from "./component/Rating";
import ContactPerson from "./component/ContactPerson";
import Map from "./component/Map";
import Featured from "./component/Featured";

export const metadata: Metadata = {
  title: "Konveksi Murah Sidoarjo #1 | Vendor Seragam & Kaos Point Garment",
  description:
    "Point Garment adalah pusat konveksi murah Sidoarjo yang melayani jasa produksi kaos, seragam kantor, jaket, dan almamater dengan kualitas premium dan garansi tepat waktu.",
  alternates: { canonical: "https://domainkamu.com/" }, // Pastikan pakai full URL
  keywords: [
    "konveksi murah sidoarjo", 
    "jasa konveksi sidoarjo", 
    "konveksi kaos sidoarjo", 
    "vendor seragam sidoarjo",
    "point garment sidoarjo"
  ],
  openGraph: {
    title: "Konveksi Murah Sidoarjo - Jasa Produksi Seragam & Kaos",
    description:
      "Cari jasa konveksi di Sidoarjo? Point Garment vendor terpercaya untuk seragam, kaos komunitas, dan jaket dengan harga grosir termurah.",
    url: "https://domainkamu.com/",
    type: "website",
    locale: "id_ID",
    siteName: "Point Garment Sidoarjo",
  },
};

export default function HomePage() {
  return (
    <main> 
      {/* Menggunakan tag <main> untuk membantu struktur SEO */}
      <h1 className="sr-only">Konveksi Murah Sidoarjo - Point Garment</h1> 
      {/* Hidden H1 untuk SEO jika di HeroImage tidak ada H1 */}
      
      <HeroImage />
      <Featured />
      <Quality />
      <PromoBanner />
      <MyProduct />
      
      <section id="lokasi-konveksi-sidoarjo">
        <Map />
      </section>

      <Rating />
      <ContactPerson />
    </main>
  );
}