import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{service.name}</h1>
      <p className="mb-2">{service.description}</p>
      <p className="mb-4">
        <strong>Giá tham khảo:</strong> {service.price}
      </p>
      <Link
        href="/contact"
        className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Yêu cầu tư vấn
      </Link>
    </div>
  );
}
