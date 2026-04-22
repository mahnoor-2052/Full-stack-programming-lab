import { products } from "@/app/data/products";
import Link from "next/link";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold text-red-600">Product not found!</h1>
        <Link href="/products" className="text-blue-600 underline mt-4 block">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow p-8 mt-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-3">{product.title}</h1>
      <p className="text-gray-600 text-lg mb-4">{product.description}</p>
      <p className="text-green-600 font-bold text-2xl mb-6">
        Rs. {product.price}
      </p>
      <Link
        href="/products"
        className="bg-gray-700 text-white px-5 py-2 rounded hover:bg-gray-900"
      >
        ← Back to Products
      </Link>
    </div>
  );
}
