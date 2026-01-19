import { services } from "@/data/services";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Danh sách dịch vụ</h1>
      {services.map((service) => (
        <div key={service.slug} className="card">
          <h3 className="font-semibold text-lg">{service.name}</h3>
          <p>{service.shortDesc}</p>
          <Link
            href={`/services/${service.slug}`}
            className="text-red-600 hover:underline mt-2 inline-block"
          >
            Xem chi tiết →
          </Link>
        </div>
      ))}
    </>
  );
}
