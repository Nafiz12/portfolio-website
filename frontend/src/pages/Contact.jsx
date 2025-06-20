export default function Contact() {
  return (
    <section className="w-screen min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Contact Me</h1>

        <div className="text-center text-gray-700 mb-8 space-y-2">
          <p><strong>Email:</strong> nafizalifat@gmail.com</p>
          <p><strong>Phone:</strong> +1 (226) 700-8809</p>
          <p><strong>Location:</strong> London, Ontario, Canada</p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/md-nafiz-al-ifat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              md-nafiz-al-ifat
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/nafizalifat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/nafizalifat
            </a>
          </p>
        </div>

        {/* <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form> */}
      </div>
    </section>
  );
}
