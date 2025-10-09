import React from 'react';

function Contact() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
        Contact Us
      </h1>
      <p className="text-black mb-4">
        Have questions or want to place an order? Reach out to us!
      </p>
      <p className="text-black mb-4">
        Email: info@zpeolfoodsng.com <br />
        Phone: +234 123 456 7890 <br />
        Address: 123 Spice Street, Lagos, Nigeria
      </p>
      <div className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 mb-4 border rounded border-green-200 focus:outline-none focus:border-green-600"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 mb-4 border rounded border-green-200 focus:outline-none focus:border-green-600"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 mb-4 border rounded border-green-200 focus:outline-none focus:border-green-600"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-yellow-600"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default Contact;