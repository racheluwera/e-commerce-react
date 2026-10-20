const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <div className="h-1 w-16 bg-[#7cb800] mb-6"></div>
      <div className="flex flex-col gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Name</label>
          <input type="text" placeholder="Your name" className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-[#7cb800]" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input type="email" placeholder="Your email" className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-[#7cb800]" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Message</label>
          <textarea rows={5} placeholder="Your message" className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-[#7cb800]" />
        </div>
        <button type="button" className="bg-[#7cb800] hover:bg-[#6aa300] text-white py-2 rounded transition-colors">
          Send Message
        </button>
      </div>
    </div>
  )
}

export default Contact
