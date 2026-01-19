import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">
        Nền tảng kết nối dịch vụ tiệc cưới
      </h1>
      <p className="mb-6">
        Giúp bạn tìm nhanh các dịch vụ tiệc cưới uy tín: âm thanh, ánh sáng,
        trang trí, MC.
      </p>
      <Link
        href="/services"
        className="inline-block bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700"
      >
        Xem danh sách dịch vụ
      </Link>
    </div>
  );
}
