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
    default: "Point Garment| Konveksi Murah Sidoarjo Surabaya",
    template: "%s | Point Garment",
  },
  description:
    "Point Garmentadalah jasa konveksi dan produksi pakaian profesional untuk seragam, fashion, dan kebutuhan industri.",
  metadataBase: new URL("https://namabrand.com"),

  openGraph: {
    title: "Point Garment| Konveksi Murah Sidoarjo Surabaya",
    description:
      "Jasa konveksi dan garment profesional dengan kualitas terpercaya.",
    url: "https://namabrand.com",
    siteName: "Point Garment",
    locale: "id_ID",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
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
        <main>{children}</main>
        <Footer />
        <WhatsAppToggle />
      </body>
    </html>
  );
}
