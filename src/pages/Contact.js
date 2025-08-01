import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send form data to backend or email service
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="p-6 md:p-14 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-white p-8 rounded-lg shadow-md">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">
            We’d love to hear from you. Whether you have a question about our products,
            your order, or anything else — our team is here to help.
          </p>

          <div className="text-gray-700 space-y-3">
            <div>
              <h4 className="font-semibold">📍 Address</h4>
              <p>Makola Market Street, Accra, Ghana</p>
            </div>
            <div>
              <h4 className="font-semibold">📞 Phone</h4>
              <p>+233 557 440 609</p>
            </div>
            <div>
              <h4 className="font-semibold">📧 Email</h4>
              <p>linconclnadabrah@gmail.com</p>
            </div>
          </div>

          {/* Optional: Map or image placeholder */}
          <div className="mt-6">
            <iframe
              className="w-full h-56 rounded"
              src="https://maps.google.com/maps?q=accra,ghana&z=13&output=embed"
              loading="lazy"
              title="Store Location"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full border border-gray-300 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded font-medium hover:bg-primary-dark transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
