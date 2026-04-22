import ProductList from "@/components/ProductList";

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-700 mb-2">Our Products</h1>
      <p className="text-gray-600 mb-4">
        Browse our collection of tech products.
      </p>
      <ProductList />
    </div>
  );
}
