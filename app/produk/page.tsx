import type { Metadata } from "next";
import HeroImage from "./component/HeroImage";
import MyProduct from "../home/component/MyProduct";
import ProductBanner from "./component/ProductBanner";
import ProductList from "./component/ProductList";

export const metadata: Metadata = {
  title: "Konveksi Murah Sidoarjo | Vendor Seragam & Kaos Point Garment",
  description:
    "Cari jasa konveksi Sidoarjo? Point Garment melayani konveksi kaos Sidoarjo dan vendor seragam Sidoarjo dengan harga murah, kualitas premium, dan pengerjaan cepat.",
  alternates: { canonical: "https://pointgarment.com/produk" }, // Sesuaikan dengan URL produk kamu
  openGraph: {
    title: "Point Garment Sidoarjo - Jasa Konveksi Kaos & Seragam Murah",
    description:
      "Pusat produksi pakaian profesional di Sidoarjo. Vendor seragam dan konveksi kaos terbaik dengan harga grosir.",
    url: "/produk",
    type: "website",
    locale: "id_ID",
    siteName: "Point Garment Sidoarjo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Konveksi Murah Sidoarjo | Point Garment Sidoarjo",
    description:
      "Jasa konveksi dan garment profesional untuk seragam, fashion, dan kebutuhan industri di Sidoarjo.",
  },
};

export default function ProductPage() {
  return (
    <main>
      {/* Hidden H1 untuk SEO: Memberi tahu Google topik utama halaman ini */}
      <h1 className="sr-only">Point Garment Sidoarjo: Jasa Konveksi Murah Sidoarjo</h1>
      
      <HeroImage />
      
      <section id="daftar-produk-konveksi">
        <ProductList />
      </section>

      <ProductBanner />

      <section id="katalog-point-garment">
        <MyProduct />
      </section>
    </main>
  );
}