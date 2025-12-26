import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">
        Halaman yang kamu cari tidak ditemukan.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-white text-gray-900 rounded-md border border-gray-200 shadow-sm"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
