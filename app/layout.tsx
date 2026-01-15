import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import WhatsAppToggle from "@/component/WhatsAppToggle";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    // Memastikan kata kunci utama ada di depan (branding di belakang)
    default: "Konveksi Murah Sidoarjo Surabaya | Point Garment",
    template: "%s | Point Garment",
  },
  description:
    "Point Garment adalah jasa konveksi Sidoarjo murah & profesional. Spesialis produksi seragam kantor, kaos komunitas, jaket, dan polo shirt kualitas premium.",
  metadataBase: new URL("https://pointgarment.com"), // Ganti dengan domain asli kamu nanti

  openGraph: {
    title: "Point Garment | Konveksi Murah Sidoarjo Surabaya",
    description:
      "Vendor konveksi pakaian profesional di Sidoarjo. Melayani pembuatan seragam dan fashion dengan harga kompetitif.",
    url: "https://pointgarment.com",
    siteName: "Point Garment",
    locale: "id_ID",
    type: "website",
  },

  // PERBAIKAN KRUSIAL: Ubah menjadi true agar terindeks Google
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${poppins.className} ${poppins.variable} antialiased`}>
        <Navbar />
        {/* Tambahkan role="main" untuk aksesibilitas dan SEO */}
        <main role="main">{children}</main>
        <Footer />
        <WhatsAppToggle />
      </body>
    </html>
  );
}