"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import logo from "./asset/navbar-logo.webp";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (p: string) => {
    if (!pathname) return false;
    if (p === "/") return pathname === "/" || pathname === "/home";
    return pathname.startsWith(p);
  };

  const getLinkClass = (p: string) => {
    if (isActive(p)) return "text-orange-400 font-semibold";
    return scrolled
      ? "text-gray-900 hover:text-gray-700"
      : "text-white hover:text-yellow-400";
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Point Garment Logo"
              width={120}
              height={36}
              priority
              className={`${
                scrolled ? "filter invert brightness-125" : ""
              } transition-all duration-300`}
            />
          </Link>

          {/* Desktop Menu (centered) */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link
              href="/"
              aria-current={isActive("/") ? "page" : undefined}
              className={getLinkClass("/")}
            >
              Beranda
            </Link>
            <Link
              href="/profile"
              aria-current={isActive("/profile") ? "page" : undefined}
              className={getLinkClass("/profile")}
            >
              Profile
            </Link>
            <Link
              href="/produk"
              aria-current={isActive("/produk") ? "page" : undefined}
              className={getLinkClass("/produk")}
            >
              Produk Kami
            </Link>
            <Link
              href="/blog"
              aria-current={isActive("/blog") ? "page" : undefined}
              className={getLinkClass("/blog")}
            >
              Blog
            </Link>
          </nav>

          {/* Right actions (desktop) */}
          <div className="hidden md:flex items-center">
            <Link
              href="https://wa.me/6285648102433?text=Halo%20Point%20Garment,%20saya%20ingin%20menghubungi%20Anda."
              className={`ml-4 px-5 py-2 rounded-md ${
                isActive("/kontak")
                  ? "bg-orange-400 text-white"
                  : "bg-orange-400 hover:bg-orange-400 text-white"
              }`}
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setOpen(true)}
            className={`md:hidden ${scrolled ? "text-gray-800" : "text-white"}`}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-gray-200">
          <span className="text-gray-900 font-semibold">Menu</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close Menu"
            className="text-gray-800"
          >
            <X size={26} />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-6 gap-6 text-sm">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-current={isActive("/") ? "page" : undefined}
            className={`${
              isActive("/") ? "text-orange-400 font-semibold" : "text-gray-800"
            }`}
          >
            Beranda
          </Link>
          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            aria-current={isActive("/profile") ? "page" : undefined}
            className={`${
              isActive("/profile")
                ? "text-orange-400 font-semibold"
                : "text-gray-800"
            }`}
          >
            Profile
          </Link>
          <Link
            href="/produk"
            onClick={() => setOpen(false)}
            aria-current={isActive("/produk") ? "page" : undefined}
            className={`${
              isActive("/produk")
                ? "text-orange-400 font-semibold"
                : "text-gray-800"
            }`}
          >
            Produk Kami
          </Link>
          <Link
            href="https://wa.me/6285648102433?text=Halo%20Point%20Garment,%20saya%20ingin%20menghubungi%20Anda."
            onClick={() => setOpen(false)}
          >
            Hubungi Kami
          </Link>
        </nav>
      </aside>
    </>
  );
}
