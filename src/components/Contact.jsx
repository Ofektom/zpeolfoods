import React from 'react';

function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
        Contact Us
      </h1>
      <p className="text-gray-600 text-sm sm:text-base mb-4 text-center">
        Have questions or want to place an order? Reach out to us!
      </p>
      <p className="text-black text-sm sm:text-base mb-6 sm:mb-8 text-center">
        Email: zpeolfoods@yahoo.com <br />
        Phone: +234 806 337 2824 <br />
        WhatsApp: +234 818 298 5558 <br />
        Address: Plot 1, unit A Ebong Bassey close Osongoma Estate Uyo,  Akwa Ibom state.
      </p>
      <div className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 sm:p-4 mb-4 border rounded border-green-200 focus:outline-none focus:border-green-600 text-sm sm:text-base"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 sm:p-4 mb-4 border rounded border-green-200 focus:outline-none focus:border-green-600 text-sm sm:text-base"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 sm:p-4 mb-4 border rounded border-green-200 focus:outline-none focus:border-green-600 text-sm sm:text-base"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-yellow-600 text-sm sm:text-base"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default Contact;