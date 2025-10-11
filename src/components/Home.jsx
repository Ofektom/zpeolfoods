import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const categories = [
    { name: 'Cereals', description: 'Premium whole grains like millet and sorghum.' },
    { name: 'Spices', description: 'Rich and flavorful spices like paprika.' },
    { name: 'Grains', description: 'Nutritious grains for your daily needs.' },
  ];

  const testimonials = [
    { quote: 'ZPEOLFOODS NG provides the freshest spices I’ve ever used!', name: 'Aisha, Home Cook' },
    { quote: 'Their cereals are top-notch and perfect for my business.', name: 'Chinedu, Restaurant Owner' },
    { quote: 'Fast delivery and excellent quality every time.', name: 'Fatima, Retail Buyer' },
  ];

  const benefits = [
    { name: 'Premium Quality', description: 'Sourced from the finest local farms.' },
    { name: 'Fast Delivery', description: 'Prompt and reliable nationwide shipping.' },
    { name: 'Customer Satisfaction', description: 'Trusted by thousands of happy customers.' },
  ];

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero Section */}
      <section className="bg-white mt-16 sm:mt-20 mb-16 sm:mb-20 min-h-[60vh] sm:h-[70vh] max-h-[600px] flex items-center py-8 sm:py-12 rounded-lg shadow">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center px-4 sm:px-6">
          <div className="sm:w-1/2 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-600 mb-4">
              Welcome to ZPEOLFOODS NG
            </h1>
            <h3 className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 max-w-md mx-auto sm:mx-0">
              Your trusted hub for <span className="text-black">premium cereals and spices</span> in Nigeria, delivering fresh, organic ingredients to your kitchen.
            </h3>
            <Link
              to="/products"
              className="inline-block bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-yellow-600 text-sm sm:text-base"
            >
              Explore Our Products
            </Link>
          </div>
          <div className="sm:w-1/2 mt-6 sm:mt-0">
            <div className="h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 bg-green-600 rounded-full border-4 border-white mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8 animate-pulse">
          Our Product Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow text-center">
              <div className="h-10 w-10 sm:h-12 sm:w-12 bg-green-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg sm:text-xl font-semibold text-orange-500 mt-2 sm:mt-4">
                {category.name}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-2">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto bg-gray-100 py-8 sm:py-12 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-orange-50 p-4 sm:p-6 rounded-lg shadow text-center">
              <div className="h-8 w-8 sm:h-10 sm:w-10 bg-orange-500 rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600 text-sm sm:text-base mb-4 italic">"{testimonial.quote}"</p>
              <p className="text-orange-500 font-semibold text-sm sm:text-base">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
          Why Choose ZPEOLFOODS NG
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-green-50 p-4 sm:p-6 rounded-lg text-center">
              <div className="h-10 w-10 sm:h-12 sm:w-12 bg-green-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg sm:text-xl font-semibold text-orange-500 mt-2 sm:mt-4">
                {benefit.name}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;