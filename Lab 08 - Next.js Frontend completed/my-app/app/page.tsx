import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Welcome to My Next.js App
      </h1>
      <p className="text-gray-600 text-lg mb-8">
        This is a Full Stack Programming Lab project built with Next.js and
        Tailwind CSS.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/about"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800"
        >
          Learn About Us
        </Link>
        <Link
          href="/products"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-800"
        >
          View Products
        </Link>
      </div>
    </div>
  );
}
