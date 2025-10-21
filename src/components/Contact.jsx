import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();

  // Check if redirected back with success parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('success') === 'true') {
      setSubmitted(true);
      // Clear the URL parameter after 5 seconds
      setTimeout(() => {
        window.history.replaceState({}, '', '/contact');
      }, 100);
    }
  }, [location]);

  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
        Contact Us
      </h1>
      <p className="text-gray-600 text-sm sm:text-base mb-4 text-center">
        Have questions or want to place an order? Reach out to us!
      </p>
      <p className="text-black text-sm sm:text-base mb-6 sm:mb-8 text-center">
        Email: <a href="mailto:zpeolfoods@yahoo.com" className="text-green-600 hover:underline">zpeolfoods@yahoo.com</a> <br />
        Phone: <a href="tel:+2348063372824" className="text-green-600 hover:underline">+234 806 337 2824</a> <br />
        WhatsApp: <a href="https://wa.me/2348182985558" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">+234 818 298 5558</a> <br />
        Address: Plot 1, unit A Ebong Bassey close Osongoma Estate Uyo, Akwa Ibom state.
      </p>

      {/* Success Message */}
      {submitted ? (
        <div className="max-w-md mx-auto">
          <div className="bg-green-100 border-2 border-green-500 rounded-lg p-6 text-center mb-6">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h2 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h2>
            <p className="text-green-600 mb-4">Your message has been sent successfully. We&apos;ll get back to you soon!</p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form 
          action="https://formsubmit.co/zpeolfoods@yahoo.com" 
          method="POST"
          className="max-w-md mx-auto"
        >
          {/* FormSubmit Configuration */}
          {/* Honeypot to prevent spam */}
          <input type="text" name="_honey" style={{display: 'none'}} />
          
          {/* Disable captcha */}
          <input type="hidden" name="_captcha" value="false" />
          
          {/* Custom subject line */}
          <input type="hidden" name="_subject" value="New Contact Form Submission from ZPEOLFOODS NG Website" />
          
          {/* Redirect back to contact page with success parameter */}
          <input type="hidden" name="_next" value={`${window.location.origin}/contact?success=true`} />
          
          {/* Form Fields */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
              className="w-full p-3 sm:p-4 border rounded-lg border-green-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-sm sm:text-base"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              required
              className="w-full p-3 sm:p-4 border rounded-lg border-green-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-sm sm:text-base"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-2">
              Phone Number <span className="text-gray-400 text-xs">(Optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+234 800 000 0000"
              className="w-full p-3 sm:p-4 border rounded-lg border-green-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-sm sm:text-base"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us how we can help you..."
              required
              className="w-full p-3 sm:p-4 border rounded-lg border-green-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-sm sm:text-base resize-none"
              rows="5"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base font-semibold shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      )}

      {/* Alternative Contact Methods */}
      <div className="mt-8 max-w-md mx-auto">
        <div className="text-center mb-4">
          <p className="text-gray-600 font-medium">Prefer to reach out directly?</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href="https://wa.me/2348182985558?text=Hi, I have a question about ZPEOLFOODS NG products"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors text-center font-semibold shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp Us
          </a>
          <a
            href="mailto:zpeolfoods@yahoo.com"
            className="flex items-center justify-center gap-2 bg-orange-500 text-white px-4 py-3 rounded-lg hover:bg-orange-600 transition-colors text-center font-semibold shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;