import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12 space-y-6 sm:space-y-8 px-4 sm:px-6">
      {/* Main Heading */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About ZPEOLFOODS NG
        </h1>
      </div>

      {/* Brand Introduction */}
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
          Our Vision & Passion
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
          ZPEOLFOODS NG is a visionary Nigerian food brand passionate about redefining how people eat, live, and stay healthy. With a strong commitment to food innovation, the ZPEOLFOODS NG brand is created to bridge nutrition, wellness, and culture divide. Inspired by personal experiences and driven by the desire to provide healthier alternatives, the brand is focused on developing products that are light, wholesome, and suitable for diverse dietary needs.
        </p>
        <div className="bg-orange-50 p-4 sm:p-6 rounded-lg border-l-4 border-orange-500">
          <p className="text-gray-800 font-semibold text-sm sm:text-base mb-2">
            Introducing <span className="text-orange-500">Swavita™</span>
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            Through inspiration and thorough research, our brand introduced <span className="text-orange-500">Swavita™</span>, a nutrient-rich swallow made from a complete blend of whole grains, designed to be ulcer- and diabetic-friendly while offering high fiber and plant protein.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
          Our mission is simple: to make healthy eating accessible, affordable, and enjoyable for every Nigerian household and beyond. The vision of ZPEOLFOODS NG goes beyond foods, but as a lifestyle brand that empowers communities, supports local farmers, and contributes to sustainable development building of a future where wellness and culture thrive side by side.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
            <h3 className="text-base sm:text-lg font-semibold text-green-600 mb-2">Empowering Communities</h3>
            <p className="text-gray-600 text-xs sm:text-sm">Supporting local initiatives and promoting healthy lifestyles across Nigeria.</p>
          </div>
          <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
            <h3 className="text-base sm:text-lg font-semibold text-green-600 mb-2">Sustainable Development</h3>
            <p className="text-gray-600 text-xs sm:text-sm">Partnering with farmers to ensure long-term agricultural sustainability.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
          Join Our Wellness Journey
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 max-w-xl mx-auto">
          Experience the difference with ZPEOLFOODS NG products that blend tradition with modern nutrition science.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            to="/products"
            className="inline-block bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-yellow-600 text-sm sm:text-base"
          >
            Explore Products
          </Link>
          <Link
            to="/blog"
            className="inline-block bg-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-orange-600 text-sm sm:text-base"
          >
            Read Our Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;