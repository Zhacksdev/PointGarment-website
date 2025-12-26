import type { StaticImageData } from "next/image";

// contoh produk polo (ganti sesuai file kamu)
import poloNavy from "./Polo/Frame-313700.webp";
import poloBlack from "./Polo/Frame-313701.webp";
import poloWhite from "./Polo/Frame-313699.webp";
import poloArmy from "./Polo/Frame-313702.webp";

// contoh jaket (ganti sesuai file kamu)
import jaketBlack from "./Jacket/Frame-313703.webp";
import jaketNavy from "./Jacket/Frame-313704.webp";
import jaketRed from "./Jacket/Frame-313705.webp";
import jaketGray from "./Jacket/Frame-313706.webp";

import suitMocca from "./Suit/Frame-313710.webp";
import suitGray from "./Suit/Frame-313709.webp";
import suitBrown from "./Suit/Frame-313708.webp";
import suitBlack from "./Suit/Frame-313707.webp";

import kaosSablon from "./Kaos/Frame-313711.webp";
import kaosMetal from "./Kaos/Frame-313712.webp";
import kaosPanjang from "./Kaos/Frame-313713.webp";
import kaosMinimalis from "./Kaos/Frame-313714.webp";

import companyKaos from "./Company/Frame-313718.webp";
import companyTopi from "./Company/Frame-313715.webp";
import companyPayung from "./Company/Frame-313716.webp";
import companyTotebag from "./Company/Frame-313717.webp";

export type Category = "Kaos" | "Jaket" | "Jas" | "Polo" | "Branding";

export type Product = {
  id: string;
  name: string;
  variant: string;
  category: Category;
  image: StaticImageData;
  href?: string; // bisa link ke detail / WA / halaman produk
};

export const CATEGORIES: Category[] = ["Kaos", "Jaket", "Jas", "Polo", "Branding"];

export const PRODUCTS: Product[] = [
  // POLO
  { id: "polo-navy", name: "Polo Shirt", variant: "Navy", category: "Polo", image: poloNavy, href: "#produk" },
  { id: "polo-black", name: "Polo Shirt", variant: "Black", category: "Polo", image: poloBlack, href: "#produk" },
  { id: "polo-white", name: "Polo Shirt", variant: "White", category: "Polo", image: poloWhite, href: "#produk" },
  { id: "polo-army", name: "Polo Shirt", variant: "Army", category: "Polo", image: poloArmy, href: "#produk" },

  // JAKET (contoh)
  { id: "jaket-black", name: "Jaket", variant: "Black", category: "Jaket", image: jaketBlack, href: "#produk" },
  { id: "jaket-navy", name: "Jaket", variant: "Navy", category: "Jaket", image: jaketNavy, href: "#produk" },
  { id: "jaket-red", name: "Jaket", variant: "Red", category: "Jaket", image: jaketRed, href: "#produk" },
  { id: "jaket-gray", name: "Jaket", variant: "Gray", category: "Jaket", image: jaketGray, href: "#produk" },

  { id: "suit-black", name: "Jas", variant: "Black", category: "Jas", image: suitBlack, href: "#produk" },
  { id: "suit-brown", name: "Jas", variant: "Brown", category: "Jas", image: suitBrown, href: "#produk" },
  { id: "suit-gray", name: "Jas", variant: "Gray", category: "Jas", image: suitGray, href: "#produk" },
  { id: "suit-mocca", name: "Jas", variant: "Mocca", category: "Jas", image: suitMocca, href: "#produk" },

  { id: "kaos-sablon", name: "Kaos", variant: "Sablon", category: "Kaos", image: kaosSablon, href: "#produk" },
  { id: "kaos-metal", name: "Kaos", variant: "Metal", category: "Kaos", image: kaosMetal, href: "#produk" },
  { id: "kaos-longsleeve", name: "Kaos", variant: "Long Sleeve", category: "Kaos", image: kaosPanjang, href: "#produk" },
  { id: "kaos-minimalist", name: "Kaos", variant: "Minimalist", category: "Kaos", image: kaosMinimalis, href: "#produk" },

  { id: "company-kaos", name: "Branding", variant: "Kaos", category: "Branding", image: companyKaos, href: "#produk" },
  { id: "company-topi", name: "Branding", variant: "Topi", category: "Branding", image: companyTopi, href: "#produk" },
  { id: "company-payung", name: "Branding", variant: "Payung", category: "Branding", image: companyPayung, href: "#produk" },
  { id: "company-totebag", name: "Branding", variant: "Totebag", category: "Branding", image: companyTotebag, href: "#produk" },
];
