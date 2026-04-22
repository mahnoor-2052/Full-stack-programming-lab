export default function Contact() {
  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h1>
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Message
          </label>
          <textarea
            placeholder="Write your message..."
            rows={4}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800 w-full">
          Send Message
        </button>
      </div>
    </div>
  );
}
