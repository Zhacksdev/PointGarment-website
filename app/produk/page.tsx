import type { Metadata } from "next";


import HeroImage from "./component/HeroImage";
import MyProduct from "../home/component/MyProduct";
import ProductBanner from "./component/ProductBanner";
import ProductList from "./component/ProductList";


export const metadata: Metadata = {
  title: "Konveksi Murah Sidoarjo Surabaya",
  description:
    "Point Garmentadalah jasa konveksi dan produksi pakaian profesional untuk seragam, fashion, dan kebutuhan industri.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Konveksi Murah Sidoarjo Surabaya | Point Garment",
    description:
      "Jasa konveksi dan garment profesional untuk seragam, fashion, dan kebutuhan industri.",
    url: "/",
    type: "website",
    locale: "id_ID",
    siteName: "Point Garment",
  },
  twitter: {
    card: "summary_large_image",
    title: "Konveksi Murah Sidoarjo Surabaya | Point Garment",
    description:
      "Jasa konveksi dan garment profesional untuk seragam, fashion, dan kebutuhan industri.",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroImage />
      <ProductList/>
      <ProductBanner />
      <MyProduct />
    </>
  );
}
