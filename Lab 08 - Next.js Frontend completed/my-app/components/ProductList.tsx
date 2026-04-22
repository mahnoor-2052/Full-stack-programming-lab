import Link from "next/link";
import { products } from "@/app/data/products";

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold text-blue-700 mb-2">
            {product.title}
          </h2>
          <p className="text-gray-600 mb-3">{product.description}</p>
          <p className="text-green-600 font-semibold text-lg mb-4">
            Rs. {product.price}
          </p>
          <Link
            href={`/products/${product.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}
