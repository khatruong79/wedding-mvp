import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-8">
      <Link href="/" className="font-bold text-xl">
        Wedding Platform
      </Link>
      <nav>
        <Link href="/services" className="ml-4 text-red-600 hover:underline">
          Dịch vụ
        </Link>
        <Link href="/contact" className="ml-4 text-red-600 hover:underline">
          Yêu cầu tư vấn
        </Link>
      </nav>
    </header>
  );
}
