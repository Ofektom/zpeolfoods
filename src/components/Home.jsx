import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const categories = [
    {
      name: 'Cereals',
      description: 'Premium whole grains like millet and sorghum.',
    },
    {
      name: 'Spices',
      description: 'Rich and flavorful spices like paprika.',
    },
    {
      name: 'Grains',
      description: 'Nutritious grains for your daily needs.',
    },
  ];

  const testimonials = [
    {
      quote: 'ZPEOLFOODS NG provides the freshest spices I’ve ever used!',
      name: 'Aisha, Home Cook',
    },
    {
      quote: 'Their cereals are top-notch and perfect for my business.',
      name: 'Chinedu, Restaurant Owner',
    },
    {
      quote: 'Fast delivery and excellent quality every time.',
      name: 'Fatima, Retail Buyer',
    },
  ];

  const benefits = [
    {
      name: 'Premium Quality',
      description: 'Sourced from the finest local farms.',
    },
    {
      name: 'Fast Delivery',
      description: 'Prompt and reliable nationwide shipping.',
    },
    {
      name: 'Customer Satisfaction',
      description: 'Trusted by thousands of happy customers.',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-white text-white mt-20 mb-20 h-[440px] flex items-center py-12 rounded-lg shadow">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-left px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-green-600 mb-4">
              Welcome to ZPEOLFOODS NG
            </h1>
            <h3 className="text-xl text-gray-600 mb-6 max-w-lg">
              Your trusted hub for <span className="text-black">premium cereals and spices</span> in Nigeria, delivering fresh, organic ingredients to your kitchen.
            </h3>
            <Link
              to="/products"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 hover:text-white"
            >
              Explore Our Products
            </Link>
          </div>
          <div className="md:w-1/2 px-6 mt-6 md:mt-0">
            <div className="h-[400px] w-[400px] bg-green-600 flex items-center justify-center mx-auto rounded-full border-4 border-white"></div>
          </div>
        </div>
      </section>

      {/* Categories Section (Cards) */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 animate-pulse">
          Our Product Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
              <div className="h-12 w-12 bg-green-600 flex items-center justify-center mx-auto mb-4 rounded-full"></div>
              <h3 className="text-xl font-semibold text-orange-500 mt-4">
                {category.name}
              </h3>
              <p className="text-gray-600 mt-2">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section (Tiles) */}
      <section className="max-w-6xl mx-auto bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-orange-50 p-6 rounded-lg shadow text-center">
              <div className="h-10 w-10 bg-orange-500 text-white flex items-center justify-center mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
              <p className="text-orange-500 font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section (Colored Backgrounds) */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Why Choose ZPEOLFOODS NG
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg text-center">
              <div className="h-12 w-12 bg-green-600 flex items-center justify-center mx-auto mb-4 rounded-full"></div>
              <h3 className="text-xl font-semibold text-orange-500 mt-4">
                {benefit.name}
              </h3>
              <p className="text-gray-600 mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;