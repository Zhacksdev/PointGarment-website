import type { Metadata } from "next";
import Rating from "../home/component/Rating";
import HeroImage from "./component/HeroImage";
import ProfileMe from "./component/ProfileMe";
import CompanyProfile from "./component/CompanyProfile";

export const metadata: Metadata = {
  title: "Point Garment Sidoarjo | Pusat Konveksi & Vendor Seragam Terpercaya",
  description:
    "Point Garment Sidoarjo adalah jasa konveksi profesional sejak 2018. Kami melayani produksi seragam kantor, kaos komunitas, sablon, dan bordir berkualitas di Sidoarjo.",
  alternates: { canonical: "https://pointgarment.com/profile" }, 
  openGraph: {
    title: "Profil Point Garment Sidoarjo - Jasa Konveksi & Sablon",
    description:
      "Kenali lebih dekat Point Garment Sidoarjo. Vendor konveksi tangan pertama dengan fasilitas workshop lengkap untuk kebutuhan seragam dan fashion Anda.",
    url: "https://pointgarment.com/profile",
    type: "website",
    locale: "id_ID",
    siteName: "Point Garment Sidoarjo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Point Garment Sidoarjo | Konveksi Murah & Berkualitas",
    description:
      "Jasa produksi pakaian profesional untuk seragam dan industri di Sidoarjo.",
  },
};

export default function ProfilePage() {
  return (
    <main>
      {/* Hidden H1 untuk memperkuat struktur SEO tanpa merusak desain */}
      <h1 className="sr-only">Profil Bisnis Point Garment Sidoarjo - Konveksi & Sablon</h1>
      
      <HeroImage />
      
      <section id="profil-point-garment">
        <ProfileMe />
      </section>

      <CompanyProfile youtubeUrl="KH6znSSvfvE" />
      
      <section id="ulasan-pelanggan-sidoarjo">
        <Rating />
      </section>
    </main>
  );
}