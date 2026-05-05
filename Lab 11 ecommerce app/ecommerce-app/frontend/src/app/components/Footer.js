export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} ShopMERN — Built with Next.js, Node.js, Express & MongoDB
        </p>
        <p className="text-xs mt-1 text-gray-500">
          MERN Stack Lab | Air University FCAI Islamabad
        </p>
      </div>
    </footer>
  );
}
