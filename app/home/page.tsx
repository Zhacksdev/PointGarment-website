import type { Metadata } from "next";

import HeroImage from "./component/HeroImage";
import Quality from "./component/Quality";
import PromoBanner from "./component/PromoBanner";
import MyProduct from "./component/MyProduct";
import Rating from "./component/Rating";
import ContactPerson from "./component/ContactPerson";
import Map from "./component/Map";
import Featured from "./component/Featured";

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
      <Featured />
      <Quality />
      <PromoBanner />
      <MyProduct />
      <Rating />
      <Map />
      <ContactPerson />
    </>
  );
}
