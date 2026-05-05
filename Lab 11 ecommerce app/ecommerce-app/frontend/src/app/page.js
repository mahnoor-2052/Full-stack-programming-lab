import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center">
      {/* Hero */}
      <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
        Welcome to <span className="text-blue-600">ShopMERN</span>
      </h1>
      <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
        A full-stack ecommerce app built with Next.js, Node.js, Express, and MongoDB Atlas.
      </p>
      <Link
        href="/products"
        className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-2xl shadow transition"
      >
        Browse Products →
      </Link>

      {/* Tech Stack */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: 'Next.js', icon: '⚡', desc: 'Frontend Framework' },
          { label: 'Node.js', icon: '🟢', desc: 'Runtime Environment' },
          { label: 'Express.js', icon: '🚂', desc: 'Backend Server' },
          { label: 'MongoDB', icon: '🍃', desc: 'Cloud Database' },
        ].map((tech) => (
          <div key={tech.label} className="bg-white rounded-2xl shadow p-6 hover:shadow-md transition">
            <div className="text-4xl mb-2">{tech.icon}</div>
            <h3 className="font-bold text-gray-800">{tech.label}</h3>
            <p className="text-sm text-gray-500">{tech.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
