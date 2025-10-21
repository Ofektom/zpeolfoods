import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero_image.svg';

function Home() {
  const categories = [
    { name: 'Cereals', description: 'Premium whole grains like millet and sorghum.' },
    { name: 'Spices', description: 'Rich and flavorful spices like paprika.' },
    { name: 'Grains', description: 'Nutritious grains for your daily needs.' },
  ];

  const testimonials = [
    { quote: 'Good day, please is your swavita still available? Really enjoyed the feel after eating it. ', name: 'Mrs Doyin Emmanuel, Home Owner' },
    { quote: 'I really love your mixed cereal, I now have my cereal plug', name: 'Blessing, Retail Buyer' },
    { quote: 'Fast delivery and excellent quality every time.', name: 'Fatima, Restaurant Owner' },
  ];

  const benefits = [
    { name: 'Premium Quality', description: 'Sourced from the finest local farms.' },
    { name: 'Fast Delivery', description: 'Prompt and reliable nationwide shipping.' },
    { name: 'Customer Satisfaction', description: 'Trusted by thousands of happy customers.' },
  ];

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-yellow-50 mt-16 sm:mt-20 mb-16 sm:mb-20 min-h-[60vh] sm:h-[70vh] max-h-[600px] flex items-center py-8 sm:py-12 rounded-lg shadow-xl overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #16a34a 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto flex flex-col sm:flex-row items-center px-4 sm:px-6 gap-8">
          {/* Text Content */}
          <div className="sm:w-1/2 text-center sm:text-left z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-600 mb-4 leading-tight">
              Welcome to ZPEOLFOODS NG
            </h1>
            <h3 className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 max-w-md mx-auto sm:mx-0">
              Your hub for <span className="text-green-600 font-semibold">premium organically processed</span> cereals, spices, swallows, tea, and syrups.
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
              <Link
                to="/products"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl font-semibold"
              >
                Explore Our Products
              </Link>
              <Link
                to="/contact"
                className="inline-block border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-all font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="sm:w-1/2 mt-6 sm:mt-0 z-10">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="ZPEOLFOODS NG - Premium Organic Products"
                className="w-full h-auto max-w-md mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
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